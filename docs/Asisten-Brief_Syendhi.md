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

Workshop softskill untuk siswa SMA Kelas 11–12 (peserta KKN STEM 2026 fase Agustus). Durasi 4–6 jam per service day. Konsep: siswa "menjalani" 10 tahun ke depan (2026–2036) melalui sistem kartu keputusan. Setiap keputusan mengubah 3 sumber daya: **Energi**, **Kapital (Uang/Waktu)**, **Kesehatan Mental**.

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
| **Co-Lead Fase 2 (Krisis)** | 75 menit | Bantu Benediktus pandu Fase 2. Kamu fokus ke skenario teknologi/karier (PHK karena AI, pivot karier, dst). Benediktus fokus ke skenario kesehatan mental. |
| **Backup Teknis** | Sepanjang workshop | Pastikan proyektor, audio, koneksi internet semua running. Kalau ada issue, kamu yang fix cepat. |

### Pre-Workshop (Yang Kamu Siapkan Sebelum Hari-H)

- [ ] **Setup Google Sheets template scoring system** — template ada di section "Setup Google Sheets" di bawah.
- [ ] **Test alur teknis di hari-H** — sebelum siswa masuk, test proyektor + screen share + input data.
- [ ] **5–7 skenario teknologi/karier untuk Fase 2** — basisnya di `docs/Skenario-Starter-Pack.md`. Adjust kalau perlu.

---

## 🛠 SETUP GOOGLE SHEETS — DASHBOARD SKOR LIVE

### Struktur Sheet (Minimum Viable)

**Sheet 1: "Skor Siswa"**

| No | Nama Peserta | Energi | Kapital | Kesehatan Mental | Total |
|----|-------------|--------|---------|------------------|-------|
| 1  | Siswa A     | 100    | 100     | 100              | 300   |
| 2  | Siswa B     | 100    | 100     | 100              | 300   |
| ...| ...         | ...    | ...     | ...              | ...   |

Formula `Total` cell: `=SUM(C2:E2)`

**Sheet 2: "Leaderboard Live"** (optional tapi keren)
Pakai chart bar dari Sheet 1, sorted by Total. Setiap update di Sheet 1 otomatis update chart.

### Cara Kerja Saat Workshop
1. Sebelum mulai: input nama semua siswa di Sheet 1, set semua skor ke 100.
2. Setelah setiap skenario, scan tangan siswa yang pilih opsi A vs B.
3. Update skor mereka di Sheets — perubahan otomatis muncul di chart (Sheet 2).
4. Proyektor harus tampilin Sheet 2 (Leaderboard) supaya siswa lihat skor real-time.

### Prompt untuk AI Bantu Bikin Sheet
> *"Bantu saya buat Google Sheets template untuk workshop simulasi. Ada 30 siswa, 3 metrik per siswa (Energi, Kapital, Kesehatan Mental), masing-masing dimulai 100 poin. Saya butuh: (1) tabel input data, (2) chart leaderboard otomatis sorted by total skor, (3) formula yang gampang di-update. Kasih tau saya cell-by-cell apa yang harus di-input."*

---

## 📚 YANG HARUS KAMU PELAJARI

### Wajib (15–30 menit total)
1. **Google Sheets basic charting** — cara bikin bar chart yang auto-update dari data range.
2. **Screen mirroring ke proyektor** — make sure laptop kamu bisa connect HDMI/VGA ke proyektor SMA.

### Bonus (untuk Fase 2 — skenario teknologi)
- Riset cepat: "Pekerjaan apa yang AI udah replace di 2026?" (cari 3–5 contoh nyata)
- Riset cepat: "Skill apa yang masih anti-replaceable?" (cari 3–5 contoh)

> Prompt AI: *"List 5 pekerjaan yang sudah/sedang di-replace oleh AI di tahun 2026, dan 5 skill manusia yang masih sulit di-otomatisasi. Bahasa simple, contoh konkret, target audience siswa SMA Indonesia."*

---

## 🚨 KALAU DEX NGGAK ADA / TELAT / SAKIT

1. **Buka dokumen ini + `docs/Proposal-Workshop-SMA-Kelompok2.md`.**
2. **Untuk technical issue saat hari-H:** kamu paling capable. Jangan tunggu Dex.
3. **Untuk konten/skenario yang nggak yakin:** tanya AI dengan prompt:
   > *"Saya akan co-fasilitasi workshop simulasi hidup 10 tahun untuk siswa SMA. Saya pegang Fase 2 (Krisis, 75 menit) — skenario teknologi & karier. Bantu saya: [pertanyaan kamu]."*
4. **Backup contact:** Benediktus (co-lead Fase 2) untuk skenario kesehatan.

---

## 💬 CONTOH SCRIPT (HARI-H, FASE 2 OPENING)

> *"Oke sekarang kita lompat ke 2029. Kalian sudah 3 tahun lewat fase pendidikan. Ada yang lagi kerja, ada yang masih kuliah, ada yang lagi gap year. Tapi di fase ini, badai pertama datang. Dunia berubah lebih cepat dari yang kalian sangka. Ada yang kehilangan kerjaan karena AI. Ada yang burnout di pekerjaan impian. Mari kita lihat siapa yang bisa bertahan..."*

---

## ✅ CHECKLIST PRE-WORKSHOP

- [ ] Baca `docs/Proposal-Workshop-SMA-Kelompok2.md` (10 menit)
- [ ] Baca `docs/Skenario-Starter-Pack.md` — section Fase 2 (15 menit)
- [ ] Setup template Google Sheets (30 menit)
- [ ] Test di laptop sendiri: input data dummy + render chart (10 menit)
- [ ] H-1: koordinasi dengan Dex/Benediktus + cek alat di SMA (logistic)

**Total persiapan minimum: ~1 jam 15 menit.**

---

## 📌 KONTAK ALAT YANG PERLU DI-CHECK DI SMA (H-1)

- Proyektor + kabel (HDMI/VGA)
- Sound system (kalau perlu mic)
- Wifi / hotspot
- Listrik (colokan dekat operator station)
- Layar yang bisa dilihat dari semua siswa

---

*Dokumen ini dibuat: 24 Mei 2026 | Penyusun: Dex Bennett*
*Kalau ada yang nggak jelas, kontak Dex langsung atau cek halaman "Tugas Tim" di kknstem.vercel.app*
