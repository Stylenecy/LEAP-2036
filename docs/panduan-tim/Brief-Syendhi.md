# 💻 ASISTEN BRIEF — SYENDHI RESWARA S.
> **Catatan untuk AI**: File ini bisa kamu convert ke Word/Google Docs. Copy paste markdown ini ke ChatGPT/Claude/Gemini dan minta: *"Convert markdown berikut ke Google Docs format dengan styling rapi"*.

---

## 🎯 SIAPA KAMU DI WORKSHOP INI

**Nama:** Syendhi Reswara S. (Informatika)
**Peran:** Co-Lead Fase 2 (Krisis) + Operator Dashboard Skor + Backup Teknis
**Status:** Asisten utama Dex untuk sisi teknis workshop LEAP 2036

---

## 🧠 KONTEKS WORKSHOP (BACA DULU)

### Apa Workshop-nya?
**LEAP 2036 — Workshop Simulasi Hidup 10 Tahun: Keputusanmu Hari Ini, Hidupmu 2036**

Workshop softskill untuk siswa SMA Kelas 11–12 (peserta KKN STEM 2026 fase Agustus). Durasi ~3 jam per service day (konstrain LPPM). Konsep: siswa "menjalani" 10 tahun ke depan (2026–2036) melalui sistem kartu keputusan. Setiap keputusan mengubah 3 sumber daya: **Energi**, **Kapital (Uang/Waktu)**, **Kesehatan Mental**. Pelaksanaan: skenario **2+3** (2 hari Sekolah A + 3 hari Sekolah B).

### Filosofi
Workshop ini experiential — siswa **mengalami** konsekuensi keputusan via simulasi. Tech kita bukan main feature, tapi **enabler** supaya simulasi terasa real dan visual.

### Mengapa Informatika Penting?
Tanpa sisi teknis yang solid, simulasi terasa garing. Dashboard skor live di proyektor = "papan bursa" yang bikin suasana intens. Kamu yang pegang ini.

---

## 📋 TUGAS KAMU SECARA SPESIFIK

### Saat Workshop (Hari-H di SMA)

| Segmen | Durasi | Apa yang Kamu Lakukan |
|--------|--------|----------------------|
| **Operator Dashboard Skor** | Sepanjang workshop | Update skor siswa real-time di Google Sheets yang di-share screen ke proyektor. Setiap pilihan siswa → input ke sheets → otomatis update visualisasi. |
| **Co-Lead Fase 2 (Krisis)** | ~40–50 menit | Bantu Benediktus pandu Fase 2 (waktu per hari cuma ~3 jam, jadi dipadatkan). Kamu fokus ke skenario teknologi/karier (PHK karena AI, pivot karier, dst). Benediktus fokus ke skenario kesehatan mental. |
| **Backup Teknis** | Sepanjang workshop | Pastikan proyektor, audio, koneksi internet semua running. Kalau ada issue, kamu yang fix cepat. |

### Pre-Workshop (Yang Kamu Siapkan Sebelum Hari-H)

- [ ] **Setup sistem data (otomatis)** — paste script `leap2036-build.gs` → Run → test 1 kelas dummy. Detail di §SETUP SISTEM DATA di bawah.
- [ ] **Test alur teknis di hari-H** — sebelum siswa masuk, test proyektor + screen share + input data.
- [ ] **5–7 skenario teknologi/karier untuk Fase 2** — basisnya di `docs/workshop/LEAP-2036_Modular_v2.md` §Fase2. Adjust kalau perlu.

---

## 🛠 SETUP SISTEM DATA — OTOMATIS (GAUSAH NGODING MANUAL)

**🗑️ STOP — jangan bikin Sheet manual.** Sistem scoring udah otomatis lewat Apps Script. Kamu tinggal:

1. Baca **`PANDUAN-SISTEM-DATA.md`** dulu (5 menit) — pahamin alurnya.
2. Buka `sheets.new` (login akun kelompok) → Extensions → Apps Script.
3. Paste seluruh isi **`leap2036-build.gs`** → Run → pilih `setup` → Allow.
4. Selesai. Dapet: Google Form + Sheet (3 tab: Tabel Perubahan Poin, Skor Siswa, EKSPOR) + menu "LEAP 2036".
5. Test 1 kelas dummy: isi Form beberapa ronde → menu LEAP 2036 → **Hitung ulang skor** → cek Profil 2036 → **Ekspor CSV**. Kalau CSV jadi = beres ✅.

