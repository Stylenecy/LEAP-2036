/**
 * LEAP 2036 — SISTEM DATA PER-SISWA (Google Apps Script)
 * =====================================================
 * Bangun otomatis: 1 Google Form (input skor) + Google Sheet yang menghitung
 * skor Energi/Uang/Mental tiap siswa (jepit 0-200 per ronde), Profil 2036,
 * dan ekspor CSV untuk DPL. Operator: Syendhi.
 *
 * CARA PAKAI (1x setup, ~5 menit):
 *   1. Buka sheets.new (Google Sheet KOSONG, login akun KKN).
 *   2. Menu Extensions > Apps Script. Hapus isi default, PASTE seluruh file ini.
 *   3. (Opsional) Edit blok CONFIG di bawah: jumlah siswa, prefix kode, kartu chaos.
 *   4. Klik Run > pilih fungsi "setup" > Run. Izinkan akses saat diminta.
 *   5. Lihat Execution log: ada LINK FORM (bagikan/QR ke siswa) + sheet sudah siap.
 *   6. Saat workshop jalan: siswa isi Form tiap ronde. Untuk hitung:
 *      menu "LEAP 2036" (muncul di atas sheet) > "Hitung ulang skor".
 *   7. Ekspor: menu "LEAP 2036" > "Ekspor CSV" (atau buka tab EKSPOR > File > Download > CSV).
 *
 * Sumber angka: docs/LEAP-2036_Modular_v2.md §3 + Bank Skenario (arsip v1 §C).
 * Aturan profil & ambang PERSIS sama dengan rumus IFS di doc (manual = Sheet selalu setuju).
 */

// ============================================================
//  CONFIG — operator boleh edit bagian ini saja
// ============================================================
var CONFIG = {
  prefix: 'A-',        // prefix kode siswa (mis. 'A-' -> A-01, A-02, ...)
  studentCount: 40,    // jumlah siswa di kelas ini (buat daftar dropdown kode)
  // Kartu Chaos yang BENAR-BENAR dimainkan (class-wide, sama untuk semua).
  // Workshop biasanya cabut 2 dari 3. Kosongkan [] kalau tidak dipakai.
  // Pilihan id: 'C.1' (Layar Mati), 'C.2' (Berita Baik bikin Pusing), 'C.3' (Badai).
  chaosPlayed: [],     // contoh kalau dipakai: ['C.2', 'C.3']
};

// ============================================================
//  DATA BAKU — JANGAN diubah kecuali Bank Skenario direvisi.
//  Format: 'RONDE|PILIHAN': [Energi, Uang, Mental]  (NET +/-)
// ============================================================
var DELTAS = {
  'F1.1|A': [  5,  15, -10], 'F1.1|B': [ 12, -15,  12],
  'F1.2|A': [ -8,   8,  -3], 'F1.2|B': [  8, -12,   5],
  'F1.3|A': [-15,  15,  -3], 'F1.3|B': [  8,  -8,   5],
  'F1.4|A': [-12,  -5,  12], 'F1.4|B': [ -8,  10,  -3],
  'F1.5|A': [  8, -12,  10], 'F1.5|B': [ -3,  15,  -3],
  'F2.1|A': [ -5,  15, -10], 'F2.1|B': [-10, -10,   5],
  'F2.2|A': [-15, -20,   5], 'F2.2|B': [ -5, -10, -15],
  'F2.3|A': [ 20, -20,  10], 'F2.3|B': [-20,  15, -15],
  'F2.4|A': [-10,   0,  10], 'F2.4|B': [ -5,   5, -15], // F2.4|A Mental: "-5 lalu +15" = NET +10
  'F2.5|A': [-15, -20,  -5], 'F2.5|B': [  5,   0, -10], // F2.5|A = biaya AWAL taruhan (lihat catatan payoff)
  'F3.1|A': [-15,  18, -12], 'F3.1|B': [  8, -12,  14],
  'F3.2|A': [ 10,  -8,  16], 'F3.2|B': [ 14,   6, -13],
};

