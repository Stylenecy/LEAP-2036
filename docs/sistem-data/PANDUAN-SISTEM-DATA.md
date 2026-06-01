# Panduan Sistem Data Per-Siswa — LEAP 2036

> Untuk **operator skor (Syendhi)** + backup Dex. Tujuan: tiap siswa punya skor akhir **Energi · Uang · Mental** + **Profil 2036**, bisa diekspor **CSV** untuk DPL/laporan/skripsi (permintaan DPL).
> Sumber desain: `docs/workshop/LEAP-2036_Modular_v2.md` §3. Angka skor: Bank Skenario (`docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` §C). 3 file di folder ini:
> - **`leap2036-build.gs`** — script: bikin Form + Sheet + hitung skor + CSV otomatis.
> - **`kartu-skor.html`** — kartu kertas (fallback kalau sinyal mati).
> - **`PANDUAN-SISTEM-DATA.md`** — file ini.

---

## 0. Inti dalam 30 detik
- Tiap siswa punya **kode unik** (mis. `A-01`). Tiap ronde, dia **kunci pilihan A/B diam-diam DULU** (sebelum diskusi grup) → isi Google Form.
- Google Sheet (dibangun otomatis oleh script) **menjumlahkan** pilihan tiap kode → skor Energi/Uang/Mental (dijepit 0–200 tiap ronde) → **Profil 2036** → **CSV**.
- Sinyal mati? Pakai **Kartu Skor kertas**, input ke Form/Sheet setelah acara. Hasil identik.
- **No juara.** Skor & profil **PRIVAT** (dibisikkan/di kartu), yang tampil ke kelas cuma "papan keragaman" (sebaran), bukan peringkat.

---

## 1. Setup digital (1× saja, ~5 menit) — Cara 1 (utama)

1. Buka **sheets.new** (login akun KKN/kelompok). Sheet kosong muncul.
2. Menu **Extensions → Apps Script**. Hapus kode contoh, **paste seluruh isi `leap2036-build.gs`**.
3. (Opsional) Edit blok **`CONFIG`** di atas file:
   - `prefix` → awalan kode, mis. `'A-'` (Sekolah A). Sekolah B pakai `'B-'`, dst.
   - `studentCount` → jumlah siswa di kelas itu (buat daftar dropdown kode).
   - `chaosPlayed` → isi kalau Kartu Chaos dimainkan, mis. `['C.2','C.3']`. Default kosong.
4. **Run → pilih fungsi `setup` → Run.** Izinkan akses (klik akun → Advanced → Allow). Wajar, ini script-mu sendiri.
5. Buka **Execution log** (bawah). Ada **LINK FORM** → itu yang dibagikan ke siswa (bikin QR dari link ini, tempel di tiap meja).
6. Balik ke Sheet → muncul menu **"LEAP 2036"** di atas + tab `Tabel Perubahan Poin`, `Skor Siswa`, `EKSPOR`.

> **Bikin QR:** tempel LINK FORM ke qr-code-generator manapun (atau di Google: ketik link → screenshot QR). Satu QR dipakai semua ronde.

---

## 2. Saat workshop jalan

- **Urutan WAJIB tiap ronde** (biar data tidak tercemar): fasilitator umumkan **"Pilih & KUNCI dulu diam-diam"** → siswa isi Form (Kode → Ronde → A/B) → **baru** diskusi grup. Kalau siswa isi setelah diskusi, banyak yang nyontek pilihan grup → sinyal individu yang diminta DPL hilang.
- Siswa isi <15 detik: pilih **Kode** (dropdown), pilih **Ronde** (mis. `F2.3`), pilih **A/B**, Submit. Bisa langsung isi lagi ronde berikutnya.
- **Hitung skor kapan saja:** menu **LEAP 2036 → Hitung ulang skor**. Tab `Skor Siswa` & `EKSPOR` terisi.
- **Cek data bersih:** menu **LEAP 2036 → Cek kebersihan data** → laporkan duplikat (kode submit dobel 1 ronde) & kode tak dikenal. Hapus baris duplikat di tab respons kalau ada.

---

## 3. Ekspor CSV untuk DPL

- Cara cepat: menu **LEAP 2036 → Ekspor CSV** → file `LEAP2036-skor-YYYYMMDD.csv` dibuat di Drive (link di Execution log).
- Atau manual: buka tab **EKSPOR → File → Download → Comma-separated values (.csv)**.
- Format kolom: `Kode Siswa, Energi, Uang, Mental, TotalF1, Profil`. `TotalF1` ikut diekspor supaya profil **Mekar Belakangan** bisa diverifikasi.
- **Jangan** tampilkan/ranking CSV ke siswa — ini khusus DPL/laporan.

---

## 4. Fallback kertas (Cara 3) — kalau sinyal mati

