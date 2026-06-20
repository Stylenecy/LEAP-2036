/**
 * LEAP 2036 — PARITY + LOGIC VERIFIER
 * ====================================================================
 * Adversarial parity test for src/kkn-hub/leap/engine.js against a FRESH,
 * independent transcription of docs/sistem-data/leap2036-build.gs
 * (DELTAS / CHAOS / clamp_ / scoreStudent_ / classifyProfil_ / masterSequence_).
 *
 * The .gs is the authoritative reference. This file re-implements its scoring
 * from scratch (REF_*) and asserts the engine agrees on E/K/M, TotalF1, Profil.
 *
 * Run:
 *   node "D:/AT Kuliah/Semester 6/7. KKN/src/kkn-hub/leap/parity.test.js"
 *
 * KEY SEAM NOTE (F2.5 deferred bet):
 *   The canonical .gs masterSequence_ has NO F2.5 payoff step — F2.5|A only
 *   charges the upfront [-15,-20,-5]. The engine ADDS an 'F2.5-RES' payoff
 *   ([0,+20,0] on success) at the START of Fase 3. Therefore:
 *     - Engine == pure .gs  iff  F2.5 != 'A'  OR  f25Success is false/unresolved.
 *     - When f25Success === true the engine adds +20 K (the deferred payoff).
 *   The REF transcription below models BOTH: REF_score(..., f25Success) applies
 *   the same payoff at the same seam so case (c) proves the deferred resolution
 *   is internally consistent with the .gs sequence + documented payoff.
 */

'use strict';

var assert = require('assert');
var path = require('path');

var ENGINE = require(path.join(__dirname, 'engine.js'));

// ====================================================================
//  FRESH TRANSCRIPTION OF leap2036-build.gs  (independent of engine.js)
// ====================================================================