// Kartu Chaos (class-wide). Diterapkan ke SEMUA siswa kalau ada di CONFIG.chaosPlayed.
var CHAOS_DELTAS = {
  'C.1': [-10, -10,  -5], // "Layar Mati Mendadak"
  'C.2': [ -5,  15, -10], // "Berita Baik yang Bikin Pusing"
  'C.3': [-10, -15, -10], // "Badai di Luar Kendali"
};

// Urutan ronde normal (Fase 1 -> Fase 2 -> Fase 3). Chaos disisipkan setelah Fase 2.
var ROUNDS_F1 = ['F1.1','F1.2','F1.3','F1.4','F1.5'];
var ROUNDS_F2 = ['F2.1','F2.2','F2.3','F2.4','F2.5'];
var ROUNDS_F3 = ['F3.1','F3.2'];

var START = 100, MINV = 0, MAXV = 200;

var TAB_TABEL  = 'Tabel Perubahan Poin';
var TAB_SKOR   = 'Skor Siswa';
var TAB_EKSPOR = 'EKSPOR';
var PROP_RESP  = 'RESP_SHEET';
var PROP_FORM  = 'FORM_ID';

// ============================================================
//  SETUP (jalankan 1x)
// ============================================================
function setup() {
  var ss = SpreadsheetApp.getActive();
  if (!ss) throw new Error('Jalankan dari dalam Google Sheet (Extensions > Apps Script).');

  // 1) Buat Form
  var form = FormApp.create('LEAP 2036 — Input Skor (rahasia)');
  form.setDescription(
    'KUNCI pilihanmu (A/B) diam-diam DULU, sebelum diskusi grup. ' +
    'Isi <15 detik per ronde. Tidak perlu login.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setShowLinkToRespondAgain(true);
  form.setConfirmationMessage('Tersimpan ✅. Tunggu fasilitator buka ronde berikutnya.');

  var codes = studentCodes();
  form.addListItem().setTitle('Kode Siswa').setRequired(true).setChoiceValues(codes);
  form.addListItem().setTitle('Ronde').setRequired(true).setChoiceValues(ROUNDS_F1.concat(ROUNDS_F2, ROUNDS_F3));
  form.addMultipleChoiceItem().setTitle('Pilihanmu').setRequired(true).setChoiceValues(['A', 'B']);

  // 2) Sambungkan respons Form ke spreadsheet ini
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  SpreadsheetApp.flush();

  // Temukan tab respons (nama bisa "Form Responses 1" / "Tanggapan Formulir 1")
  var respSheet = findResponseSheet_(ss);
  if (respSheet) {
    PropertiesService.getDocumentProperties().setProperty(PROP_RESP, respSheet.getName());
  }
  PropertiesService.getDocumentProperties().setProperty(PROP_FORM, form.getId());

  // 3) Bangun tab Tabel Perubahan Poin (referensi + bisa diaudit operator)
  buildTabelPerubahanPoin_(ss);

  // 4) Siapkan tab Skor Siswa & EKSPOR (kosong dulu)
  ensureSheet_(ss, TAB_SKOR).clear();
  ensureSheet_(ss, TAB_EKSPOR).clear();
  ensureMenu_();

  Logger.log('================ SETUP SELESAI ================');
  Logger.log('LINK FORM (bagikan ke siswa / buat QR):');
  Logger.log(form.getPublishedUrl());
  Logger.log('Edit Form (kalau perlu): ' + form.getEditUrl());
  Logger.log('Tab respons: ' + (respSheet ? respSheet.getName() : '(cek manual)'));
  Logger.log('Jumlah kode siswa: ' + codes.length + ' (' + codes[0] + ' .. ' + codes[codes.length-1] + ')');
  Logger.log('Kalau chaosPlayed dipakai, sudah di-set: [' + CONFIG.chaosPlayed.join(', ') + ']');
  Logger.log('Lanjut: isi Form tiap ronde, lalu menu "LEAP 2036" > "Hitung ulang skor".');
}

// ============================================================
//  HITUNG ULANG — baca respons, hitung skor + profil tiap siswa
// ============================================================
function recompute() {
  var ss = SpreadsheetApp.getActive();
  var resp = findResponseSheet_(ss);
  if (!resp) { toast_('Tab respons Form belum ada. Jalankan "setup" dulu.'); return; }

  var data = resp.getDataRange().getValues();
  if (data.length < 2) { toast_('Belum ada jawaban masuk.'); return; }

  var header = data[0];
  var ci = colIndex_(header);
  if (ci.kode < 0 || ci.ronde < 0 || ci.pilihan < 0) {
    toast_('Header Form tidak dikenali (Kode Siswa / Ronde / Pilihan).'); return;
  }

  // Kelompokkan jawaban per kode; deteksi duplikat (kode+ronde > 1)
  var byCode = {};          // kode -> { ronde: 'A'/'B' }
  var dupCount = {};        // kode -> jumlah duplikat
  var roundsSeen = {};      // kode -> jumlah baris valid
  for (var r = 1; r < data.length; r++) {
    var kode = String(data[r][ci.kode]).trim();
    var ronde = String(data[r][ci.ronde]).trim();
    var pil = String(data[r][ci.pilihan]).trim().toUpperCase();
    if (!kode || !ronde || (pil !== 'A' && pil !== 'B')) continue;
    if (!byCode[kode]) byCode[kode] = {};
    if (byCode[kode][ronde] !== undefined) {
      dupCount[kode] = (dupCount[kode] || 0) + 1; // pakai jawaban PERTAMA, hitung duplikat
    } else {
      byCode[kode][ronde] = pil;
    }
    roundsSeen[kode] = (roundsSeen[kode] || 0) + 1;
  }

  var seq = masterSequence_();
  var officialCodes = {};
  studentCodes().forEach(function (c) { officialCodes[c] = true; });

  var skorRows = [['Kode Siswa','Energi','Uang','Mental','TotalF1','TotalAkhir','Selisih(maks-min)','Profil 2036','Jml jawaban','Duplikat','Status']];
  var eksporRows = [['Kode Siswa','Energi','Uang','Mental','TotalF1','Profil']];

  var codes = Object.keys(byCode).sort();
  for (var i = 0; i < codes.length; i++) {
    var kode2 = codes[i];
    var s = scoreStudent_(byCode[kode2], seq);
    var profil = classifyProfil_(s.e, s.u, s.m, s.totalF1, s.e + s.u + s.m);
    var spread = Math.max(s.e, s.u, s.m) - Math.min(s.e, s.u, s.m);
    var status = officialCodes[kode2] ? 'OK' : 'KODE TAK DIKENAL';
    skorRows.push([kode2, s.e, s.u, s.m, s.totalF1, s.e + s.u + s.m, spread, profil,
                   roundsSeen[kode2] || 0, dupCount[kode2] || 0, status]);
    eksporRows.push([kode2, s.e, s.u, s.m, s.totalF1, profil]);
  }

  writeTab_(ss, TAB_SKOR, skorRows);
  writeTab_(ss, TAB_EKSPOR, eksporRows);

  var dupTotal = Object.keys(dupCount).length;
  toast_('Selesai. ' + codes.length + ' siswa dihitung. ' +
         (dupTotal ? '⚠ ' + dupTotal + ' kode ada duplikat (cek kolom Duplikat).' : 'Tidak ada duplikat.'));
}

// ============================================================
//  EKSPOR CSV — buat file CSV di Drive (backup) + tab EKSPOR siap di-download
// ============================================================
function exportCsv() {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB_EKSPOR);
  if (!sh || sh.getLastRow() < 2) { toast_('Belum ada data. Jalankan "Hitung ulang" dulu.'); return; }
  var rows = sh.getDataRange().getValues();
  var csv = rows.map(function (row) {
    return row.map(function (c) {
      var v = (c === null || c === undefined) ? '' : String(c);
      return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
    }).join(',');
  }).join('\n');

  var name = 'LEAP2036-skor-' + ymd_() + '.csv';
  var file = DriveApp.createFile(name, csv, MimeType.CSV);
  Logger.log('CSV dibuat di Drive: ' + file.getUrl());
  toast_('CSV dibuat di Drive: ' + name + ' (cek Execution log untuk link). Atau tab EKSPOR > File > Download > CSV.');
}

