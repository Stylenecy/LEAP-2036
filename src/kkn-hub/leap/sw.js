/* =====================================================================
   LEAP 2036 — service worker (offline shell).
   Precaches the core game assets and serves them cache-first so the
   INSTALLED PWA works fully offline. This layer is OPTIONAL: the game
   already runs from file:// with no SW at all. The SW only activates on
   http(s) origins (registration in index.html is guarded).

   Privacy / safety:
     - Caches ONLY same-origin core assets in scope.
     - NEVER caches or intercepts cross-origin requests (e.g. Supabase /
       any API or CDN) — those pass straight through to the network so
       sync stays online-only and is never silently served from cache.
   ===================================================================== */
'use strict';

// Bump this string on any asset change to invalidate the old cache.
var CACHE = 'leap2036-v1';

// Core shell — all same-folder, relative to the SW scope (the /leap/ dir).
var CORE_ASSETS = [
  '.',                    // start_url ("." resolves to the scope directory)
  'index.html',
  'engine.js',
  'data.js',
  'style.css',
  'manifest.webmanifest',
  'icon.svg'
];

// ---- install: precache the core shell ----
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // addAll is atomic; if one asset 404s the whole install fails, which
      // is what we want (don't ship a half-cached offline shell).
      return cache.addAll(CORE_ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// ---- activate: drop stale caches from older versions ----
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE) return caches.delete(key);
        return null;
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// ---- fetch: cache-first for same-origin GET; bypass everything else ----
self.addEventListener('fetch', function (event) {
  var req = event.request;

  // Only handle GET. Let POST/PUT/etc (e.g. any future sync) hit the network.
  if (req.method !== 'GET') return;

  var url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return; // unparseable — leave to the browser
  }

  // CRITICAL: never touch cross-origin (Supabase, CDNs, analytics, etc).
  // Those must reach the live network and never be served from cache.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;

      return fetch(req).then(function (res) {
        // Cache successful, basic (same-origin) responses for next time so
        // navigations to sub-paths within scope also work offline.
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (cache) {
            cache.put(req, copy);
          });
        }
        return res;
      }).catch(function () {
        // Offline and not cached: fall back to the cached app shell for
        // navigations so the game still boots; otherwise fail gracefully.
        if (req.mode === 'navigate') {
          return caches.match('index.html');
        }
        return Response.error();
      });
    })
  );
});