// .gs lines 38-51
var REF_DELTAS = {
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

// .gs lines 54-58
var REF_CHAOS = {
  'C.1': [-10, -10,  -5],
  'C.2': [ -5,  15, -10],
  'C.3': [-10, -15, -10]
};

// .gs lines 61-65
var REF_ROUNDS_F1 = ['F1.1', 'F1.2', 'F1.3', 'F1.4', 'F1.5'];
var REF_ROUNDS_F2 = ['F2.1', 'F2.2', 'F2.3', 'F2.4', 'F2.5'];
var REF_ROUNDS_F3 = ['F3.1', 'F3.2'];
var REF_START = 100, REF_MINV = 0, REF_MAXV = 200;

// Documented deferred payoff (engine F25). Pure .gs has no payoff; this is only
// applied when f25Success === true, at the Fase-3 start seam (before F3.1).
var REF_F25_PAYOFF_SUCCESS = [0, 20, 0];
var REF_F25_PAYOFF_FAIL    = [0,  0, 0];

// .gs line 242
function REF_clamp(v) { return Math.min(REF_MAXV, Math.max(REF_MINV, v)); }

// .gs lines 245-256 masterSequence_  (+ documented F2.5-RES seam, mirroring engine).
// chaosPlayed: array; f25Success: true/false/null.
function REF_masterSequence(answers, chaosPlayed, f25Success) {
  chaosPlayed = chaosPlayed || [];
  var seq = [];
  REF_ROUNDS_F1.forEach(function (r, i) {
    seq.push({ ronde: r, lastF1: (i === REF_ROUNDS_F1.length - 1) });
  });
  REF_ROUNDS_F2.forEach(function (r) { seq.push({ ronde: r }); });

  // Deferred F2.5-A payoff at start of Fase 3 (engine seam). Pure-.gs has NO
  // payoff; success==true => +20K, fail/null => 0 (no-op, == pure .gs).
  if (answers['F2.5'] === 'A') {
    var delta = null;
    if (f25Success === true) delta = REF_F25_PAYOFF_SUCCESS;
    else if (f25Success === false) delta = REF_F25_PAYOFF_FAIL;
    seq.push({ ronde: 'F2.5-RES', chaos: true, delta: delta });
  }

  chaosPlayed.forEach(function (c) {
    if (REF_CHAOS[c]) seq.push({ ronde: c, chaos: true, delta: REF_CHAOS[c] });
  });
  REF_ROUNDS_F3.forEach(function (r) { seq.push({ ronde: r }); });
  return seq;
}

// .gs lines 259-274 scoreStudent_ (running clamp per round; TotalF1 at last F1).
function REF_score(answers, chaosPlayed, f25Success) {
  var seq = REF_masterSequence(answers, chaosPlayed, f25Success);
  var e = REF_START, u = REF_START, m = REF_START, totalF1 = null;
  for (var i = 0; i < seq.length; i++) {
    var stepObj = seq[i], d = null;
    if (stepObj.chaos) {
      d = stepObj.delta; // class-wide / payoff; may be null (no-op)
    } else {
      var c = answers[stepObj.ronde];
      if (c) d = REF_DELTAS[stepObj.ronde + '|' + c];
    }
    if (d) {
      e = REF_clamp(e + d[0]);
      u = REF_clamp(u + d[1]);
      m = REF_clamp(m + d[2]);
    }
    if (stepObj.lastF1) totalF1 = e + u + m;
  }
  if (totalF1 === null) totalF1 = e + u + m;
  return { e: e, u: u, m: m, totalF1: totalF1 };
}

// .gs lines 278-290 classifyProfil_ (first-match ladder, Pelari BEFORE Sukses).
function REF_classify(E, K, M, totalF1, totalAkhir) {
  var MAXm = Math.max(E, K, M), MINm = Math.min(E, K, M);
  if (E >= 115 && K >= 115 && M < 85) return 'Pelari Tanpa Rem';
  if (K >= 115 && (E < 85 || M < 85)) return 'Sukses-tapi-Tumbang';
  if (M >= 115 && E < 115 && K < 115) return 'Bijak yang Tenang';
  if ((totalAkhir - totalF1) >= 25 && totalF1 < 290) return 'Mekar Belakangan';
  if ((MAXm - MINm) >= 35 && (E >= 115 || K >= 115 || M >= 115) && (E < 85 || K < 85 || M < 85)) return 'Pemberontak Kreatif';
  if (E >= 85 && K >= 85 && M >= 85 && (MAXm - MINm) < 35) return 'Pembangun Seimbang';
  return 'Penjelajah Reflektif';
}

// ====================================================================
//  STATIC TABLE PARITY (engine numbers == fresh .gs transcription)
// ====================================================================
function assertTablesByteForByte() {
  var mismatches = [];
  Object.keys(REF_DELTAS).forEach(function (k) {
    var a = REF_DELTAS[k], b = ENGINE.DELTAS[k];
    if (!b || a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2]) {
      mismatches.push('DELTAS[' + k + '] ref=' + JSON.stringify(a) + ' eng=' + JSON.stringify(b));
    }
  });
  // No extra/missing keys
  if (Object.keys(REF_DELTAS).length !== Object.keys(ENGINE.DELTAS).length) {
    mismatches.push('DELTAS key count ref=' + Object.keys(REF_DELTAS).length + ' eng=' + Object.keys(ENGINE.DELTAS).length);
  }
  Object.keys(REF_CHAOS).forEach(function (k) {
    var a = REF_CHAOS[k], b = ENGINE.CHAOS[k];
    if (!b || a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2]) {
      mismatches.push('CHAOS[' + k + '] ref=' + JSON.stringify(a) + ' eng=' + JSON.stringify(b));
    }
  });
  if (ENGINE.START !== REF_START) mismatches.push('START ref=' + REF_START + ' eng=' + ENGINE.START);
  if (ENGINE.MIN !== REF_MINV) mismatches.push('MIN ref=' + REF_MINV + ' eng=' + ENGINE.MIN);
  if (ENGINE.MAX !== REF_MAXV) mismatches.push('MAX ref=' + REF_MAXV + ' eng=' + ENGINE.MAX);
  // F2.5 payoff_success must equal documented [0,20,0]
  if (ENGINE.F25.payoff_success[0] !== 0 || ENGINE.F25.payoff_success[1] !== 20 || ENGINE.F25.payoff_success[2] !== 0) {
    mismatches.push('F25.payoff_success ref=[0,20,0] eng=' + JSON.stringify(ENGINE.F25.payoff_success));
  }
  // Profile ladder order parity
  var refOrder = ['Pelari Tanpa Rem','Sukses-tapi-Tumbang','Bijak yang Tenang','Mekar Belakangan','Pemberontak Kreatif','Pembangun Seimbang','Penjelajah Reflektif'];
  refOrder.forEach(function (p, i) {
    if (ENGINE.PROFILE_ORDER[i] !== p) mismatches.push('PROFILE_ORDER[' + i + '] ref=' + p + ' eng=' + ENGINE.PROFILE_ORDER[i]);
  });
  return mismatches;
}