1. Cetak **`kartu-skor.html`** (buka di browser → atur jumlah → Print, ±2 kartu/A4). **Uji-cetak 1 lembar dulu**, pastikan kolom tidak terpotong.
2. Tiap siswa pegang 1 kartu, tulis kode, tiap ronde **lingkari A/B diam-diam** lalu hitung +/- tiap baterai (fasilitator umumkan angkanya). Ingat: **tidak boleh < 0 atau > 200** — kalau lewat, tulis 0/200, lanjut dari situ.
3. Setelah acara (ada sinyal): operator **input tiap kartu lewat Form** (Kode → Ronde → A/B, ulang per ronde) → menu **Hitung ulang** → CSV. Hasil **cocok** dengan kartu karena rumus pakai jepit-per-ronde yang sama.
4. Theana/PDD **fotokan tiap kartu** dulu = backup mentah untuk DPL.

> **Katup aman (waktu mepet parah):** minimal catat **3 ronde penentu** `F1.5, F2.5, F3.2` + skor akhir + Total Fase 1 tiap siswa. Data tetap dapat, cuma lebih kasar.

---

## 5. Profil 2036 — 7 tipe (cek manual <20 detik, identik dengan rumus Sheet)

Ambang: **TINGGI ≥115 · SEDANG 85–114 · RENDAH <85.** Cek dari atas, berhenti di **baris pertama yang cocok**. (E=Energi, U=Uang, M=Mental)

1. **Pelari Tanpa Rem** — Energi TINGGI **DAN** Uang TINGGI **DAN** Mental RENDAH. *(dicek DULU — kasus paling spesifik)*
2. **Sukses-tapi-Tumbang** — Uang TINGGI **DAN** (Energi RENDAH **ATAU** Mental RENDAH).
3. **Bijak yang Tenang** — Mental TINGGI **DAN** Energi <115 **DAN** Uang <115.
4. **Mekar Belakangan** — (Total akhir − Total selesai Fase 1) **≥25** **DAN** Total selesai Fase 1 **<290**.
5. **Pemberontak Kreatif** — selisih (tertinggi−terendah) **≥35** **DAN** min. satu poin **≥115** **DAN** min. satu poin **<85** *(tiga-tiganya wajib)*.
6. **Pembangun Seimbang** — ketiga poin **≥85** **DAN** selisih <35.
7. **Penjelajah Reflektif** — sisanya (tidak cocok di atas).

> **Jebakan baris 5:** "selisih ≥35" saja TIDAK cukup. Mis. E=110,U=110,M=70 → selisih 40 tapi tidak ada yang ≥115 → **bukan** Pemberontak Kreatif (jatuh ke bawah). Cek **ketiga** syarat.

Nama kanonik 7 profil (pakai persis ini di sticker/papan/CSV):
Sukses-tapi-Tumbang · Pelari Tanpa Rem · Bijak yang Tenang · Mekar Belakangan · Pemberontak Kreatif · Pembangun Seimbang · Penjelajah Reflektif.

---

## 6. Catatan khusus (jangan kelewat)

- **F2.4 Pilihan A** Mental: di Bank tertulis "−5 sekarang, lalu +15". Yang dipakai = **NET +10** (sudah di-set di script). Jangan dipecah dua.
- **F2.5 Pilihan A = TARUHAN.** Angka di script (`E−15/U−20/M−5`) = **biaya awal** saja. *Payoff* (Berhasil → Uang **+20**) diselesaikan di awal Fase 3 ("Resolusi Taruhan F2.5"). Sistem ini **belum** otomatis menambah payoff (karena hasil Berhasil/Gagal tergantung kartu yang dicabut tiap anak). Kalau mau presisi: untuk siswa yang **Berhasil**, tambah manual +20 Uang (atau abaikan — dampak kecil ke profil). Catat keputusan ini biar konsisten satu kelas.
- **Kartu Chaos** (C.1/C.2/C.3): kalau dimainkan, isi di `CONFIG.chaosPlayed`. Berlaku **sama ke semua siswa** (otomatis ditambah ke tiap kode). Jangan biarkan chaos masuk ke papan kelompok tapi tidak ke skor pribadi (atau sebaliknya) — bikin data ambigu.
- **Jepit 0–200 per ronde**, bukan sekali di akhir. Script sudah benar (saldo berjalan). Ini yang bikin "digital = kertas" selalu setuju.
- **Privasi (aturan reveal aman):** skor & profil pribadi diberikan **privat** (dibisikkan/di kartu/HP sendiri), tidak diumumkan, tidak diurutkan. Ke kelas cuma **papan keragaman** (sebaran per profil). Headline: *"7 jalur. 0 juara. Semua nyata."* Profil "berat" (Sukses-tapi-Tumbang, Pelari Tanpa Rem) wajib dijelaskan Maria/Benediktus sebagai **cermin pola, bukan vonis**.

---

## 7. Checklist H-1 (operator)
- [ ] Script `setup` sudah dijalankan; Form + 3 tab ada.
- [ ] `CONFIG` benar (prefix, jumlah siswa per kelas). 1 Sheet per kelas kalau prefix beda.
- [ ] QR Form sudah dicetak/ditempel tiap meja.
- [ ] Uji 1 kelas dummy: isi beberapa ronde → Hitung ulang → cek skor & profil masuk akal → Ekspor CSV jalan.
- [ ] Kartu kertas (`kartu-skor.html`) sudah diuji-cetak (kolom rapi) sebagai cadangan.
- [ ] Tim sepakat keputusan F2.5 payoff & chaos mana yang dipakai.