> Link file: `github.com/Stylenecy/LEAP-2036/blob/main/docs/sistem-data/` — ambil `leap2036-build.gs` + `PANDUAN-SISTEM-DATA.md`.

**Yang perlu kamu konfigurasi di script** (blok `CONFIG` paling atas):
- `prefix` → `'A-'` untuk Sekolah A, `'B-'` untuk Sekolah B
- `studentCount` → jumlah siswa di kelas itu
- `chaosPlayed` → isi kalau Kartu Chaos dipake, mis. `['C.2','C.3']`

**Saat workshop:** siswa isi Google Form (QR di tiap meja) → skor otomatis ke Sheet. Layar proyektor tampilin Sheet biar siswa lihat skor mereka real-time. Selesai acara → Ekspor CSV → kirim ke DPL.

---

## 📚 YANG HARUS KAMU PELAJARI

### Wajib (15–30 menit total)
1. **Panduan sistem data** — baca `PANDUAN-SISTEM-DATA.md` biar paham alur Form → Sheet → CSV.
2. **Screen mirroring ke proyektor** — pastiin laptop kamu bisa connect HDMI/VGA ke proyektor SMA.

### Bonus (untuk Fase 2 — skenario teknologi)
- Riset cepat: "Pekerjaan apa yang AI udah replace di 2026?" (cari 3–5 contoh nyata)
- Riset cepat: "Skill apa yang masih anti-replaceable?" (cari 3–5 contoh)

> Prompt AI: *"List 5 pekerjaan yang sudah/sedang di-replace oleh AI di tahun 2026, dan 5 skill manusia yang masih sulit di-otomatisasi. Bahasa simple, contoh konkret, target audience siswa SMA Indonesia."*

---

## 🚨 KALAU DEX NGGAK ADA / TELAT / SAKIT

1. **Buka dokumen ini + `docs/workshop/Proposal-LEAP-2036-v4.4.md`.**
2. **Untuk technical issue saat hari-H:** kamu paling capable. Jangan tunggu Dex.
3. **Untuk konten/skenario yang nggak yakin:** tanya AI dengan prompt:
   > *"Saya akan co-fasilitasi workshop simulasi hidup 10 tahun untuk siswa SMA. Saya pegang Fase 2 (Krisis, ~40-50 menit) — skenario teknologi & karier. Bantu saya: [pertanyaan kamu]."*
4. **Backup contact:** Benediktus (co-lead Fase 2) untuk skenario kesehatan.

---

## 💬 CONTOH SCRIPT (HARI-H, FASE 2 OPENING)

> *"Oke sekarang kita lompat ke 2029. Kalian sudah 3 tahun lewat fase pendidikan. Ada yang lagi kerja, ada yang masih kuliah, ada yang lagi gap year. Tapi di fase ini, badai pertama datang. Dunia berubah lebih cepat dari yang kalian sangka. Ada yang kehilangan kerjaan karena AI. Ada yang burnout di pekerjaan impian. Mari kita lihat siapa yang bisa bertahan..."*

---

## ✅ CHECKLIST PRE-WORKSHOP

- [ ] Baca `docs/sistem-data/PANDUAN-SISTEM-DATA.md` (5 menit)
- [ ] Baca `docs/workshop/LEAP-2036_Modular_v2.md` — section Fase 2 + Bank Skenario (15 menit)
- [ ] Setup script `leap2036-build.gs` di akun kelompok — paste → Run → test 1 kelas dummy (30 menit)
- [ ] Test proyektor + screen share + input data dummy di laptop (10 menit)
- [ ] H-1: koordinasi dengan Dex/Benediktus + cek alat di SMA (logistic)

**Total persiapan minimum: ~1 jam.**

---

## 📌 KONTAK ALAT YANG PERLU DI-CHECK DI SMA (H-1)

- Proyektor + kabel (HDMI/VGA)
- Sound system (kalau perlu mic)
- Wifi / hotspot
- Listrik (colokan dekat operator station)
- Layar yang bisa dilihat dari semua siswa

---

*Dokumen ini dibuat: 24 Mei 2026 | Revisi: 18 Juni 2026 | Penyusun: Dex Bennett*
*Kalau ada yang nggak jelas, kontak Dex langsung atau cek halaman "Tugas Tim" di kknstem.vercel.app*