// ====================================================================
//  CASE RUNNER
// ====================================================================
var results = [];
function runCase(name, answers, opts, expect) {
  opts = opts || {};
  var chaosPlayed = opts.chaosPlayed || [];
  var f25Success = (typeof opts.f25Success === 'boolean') ? opts.f25Success : null;

  // REF (fresh .gs transcription)
  var ref = REF_score(answers, chaosPlayed, f25Success);
  var refTotalAkhir = ref.e + ref.u + ref.m;
  var refProfil = REF_classify(ref.e, ref.u, ref.m, ref.totalF1, refTotalAkhir);

  // ENGINE (force same f25 resolution so it is deterministic & comparable)
  var eng = ENGINE.scoreRun(answers, { chaosPlayed: chaosPlayed, f25Success: f25Success });

  var problems = [];
  if (eng.E !== ref.e) problems.push('E eng=' + eng.E + ' ref=' + ref.e);
  if (eng.K !== ref.u) problems.push('K eng=' + eng.K + ' ref=' + ref.u);
  if (eng.M !== ref.m) problems.push('M eng=' + eng.M + ' ref=' + ref.m);
  if (eng.totalF1 !== ref.totalF1) problems.push('TotalF1 eng=' + eng.totalF1 + ' ref=' + ref.totalF1);
  if (eng.totalAkhir !== refTotalAkhir) problems.push('TotalAkhir eng=' + eng.totalAkhir + ' ref=' + refTotalAkhir);
  if (eng.profil !== refProfil) problems.push('Profil eng="' + eng.profil + '" ref="' + refProfil + '"');

  // Expectation guard (designed-intent invariants)
  if (expect) {
    if (expect.profil && eng.profil !== expect.profil) {
      problems.push('EXPECT profil="' + expect.profil + '" but got eng="' + eng.profil + '"');
    }
    if (typeof expect.E === 'number' && eng.E !== expect.E) problems.push('EXPECT E=' + expect.E + ' got ' + eng.E);
    if (typeof expect.K === 'number' && eng.K !== expect.K) problems.push('EXPECT K=' + expect.K + ' got ' + eng.K);
    if (typeof expect.M === 'number' && eng.M !== expect.M) problems.push('EXPECT M=' + expect.M + ' got ' + eng.M);
    if (typeof expect.totalF1 === 'number' && eng.totalF1 !== expect.totalF1) problems.push('EXPECT TotalF1=' + expect.totalF1 + ' got ' + eng.totalF1);
  }

  var pass = problems.length === 0;
  results.push({
    name: name,
    pass: pass,
    eng: { E: eng.E, K: eng.K, M: eng.M, totalF1: eng.totalF1, totalAkhir: eng.totalAkhir, profil: eng.profil },
    ref: { E: ref.e, K: ref.u, M: ref.m, totalF1: ref.totalF1, totalAkhir: refTotalAkhir, profil: refProfil },
    problems: problems
  });
  return results[results.length - 1];
}

// ====================================================================
//  HELPER: fill every round with a choice
// ====================================================================
function ans(map) { return map; }

// ====================================================================
//  DESIGNED CASES
// ====================================================================

// --- CASE 1: invariant E>=115 && K>=115 && M<85 => Pelari (NOT Sukses) ---
// We construct a state and verify via DIRECT classify (independent of sequence)
// AND find a real vote sequence that lands E>=115,K>=115,M<85.
(function caseInvariantPelari() {
  // Direct classifier invariant: Pelari must win over Sukses for E,K>=115 & M<85.
  var direct = ENGINE.classifyProfil(150, 150, 50, 300, 350);
  var refDirect = REF_classify(150, 150, 50, 300, 350);
  var problems = [];
  if (direct !== 'Pelari Tanpa Rem') problems.push('direct classify eng="' + direct + '" expected Pelari Tanpa Rem');
  if (refDirect !== 'Pelari Tanpa Rem') problems.push('direct classify ref="' + refDirect + '" expected Pelari Tanpa Rem');
  if (direct !== refDirect) problems.push('direct classify eng vs ref mismatch');
  results.push({
    name: 'CASE 1 (invariant) E>=115 & K>=115 & M<85 => Pelari Tanpa Rem (direct classify 150/150/50)',
    pass: problems.length === 0,
    eng: { profil: direct }, ref: { profil: refDirect }, problems: problems
  });
})();