// ============================================================
//  CEK KEBERSIHAN DATA
// ============================================================
function dataAudit() {
  var ss = SpreadsheetApp.getActive();
  var resp = findResponseSheet_(ss);
  if (!resp) { toast_('Tab respons belum ada.'); return; }
  var data = resp.getDataRange().getValues();
  var ci = colIndex_(data[0]);
  var pairCount = {}, codesSeen = {}, orphan = [];
  var official = {}; studentCodes().forEach(function (c) { official[c] = true; });
  for (var r = 1; r < data.length; r++) {
    var kode = String(data[r][ci.kode]).trim();
    var ronde = String(data[r][ci.ronde]).trim();
    if (!kode) continue;
    codesSeen[kode] = true;
    if (!official[kode] && orphan.indexOf(kode) < 0) orphan.push(kode);
    var key = kode + '|' + ronde;
    pairCount[key] = (pairCount[key] || 0) + 1;
  }
  var dups = Object.keys(pairCount).filter(function (k) { return pairCount[k] > 1; });
  var msg = 'Kode terlihat: ' + Object.keys(codesSeen).length +
            ' | Duplikat (kode+ronde>1): ' + dups.length +
            (dups.length ? ' [' + dups.slice(0, 8).join(', ') + (dups.length > 8 ? '…' : '') + ']' : '') +
            ' | Kode tak dikenal: ' + orphan.length +
            (orphan.length ? ' [' + orphan.slice(0, 8).join(', ') + ']' : '');
  Logger.log(msg);
  toast_(msg);
}

