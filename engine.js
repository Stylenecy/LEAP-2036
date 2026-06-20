/**
 * LEAP 2036 — DECISION ENGINE (classic script, offline / file:// safe)
 * ===================================================================
 * SINGLE SOURCE OF SCORING. Renderers MUST read numbers from here; they
 * never hardcode deltas or thresholds.
 *
 * Canonical numbers are byte-identical to:
 *   docs/sistem-data/leap2036-build.gs  (DELTAS, CHAOS_DELTAS, classifyProfil_)
 * so that  web == Google Sheet == paper Kartu Skor.
 *
 * Model: 3 resources Energi(E) / Kapital(K, shown to students as "Uang") /
 * Kesehatan Mental(M). Each starts 100, clamped 0..200 EVERY round
 * (running clamp — clamp after each round, NOT sum-then-clamp).
 *
 * This file is a CLASSIC script (not an ES module): it attaches
 * window.LEAP_ENGINE and also sets module.exports for node sanity checks.
 */
(function (global) {
  'use strict';

  // ----------------------------------------------------------------
  //  CONSTANTS (mirror leap2036-build.gs line 65)
  // ----------------------------------------------------------------
  var START = 100;
  var MIN = 0;
  var MAX = 200;

  // ----------------------------------------------------------------
  //  DELTAS — 'RONDE|PILIHAN' -> [Energi, Uang/Kapital(K), Mental]  (NET +/-)
  //  Verbatim from leap2036-build.gs lines 38-51.
  //  F2.4|A Mental = NET +10 (.gs collapses "-5 lalu +15" into one row).
  //  F2.5|A = UPFRONT cost only; the +20/+0 payoff is resolved at the
  //           START of Fase 3 (see F25 below), BEFORE F3.1.
  // ----------------------------------------------------------------
  var DELTAS = {
    'F1.1|A': [  5,  15, -10], 'F1.1|B': [ 12, -15,  12],
    'F1.2|A': [ -8,   8,  -3], 'F1.2|B': [  8, -12,   5],
    'F1.3|A': [-15,  15,  -3], 'F1.3|B': [  8,  -8,   5],
    'F1.4|A': [-12,  -5,  12], 'F1.4|B': [ -8,  10,  -3],
    'F1.5|A': [  8, -12,  10], 'F1.5|B': [ -3,  15,  -3],
    'F2.1|A': [ -5,  15, -10], 'F2.1|B': [-10, -10,   5],
    'F2.2|A': [-15, -20,   5], 'F2.2|B': [ -5, -10, -15],
    'F2.3|A': [ 20, -20,  10], 'F2.3|B': [-20,  15, -15],
    'F2.4|A': [-10,   0,  10], 'F2.4|B': [ -5,   5, -15],
    'F2.5|A': [-15, -20,  -5], 'F2.5|B': [  5,   0, -10],
    'F3.1|A': [-15,  18, -12], 'F3.1|B': [  8, -12,  14],
    'F3.2|A': [ 10,  -8,  16], 'F3.2|B': [ 14,   6, -13]
  };

  // ----------------------------------------------------------------
  //  CHAOS — class-wide, applied AFTER Fase 2, BEFORE Fase 3.
  //  Operator toggle (off by default). [E, K, M]. Verbatim .gs 54-58.
  // ----------------------------------------------------------------
  var CHAOS = {
    'C.1': [-10, -10,  -5], // "Layar Mati Mendadak"
    'C.2': [ -5,  15, -10], // "Berita Baik yang Bikin Pusing"
    'C.3': [-10, -15, -10]  // "Badai di Luar Kendali"
  };

  // ----------------------------------------------------------------
  //  F2.5 DEFERRED-BET RESOLUTION (NOT in DELTAS).
  //  Only for students who chose F2.5 = A. Resolved at the START of
  //  Fase 3 as a NEUTRAL 50:50 result card (no dice/coin shown).
  //   - upfront cost [-15,-20,-5] was ALREADY taken in Krisis (F2.5|A).
  //   - success payoff = Kapital +20 (E:0/K:+20/M:0)
  //   - fail payoff    = all 0 (the -20 upfront stays; no NEW penalty)
  //  Confirmed by arsip LPPM-2_Sekolah-A_2hari_v1.md lines 514-523.
  // ----------------------------------------------------------------
  var F25 = {
    upfront:         [-15, -20, -5], // mirror of DELTAS['F2.5|A'] (already applied in Krisis)
    payoff_success:  [  0,  20,  0],
    payoff_fail:     [  0,   0,  0],
    prob_success:    0.5
  };

  // ----------------------------------------------------------------
  //  Phase round ids + capture seam
  // ----------------------------------------------------------------
  var ROUNDS_F1 = ['F1.1', 'F1.2', 'F1.3', 'F1.4', 'F1.5'];
  var ROUNDS_F2 = ['F2.1', 'F2.2', 'F2.3', 'F2.4', 'F2.5'];
  var ROUNDS_F3 = ['F3.1', 'F3.2'];

  // ================================================================
  //  CORE
  // ================================================================

  // Running clamp (mirror clamp_ at .gs line 242).
  function clamp(v) { return Math.min(MAX, Math.max(MIN, v)); }

  /**
   * Apply ONE step's [dE, dK, dM] to a state with a RUNNING clamp per round.
   * If step.lastF1 is true, capture TotalF1 = E+K+M at that seam — captured
   * BEFORE any Fase 2 / Chaos / Fase 3 delta (the seam is the LAST F1 round).
   *
   * @param {{E:number,K:number,M:number,totalF1:(number|null)}} state
   * @param {number[]} delta  [dE, dK, dM]  (may be null/undefined -> no-op move)
   * @param {{lastF1?:boolean}} [meta]
   * @returns {{E:number,K:number,M:number,totalF1:(number|null)}} new state (pure)
   */
  function step(state, delta, meta) {
    var E = state.E, K = state.K, M = state.M;
    var totalF1 = (typeof state.totalF1 === 'undefined') ? null : state.totalF1;
    if (delta) {
      E = clamp(E + (delta[0] || 0));
      K = clamp(K + (delta[1] || 0));
      M = clamp(M + (delta[2] || 0));
    }
    if (meta && meta.lastF1) { totalF1 = E + K + M; }
    return { E: E, K: K, M: M, totalF1: totalF1 };
  }

  function freshState() {
    return { E: START, K: START, M: START, totalF1: null };
  }

  /**
   * 7-profile FIRST-MATCH-WINS ladder. PERSIS sama dengan classifyProfil_
   * (.gs lines 278-290). CRITICAL ORDER: Pelari Tanpa Rem is checked BEFORE
   * Sukses-tapi-Tumbang (authoritative/corrected order).
   * Thresholds: TINGGI >=115 · SEDANG 85-114 · RENDAH <85.
   *
   * Adversarial invariant: E>=115 && K>=115 && M<85 => "Pelari Tanpa Rem".
   *
   * @param {number} E
   * @param {number} K
   * @param {number} M
   * @param {number} totalF1     E+K+M captured at end of Fase 1
   * @param {number} [totalAkhir] E+K+M at classify time; defaults to E+K+M
   * @returns {string} canonical profile id (matches data.js profile keys)
   */
  function classifyProfil(E, K, M, totalF1, totalAkhir) {
    if (typeof totalAkhir === 'undefined' || totalAkhir === null) {
      totalAkhir = E + K + M;
    }
    var MAXm = Math.max(E, K, M), MINm = Math.min(E, K, M);
    if (E >= 115 && K >= 115 && M < 85) return 'Pelari Tanpa Rem';
    if (K >= 115 && (E < 85 || M < 85)) return 'Sukses-tapi-Tumbang';
    if (M >= 115 && E < 115 && K < 115) return 'Bijak yang Tenang';
    if ((totalAkhir - totalF1) >= 25 && totalF1 < 290) return 'Mekar Belakangan';
    if ((MAXm - MINm) >= 35 && (E >= 115 || K >= 115 || M >= 115) && (E < 85 || K < 85 || M < 85)) return 'Pemberontak Kreatif';
    if (E >= 85 && K >= 85 && M >= 85 && (MAXm - MINm) < 35) return 'Pembangun Seimbang';
    return 'Penjelajah Reflektif';
  }

  /**
   * Build the ordered event sequence: F1 (mark last F1) -> F2 ->
   * [F2.5 payoff if A] -> [chaos] -> F3.
   * NOTE on ordering: the F2.5 deferred-bet payoff resolves at the
   * START of Fase 3 (before F3.1). Chaos is class-wide between Fase 2
   * and Fase 3. Both land in the Fase-3-start seam; chaos is placed
   * right after the payoff so a picked-A bet is resolved first, exactly
   * as the workshop rundown runs it (Resolusi Taruhan -> then F3).
   *
   * @param {Object} answers      { 'F1.1':'A'|'B', ... }
   * @param {string[]} [chaosPlayed]  e.g. ['C.2','C.3']; default []
   * @param {(boolean|null)} [f25Success]  resolution of the bet for THIS run
   *        (true=success, false=fail). null/undefined => not yet resolved;
   *        scoreRun() will then auto-resolve via prob_success when A was chosen.
   * @returns {Array} list of {ronde, delta, lastF1?, kind}
   */
  function buildSequence(answers, chaosPlayed, f25Success) {
    answers = answers || {};
    chaosPlayed = chaosPlayed || [];
    var seq = [];

    ROUNDS_F1.forEach(function (r, i) {
      seq.push({
        ronde: r,
        kind: 'decision',
        delta: pickDelta(r, answers[r]),
        lastF1: (i === ROUNDS_F1.length - 1)
      });
    });

    ROUNDS_F2.forEach(function (r) {
      seq.push({ ronde: r, kind: 'decision', delta: pickDelta(r, answers[r]) });
    });

    // F2.5 deferred-bet payoff — only if A was chosen. Resolved at start of Fase 3.
    if (answers['F2.5'] === 'A') {
      var won = (typeof f25Success === 'boolean') ? f25Success : null;
      seq.push({
        ronde: 'F2.5-RES',
        kind: 'bet',
        // when unresolved (null) we mark it; scoreRun resolves it deterministically per-run
        delta: (won === null) ? null : (won ? F25.payoff_success : F25.payoff_fail),
        betPending: (won === null)
      });
    }

    // Chaos — class-wide, after Fase 2, before Fase 3.
    chaosPlayed.forEach(function (c) {
      if (CHAOS[c]) seq.push({ ronde: c, kind: 'chaos', delta: CHAOS[c].slice() });
    });

    ROUNDS_F3.forEach(function (r) {
      seq.push({ ronde: r, kind: 'decision', delta: pickDelta(r, answers[r]) });
    });

    return seq;
  }

  function pickDelta(ronde, choice) {
    if (choice !== 'A' && choice !== 'B') return null;
    var d = DELTAS[ronde + '|' + choice];
    return d ? d.slice() : null;
  }

  /**
   * Score a full run from an answers map. Drives `step` with the running
   * clamp, captures TotalF1 at the seam, applies the F2.5 payoff + chaos
   * at the Fase-3 start, then classifies.
   *
   * @param {Object} answers      { 'F1.1':'A'|'B', ... }
   * @param {Object} [opts]
   * @param {string[]} [opts.chaosPlayed]  default []
   * @param {(boolean|null)} [opts.f25Success]  pre-resolved bet outcome
   * @param {function():number} [opts.rng]  0..1 source (default Math.random),
   *        used ONLY to auto-resolve an unresolved A-bet.
   * @returns {{E:number,K:number,M:number,totalF1:number,totalAkhir:number,
   *            profil:string,f25Success:(boolean|null),sequence:Array}}
   */
  function scoreRun(answers, opts) {
    opts = opts || {};
    var rng = (typeof opts.rng === 'function') ? opts.rng : Math.random;
    var f25Success = (typeof opts.f25Success === 'boolean') ? opts.f25Success : null;

    // If A was chosen and not yet resolved, resolve deterministically for THIS run.
    if (answers && answers['F2.5'] === 'A' && f25Success === null) {
      f25Success = (rng() < F25.prob_success);
    }

    var seq = buildSequence(answers, opts.chaosPlayed, f25Success);
    var state = freshState();
    for (var i = 0; i < seq.length; i++) {
      state = step(state, seq[i].delta, seq[i]);
    }
    var totalF1 = (state.totalF1 === null) ? (state.E + state.K + state.M) : state.totalF1;
    var totalAkhir = state.E + state.K + state.M;
    var profil = classifyProfil(state.E, state.K, state.M, totalF1, totalAkhir);

    return {
      E: state.E, K: state.K, M: state.M,
      totalF1: totalF1,
      totalAkhir: totalAkhir,
      profil: profil,
      f25Success: (answers && answers['F2.5'] === 'A') ? !!f25Success : null,
      sequence: seq
    };
  }

  /**
   * Build one CSV row (no header) with columns:
   *   Kode, Energi, Uang, Mental, TotalF1, Profil
   * matching leap2036-build.gs exportCsv (header literal "Kode Siswa" -> Kode).
   *
   * @param {string} kode
   * @param {{E:number,K:number,M:number,totalF1:number,profil:string}} r
   * @returns {string}
   */
  function csvRow(kode, r) {
    return [kode, r.E, r.K, r.M, r.totalF1, r.profil].map(csvCell).join(',');
  }
  function csvHeader() { return ['Kode', 'Energi', 'Uang', 'Mental', 'TotalF1', 'Profil'].join(','); }
  function csvCell(c) {
    var v = (c === null || c === undefined) ? '' : String(c);
    return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }

  // ================================================================
  //  PUBLIC API
  // ================================================================
  var ENGINE = {
    // constants
    START: START, MIN: MIN, MAX: MAX,
    ROUNDS_F1: ROUNDS_F1, ROUNDS_F2: ROUNDS_F2, ROUNDS_F3: ROUNDS_F3,
    // data tables (read-only by convention)
    DELTAS: DELTAS,
    CHAOS: CHAOS,
    F25: F25,
    // core fns
    clamp: clamp,
    step: step,
    freshState: freshState,
    pickDelta: pickDelta,
    buildSequence: buildSequence,
    scoreRun: scoreRun,
    classifyProfil: classifyProfil,
    // export helpers
    csvHeader: csvHeader,
    csvRow: csvRow,
    csvCell: csvCell,
    // ordered ladder (for docs/debug; same order as classifyProfil)
    PROFILE_ORDER: [
      'Pelari Tanpa Rem',
      'Sukses-tapi-Tumbang',
      'Bijak yang Tenang',
      'Mekar Belakangan',
      'Pemberontak Kreatif',
      'Pembangun Seimbang',
      'Penjelajah Reflektif'
    ]
  };

  if (global) { global.LEAP_ENGINE = ENGINE; }
  if (typeof module !== 'undefined' && module.exports) { module.exports = ENGINE; }

})(typeof window !== 'undefined' ? window : this);