// --- CASE 1b: invariant via a REAL vote sequence (brute-force verified) ---
// Lands E=115, K=122, M=67 -> E>=115 && K>=115 && M<85 => Pelari (not Sukses).
runCase(
  'CASE 1b (invariant via votes) E=115,K=122,M=67 => Pelari Tanpa Rem (not Sukses)',
  ans({
    'F1.1': 'A', 'F1.2': 'B', 'F1.3': 'B', 'F1.4': 'B', 'F1.5': 'A',
    'F2.4': 'B', 'F3.1': 'A', 'F3.2': 'B'
  }),
  {},
  { profil: 'Pelari Tanpa Rem', E: 115, K: 122, M: 67 }
);

// --- CASE 2: Mekar Belakangan — low TotalF1 then strong finish (brute-force verified) ---
// totalF1=289 (<290), totalAkhir=316 -> delta=+27 (>=25); not pre-empted by any
// earlier ladder rule (E=102,K=107,M=107 all in SEDANG band). The UNIQUE Mekar
// sequence over the F1+F2.1/F2.3+F3 search space.
runCase(
  'CASE 2 (Mekar Belakangan) totalF1=289<290, delta=+27>=25 => Mekar Belakangan',
  ans({
    'F1.2': 'A', 'F1.3': 'A', 'F1.4': 'A',
    'F2.1': 'A', 'F2.3': 'A',
    'F3.1': 'B', 'F3.2': 'B'
  }),
  {},
  { profil: 'Mekar Belakangan', totalF1: 289 }
);

// --- CASE 3 (c): F2.5-A deferred payoff RESOLVES (success) — proves +20 K lands ---
// Same answers, run twice: f25Success=false (no payoff) vs true (+20K). The K delta
// between the two runs MUST be exactly +20 (clamp permitting). Engine == REF both ways.
(function caseF25Payoff() {
  var a = ans({
    'F1.1': 'B', 'F2.5': 'A', // upfront -15/-20/-5 charged in Krisis
    'F3.1': 'A', 'F3.2': 'B'
  });
  var fail = runCase('CASE 3a (F2.5-A bet FAIL) payoff=0 — engine==pure .gs', a, { f25Success: false }, null);
  var win  = runCase('CASE 3b (F2.5-A bet SUCCESS) deferred payoff +20K resolves', a, { f25Success: true }, null);
  var diff = win.eng.K - fail.eng.K;
  var problems = [];
  // Expect +20 (unless clamp saturates K at 200/0 — here it won't).
  if (diff !== 20) problems.push('F2.5-A success payoff K-diff=' + diff + ' expected 20 (deferred bet did NOT resolve)');
  // And REF agrees on the same diff.
  var refDiff = win.ref.K - fail.ref.K;
  if (refDiff !== 20) problems.push('REF F2.5 payoff K-diff=' + refDiff + ' expected 20');
  results.push({
    name: 'CASE 3c (F2.5-A deferred payoff proof) success-minus-fail K diff == +20',
    pass: problems.length === 0,
    eng: { K_win: win.eng.K, K_fail: fail.eng.K, diff: diff },
    ref: { diff: refDiff },
    problems: problems
  });
})();

// --- CASE 4: RUNNING clamp, NOT sum-then-clamp ---
// Engineered single resource: start 100, +100 -> clamp 200, -120 -> 80, +40 -> 120.
// Sum-then-clamp would give: 100 + (100-120+40)=120 too (same here), so design a
// case where running clamp DIFFERS from sum-clamp:
//   start 100, +100 (=>200 clamp), -120 (=>80), +40 (=>120).
//   running-clamp result = 120.
//   sum-clamp would be 100 + clamp_total? No: sum of deltas = +20 => 120 as well.
// To DISTINGUISH, we need saturation to LOSE information:
//   start 100, +100 (running=>200, clamp eats the surplus), then -120 (=>80).
//   running result after these two = 80.
//   sum-then-clamp = clamp(100 +100 -120) = clamp(80) = 80  -> SAME.
// The real distinction needs clamp at BOTH ends. Use:
//   start 100, +130 (running clamp =>200, surplus 30 LOST), -150 (=>50), +40 (=>90).
//   running-clamp final = 90.
//   sum-then-clamp = clamp(100 +130 -150 +40) = clamp(120) = 120.  DIFFERENT (90 vs 120).
(function caseRunningClamp() {
  // Drive ENGINE.step directly on E only (K,M deltas 0) to isolate the math.
  var s = ENGINE.freshState(); // E=100
  s = ENGINE.step(s, [130, 0, 0]); // E: clamp(230)=200
  s = ENGINE.step(s, [-150, 0, 0]); // E: clamp(50)=50
  s = ENGINE.step(s, [40, 0, 0]);  // E: clamp(90)=90
  var runningE = s.E;

  // REF clamp chain
  var e = REF_START;
  e = REF_clamp(e + 130);
  e = REF_clamp(e - 150);
  e = REF_clamp(e + 40);
  var refE = e;

  var sumClampE = REF_clamp(REF_START + 130 - 150 + 40); // = clamp(120) = 120

  var problems = [];
  if (runningE !== 90) problems.push('engine running-clamp E=' + runningE + ' expected 90');
  if (refE !== 90) problems.push('ref running-clamp E=' + refE + ' expected 90');
  if (runningE !== refE) problems.push('engine vs ref running-clamp mismatch');
  if (sumClampE === runningE) problems.push('test invalid: sum-clamp (' + sumClampE + ') equals running-clamp; case does not distinguish');
  results.push({
    name: 'CASE 4 (running clamp) +130 then -150 then +40 => 90 (running) NOT 120 (sum-clamp)',
    pass: problems.length === 0,
    eng: { running: runningE, sumClampWouldBe: sumClampE }, ref: { running: refE }, problems: problems
  });
})();

