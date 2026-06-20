/* =====================================================================
   LEAP 2036 — OPTIONAL Supabase sync (classic script, offline-friendly)
   =====================================================================
   This file is 100% OPTIONAL. The core game runs fully offline from
   file:// / USB without it. Its ONLY job: if a Supabase config is
   present AND the device is online, append one pseudonymous result row
   to the `leap_results` table when a run completes. If there's no config
   or no network, it QUEUES the row in localStorage and flushes later
   (on next page load + when the browser fires the 'online' event).

   GRACEFUL CONTRACT (never breaks the game):
     - No window.LEAP_SUPABASE config  -> submit() silently no-ops.
     - Offline / fetch fails           -> row is queued, retried later.
     - Anything throws internally       -> caught & swallowed; the game
                                           flow is never interrupted.
   It exposes window.LEAP_SYNC = { submit, flush, queued, configured }.

   PRIVACY: only pseudonymous fields are ever sent (kode + scores +
   profil + values/disc/goal/arah). No names. The Supabase anon key is
   public-by-design and lives in leap-config.js; the service_role/secret
   key must NEVER be placed in any client file.
   ===================================================================== */
(function (global) {
  'use strict';

  var QUEUE_KEY = 'leap_sync_queue';
  var MAX_QUEUE = 500; // hard cap so a long-offline kiosk can't grow localStorage unbounded

  // ---- config (optional) -------------------------------------------
  // Read lazily each time so leap-config.js may be loaded in any order.
  function cfg() {
    var c = global.LEAP_SUPABASE;
    if (!c || typeof c !== 'object') return null;
    if (!c.url || !c.anonKey) return null;
    // tolerate a trailing slash on the url
    var url = String(c.url).replace(/\/+$/, '');
    return { url: url, anonKey: String(c.anonKey) };
  }

  function configured() { return !!cfg(); }

  function online() {
    // navigator.onLine is unreliable-but-useful: false is a strong signal
    // we're offline; true means "maybe online", so we still try and queue
    // on failure. Treat a missing navigator as "assume online, try once".
    try { return (typeof navigator === 'undefined') ? true : navigator.onLine !== false; }
    catch (e) { return true; }
  }

  // ---- localStorage queue (best-effort; private mode may throw) -----
  function readQueue() {
    try {
      var raw = global.localStorage ? global.localStorage.getItem(QUEUE_KEY) : null;
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }
  function writeQueue(arr) {
    try {
      if (!global.localStorage) return;
      if (arr.length > MAX_QUEUE) arr = arr.slice(arr.length - MAX_QUEUE);
      global.localStorage.setItem(QUEUE_KEY, JSON.stringify(arr));
    } catch (e) { /* storage full / blocked — drop silently, never throw */ }
  }
  function enqueue(row) {
    var q = readQueue();
    q.push(row);
    writeQueue(q);
  }
  function queued() { return readQueue().length; }

  // ---- shape the pseudonymous row (defensive; never sends names) ----
  // Accepts the game's reveal payload. We map to the exact column names
  // in schema.sql. Anything missing becomes null/empty — never throws.
  function toRow(result) {
    result = result || {};
    // values: accept array; pad/trim to 5; coerce to strings.
    var vals = [];
    if (Array.isArray(result.nilai)) vals = result.nilai;
    else if (Array.isArray(result.values)) vals = result.values;
    vals = vals.slice(0, 5).map(function (v) { return (v === null || v === undefined) ? '' : String(v); });

    function num(v) {
      var n = (typeof v === 'number') ? v : parseInt(v, 10);
      return isNaN(n) ? null : n;
    }
    function str(v) { return (v === null || v === undefined) ? null : String(v); }

    return {
      kode:        str(result.kode != null ? result.kode : result.code) || '',
      energi:      num(result.energi != null ? result.energi : result.E),
      uang:        num(result.uang   != null ? result.uang   : result.K),
      mental:      num(result.mental != null ? result.mental : result.M),
      total_f1:    num(result.total_f1 != null ? result.total_f1 : result.totalF1),
      profil:      str(result.profil),
      nilai:       vals,
      disc:        str(result.disc),
      tujuan:      str(result.tujuan),
      arah_tujuan: str(result.arah_tujuan != null ? result.arah_tujuan : result.arahTujuan)
    };
  }

  // ---- network POST (returns a Promise<boolean> success) ------------
  function postRow(row) {
    var c = cfg();
    if (!c) return Promise.resolve(false);
    if (typeof fetch !== 'function') return Promise.resolve(false);
    var endpoint = c.url + '/rest/v1/leap_results';
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': c.anonKey,
        'Authorization': 'Bearer ' + c.anonKey,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(row)
    }).then(function (res) {
      // 2xx (PostgREST returns 201 on insert; 200/204 also "ok").
      return !!res && res.ok;
    }).catch(function () {
      return false; // network/CORS/offline — caller will queue
    });
  }

  // ---- flush the queue (best-effort, one row at a time, in order) ---
  var _flushing = false;
  function flush() {
    if (_flushing) return Promise.resolve();
    if (!configured() || !online()) return Promise.resolve();
    var q = readQueue();
    if (!q.length) return Promise.resolve();

    _flushing = true;
    var remaining = q.slice();

    function next() {
      if (!remaining.length) {
        writeQueue(remaining);
        _flushing = false;
        return Promise.resolve();
      }
      var row = remaining[0];
      return postRow(row).then(function (ok) {
        if (ok) {
          remaining.shift();          // sent — drop it
          writeQueue(remaining);      // persist progress after each success
          return next();
        }
        // failed (likely offline again): stop, keep the rest queued.
        writeQueue(remaining);
        _flushing = false;
        return Promise.resolve();
      });
    }

    return next().catch(function () {
      // absolutely never throw out of flush
      try { writeQueue(remaining); } catch (e) {}
      _flushing = false;
    });
  }

  // ---- public submit: the game calls this once per completed run ----
  // ALWAYS safe to call. With no config it no-ops (but still records to
  // the queue so a config added later can backfill — small + harmless).
  function submit(result) {
    try {
      var row = toRow(result);

      // No config yet: queue it (capped) so it can sync if a config is
      // added later, and return. Never error.
      if (!configured()) {
        enqueue(row);
        return Promise.resolve(false);
      }

      // Offline: queue + return; the 'online' handler / next load flushes.
      if (!online()) {
        enqueue(row);
        return Promise.resolve(false);
      }

      // Online + configured: try to send immediately; on failure, queue.
      return postRow(row).then(function (ok) {
        if (!ok) enqueue(row);
        // opportunistically drain anything older that was waiting
        if (ok) { try { flush(); } catch (e) {} }
        return ok;
      }).catch(function () {
        enqueue(row);
        return false;
      });
    } catch (e) {
      // Truly last-ditch: try to queue, but NEVER throw into the game.
      try { enqueue(toRow(result)); } catch (e2) {}
      return Promise.resolve(false);
    }
  }

  // ---- wiring: flush on load + whenever we come back online ---------
  try {
    if (typeof global.addEventListener === 'function') {
      global.addEventListener('online', function () { try { flush(); } catch (e) {} });
      // flush leftovers shortly after boot (config may load right after us)
      global.addEventListener('load', function () {
        setTimeout(function () { try { flush(); } catch (e) {} }, 0);
      });
    }
  } catch (e) { /* no window (e.g. node) — fine */ }

  // ---- export -------------------------------------------------------
  var API = {
    submit: submit,
    flush: flush,
    queued: queued,
    configured: configured
  };
  if (global) global.LEAP_SYNC = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;

})(typeof window !== 'undefined' ? window : this);