// ============================================================
//  INTI PERHITUNGAN
// ============================================================
function clamp_(v) { return Math.min(MAXV, Math.max(MINV, v)); }

// Bangun urutan event: F1 (tandai F1 terakhir) -> F2 -> chaos -> F3
function masterSequence_() {
  var seq = [];
  ROUNDS_F1.forEach(function (r, i) {
    seq.push({ ronde: r, lastF1: (i === ROUNDS_F1.length - 1) });
  });
  ROUNDS_F2.forEach(function (r) { seq.push({ ronde: r }); });
  (CONFIG.chaosPlayed || []).forEach(function (c) {
    if (CHAOS_DELTAS[c]) seq.push({ ronde: c, chaos: true, delta: CHAOS_DELTAS[c] });
  });
  ROUNDS_F3.forEach(function (r) { seq.push({ ronde: r }); });
  return seq;
}

// Jepit BERJALAN tiap ronde (running clamp) — sama persis dengan kartu kertas & papan.
function scoreStudent_(ans, seq) {
  var e = START, u = START, m = START, totalF1 = null;
  for (var i = 0; i < seq.length; i++) {
    var step = seq[i], d = null;
    if (step.chaos) {
      d = step.delta; // class-wide: kena semua siswa yang hadir
    } else {
      var c = ans[step.ronde];
      if (c) d = DELTAS[step.ronde + '|' + c];
    }
    if (d) { e = clamp_(e + d[0]); u = clamp_(u + d[1]); m = clamp_(m + d[2]); }
    if (step.lastF1) totalF1 = e + u + m;
  }
  if (totalF1 === null) totalF1 = e + u + m;
  return { e: e, u: u, m: m, totalF1: totalF1 };
}

// Tangga 7-profil — PERSIS sama dengan rumus IFS di LEAP-2036_Modular_v2.md §3 Langkah 4.
// Ambang: TINGGI >=115 · SEDANG 85-114 · RENDAH <85.  E=Energi, K=Uang, M=Mental.
function classifyProfil_(E, K, M, totalF1, totalAkhir) {
  var MAXm = Math.max(E, K, M), MINm = Math.min(E, K, M);
  // Pelari DICEK DULU sebelum Sukses: Pelari = kasus lebih spesifik (Energi TINGGI juga).
  // Kalau Sukses dicek dulu, semua kasus Pelari (Uang>=115 & Mental<85) ketelan Sukses
  // -> profil "Pelari Tanpa Rem" tak pernah keluar. (Koreksi urutan dari draft doc.)
  if (E >= 115 && K >= 115 && M < 85) return 'Pelari Tanpa Rem';
  if (K >= 115 && (E < 85 || M < 85)) return 'Sukses-tapi-Tumbang';
  if (M >= 115 && E < 115 && K < 115) return 'Bijak yang Tenang';
  if ((totalAkhir - totalF1) >= 25 && totalF1 < 290) return 'Mekar Belakangan';
  if ((MAXm - MINm) >= 35 && (E >= 115 || K >= 115 || M >= 115) && (E < 85 || K < 85 || M < 85)) return 'Pemberontak Kreatif';
  if (E >= 85 && K >= 85 && M >= 85 && (MAXm - MINm) < 35) return 'Pembangun Seimbang';
  return 'Penjelajah Reflektif';
}