// --- CASE 5: Chaos applied between Fase 2 and Fase 3 (C.2 + C.3) ---
runCase(
  'CASE 5 (chaos seam) C.2+C.3 applied after Fase 2, before Fase 3 — engine==.gs',
  ans({
    'F1.1': 'A', 'F1.2': 'B', 'F2.1': 'B', 'F2.3': 'A', 'F3.1': 'A', 'F3.2': 'B'
  }),
  { chaosPlayed: ['C.2', 'C.3'] },
  null
);

// --- CASE 6: full-A sweep, no chaos, no F2.5 payoff (pure decision chain) ---
runCase(
  'CASE 6 (full A sweep) all rounds A, F2.5 fail => engine==pure .gs across E/K/M/F1/Profil',
  ans({
    'F1.1':'A','F1.2':'A','F1.3':'A','F1.4':'A','F1.5':'A',
    'F2.1':'A','F2.2':'A','F2.3':'A','F2.4':'A','F2.5':'A',
    'F3.1':'A','F3.2':'A'
  }),
  { f25Success: false },
  null
);

// --- CASE 7: full-B sweep, no chaos (pure decision chain) ---
runCase(
  'CASE 7 (full B sweep) all rounds B => engine==pure .gs across E/K/M/F1/Profil',
  ans({
    'F1.1':'B','F1.2':'B','F1.3':'B','F1.4':'B','F1.5':'B',
    'F2.1':'B','F2.2':'B','F2.3':'B','F2.4':'B','F2.5':'B',
    'F3.1':'B','F3.2':'B'
  }),
  {},
  null
);

// ====================================================================
//  STATIC TABLE PARITY (run last so it reports in summary)
// ====================================================================
var tableMismatches = assertTablesByteForByte();
results.unshift({
  name: 'TABLE PARITY (DELTAS/CHAOS/START/MIN/MAX/F25.payoff/PROFILE_ORDER) engine == fresh .gs',
  pass: tableMismatches.length === 0,
  eng: {}, ref: {}, problems: tableMismatches
});

// ====================================================================
//  REPORT
// ====================================================================
var allPass = true;
console.log('================ LEAP 2036 PARITY REPORT ================');
results.forEach(function (r) {
  if (!r.pass) allPass = false;
  console.log((r.pass ? 'PASS' : 'FAIL') + ' :: ' + r.name);
  if (r.eng && Object.keys(r.eng).length) console.log('        eng: ' + JSON.stringify(r.eng));
  if (r.ref && Object.keys(r.ref).length) console.log('        ref: ' + JSON.stringify(r.ref));
  if (!r.pass) r.problems.forEach(function (p) { console.log('        >>> ' + p); });
});
console.log('=========================================================');
console.log(allPass ? 'ALL CASES PASS' : 'SOME CASES FAILED');

// machine-readable line for the harness
console.log('PARITY_RESULT=' + (allPass ? 'PASS' : 'FAIL'));

if (!allPass) {
  process.exitCode = 1;
  // Also throw so CI surfaces it loudly.
  assert.strictEqual(allPass, true, 'LEAP parity verifier found mismatches (see report above).');
}