// ============================================================
//  HELPER
// ============================================================
function studentCodes() {
  var out = [];
  for (var i = 1; i <= CONFIG.studentCount; i++) {
    out.push(CONFIG.prefix + (i < 10 ? '0' + i : '' + i));
  }
  return out;
}

function colIndex_(header) {
  var idx = { kode: -1, ronde: -1, pilihan: -1 };
  for (var c = 0; c < header.length; c++) {
    var h = String(header[c]).toLowerCase();
    if (idx.kode < 0 && h.indexOf('kode') >= 0) idx.kode = c;
    else if (idx.ronde < 0 && h.indexOf('ronde') >= 0) idx.ronde = c;
    else if (idx.pilihan < 0 && h.indexOf('pilih') >= 0) idx.pilihan = c;
  }
  return idx;
}

function findResponseSheet_(ss) {
  var saved = PropertiesService.getDocumentProperties().getProperty(PROP_RESP);
  if (saved && ss.getSheetByName(saved)) return ss.getSheetByName(saved);
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var name = sheets[i].getName();
    if (name === TAB_TABEL || name === TAB_SKOR || name === TAB_EKSPOR) continue;
    if (sheets[i].getLastColumn() < 1) continue;
    var head = sheets[i].getRange(1, 1, 1, sheets[i].getLastColumn()).getValues()[0].join('|').toLowerCase();
    if (head.indexOf('kode') >= 0 && head.indexOf('ronde') >= 0) return sheets[i];
  }
  return null;
}

function ensureSheet_(ss, name) {
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function writeTab_(ss, name, rows) {
  var sh = ensureSheet_(ss, name);
  sh.clear();
  sh.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  sh.getRange(1, 1, 1, rows[0].length).setFontWeight('bold');
  sh.setFrozenRows(1);
  for (var c = 1; c <= rows[0].length; c++) sh.autoResizeColumn(c);
}

function buildTabelPerubahanPoin_(ss) {
  var rows = [['Ronde', 'Pilihan', '+/- Energi', '+/- Uang', '+/- Mental', 'Catatan']];
  var order = ROUNDS_F1.concat(ROUNDS_F2, ROUNDS_F3);
  order.forEach(function (rd) {
    ['A', 'B'].forEach(function (p) {
      var d = DELTAS[rd + '|' + p] || ['', '', ''];
      var note = (rd === 'F2.4' && p === 'A') ? 'Mental net +10 (-5 lalu +15)' :
                 (rd === 'F2.5' && p === 'A') ? 'Biaya AWAL taruhan; payoff opsional (lihat Panduan)' : '';
      rows.push([rd, p, d[0], d[1], d[2], note]);
    });
  });
  Object.keys(CHAOS_DELTAS).forEach(function (c) {
    var d = CHAOS_DELTAS[c];
    var on = (CONFIG.chaosPlayed || []).indexOf(c) >= 0;
    rows.push([c, '(semua)', d[0], d[1], d[2], 'Kartu Chaos — ' + (on ? 'DIPAKAI' : 'tidak dipakai')]);
  });
  writeTab_(ss, TAB_TABEL, rows);
}

function ensureMenu_() {
  SpreadsheetApp.getUi()
    .createMenu('LEAP 2036')
    .addItem('Hitung ulang skor', 'recompute')
    .addItem('Ekspor CSV', 'exportCsv')
    .addItem('Cek kebersihan data', 'dataAudit')
    .addToUi();
}

function onOpen() { ensureMenu_(); }

function toast_(msg) {
  try { SpreadsheetApp.getActive().toast(msg, 'LEAP 2036', 8); } catch (e) { Logger.log(msg); }
}

function ymd_() {
  var d = new Date();
  function p(n) { return n < 10 ? '0' + n : '' + n; }
  return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate());
}
