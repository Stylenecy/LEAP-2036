# LEAP 2036 — Rundown Modular v2 (versi 3 jam/hari)

> **Workshop Simulasi Hidup 10 Tahun — KKN STEM 2026 Kelompok 2 (UKDW × Hong Kong PolyU).**
> **Versi 2.0 · 31 Mei 2026.** Dirombak dari versi 4–5 jam → **3 jam/hari** (09.00–11.30/12.00), bahasa polos, data per-siswa untuk DPL, anti-gagal.
> Peserta: SMA kelas 11–12 (Agustus = tahun ajaran baru, yang baru naik kelas). Filosofi tetap: **tiap pola hidup punya untung-rugi, tidak ada "hidup terbaik" → NO JUARA.**

## Apa yang baru di v2
- ⏰ **Tiap hari maks 3 jam** (~150' isi + buffer). Tiap modul sudah dihitung ≤180 menit.
- 🗣️ **Bahasa polos, tanpa jargon.** 3 poin = **Energi · Uang · Mental** ("3 baterai hidup"). Ada **Kamus Istilah** (Bagian 1).
- 📊 **Data per-siswa** (permintaan DPL): tiap anak punya skor akhir Energi/Uang/Mental + Profil 2036, bisa diekspor **CSV**. Cara digital (Google Form/Sheet) + cara kertas (Kartu Skor Pribadi). Detail Bagian 1 §3.
- 🧯 **Anti-gagal:** tiap blok punya **KATUP AMAN** (kalau waktu mepet, boleh dipangkas) + backup tanpa-internet.
- 🧩 **Modular:** 5 modul harian berdiri sendiri → dirakit ke config mana pun.

## Cara baca dokumen ini
- **Bagian 1** = Sistem Skor + Data + Kamus Istilah (baca dulu — fondasi semua).
- **Bagian 2** = Fitur (Values, DISC, Goal Hidup, 7 Profil, Surat 2036, Apresiasi) + timebox.
- **Bagian 3** = 5 Modul harian (rundown menit-per-menit): Materi · Fase 1 · Fase 2 · Fase 3 · Fun Day.
- **Assembly** (tepat di bawah) = cara menyusun modul jadi 2 skenario LPPM.

---

## Assembly — Susun Modul jadi Skenario LPPM

LPPM minta **2 skenario** disiapkan. Tinggal pasang modul:

### Config A — 5 Hari di 1 SMA (1 kelas yang sama)
| Hari | Modul | Inti |
|------|-------|------|
| Hari 1 | **Materi** | kenalan + Values + DISC + 3-Lapis-Diri + bentuk kelompok (Goal Hidup) + briefing + 1 pemanasan |
| Hari 2 | **Fase 1** | 4 keputusan Fondasi (2026–2028) + refleksi |
| Hari 3 | **Fase 2** | krisis (2029–2032) + kartu kejutan (opsional) + keamanan emosi |
| Hari 4 | **Fase 3** | panen (2033–2036) + hitung skor + reveal Profil 2036 + mulai Surat |
| Hari 5 | **Fun Day** | selesai Surat + games + galeri + Surprise Apresiasi + sebaran profil + foto |
> Sesuai saran APL (Hari 1 Materi · Hari 2–4 per fase · Hari 5 Fun Day). Data per-siswa dikumpulkan Hari 2–4, final Hari 4.

### Config B — 2 SMA (PRIORITAS per DPL): Sekolah A 2 hari + Sekolah B 2 hari + 1 Fun Day
Tiap sekolah = **kelas berbeda** → tiap sekolah jalani arc lengkapnya sendiri dalam jatah harinya. Karena 2 hari tidak muat 5 modul, **gabungkan modul pakai KATUP AMAN** (versi tercepat tiap bagian).

**Sekolah A (2 hari):**
| Hari | Gabungan modul | Cara padatkan |
|------|----------------|---------------|
| A-1 | **Materi-inti + Fase 1 (3 keputusan)** | Materi pakai versi tercepat tiap fitur (katup aman); Fase 1 ambil 3 skenario terkuat (F1.1, F1.3, F1.5) |
| A-2 | **Fase 2 (3 keputusan) + Fase 3 (1 skenario + reveal + Surat kilat)** | gabung; tutup dengan apresiasi singkat (mini-fun) sebagai ganti Fun Day penuh |

**Sekolah B (2 hari + 1 Fun Day = 3 hari):**
| Hari | Modul |
|------|-------|
| B-1 | **Materi + Fase 1** |
| B-2 | **Fase 2 + Fase 3** |
| B-3 | **Fun Day** (penuh) |

> ⚠️ **Jujur soal trade-off:** Sekolah A (2 hari) = pengalaman INTI yang utuh tapi lebih tipis dari 5 hari. Komunikasikan ke sekolah: *"2 hari = inti esensial, bukan setengah jadi."* Data per-siswa TETAP jalan di semua config (sumbernya pilihan rahasia tiap ronde).
> **Varian DPL lain (tentatif):** 1 SMA 4 hari service + funday; 1 SMA 4 kelas berbeda. Semua bisa dirakit dari 5 modul ini.


---

# BAGIAN 1 — SISTEM SKOR, DATA & KAMUS ISTILAH

# SISTEM SKOR PLAIN-LANGUAGE + PENANGKAPAN DATA PER-SISWA
## LEAP 2036 — versi padat 3 jam/hari (KKN STEM 2026, Kelompok 2)

> Sumber skenario & ambang profil: `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) (Bank Skenario F1–F3 §C; aturan klasifikasi §B.2; rumus IFS §B.3; aturan clamp §B.0). Dokumen ini hanya menerjemahkan mekanik itu ke bahasa polos + menambah desain data per-siswa.
>
> **Catatan istilah operator:** istilah rumus Sheet (IFS, SUMIF, SUMIFS, VLOOKUP, COUNTIFS, "kolom bantu") yang muncul di §3 adalah **KHUSUS operator skor (Syendhi)** — **tidak pernah diucapkan ke siswa.** Ke siswa selalu pakai bahasa polos di §1.

---

## 1. PENJELASAN 3 POIN (bahasa super polos + analogi)

Selama workshop, tiap siswa punya **3 "baterai hidup"**. Semua mulai dari **100**. Tiap kali kamu mengambil keputusan, ketiga baterai ini bisa **naik atau turun**.

| Poin | Bahasa polos ke siswa | Analogi | Naik kalau... | Turun kalau... |
|------|----------------------|---------|---------------|----------------|
| **ENERGI** | "Tenaga & waktu kamu" | Baterai HP | istirahat cukup, hidup seimbang | begadang, kerja terlalu keras, capek terus |
| **UANG** | "Isi dompet & tabungan" | Saldo rekening | menabung, dapat penghasilan, hemat | boros, ambil risiko mahal, keluar biaya besar |
| **MENTAL** | "Hati & ketenangan pikiran" | Suasana hati | bahagia, tenang, sesuai hati nurani | stres, tertekan, melakukan hal yang tidak kamu suka |

**Cara kerja (diucapkan fasilitator, 60 detik):**

> "Tiap orang mulai dengan 3 baterai isi 100. Tiap keputusan = ada yang terisi, ada yang berkurang. **Tidak ada pilihan yang bikin semua baterai penuh** — selalu ada yang ditukar. Itulah hidup: tiap pilihan ada untung, ada ruginya."

**Aturan paku mati (WAJIB diumumkan, bahasa polos):**

> "Baterai kamu **tidak akan pernah turun di bawah 0**, dan **tidak akan pernah naik di atas 200**. Jadi sejelek apa pun keputusanmu, di layar tidak akan muncul angka minus. Tenang saja."

- Mulai: **100 / 100 / 100**
- Tiap keputusan A/B: poin **bertambah/berkurang** (angka pastinya ada di Bank Skenario, fasilitator yang baca)
- Batas bawah **0**, batas atas **200** — **dicek tiap ronde**, bukan hanya di akhir (lihat aturan penting di §3A Langkah 3)

**KENAPA tidak boleh minus (alasan dijelaskan ke tim, bukan ke siswa):** supaya tidak ada siswa yang lihat "Mental −40" di layar (tidak nyaman secara emosi), DAN supaya hitungan profil akhir tetap akurat.

---

## 2. KAMUS ISTILAH MINI — terjemahan semua jargon

Cetak/tempel ini di meja operator skor (Syendhi). **Istilah kiri = DILARANG diucapkan ke siswa.** Pakai kolom kanan. Bagian bawah tabel = istilah khusus operator (boleh dipakai antar-tim, tetap **tidak** ke siswa).

| Jargon (jangan dipakai ke siswa) | Bahasa polos yang dipakai | Penjelasan 1 kalimat |
|----------------------------------|---------------------------|----------------------|
| **delta** | **"perubahan poin (+/−)"** | Angka yang menambah/mengurangi baterai. Contoh: "Energi −10" = tenaga berkurang 10. |
| **floor** | **"batas bawah 0"** | Poin tidak bisa turun di bawah 0. |
| **clamp** | **"poin dijepit 0–200"** | Poin tidak bisa kurang dari 0 atau lebih dari 200. Kalau hitungan keluar dari situ, tulis 0 atau 200. |
| **cap / ceiling** | **"batas atas 200"** | Poin tidak bisa naik di atas 200. (Untuk batas jumlah anggota grup, JANGAN pakai kata "cap" — pakai **"maksimal 5 orang/grup"**.) |
| **silent vote** | **"pilih diam-diam (rahasia)"** | Tiap siswa pilih A/B sendiri tanpa kasih tahu teman dulu — ini yang jadi data pribadi. |
| **hybrid** | **"alur biasa kita (6 langkah)"** | Urutan tetap tiap skenario: dengar cerita → pilih rahasia → diskusi grup → grup putuskan → poin di-update → hasil diceritakan. |
| **net** | **"untung-rugi bersih"** | Total naik-turun satu pilihan. Operator saja yang lihat; tidak diucapkan. |
| **leaderboard** | **(JANGAN ADA)** | Papan peringkat. Kita TIDAK pakai ini. Yang ada cuma "papan keragaman" (sebaran, bukan juara). |
| **diversity dashboard** | **"papan keragaman"** | Papan yang menunjukkan macam-macam jalur hidup — bukan siapa menang. |
| **profil** | **"Profil 2036 / jadi orang seperti apa"** | Hasil akhir: gambaran kamu jadi orang seperti apa di 2036. Bukan nilai, bukan rapor. |
| **Layer / Layer 3** | **"Cara 1 / Cara 2 / Cara 3"** | Tingkat cara mencatat. Cara 1 = Form HP · Cara 2 = laptop+proyektor · Cara 3 = kertas. (Buang kata "Layer".) |
| **carry-over** | **"skor dibawa ke fase berikutnya"** | Skor akhir satu fase jadi skor awal fase berikut. |
| **pivot (di Sheet)** | **"dirangkum/dihitung"** | mis. berapa siswa per profil, rata-rata tiap poin. (Khusus operator.) |
| **QR** | **"kode QR (discan kamera HP)"** | Gambar kotak yang discan HP untuk buka link Form. |

**Khusus operator (boleh antar-tim, TIDAK ke siswa):** `IFS`, `SUMIF/SUMIFS`, `VLOOKUP`, `COUNTIFS`, "kolom bantu", "Tabel Perubahan Poin" (dulu disebut "Tabel Delta" — **pakai nama Indonesia ini**), "saldo berjalan".

**Rumus jepit 0–200 untuk operator (kalau hitung manual):**
> Hitung dulu. Kalau hasilnya **di bawah 0 → tulis 0**. Kalau **di atas 200 → tulis 200**. Kalau di antaranya → tulis apa adanya. **Jepit ini dilakukan SETIAP RONDE** (lihat §3A Langkah 3), bukan sekali di akhir.

---

## 2b. NAMA KANONIK 7 PROFIL 2036 (pakai persis ini di mana-mana)

Satu set nama baku — dipakai identik di **rumus IFS, papan keragaman, kartu cek manual, dan kolom CSV**, supaya operator tidak salah tempel sticker / salah baca data.

| # | Nama Inggris (internal) | **Nama Indonesia KANONIK (untuk CSV & papan)** |
|---|-------------------------|-----------------------------------------------|
| 1 | Burnout Achiever | **Sukses-tapi-Tumbang** |
| 2 | Hustler Maverick | **Pelari Tanpa Rem** |
| 3 | Steady Sage | **Bijak yang Tenang** |
| 4 | Late Bloomer | **Mekar Belakangan** |
| 5 | Creative Rebel | **Pemberontak Kreatif** |
| 6 | Balanced Builder | **Pembangun Seimbang** |
| 7 | Reflective Wanderer | **Penjelajah Reflektif** |

---

## 3. DESAIN DATA PER-SISWA (permintaan DPL — WAJIB)

**Tujuan:** di akhir workshop, **TIAP siswa** punya: `Energi akhir`, `Uang akhir`, `Mental akhir`, dan `Profil 2036`-nya — termasuk profil **Mekar Belakangan** (butuh skor akhir Fase 1 per siswa, lihat di bawah). Semua bisa diekspor jadi **CSV** untuk DPL / laporan / skripsi.

**Sumber data per-siswa = pilihan rahasia.** Tiap ronde, tiap siswa diam-diam pilih A atau B. Pilihan itulah yang dijumlahkan jadi skor pribadi — terpisah dari skor kelompok.

> **ATURAN ANTI-DATA-TERCEMAR (WAJIB, demi permintaan DPL):** pilihan rahasia tiap siswa harus dikunci **SEBELUM diskusi grup** (Langkah 2 dari alur 6-langkah). Kalau siswa baru isi Form **setelah** grup memutuskan, banyak yang menyalin pilihan grup → skor "pribadi" jadi seragam per grup dan sinyal individu yang justru diminta DPL ("saat memilih sendirian, kamu orang seperti apa") hilang. Maka: **kunci pilihan rahasia dulu → baru diskusi.** Fasilitator umumkan tiap ronde: *"Pilih & kunci dulu diam-diam. Baru kita diskusi."*

### 3A. DIGITAL-FIRST (Cara 1) — Google Form → Google Sheet → CSV

**Langkah 1 — Tiap siswa dapat KODE UNIK.**
Bagikan di awal Hari 1 (saat perkenalan sistem skor). Format mudah: **`A-01, A-02, ...`** (A = kode sekolah/kelas, angka = nomor absen). Siswa tulis kodenya di kartu nama meja supaya tidak lupa. Kode ini dipakai **sepanjang 5 hari**.

**Langkah 2 — 1 Google Form, dipakai ulang tiap ronde.**
Form sengaja super-pendek (siswa isi <15 detik/ronde):

| Pertanyaan Form | Tipe | Isi |
|-----------------|------|-----|
| Kode Siswa | **Dropdown daftar kode** (bukan teks bebas) | mis. `A-07` — pilih dari daftar supaya tidak salah ketik |
| Ronde / Skenario | Pilihan (dropdown) | `F1.1`, `F1.2`, ... `F3.2` |
| Pilihanmu | Pilihan ganda | `A` atau `B` |

> - Satu Form saja untuk semua ronde (siswa pilih ronde dari dropdown). Submit → bisa langsung isi lagi ronde berikutnya. Tidak perlu login Google (set Form: "Kumpulkan email = TIDAK").
> - **Kode Siswa dibuat DROPDOWN** (daftar kode yang sudah ada), supaya tidak ada salah ketik `A-07` vs `A-17` → baris yatim yang tak terhitung.
> - **Kunci waktu:** Form diisi **di Langkah 2** (sebelum diskusi). Operator menandai ronde "ditutup" begitu diskusi dibuka. Form merekam jam masuk (timestamp) → jawaban yang masuk setelah diskusi dibuka boleh dibuang operator.
> - **Kode QR** (kode kotak yang discan kamera HP) berisi link Form ditempel di tiap meja kelompok.

**Langkah 3 — Google Sheet menghitung otomatis, dengan JEPIT PER RONDE (penting).**

Form otomatis mengisi tab `Jawaban` (kolom: Timestamp, Kode Siswa, Ronde, Pilihan). Buat tab kedua, **`Tabel Perubahan Poin`** (nama internal operator; dulu disebut "Tabel Delta"), berisi perubahan poin tiap ronde+pilihan (disalin dari Bank Skenario — operator isi sekali di awal):

**`Tabel Perubahan Poin`** (contoh, angka dari Bank Skenario):

| Ronde | Pilihan | +/− Energi | +/− Uang | +/− Mental | Catatan |
|-------|---------|-----------|----------|-----------|---------|
| F1.1 | A | +5 | +15 | −10 | |
| F1.1 | B | +12 | −15 | +12 | |
| F1.2 | A | −8 | +8 | −3 | |
| ... | ... | ... | ... | ... | |
| **F2.4** | **A** | (dari Bank) | (dari Bank) | **+10** | **Mental −5 lalu +15 = bersih +10. Masukkan ANGKA BERSIH +10 saja (satu baris). Dinamika "−5 dulu, lalu +15" boleh diceritakan ke siswa, tapi yang dijumlahkan = +10.** |

> **WAJIB diperhatikan operator:** sebagian skenario (mis. **F2.4 Pilihan A**) punya perubahan berurutan di Bank Skenario (Mental "−5 sekarang, lalu +15"). **Masukkan NET-nya saja (+10)** ke `Tabel Perubahan Poin` — JANGAN masukkan −5 atau +15 sendiri-sendiri, dan jangan dua baris. Salah input di sini menjalar ke skor & profil akhir tiap siswa.

> **JEPIT PER RONDE (running-clamp) — samakan dengan papan tulis & kartu kertas.**
> Bank §B.0 dan semua kartu/papan menjepit **saldo BERJALAN tiap ronde** (kalau di tengah jalan saldo menyentuh 0, dia ditahan 0, lalu naik lagi dari 0). **Jangan** menjumlah semua perubahan dulu baru menjepit sekali di akhir — hasilnya bisa BEDA dengan kartu kertas (contoh: 100 → −120 → +40. Cara berjalan: ditahan di 0 lalu naik jadi **40**. Cara jumlah-sekali: 100−120+40 = **20**. Beda 20 poin → bisa beda profil → data DPL jadi ambigu).
>
> **Cara Sheet melakukan jepit-per-ronde (khusus operator):**
> 1. Urutkan jawaban tiap siswa **menurut urutan ronde** (F1.1 → ... → F3.2).
> 2. Buat **kolom bantu** di tab `Jawaban`: untuk tiap baris, `VLOOKUP(Ronde&Pilihan)` ambil +/− Energi/Uang/Mental dari `Tabel Perubahan Poin`.
> 3. Buat **kolom saldo berjalan** per poin: tiap baris = `=MIN(200; MAX(0; saldo_baris_sebelumnya_siswa_ini + perubahan_baris_ini))`. Saldo awal tiap siswa = 100. (Pakai per-siswa terurut waktu — di Sheet bisa pakai blok per kode atau `SCAN`/akumulasi terurut.)
> 4. Skor akhir siswa = nilai **saldo berjalan di baris ronde terakhirnya** (sudah otomatis ter-jepit 0–200 tiap langkah). Tidak perlu jepit ulang di akhir.
>
> Hasilnya **identik** dengan Kartu Skor Pribadi & papan tulis → "Cara 1 (digital) = Cara 3 (kertas)" selalu setuju.

**Langkah 3b — TotalF1 per-siswa (WAJIB untuk profil "Mekar Belakangan").**
Profil **Mekar Belakangan** butuh dua angka tambahan: `TotalF1` (total ketiga poin **saat selesai Fase 1**) dan `ΔF3 = TotalAkhir − TotalF1`. Tanpa TotalF1 per-siswa, baris "Mekar Belakangan" di rumus mati → 7 profil diam-diam menyusut jadi 6 untuk individu (melanggar permintaan DPL "tiap siswa punya Profil 2036").

Karena tiap jawaban sudah ditandai rondenya (`F1.x` / `F2.x` / `F3.x`), filter Fase 1 cukup pakai **`LEFT(Ronde,2)="F1"`**:

- Di tab `Skor Siswa`, tambah kolom bantu **`TotalF1`** = `300 + (jumlah semua +/− Energi/Uang/Mental milik kode ini, HANYA ronde yang LEFT(Ronde,2)="F1")`, lalu jepit tiap poin 0–200 dengan cara berjalan yang sama, dan jumlahkan ketiganya.
- `TotalAkhir` = `Energi akhir + Uang akhir + Mental akhir`.
- Masukkan **`TotalF1`** sebagai salah satu kolom yang ikut diekspor (Langkah 5), supaya bisa diverifikasi.

**Langkah 4 — Kolom PROFIL (otomatis, pakai tangga 7-profil dari Bank §B.2/§B.3).**
Di tab `Skor Siswa`: anggap `E`=Energi, `K`=Uang, `M`=Mental (sudah ter-jepit 0–200), `MAXm`=poin tertinggi, `MINm`=poin terendah, `TotalF1` & `TotalAkhir` dari Langkah 3b. Ambang: **TINGGI ≥115 · SEDANG 85–114 · RENDAH <85.**

```
=IFS(
  AND(E>=115; K>=115; M<85),                                         "Pelari Tanpa Rem";
  AND(K>=115; OR(E<85; M<85)),                                       "Sukses-tapi-Tumbang";
  AND(M>=115; E<115; K<115),                                         "Bijak yang Tenang";
  AND((TotalAkhir-TotalF1)>=25; TotalF1<290),                        "Mekar Belakangan";
  AND((MAXm-MINm)>=35; OR(E>=115;K>=115;M>=115);
                       OR(E<85;K<85;M<85)),                          "Pemberontak Kreatif";
  AND(E>=85; K>=85; M>=85; (MAXm-MINm)<35),                          "Pembangun Seimbang";
  TRUE,                                                              "Penjelajah Reflektif"
)
```
> Cek dari atas, berhenti di kondisi pertama yang cocok ("yang pertama cocok, menang"). Hasilnya **selalu tepat 1 profil**, sama persis dengan hitungan manual papan tulis. Nama profil di rumus = **nama kanonik §2b** (jangan pakai variasi lain, biar sticker & CSV cocok).
>
> ⚠️ **Urutan baris 1 & 2 PENTING (koreksi 1 Juni):** *Pelari Tanpa Rem* dicek **sebelum** *Sukses-tapi-Tumbang*. Kalau dibalik (Sukses dulu), semua kasus Pelari (Uang≥115 **dan** Mental<85) langsung ketelan baris Sukses → profil "Pelari Tanpa Rem" **tak akan pernah keluar** untuk siapa pun (1 dari 7 profil mati). Pelari = kasus lebih spesifik (Energi TINGGI **juga**), jadi wajib dicek lebih dulu. Sudah benar di script `docs/sistem-data/leap2036-build.gs` + kartu cek §3C.

**Langkah 5 — EKSPOR CSV.**
Buat tab `EKSPOR` yang menarik kolom final. Lalu `File → Download → Comma-separated values (.csv)`:

```
Kode Siswa,Energi,Uang,Mental,TotalF1,Profil
A-01,128,142,71,268,Pelari Tanpa Rem
A-02,96,88,103,281,Pembangun Seimbang
A-07,80,121,64,256,Sukses-tapi-Tumbang
...
```
> Inilah file mentah untuk DPL/laporan/skripsi. Bisa langsung **dirangkum/dihitung** (berapa siswa per profil, rata-rata tiap poin, dll). Kolom `TotalF1` ikut diekspor supaya profil **Mekar Belakangan** bisa diverifikasi & dihitung ulang kapan saja. **Tidak ada kolom peringkat** — sesuai filosofi no-juara.

**Langkah 6 — Cek kebersihan data (operator, akhir tiap fase).**
Tiga cek cepat supaya data tidak diam-diam tercemar:
1. **Tiap kode punya jumlah baris = jumlah ronde fase itu.** (Bukan hanya "total jawaban = jumlah siswa" — itu tidak menangkap duplikat/typo.)
2. **Kolom penanda duplikat:** `COUNTIFS(kode, ronde)` per pasangan kode+ronde. Kalau ada **>1** (siswa submit dobel satu ronde) → operator hapus yang kelebihan (perubahan poin tidak boleh dihitung dua kali).
3. **Baris yatim:** kode yang tidak ada di daftar resmi (akibat salah dropdown / salah ronde) → tandai & perbaiki.

### 3B. FALLBACK KERTAS (Cara 3) — "Kartu Skor Pribadi" (kalau sinyal mati)

Tiap siswa pegang **1 kartu** sepanjang workshop (cetak 1 lembar/siswa, kotak isian besar). **Uji-cetak 1 lembar dulu** sebelum perbanyak, pastikan **kelima kolom sejajar** dan tidak ada yang terpotong (ini fallback yang dipakai justru saat sinyal mati — jangan sampai ambigu):

```
┌──────────────────────────────────────────────────────────────────┐
│   KARTU SKOR PRIBADI — LEAP 2036                                  │
│   Kode Siswa: ______        Nama (opsional): ____________________ │
├──────────┬─────────────┬───────────┬──────────┬──────────────────┤
│  Ronde   │ Pilihanku   │ ENERGI    │ UANG     │ MENTAL           │
│          │  (A / B)    │ sekarang  │ sekarang │ sekarang         │
├──────────┼─────────────┼───────────┼──────────┼──────────────────┤
│  MULAI   │     —       │    100    │   100    │      100         │
│  F1.1    │             │           │          │                  │
│  F1.2    │             │           │          │                  │
│   ...    │             │           │          │                  │
│  F3.2    │             │           │          │                  │
├──────────┴─────────────┴───────────┴──────────┴──────────────────┤
│  SKOR AKHIR →  Energi: ____   Uang: ____   Mental: ____           │
│  Total saat selesai Fase 1 (diisi fasilitator): ____              │
│  PROFIL 2036 (diisi fasilitator): _______________________________│
└──────────────────────────────────────────────────────────────────┘
```

**Cara pakai (instruksi ke siswa, polos):**
1. Tulis kodemu di atas.
2. Tiap ronde: **lingkari pilihanmu (A/B) diam-diam DULU** (sebelum diskusi grup), lalu **fasilitator umumkan "+/−" tiap baterai**, kamu hitung dari angka baris atas, tulis hasilnya. *(Ingat: tidak boleh di bawah 0 atau di atas 200 — kalau hitunganmu keluar dari situ, tulis 0 atau 200, lalu lanjut dari angka itu.)*
3. Di akhir: salin angka baris terakhir ke "SKOR AKHIR".

> **Catatan kolom "Pilihanku (A/B)" penting:** kolom ini WAJIB diisi — saat data diinput ke Sheet belakangan, pilihan A/B-lah yang dipakai merekonstruksi skor (bukan cuma angka akhir). Ini juga sumber data pilihan rahasia per-siswa untuk DPL.

**Cara dikumpulkan / dimasukkan jadi data:**
- **Kumpulkan** semua kartu di akhir → **fasilitator fotokan tiap kartu** (Theana/PDD). Foto = backup mentah untuk DPL.
- **Input ke Sheet nanti** (setelah acara, saat ada sinyal): operator ketik kode + pilihan A/B tiap ronde + skor akhir + Total Fase 1 tiap siswa → kolom `Profil` dihitung rumus (Langkah 4) → **download CSV**. Karena kartu sudah pakai jepit-per-ronde, hasilnya cocok dengan Sheet.
- Kalau profil mau diisi langsung di lokasi: operator pakai **kartu cek 7 baris** (lihat §3C) — <20 detik/siswa.

> **Catatan Kartu Kejutan (kalau dimainkan):** efek Kartu Kejutan berlaku **serempak & sama** ke seluruh kelas (bukan A/B pribadi). Lihat keputusan baku di §3D — supaya skor pribadi & skor kelompok tidak berbeda.

> **KATUP AMAN data:** kalau benar-benar mepet, **wajibkan hanya 3 ronde "penentu"** dicatat lengkap di kartu (1 per fase: **F1.5, F2.5, F3.2**) + skor akhir + Total Fase 1. Data per-siswa tetap dapat, tinggal lebih kasar. Inti (tiap siswa punya skor + profil yang bisa di-CSV) tidak hilang.

### 3C. KARTU CEK 7 BARIS (operator manual, samakan PERSIS dengan rumus IFS)

Untuk menentukan profil tanpa Sheet (<20 detik/siswa). Cek dari atas, **berhenti di baris pertama yang cocok**. Ambang: TINGGI ≥115 · RENDAH <85. (E=Energi, U=Uang, M=Mental.)

1. **Pelari Tanpa Rem** — Energi TINGGI **DAN** Uang TINGGI **DAN** Mental RENDAH. *(dicek DULU — kasus paling spesifik; kalau tidak, profil ini tak pernah keluar)*
2. **Sukses-tapi-Tumbang** — Uang TINGGI **DAN** (Energi RENDAH **ATAU** Mental RENDAH).
3. **Bijak yang Tenang** — Mental TINGGI **DAN** Energi bukan-TINGGI (<115) **DAN** Uang bukan-TINGGI (<115).
4. **Mekar Belakangan** — (Total akhir − Total saat selesai Fase 1) **≥ 25** **DAN** Total saat selesai Fase 1 **< 290**.
5. **Pemberontak Kreatif** — **TIGA syarat sekaligus:** selisih poin tertinggi−terendah **≥ 35** **DAN** minimal satu poin **≥ 115** **DAN** minimal satu poin **< 85**.
6. **Pembangun Seimbang** — ketiga poin **≥ 85** **DAN** selisih tertinggi−terendah **< 35**.
7. **Penjelajah Reflektif** — sisa (semua yang tidak cocok di atas).

> **JEBAKAN baris 5 (wajib diingat operator):** "selisih ≥35" **saja tidak cukup**. Contoh jebakan: E=110, U=110, M=70 → selisih 40 (≥35) **TAPI** tidak ada yang ≥115 → **BUKAN Pemberontak Kreatif** (jatuh ke baris berikutnya). Operator manual harus cek **ketiga** syarat, supaya hasilnya identik dengan rumus Sheet (Bank menjamin manual = Sheet selalu setuju).

### 3D. KARTU KEJUTAN & SKOR PRIBADI (keputusan baku, jangan dibiarkan ambigu)

Kartu Kejutan opsional dan berlaku **serempak, sama persis ke seluruh kelas** (bukan pilihan A/B pribadi). Supaya skor pribadi (CSV) **tidak berbeda** dari skor kelompok/papan:

> **KEPUTUSAN BAKU:** kalau Kartu Kejutan dimainkan, masukkan perubahan poinnya sebagai **baris konstanta** di `Tabel Perubahan Poin` (mis. ronde `CHAOS-1`, `CHAOS-2`) yang **otomatis ditambahkan ke SETIAP kode siswa** (semua siswa kena sama). Dengan begitu skor pribadi tiap siswa ikut memasukkan efek Kartu Kejutan, sama seperti papan kelompok.
> Kalau Kartu Kejutan **di-skip** (mepet), tidak ada baris CHAOS → skor pribadi & kelompok tetap konsisten. **Jangan** biarkan Kartu Kejutan masuk ke papan tapi tidak ke skor pribadi (atau sebaliknya) — itu bikin profil pribadi geser & data DPL ambigu.

---

## 4. ATURAN REVEAL YANG AMAN

| Aturan | Penjelasan |
|--------|------------|
| **Skor tak pernah tampil minus** | Semua poin sudah dijepit 0–200 tiap ronde. Di layar/papan/kartu **tidak akan pernah** muncul angka negatif. Kalau hitungan manual keluar minus → tulis **0**, lanjut dari 0. |
| **Skor pribadi diberikan PRIVAT** | Profil & skor pribadi tiap siswa **dibisikkan / diberi via kartu / muncul di HP siswa sendiri** — TIDAK diumumkan ke kelas, TIDAK diurutkan. |
| **Yang tampil ke kelas = "papan keragaman", bukan peringkat** | Papan hanya menunjukkan **sebaran** ("berapa orang/grup di tiap profil") — bukan "siapa skor tertinggi". Tidak ada angka diurut. Headline: **"7 jalur. 0 juara. Semua nyata."** |
| **Profil "berat" wajib dijelaskan ulang dengan sudut positif** | Untuk *Sukses-tapi-Tumbang* & *Pelari Tanpa Rem*: fasilitator (Maria/Benediktus) lewat **penjelasan singkat penenang** tegaskan **"ini bukan vonis, cuma cermin pola 5 hari — dan pola bisa diubah."** |
| **CSV untuk DPL ≠ untuk dipamerkan ke siswa** | File CSV (berisi skor + profil per kode) hanya untuk DPL/laporan/skripsi. **Tidak ditampilkan/diranking ke peserta.** Konsisten dengan aturan nominal apresiasi yang juga tidak diumumkan. |

---

## KATUP AMAN (ringkas, kalau waktu/teknis mepet)
- **Sinyal mati** → langsung ke Kartu Skor Pribadi (Cara 3, §3B). Inti utuh.
- **Operator kewalahan input live** → siswa isi kartu sendiri, input ke Sheet **setelah acara**.
- **Waktu mepet parah** → catat hanya 3 ronde penentu (F1.5, F2.5, F3.2) + skor akhir + Total Fase 1. Tiap siswa tetap dapat skor + profil + bisa di-CSV.
- **Profil tak sempat dihitung di lokasi** → simpan/foto skor akhir + Total Fase 1 tiap siswa; profil dihitung rumus IFS belakangan. Tidak ada yang hilang.
- **Mekar Belakangan tak sempat per-siswa** → pastikan minimal **Total saat selesai Fase 1** tiap siswa tercatat (kolom khusus di kartu) — tanpa angka ini profil Mekar Belakangan tidak bisa dihitung sama sekali.

---

### File terkait
- Sumber skenario, perubahan poin, & ambang 7-profil: `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) (Bank Skenario F1.1–F3.2 §C; aturan klasifikasi §B.2; rumus IFS §B.3; aturan jepit/clamp §B.0; F2.4 net +10 §C).
- State proyek: `PROJECT_MASTER.md`.

---

# BAGIAN 2 — FITUR (Values · DISC · Goal Hidup · 7 Profil · Surat · Apresiasi)

# SPEC RINGKAS + TIMEBOX — Fitur Day-1 & Reveal (LEAP 2036, versi 3 jam/hari, bahasa polos)

> Sumber konten: `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) (Bank Skenario, naskah fasilitator §3–§5, klasifikasi profil §B.2/B.3, template Surat §11b, aturan apresiasi §(d)). Di-reuse + disederhanakan bahasanya (poin +/−, bukan "delta").
>
> **3 sumber daya disebut polos: ENERGI · UANG · MENTAL** (semula Energi/Kapital/Kesehatan Mental). Mulai 100 tiap orang. **Aturan poin: tidak bisa kurang dari 0, tidak bisa lebih dari 200.**
>
> **Data per-siswa:** tiap siswa punya KODE UNIK (mis. A-01, A-02...). Tiap ronde pilih A/B diam-diam (rahasia) → ditangkap via Google Form/Sheet (tiap kode 1 baris, Sheet jumlahkan otomatis) ATAU "Kartu Skor Pribadi" kertas yang diisi sendiri lalu difoto/dikumpulkan. Di akhir tiap siswa punya skor ENERGI/UANG/MENTAL + Profil 2036, ekspor CSV untuk DPL/laporan/skripsi.

---

## 0. Kamus istilah komponen ini (istilah kiri DILARANG diucapkan ke siswa — pakai kolom kanan)

| Jargon (jangan dipakai ke siswa) | Bahasa polos yang dipakai |
|----------------------------------|---------------------------|
| **energizer** | **"pemanasan gerak"** (biar nggak ngantuk, segar lagi) |
| **micro-debrief / debrief** | **"obrolan singkat penenang"** |
| **reframe** | **"jelaskan ulang dengan sudut positif"** |
| **showcase** | **"galeri refleksi"** |
| **reksa dana / investasi** | **"menabung & menumbuhkan uang pelan-pelan"** |
| **konsolidasi** | **"berhenti mengejar, mau hidup tenang & merasa cukup"** |
| **reinvensi** | **"mulai babak baru, belum selesai bertumbuh"** |
| **silent vote** | **"pilih diam-diam (rahasia)"** |
| **cap (jumlah grup)** | **"maksimal ... orang/grup"** (bukan kata "cap") |
| **leaderboard / peringkat** | **(JANGAN ADA)** — yang ada cuma "papan keragaman" (sebaran, bukan juara) |

> Nama profil 7-baris (EN — ID) dikunci di §5 sebagai **satu set kanonik**; pakai persis sama di kartu, papan keragaman, sticker, rumus Sheet, dan CSV.

---

## 1. Values-lite — "5 Hal yang Tak Bisa Ditawar" · TARGET ≤12 menit

**Inti:** tiap siswa pilih 5 nilai hidup yang baginya tidak bisa ditawar — fondasi "kenapa aku memilih A/B nanti".

**Daftar nilai (~15, dibacakan pelan, beri jeda):**
1. Keluarga · 2. Kebebasan · 3. Prestasi · 4. Stabilitas · 5. Kreativitas · 6. Menolong orang lain · 7. Petualangan · 8. Kejujuran · 9. Keamanan finansial (uang aman) · 10. Pertumbuhan diri · 11. Persahabatan · 12. Iman/spiritualitas · 13. Pengakuan/dihargai · 14. Kesehatan · 15. Keadilan.

**Cara pilih (alur 12'):**
- (5') Fasilitator bacakan 15 nilai pelan + 1 contoh kecil tiap nilai.
- (4') Tiap siswa **tulis 5 nilai** (di Form HP / kolom Kartu Skor Pribadi). Tegaskan: "bukan yang kedengeran keren, tapi yang beneran kamu — yang kalau dicabut, kamu ngerasa 'itu bukan aku lagi'."
- (3') **Berbagi berpasangan**: cerita 1 nilai ke teman sebelah + alasannya. (Berbagi ke seluruh kelas di-skip kalau waktu sempit.)

**KATUP AMAN:** kalau mepet, lewati berbagi-berpasangan + ambil **3 nilai (bukan 5)**; cukup ditulis di Kartu Skor Pribadi, tidak perlu dibacakan ke kelas. Intinya tetap utuh.

---

## 2. DISC-lite — 4 Tipe + "4 Sudut Ruangan" · TARGET ≤10 menit

**Framing kunci (wajib diucap):** "Ini SIFAT alami kamu, **bukan takdir**. Titik awal kenal diri, bukan kotak buat ngurung diri."

**4 tipe (1 baris masing-masing — sebut nama Indonesia):**
- **D — Penggerak:** tegas, langsung ke tujuan, fokus hasil. ("Udah, kerjain aja.")
- **I — Pemengaruh/Penyemangat:** sosial, antusias, bikin suasana hidup.
- **S — Penyabar/Penjaga:** sabar, tenang, pendengar baik, bikin orang nyaman.
- **C — Penekun/Pemikir:** teliti, hati-hati, mikir matang sebelum bertindak.

**Aktivitas "4 sudut ruangan" (alur 10'):**
- (4') Bacakan 4 tipe + contoh. Siswa pilih 1 yang **paling dominan** (catat di Kartu/Form sebagai data).
- (3') Semua berdiri, pindah ke sudut sesuai tipenya (D/I/S/C). Gerak fisik = sekaligus peregangan/reset fokus setelah duduk lama (= pemanasan gerak).
- (3') "Lihat — kita beragam. Bagus." Balik ke tempat. Ulang framing "sifat bukan takdir".

**KATUP AMAN:** kalau mepet, lewati gerak ke sudut — cukup **angkat tangan/acungkan jari** (D=1 jari, I=2, S=3, C=4) dari tempat duduk. Hemat ~3 menit, data tipe tetap tertangkap.

---

## 3. 3-Lapis-Diri (Sifat / Nilai / Tujuan) · TARGET ≤8 menit (penjelasan singkat)

**Penjelasan 1-paragraf polos (diucapkan fasilitator, gambar 3 lingkaran di papan):**

> "Dalam diri kamu ada tiga lapis. Lapis pertama, **SIFAT** — gaya alami kamu, yang barusan: D/I/S/C. Lapis kedua, **NILAI** — 5 hal yang tak bisa ditawar tadi. Lapis ketiga, **TUJUAN** — mau jadi apa kamu nanti, yang sebentar lagi kita pilih. Nah, seru-nya: kadang ketiganya nggak sejalan. Sifatmu bilang A, nilaimu bilang B, tujuanmu bilang C. **Pertanyaan besar kita: pas kamu lagi galau milih, mana yang menang — Sifatmu, Nilaimu, atau Tujuanmu?** Itu yang bakal kita uji terus."

**KATUP AMAN:** kalau mepet, cukup ucapkan **kalimat tebal terakhir** sambil tunjuk 3 lingkaran di papan (~90 detik). Tidak wajib contoh panjang — pertanyaan pemantik adalah intinya.

---

## 4. Pembentukan Kelompok by Tujuan Hidup · TARGET ≤15 menit · MAKS 5 orang/grup

**8 Tujuan Hidup (nama EN + padanan polos Indonesia, dipajang di dinding/proyektor):**
1. **Creative Entrepreneur** — Wirausahawan Kreatif (bikin usaha sendiri)
2. **Family-First** — Keluarga di Atas Segalanya
3. **Global Social Impact** — Berdampak buat Banyak Orang
4. **Master a Craft** — Mendalami Satu Keahlian (jago di satu bidang)
5. **Travel / Free-Spirit** — Penjelajah Bebas
6. **Stable Career + Community** — Karier Stabil & Punya Komunitas
7. **Innovator** — Pembaru / Pencipta Hal Baru
8. **Caregiver / Healer** — Perawat / Penolong (merawat & menyembuhkan)

**Cara pilih (alur 15'):**
- (5') Siswa baca 8 tujuan → pilih sendiri yang **paling kena di hati** → bergerak ke pos tujuan itu.
- (5') **Maksimal 5 siswa/tujuan.** Kalau penuh (>5 orang), siswa pindah ke pilihan kedua. Fasilitator seimbangkan manual; target 6–8 grup. Tiap grup = "menjalani 1 karakter dengan satu tujuan hidup".
- (5') Tiap grup: tentukan **nama grup** + **1 kalimat visi** ("Kami grup ___, kami percaya ___"). Teriak ke kelas 10 detik/grup.

**KATUP AMAN:** kalau mepet, lewati nama+visi grup — cukup "Grup [Tujuan] berkumpul di sini, kenalan 30 detik". Pembentukan grup-nya sendiri tidak boleh di-skip (pondasi simulasi).

---

## 5. 7 Profil 2036 — Reveal + Aturan Skor→Profil · (dipakai di Modul Fase 3)

**Set nama kanonik 7 profil (EN — ID, kunci — pakai identik di semua tempat). SELALU dibaca berpasangan dengan trade-off-nya:**

| # | Profil (EN — ID) | 1 kalimat |
|---|------------------|-----------|
| 1 | **Burnout Achiever** — *Sukses-tapi-Tumbang* | Sukses secara materi, tapi tubuh/mentalnya tumbang. |
| 2 | **Hustler Maverick** — *Pelari Tanpa Rem* | Energi & uang ngebut kencang, tapi mentalnya naik-turun. |
| 3 | **Steady Sage** — *Bijak yang Tenang* | Hidup tenang & waras, ambisinya secukupnya. |
| 4 | **Late Bloomer** — *Mekar Belakangan* | Jatuh di awal, bangkit kuat di akhir. |
| 5 | **Creative Rebel** — *Pemberontak Kreatif* | Jalur ekstrem & tidak biasa, berani ambil risiko. |
| 6 | **Balanced Builder** — *Pembangun Seimbang* | Stabil merata di semua sisi, tidak ada yang timpang. |
| 7 | **Reflective Wanderer** — *Penjelajah Reflektif* | Hidup kaya pengalaman, banyak menjelajah & merenung. |

**Aturan skor→profil — bisa dihitung MANUAL atau Sheet (cek dari atas, berhenti di yang pertama cocok / "cocok-pertama-menang"):**

Ambang polos: **TINGGI = poin ≥ 115 · SEDANG = 85–114 · RENDAH = di bawah 85**. (E=Energi, U=Uang, M=Mental.)

1. **Pelari Tanpa Rem** — Energi TINGGI **DAN** Uang TINGGI **DAN** Mental RENDAH. *(dicek DULU — kasus paling spesifik; kalau tidak, profil ini tak pernah keluar)*
2. **Sukses-tapi-Tumbang** — Uang TINGGI **DAN** (Energi RENDAH **ATAU** Mental RENDAH).
3. **Bijak yang Tenang** — Mental TINGGI **DAN** Energi bukan-TINGGI **DAN** Uang bukan-TINGGI.
4. **Mekar Belakangan** — total skor naik **≥ 25 poin** dari akhir Fase 1 ke akhir **DAN** total di akhir Fase 1 masih di bawah 290. *(butuh 1 catatan: total saat selesai Fase 1 — lihat kotak di bawah.)*
5. **Pemberontak Kreatif** — **TIGA syarat sekaligus:** (a) selisih poin tertinggi vs terendah antar-modal **≥ 35** **DAN** (b) minimal **satu** modal TINGGI (≥115) **DAN** (c) minimal **satu** modal RENDAH (di bawah 85). *(Catatan operator: "selisih ≥35" saja TIDAK cukup. Contoh jebakan: Energi 110 / Uang 110 / Mental 70 → selisih 40 tapi tak ada modal ≥115 → BUKAN Pemberontak Kreatif, jatuh ke baris berikutnya.)*
6. **Pembangun Seimbang** — ketiga modal **≥ 85** **DAN** selisih antar-modal **di bawah 35**.
7. **Penjelajah Reflektif** — **sisa** (semua yang tidak cocok di atas); total cenderung di bawah 270, tidak ada modal menonjol.

> **PENTING — agar "Mekar Belakangan" bisa muncul per-siswa (permintaan WAJIB DPL):** profil ke-4 butuh **total skor tiap siswa SAAT SELESAI FASE 1** (bukan cuma total akhir). Jadi di akhir Modul Fase 1, **catat/simpan subtotal Fase 1 per kode siswa** (di Sheet: jumlah jawaban ronde F1.x saja, +300; di kartu kertas: tulis "Total akhir Fase 1" di satu baris). Tanpa angka ini, "Mekar Belakangan" hanya bisa dihitung di tingkat grup, dan klaim "7 profil per siswa" tidak terpenuhi.
>
> **Manual = Sheet harus selalu setuju.** Kartu cek 7-baris di papan tulis **wajib memuat ketiga syarat Pemberontak Kreatif** (selisih ≥35 + ada ≥115 + ada <85), persis seperti rumus `IFS` di Sheet (file sumber §B.3, kolom B=E, C=U, D=M, TotalF1 & TotalAkhir untuk Mekar Belakangan). Manual: <20 detik/grup, tempel sticker profil ke "papan keragaman".
>
> **Reveal = papan KERAGAMAN, bukan peringkat.** Tiap profil dibaca berpasangan trade-off-nya. Tidak ada kata "terbaik/menang/kalah". Headline papan: **"7 jalur. 0 juara. Semua nyata."** Reveal grup dulu (profil dominan per tujuan), lalu individu (privat, dari pilihan rahasia tiap siswa).

**Catatan label skenario terakhir (F3.2 "Titik Balik 2036") — DIBACA POLOS ke siswa:**
- **Pilihan A:** "Berhenti mengejar — akhirnya mau hidup tenang & merasa cukup, aman & utuh."
- **Pilihan B:** "Mulai babak baru — aku belum selesai bertumbuh, berani ambil risiko lagi."
- *(Kata "Konsolidasi/Reinvensi" hanya catatan internal operator — JANGAN dibacakan.)*

**KATUP AMAN:** kalau mepet, reveal **grup saja** (≤45 detik/grup) + bagikan profil individu lewat HP/kartu hasil **tanpa dibacakan ke kelas** (siswa lihat sendiri). **Obrolan singkat penenang** untuk profil *Sukses-tapi-Tumbang* / *Pelari Tanpa Rem* **tidak boleh di-skip** (keamanan emosi): fasilitator (Maria/Benediktus) tegaskan "ini cermin pola 5 hari, **bukan vonis** — dan pola bisa diubah."

---

## 6. Surat dari Diri 2036 (versi ringkas, template rumpang) · TARGET ≤20 menit

**Cara:** isi bagian kosong dari hati. Privat — tidak ada yang baca kecuali dirinya. Form HP auto-PDF jadi kenang-kenangan; cadangan kertas template, di-scan kemudian. Musik tenang, Maria & Theana berkeliling untuk siswa yang emosional.

**Template rumpang (tampil di Form HP / kertas):**

> **SURAT DARI DIRIKU DI TAHUN 2036**
> Hai, [nama panggilanmu] yang berumur [umur sekarang] tahun.
> Ini aku — kamu, sepuluh tahun dari sekarang, menulis dari 2036. Sekarang aku berumur ___ tahun, dan hidupku... ___________ *(1–2 kalimat: sibuk apa, tinggal di mana, jadi orang seperti apa)*.
> Keputusan paling penting yang kuambil adalah ketika aku memilih untuk ___________. Waktu itu rasanya ___________, tapi sekarang aku ___________ *(syukur/sesal/lega)*.
> Hal yang paling kusyukuri adalah ___________, karena ___________.
> Tapi jujur, ada juga yang kusesali: ___________. Kalau aku bisa balik ke kamu sekarang, aku mau bilang: ___________.
> Satu hal yang aku mau kamu tahu dari sekarang, supaya kamu nggak buta sama masa depan: ___________.
> Kamu nggak harus jadi aku yang sempurna. Kamu cukup ___________.
> Sampai ketemu di 2036. Aku menunggumu. Peluk hangat, Kamu — di umur ___ tahun.

**KATUP AMAN:** kalau mepet, isi **hanya 3 baris inti** (hidupku..., yang kusyukuri..., pesan supaya nggak buta masa depan...); sisanya boleh diselesaikan di rumah / Fun Day. Surat tidak boleh dihapus dari acara (ini output kunci yang dibawa pulang).

---

## 7. Surprise Apresiasi (non-juara, amplop sama rata) · TARGET ≤8 menit

**Inti:** apresiasi **SAMA RATA** untuk semua relawan yang berani berbagi refleksi (mis. 3–4 relawan) — amplop isinya sama persis.

**Aturan wajib:**
- Ucapkan eksplisit: *"Ini BUKAN hadiah profil terbaik — tidak ada profil terbaik. Ini apresiasi atas keberanian jujur soal diri sendiri."*
- **Nominal rupiah TIDAK ditampilkan / TIDAK diucapkan ke peserta** — nominal hanya ada di dokumen anggaran internal. (Sesuai batas anggaran ≤Rp 500k.)
- Tidak ada papan peringkat. Semua peserta tetap dapat apresiasi setara: sticker / sertifikat digital / Surat 2036 PDF.

**KATUP AMAN:** kalau mepet, lewati amplop fisik — cukup apresiasi verbal hangat + nama relawan disebut + tepuk tangan kelas; sticker/sertifikat dibagi via grup WhatsApp setelah acara. Pesan "keberanian, bukan kemenangan" tetap diucapkan.

---

### Catatan integrasi data per-siswa (berlaku semua fitur)
- **Kode unik** dibagikan di Modul Materi (Hari 1), dipakai konsisten sampai akhir. Values + tipe DISC + tiap pilihan A/B rahasia + skor akhir + profil semuanya disimpan per-kode.
- **Pilihan rahasia harus dikunci SEBELUM diskusi grup** — supaya skor "pribadi" tiap siswa benar-benar dari pilihan sendiri, bukan ikut grup. Fasilitator: "kunci pilihan rahasia dulu, baru diskusi."
- **Digital-first:** 1 Google Form (pilih ronde dari dropdown) → Sheet auto-jumlahkan per kode → kolom Profil pakai rumus `IFS` (file sumber §B.3) → ekspor CSV. **Tambahkan kolom subtotal Fase 1 per siswa** (untuk profil "Mekar Belakangan").
- **Cadangan kertas:** "Kartu Skor Pribadi" (kolom: Kode, 5 Nilai, Tipe DISC, Tujuan, lalu tiap ronde tulis A/B + skor berjalan E/U/M, **+ 1 baris "Total akhir Fase 1"**) → dikumpulkan/difoto → input manual ke Sheet untuk CSV.
- **Narasi skenario yang dibaca ke siswa wajib bebas jargon:** mis. di F1.5 ganti "investasi kecil di reksa dana" → "**sisihkan untuk ditabung & ditumbuhkan pelan-pelan**" (kata "reksa dana/investasi" tidak diucapkan tanpa padanan).

**File sumber load-bearing:** `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) — Bank Skenario (F1.1–F1.5: F1.5 delta A `E+8/U−12/M+10`, B `E−3/U+15/M−3`; F3.1–F3.2), klasifikasi profil §B.2 + rumus IFS §B.3 (Creative Rebel butuh selisih≥35 **DAN** ≥115 **DAN** <85; Late Bloomer butuh ΔF3≥25 **DAN** TotalF1<290), naskah §3–§5 (Values/DISC/3-Lapis), template Surat §11b, aturan apresiasi §(d) butir 4.

---

# BAGIAN 3 — LIMA MODUL HARIAN

# MODUL MATERI (HARI 1) — RUNDOWN MENIT-PER-MENIT
## LEAP 2036 — versi padat 3 jam/hari (KKN STEM 2026, Kelompok 2)

> **Mulai 09.00 · Total konten 128 menit + cadangan 22 menit = 150 menit (≤180 ✓) · Selesai paling lambat 11.30 (pas batas, tidak lewat).**
> **Tema Hari 1:** kenal diri (Sifat / Nilai / Tujuan) + bentuk kelompok + belajar cara main simulasi. **TIDAK ADA skenario fase berat hari ini** — skenario pemanasan dijalankan TANPA skor nyata.
> **Bahasa polos wajib** (tidak ada jargon — pakai "perubahan poin +/-", "poin tidak bisa kurang dari 0 / lebih dari 200", "pilih diam-diam", "Sifat/Nilai/Tujuan", "pemanasan gerak").
> **3 baterai hidup:** ENERGI · UANG · MENTAL (mulai 100 tiap orang).
> **Data per-siswa:** tiap siswa dapat KODE UNIK (A-01, A-02, ...) di blok skor; mulai ditangkap saat skenario pemanasan. Pilihan rahasia **wajib dikunci sebelum diskusi grup** (ini sumber data pribadi — kalau diisi setelah diskusi, datanya tercemar jadi ikut grup).
> Sumber skenario di-reuse dari `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) (Bank Skenario; warm-up dari blok Briefing Mekanik).

---

| Jam | Durasi | Kegiatan (detail polos) | Cara Main | Penanggung Jawab | KATUP AMAN (kalau mepet) |
|-----|--------|-------------------------|-----------|------------------|--------------------------|
| 09.00–09.12 | **12'** | **1. Pembukaan + Pemanasan Gerak "Aku Sekarang vs Aku 2036"** — MC buka, kenalkan tim KKN STEM UKDW×PolyU, sapa kelas. Pemanasan gerak (biar segar, nggak ngantuk): semua berdiri, tunjuk diri sendiri ("ini aku sekarang") lalu tunjuk ke depan ("ini aku 10 tahun lagi"). Set nada: *"Hari ini kita mulai menjalani 10 tahun hidup — tapi tenang, ini aman. Tidak ada jawaban benar/salah, tidak ada yang menang/kalah, boleh lewat kapan saja."* | Pleno, berdiri-gerak | **Dex (MC)** | Tanpa alat. Slide selamat datang opsional; kalau proyektor mati → MC ngomong + tulis judul di papan tulis. |
| 09.12–09.24 | **12'** | **2. Hook "Buta Masa Depan"** — BUKAN ceramah. Lempar 2 pertanyaan ke kelas: *"Pernah nyesel keputusan yang dampaknya baru kerasa bertahun kemudian?"* dan *"Kalau bisa ngobrol sama dirimu 10 tahun lagi, mau nanya apa?"*. Jelaskan polos 1 menit: *"Kita semua sedikit 'buta masa depan' — susah bayangin akibat jangka panjang dari pilihan hari ini. Workshop ini bikin kalian MENGALAMI-nya dulu, bukan cuma dengar nasihat."* Tegaskan: tidak ada juara, tidak ada peringkat. | Pleno, tanya-jawab terbuka | **Dex** | Tanpa alat. 1 slide tabel "Dengar vs Alami"; kalau mati → tulis 2 kolom di papan tulis. |
| 09.24–09.36 | **12'** | **3. Nilai-Lite — "5 Hal yang Tak Bisa Ditawar"** — Fasilitator bacakan ~15 nilai pelan + 1 contoh kecil (Keluarga, Kebebasan, Prestasi, Stabilitas, Kreativitas, Menolong orang, Petualangan, Kejujuran, Uang aman, Pertumbuhan diri, Persahabatan, Iman, Dihargai, Kesehatan, Keadilan). Tiap siswa **tulis 5 nilai** yang baginya tak bisa ditawar. Pesan: *"bukan yang kedengeran keren — yang kalau dicabut, kamu ngerasa 'itu bukan aku lagi'."* Tutup: berbagi 1 nilai ke teman sebelah (1'). | Sendiri → berpasangan | **Dex** (co: Maria, Theana keliling) | **Cara utama:** tulis di Form HP / nanti di Kartu Skor. Sinyal lemah → nilai tampil di proyektor, siswa pilih. Tanpa proyektor → dibacakan lisan, tulis di kertas. **Mepet:** ambil **3 nilai** (bukan 5), lewati berbagi-berpasangan. |
| 09.36–09.47 | **11'** | **4. Sifat-Lite (DISC) — 4 Tipe + "4 Sudut Ruangan"** — Bacakan 4 tipe 1-baris: **D-Penggerak** (tegas, fokus hasil), **I-Pemengaruh** (sosial, bikin suasana hidup), **S-Penyabar** (sabar, pendengar baik), **C-Penekun** (teliti, mikir matang). Framing wajib: *"Ini SIFAT alami kamu, BUKAN takdir — titik awal kenal diri, bukan kotak buat ngurung diri."* Tiap siswa pilih 1 tipe paling dominan, lalu berdiri pindah ke sudut tipenya. "Lihat — kita beragam. Bagus." | Sendiri → gerak ke sudut | **Dex** | **Cara utama:** pilih tipe di Form HP. **Cadangan tanpa alat:** 4 sudut ruangan (default, sekalian gerak). **Mepet:** tidak usah ke sudut — cukup acungkan jari dari tempat duduk (D=1, I=2, S=3, C=4). Data tipe tetap tertangkap. |
| 09.47–09.55 | **8'** | **5. 3-Lapis Diri (Sifat / Nilai / Tujuan)** — Talk singkat, gambar 3 lingkaran di papan. *"Dalam diri kamu ada 3 lapis: SIFAT (D/I/S/C tadi) · NILAI (5 hal tak bisa ditawar tadi) · TUJUAN (mau jadi apa nanti — sebentar lagi kita pilih). Kadang ketiganya nggak sejalan."* Pertanyaan besar (tulis di papan): **"Pas kamu galau milih, mana yang menang — Sifatmu, Nilaimu, atau Tujuanmu?"** Itu yang diuji terus selama workshop. | Pleno, talk + papan tulis | **Dex** | Tanpa alat kritis. 1 slide diagram; kalau mati → gambar 3 lingkaran di papan. **Mepet:** cukup ucapkan kalimat besar (pertanyaan tebal) sambil tunjuk 3 lingkaran (~90 detik). |
| 09.55–10.05 | **10'** | **BREAK 1 + foto kelompok awal** — istirahat singkat + air (bawa sendiri / dari sekolah, tanpa anggaran konsumsi). | — | **Theana (dok)** | Bisa dipangkas ke 5' kalau jadwal geser. |
| 10.05–10.22 | **17'** | **6. Bentuk Kelompok by Tujuan Hidup (maksimal 5 orang/grup)** — 8 Tujuan Hidup dipajang (nama + padanan polos): Wirausahawan Kreatif · Keluarga di Atas Segalanya · Berdampak buat Banyak Orang · Mendalami Satu Keahlian · Penjelajah Bebas · Karier Stabil & Komunitas · Pembaru/Pencipta Hal Baru · Perawat/Penolong. Siswa baca → pilih yang **paling kena di hati** → bergerak ke pos tujuan. **Maksimal 5 orang/grup**; kalau penuh, pindah ke pilihan kedua. Fasilitator seimbangkan manual (target 6–8 grup). Tiap grup tentukan **nama + 1 kalimat visi** ("Kami grup ___, kami percaya ___"), teriak ke kelas 10 detik. | Sendiri → grup | **Dhevina + Dex** (co: Maria, Theana) | **Cara utama:** pilih tujuan di Form HP. **Cadangan tanpa alat:** 8 kertas tujuan ditempel di dinding, siswa berdiri di pos. **Mepet:** lewati nama+visi grup — cukup kumpul + kenalan 30 detik. (Pembentukan grup TIDAK boleh di-skip.) |
| 10.22–10.34 | **12'** | **7. Perkenalan Sistem Skor + Bagi KODE SISWA** — Jelaskan polos: *"Tiap orang punya 3 baterai hidup: ENERGI (tenaga & waktu), UANG (isi dompet), MENTAL (hati & ketenangan). Semua mulai dari 100. Tiap keputusan, ada baterai yang naik, ada yang turun — TIDAK ADA pilihan yang bikin semua penuh. Itulah hidup."* **Aturan paku mati:** *"Baterai tidak pernah turun di bawah 0, tidak pernah naik di atas 200. Jadi di layar nggak akan muncul angka minus. Tenang."* Lalu **bagikan KODE UNIK** tiap siswa (A-01, A-02, ...); siswa tulis kodenya di kartu nama meja / Kartu Skor Pribadi. *"Kode ini dipakai sampai hari terakhir — supaya tiap kalian punya hasil sendiri di akhir."* | Pleno + bagi kode/kartu | **Syendhi (operator skor)** (co: Dhevina) | **Cara utama:** skor di Sheet. **Cadangan tanpa alat:** papan tulis skor 3 warna + tulis aturan 0–200; KODE dibagi via kartu kertas. **Mepet:** jelaskan skor 60 detik + bagi kode saja; detail aturan diulang saat pemanasan. |
| 10.34–10.46 | **12'** | **8. Briefing Alur Simulasi (alur biasa kita, 6 langkah)** — Jelaskan urutan tetap tiap skenario, polos & pelan: **(1)** fasilitator baca cerita → **(2)** tiap siswa **pilih A/B diam-diam (rahasia)** — *"ini pilihan pribadimu, nggak usah kasih tahu teman dulu; inilah yang jadi hasil sendiri-sendiri kamu. Kunci dulu pilihanmu — baru nanti diskusi. Sesudah diskusi, pilihan rahasiamu nggak boleh diubah."* → **(3)** diskusi kelompok → **(4)** kelompok putuskan satu → **(5)** poin diperbarui (pribadi dari pilihan rahasia + kelompok) → **(6)** hasil/akibat diceritakan. Tegaskan lagi: tiap pilihan ada untung ada ruginya. | Pleno | **Dex** (co: Syendhi demo skor) | Tanpa alat. Tulis 6 langkah di papan sebagai pengingat. **Mepet:** sebut 6 langkah sekali sambil tunjuk papan, langsung praktik di pemanasan. |
| 10.46–10.58 | **12'** | **9. Skenario PEMANASAN (TANPA skor nyata): "Begadang Nonton vs Tidur Sebelum Ujian"** — Jalankan alur lengkap sebagai LATIHAN: baca cerita (2') → **tiap siswa pilih A/B diam-diam & KUNCI dulu** (30") → diskusi kelompok (3') → kelompok putuskan (30") → tunjukkan cara poin berubah di papan/Sheet (skor LATIHAN, **tidak disimpan**) → ceritakan akibat ringan (1–2'). Tujuan: kalibrasi pilih-rahasia + cara baca papan skor. **DI SINI penangkapan data per-siswa dilatih:** tiap siswa kirim 1 jawaban A/B + kodenya ke Form **sebelum diskusi** (atau lingkari di Kartu Skor) supaya operator pastikan data masuk. | Sendiri (rahasia) → grup → sistem | **Dhevina** (alur); **Syendhi** (skor latihan) | **Pilih rahasia cara utama:** Form HP. **Cadangan tanpa alat:** kertas dilipat / Kartu Skor. **Skor cara utama:** Sheet. **Cadangan:** papan tulis manual. **Mepet:** lewati diskusi kelompok, cukup buktikan 1 putaran pilih-rahasia → poin berubah → operator konfirmasi data 1 siswa masuk. |
| 10.58–11.08 | **10'** | **10. Refleksi Singkat + Penutup Hari 1** — Tulis hening 1 insight (di Form/kartu): *"Tadi aku cenderung milih apa? Sifat, Nilai, atau Tujuanku yang paling menang?"* Rekap: *"Hari ini kita kenal diri + bentuk kelompok + paham cara main. Besok mulai menjalani tahun-tahun pertama hidup (2026–2028)."* Normalisasi: tidak ada jawaban salah. Foto kelas. | Sendiri → pleno | **Maria** (refleksi); **Dex** (penutup); **Theana** (foto) | **Cara utama:** jurnal di Form (privat). **Cadangan:** tulis di kartu / catatan HP. **Mepet:** lewati tulis-jurnal, cukup 1 kalimat penutup lisan + foto. |
| 11.08–11.30 | **22'** | **CADANGAN WAKTU** — bantalan kalau ada blok molor (transisi grup, sinyal lambat, kelas ramai). Kalau tidak terpakai → selesai lebih awal (11.08). | — | Semua | Ini sendiri adalah katup aman waktu. |

---

### VERIFIKASI DURASI

| Blok | Menit |
|------|-------|
| 1. Pembukaan + Pemanasan Gerak | 12 |
| 2. Hook "Buta Masa Depan" | 12 |
| 3. Nilai-Lite | 12 |
| 4. Sifat-Lite (DISC) | 11 |
| 5. 3-Lapis Diri | 8 |
| Break 1 | 10 |
| 6. Bentuk Kelompok by Tujuan | 17 |
| 7. Sistem Skor + Kode Siswa | 12 |
| 8. Briefing Alur Simulasi | 12 |
| 9. Skenario Pemanasan (tanpa skor nyata) | 12 |
| 10. Refleksi + Penutup | 10 |
| **SUBTOTAL KONTEN (termasuk Break 1)** | **128** |
| Cadangan waktu | 22 |
| **TOTAL TERJADWAL** | **150 menit** |

**Cek aritmetika:** 12+12+12+11+8+10+17+12+12+12+10 = **128 menit** (konten + Break 1). **+ cadangan 22 = 150 menit terjadwal ≤ 180 ✓.** Mulai 09.00 → konten selesai 11.08 → dengan cadangan penuh selesai **paling lambat 11.30 (pas di batas, tidak lewat)**. Sisa ruang ke cap 180 = 30 menit cadangan tak terjadwal kalau benar-benar darurat. Total **jauh di bawah cap 180** — robust, tidak bikin tim panik.

> Catatan: hanya **128 menit** yang berisi kegiatan; sisanya **22 menit cadangan** murni bantalan (bukan konten tambahan). Cadangan sengaja dipasang 22' (bukan 25') supaya hari pasti selesai **tepat 11.30, tidak menembus batas bawah jendela 11.30–12.00**. Kalau sekolah memberi waktu sampai 12.00, cadangan boleh dilebarkan. Kalau semua lancar, hari selesai lebih cepat di 11.08 (bonus, bukan masalah).

---

### KALAU WAKTU SANGAT MEPET — urutan yang boleh dipangkas

Kalau hari berjalan jauh lebih lambat dari rencana, pangkas dengan **urutan ini** (dari paling boleh-dikorbankan ke paling-wajib), tanpa merusak inti Hari 1: **pertama**, potong Break 1 ke 5' dan pakai semua cadangan. **Kedua**, ciutkan blok ringan dengan katup amannya — Nilai-Lite ke 3 nilai tanpa berbagi (hemat ~5'), DISC tanpa pindah-sudut cukup acung jari (~3'), 3-Lapis cukup ucapkan pertanyaan besar (~5'), identitas grup tanpa nama+visi (~5'), refleksi penutup cukup lisan (~5'). **Ketiga**, di skenario pemanasan, lewati diskusi kelompok dan cukup buktikan satu putaran "pilih rahasia → poin berubah → data 1 siswa masuk". Yang **TIDAK boleh dipangkas apa pun**: (1) pembentukan kelompok by Tujuan Hidup, (2) bagi KODE SISWA, dan (3) minimal satu putaran pemanasan yang membuktikan penangkapan data per-siswa berjalan — sebab tiga hal itu adalah fondasi yang dipakai semua modul fase berikutnya. Selama ketiganya jalan, Hari 1 dianggap berhasil walau bagian lain dipadatkan agresif.

---

**File sumber load-bearing:** `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) — warm-up "Begadang nonton vs tidur" (blok Briefing Mekanik, baris 56), 8 Tujuan Hidup (baris 53), naskah Nilai/DISC/3-Lapis (baris 50–52). State proyek: `PROJECT_MASTER.md`.

---

# MODUL FASE 1 — FONDASI (2026–2028)
## Rundown Menit-per-Menit · LEAP 2036 (versi padat 3 jam/hari) · KKN STEM 2026 Kelompok 2

> **Mulai 09.00 · Total konten 103 menit, selesai 10.43 · sisa ~77 menit cadangan tak terjadwal (jauh di bawah cap 180').**
> **Tone:** optimistis–eksplorasi. Belum ada badai; ini fondasi keputusan yang konsekuensinya baru "panen" di fase berikutnya.
> **Sumber skenario & poin +/−:** `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) §C (Bank Skenario F1.1–F1.5). Bahasa disederhanakan: istilah teknis → poin +/−.
> **3 baterai hidup:** ENERGI · UANG · MENTAL. Tiap siswa mulai dari **100 / 100 / 100**. Aturan paku mati: **poin tidak bisa kurang dari 0 atau lebih dari 200.**
> **Skenario dipakai (4 terkuat):** F1.1 → F1.3 → F1.4 → F1.5. (F1.2 "Gap Year" = cadangan opsional bila waktu lebih.)
> **Data per-siswa:** tiap siswa pakai KODE UNIK (A-01, A-02, …) yang sudah dibagikan di Modul Materi (Hari 1). Tiap ronde, tiap siswa pilih A/B **diam-diam (rahasia)** → masuk Google Form/Sheet ATAU ditulis di "Kartu Skor Pribadi". Inilah sumber data pribadi untuk DPL/laporan/skripsi.

---

### KAMUS ISTILAH MINI (khusus modul ini — istilah kiri DILARANG diucapkan ke siswa)

| Jargon (jangan dipakai ke siswa) | Bahasa polos yang dipakai |
|----------------------------------|---------------------------|
| delta | perubahan poin (+/−) |
| clamp / floor / cap | poin dijepit 0–200 (tidak bisa kurang dari 0 atau lebih dari 200) |
| silent vote | pilih diam-diam (rahasia) |
| energizer | pemanasan gerak (biar segar, nggak ngantuk) |
| carry-over | skor dibawa ke fase berikutnya |
| reksa dana / investasi | menaruh uang supaya tumbuh pelan-pelan |
| QR | kode QR (yang discan kamera HP) |
| Tabel Delta (nama tab Sheet) | Tabel Perubahan Poin (nama internal operator — tidak diucapkan ke siswa) |

> Catatan operator: nama tab/rumus Sheet (Tabel Perubahan Poin, SUMIF, dll.) adalah ranah operator (Syendhi) — **tidak pernah diucapkan ke siswa.**

---

### RUNDOWN

| Jam | Durasi | Kegiatan (detail polos) | Cara Main | Penanggung Jawab | KATUP AMAN (kalau mepet) |
|-----|--------|------------------------|-----------|------------------|--------------------------|
| **09.00–09.10** | **10'** | **1. Pembukaan + Recap kilat Hari 1.** MC sapa kelas, pemanasan gerak cepat ("tunjuk diri kamu sekarang vs diri kamu 10 tahun lagi"). Recap 1 menit: "Kemarin kita kenalan sama diri sendiri — Sifat (D/I/S/C), 5 Nilai yang tak bisa ditawar, dan Tujuan Hidup grup. Hari ini kita MULAI menjalani hidupnya: tahun 2026–2028, baru lulus SMA." Ingatkan pertanyaan besar: *"Pas galau milih nanti, mana yang menang — Sifatmu, Nilaimu, atau Tujuanmu?"* | Pleno. Berdiri, gerak 20 detik, lalu duduk. | Dex (MC); Maria (co) | Lewati pemanasan gerak; cukup recap verbal 60 detik sambil tunjuk papan 3 lingkaran (Sifat/Nilai/Tujuan). Hemat ~5'. |
| **09.10–09.20** | **10'** | **2. Recap aturan main + 3 baterai + cek kode siswa.** Syendhi tayangkan papan skor: tiap orang mulai **100/100/100** di ENERGI/UANG/MENTAL. Ucapkan polos: *"Tiap keputusan, ada baterai yang terisi, ada yang berkurang. Tidak ada pilihan yang bikin semua penuh — selalu ada yang ditukar. Itu hidup."* Aturan paku mati: *"Poin tidak akan pernah turun di bawah 0 atau naik di atas 200 — tenang, tidak ada angka minus."* Tiap siswa **cek kodenya** (A-01 dst) sudah tertulis di kartu meja & sudah tahu cara isi Form/Kartu. **CATATAN PERAKITAN:** kalau Modul Materi (Hari 1) sudah dijalankan kemarin, ronde pemanasan "begadang nonton vs tidur" **sudah pernah dimainkan — di sini cukup recap aturan 30 detik, ronde pemanasan DILEWATI** (tidak diulang). Jalankan ronde pemanasan penuh **hanya** bila modul ini dipakai sebagai modul pembuka berdiri-sendiri. | Pleno → (bila berdiri-sendiri) tiap siswa coba 1x pilih A/B rahasia, poin tidak dihitung. | Dex (briefing); Syendhi (papan skor + cek data) | Lewati ronde pemanasan; cukup jelaskan alur lisan + tunjuk papan skor. Hemat ~4'. (Jangan skip pengumuman aturan 0–200 & cek kode — itu pondasi data.) |
| **09.20–09.33** | **13'** | **3. RONDE 1 — F1.1 "Persimpangan Pasca-SMA" (2026).** *(Mulai dengan jembatan 30 detik: "Oke, hidup kalian dimulai. Tahun 2026, baru lulus SMA. Empat keputusan menanti. Pilih jujur sesuai Tujuan grupmu, bukan yang kelihatan keren.")* Cerita: lolos PTN tapi di jurusan pilihan kedua (biaya ringan, bikin orang tua bangga) **vs** PTS jurusan impian dengan beasiswa parsial (sesuai hati, tapi orang tua nanggung sisa biaya). **Poin Pilihan A:** Energi **+5**, Uang **+15**, Mental **−10**. **Poin Pilihan B:** Energi **+12**, Uang **−15**, Mental **+12**. Reveal: A → keluarga bangga & aman finansial, tapi mulai ragu "salah jurusan?"; B → semangat tiap pagi karena cinta bidangnya, tapi merasa berutang budi tiap lihat tagihan. | Alur 6 langkah: (1) Dhevina baca cerita ~2' → (2) tiap siswa **pilih A/B diam-diam** lewat Form HP / lingkari di Kartu, ~40" → (3) diskusi grup 3' (batas keras) → (4) grup putuskan ~40" → (5) Syendhi update poin pribadi+grup ~1' → (6) reveal konsekuensi ~2'. | Dhevina (Lead Fase 1); Syendhi (skor) | Potong diskusi grup ke 2'; reveal cukup 1 kalimat/pilihan. (Jangan skip pilih-rahasia — itu DATA per-siswa.) |
| **09.33–09.46** | **13'** | **4. RONDE 2 — F1.3 "Kerja Sampingan atau Jaga Fokus" (2027).** Cerita: ada peluang kerja sampingan (admin online shop / jualan kecil) — dapat uang jajan sendiri, belajar bisnis dini, **vs** tahan dulu, fokus kuliah & jaga kesehatan. Waktu cuma 24 jam. **Poin Pilihan A:** Energi **−15**, Uang **+15**, Mental **−3**. **Poin Pilihan B:** Energi **+8**, Uang **−8**, Mental **+5**. Reveal: A → dompet terisi sendiri, bangga mandiri, tapi begadang & tugas keteteran; B → nilai & energi terjaga, ada ruang napas, tapi iri lihat teman sudah punya pemasukan. Pelajaran inti: **waktu juga sumber daya.** | Alur 6 langkah sama persis (baca → pilih rahasia → diskusi 3' → putuskan → update poin → reveal). Pancing grup: "Mana yang lebih dekat ke Tujuan grupmu — cuan cepat atau fondasi kuat?" | Dhevina; Syendhi (skor) | Diskusi ke 2'; reveal ringkas. Pilih-rahasia wajib tetap jalan (data). |
| **09.46–09.56** | **10'** | **BREAK + pemanasan gerak + cek data.** Istirahat singkat, minum (bawa sendiri). Peregangan + pemanasan gerak cepat reset fokus. Syendhi cek diam-diam: jumlah jawaban masuk di Sheet = jumlah siswa? (deteksi kalau ada yang belum kirim). | — | Dex (pemanasan gerak); Syendhi (cek Sheet); Theana (foto kandid) | Break boleh dipotong ke 5' kalau jadwal mepet. |
| **09.56–10.09** | **13'** | **5. RONDE 3 — F1.4 "Organisasi atau Magang" (2027).** Cerita: dua undangan barengan, pilih satu — jadi ketua panitia acara besar (jejaring luas + jiwa kepemimpinan, tapi sangat menyita waktu & tanpa bayaran) **vs** magang relevan (pengalaman kerja nyata + sedikit uang saku + portofolio, tapi rutin & kurang "kelihatan"). **Poin Pilihan A:** Energi **−12**, Uang **−5**, Mental **+12**. **Poin Pilihan B:** Energi **−8**, Uang **+10**, Mental **−3**. Reveal: A → lingkar pertemanan meluas, nama dikenal, pulang bangga, tapi tabungan & istirahat terkuras; B → CV terisi pengalaman nyata, paham dunia kerja lebih awal, tapi melewatkan keseruan & jejaring teman organisasi. Inti: **dua jenis "modal" beda — sosial vs profesional, dua-duanya berharga.** | Alur 6 langkah sama. Pancing: "Modal mana yang paling kamu butuh buat Tujuan grupmu?" | Dhevina; Syendhi (skor) | Diskusi ke 2'; reveal ringkas. Data per-siswa wajib jalan. |
| **10.09–10.22** | **13'** | **6. RONDE 4 — F1.5 "Uang Pertama: Gaya Hidup atau Menabung" (2028).** Cerita (penutup Fase 1): pertama kali pegang uang hasil keringat sendiri — rayakan & sedikit upgrade gaya hidup sekarang **vs** sisihkan buat dana darurat + mulai menabung & menumbuhkan uang pelan-pelan untuk masa depan. **Poin Pilihan A:** Energi **+8**, Uang **−12**, Mental **+10**. **Poin Pilihan B:** Energi **−3**, Uang **+15**, Mental **−3**. Reveal: A → hidup terasa "naik kelas", jerih payah terbayar, tapi pas ada kebutuhan mendadak rekening kosong & balik minta orang tua; B → tabungan & dana darurat mulai terbentuk, lebih tenang, tapi sering menahan diri saat teman bersenang-senang. Jembatan ke fase berikut: *"Keputusan kecil soal uang hari ini menentukan seberapa kuat kamu saat badai datang."* | Alur 6 langkah sama. Catatan PJ: ini menabung biasa (dana darurat + menaruh uang supaya tumbuh pelan-pelan), **bukan judi** — tidak ada kocok dadu/koin. Pakai bahasa polos; jangan ucapkan istilah finansial mentah ("reksa dana", "lifestyle inflation", "delayed gratification"). | Dhevina (banker simulasi); Syendhi (skor) | Diskusi ke 2'; reveal ringkas. Pilih-rahasia wajib (ronde penentu data Fase 1). |
| **10.22–10.34** | **12'** | **7. Refleksi singkat per-siswa.** Menulis hening (privat). Pertanyaan pemandu di papan/Form (jawab pendek, 1 kalimat tiap): (a) *"Tadi aku cenderung milih apa — sama atau beda dari grup? Kalau beda, kenapa aku ngalah?"* (b) *"Mana yang paling sering menang di pilihanku — Sifatku, Nilaiku, atau Tujuanku?"* (c) *"Baterai mana (Energi/Uang/Mental) yang paling sering aku korbankan?"* Tutup: *"Tidak ada jawaban salah. Tiap pola keputusan ada untung-ruginya."* | Individual. Tulis di Form HP (privat, terkait kode siswa) / kolom refleksi Kartu Skor Pribadi. | Maria (keamanan emosi); Dex | Ambil **1 pertanyaan saja** (pertanyaan b — Sifat/Nilai/Tujuan). Hemat ~6'. |
| **10.34–10.43** | **9'** | **8. Penutup Fase 1 + simpan data.** Recap hangat: "Fondasi 2026–2028 selesai. Kalian sudah ambil 4 keputusan besar — dan tiap orang jalurnya beda. Itu bagus." Syendhi **simpan/screenshot skor** (digital) atau Theana **foto papan/Kartu** (kertas) sebagai skor dibawa ke fase berikut + backup data. Foto grup. | Pleno + simpan data. | Dex; Syendhi (simpan Sheet); Theana (foto) | Cukup foto papan skor + simpan Sheet; lewati foto grup kalau mepet. (Simpan data WAJIB — jangan skip.) |

---

### VERIFIKASI DURASI

| Blok | Menit |
|------|-------|
| 1. Pembukaan + Recap | 10 |
| 2. Recap aturan + 3 baterai + cek kode (+ pemanasan bila berdiri-sendiri) | 10 |
| 3. Ronde 1 — F1.1 (termasuk jembatan 30") | 13 |
| 4. Ronde 2 — F1.3 | 13 |
| Break + cek data | 10 |
| 5. Ronde 3 — F1.4 | 13 |
| 6. Ronde 4 — F1.5 | 13 |
| 7. Refleksi singkat per-siswa | 12 |
| 8. Penutup + simpan data | 9 |
| **TOTAL KONTEN** | **103 menit** |

**Verifikasi aritmetika:** 10+10+13+13+10+13+13+12+9 = **103 menit.** Mulai 09.00 → selesai **10.43.**

**Sisa ke cap 180':** 180 − 103 = **77 menit cadangan tak terjadwal** (margin sangat lega; bukan blok terjadwal).

> **Kenapa ramping & isi cadangan:** modul ini sengaja 4 skenario agar **anti-gagal**. 77 menit cadangan menyerap: (a) diskusi grup yang molor (4 ronde × bisa +2' = +8'), (b) **insert F1.2 "Gap Year" opsional** sebagai Ronde 5 (+13' → konten ~116', tetap jauh < 180), (c) transisi/teknis/sinyal lemah, (d) reveal yang lebih dalam bila kelas hidup. Jadi modul tetap utuh meski molor; tidak ada blok inti yang perlu dikorbankan.
>
> **Kalau mau dekati ~150' konten** (bukan ramping): aktifkan **semua** opsi — tambah Ronde 5 F1.2 (+13') + lebarkan tiap diskusi ke 4' (4 ronde × +1' = +4') + pair-share refleksi 3' → konten ~123'. Naikkan tiap reveal ke 3' bila kelas hidup untuk mendekati 150'. Pilihan desain; bukan keharusan.
>
> **Opsi isi cadangan (urutan prioritas bila ada waktu):** 1) lebarkan diskusi tiap ronde ke 4' · 2) tambah Ronde 5 = F1.2 "Gap Year atau Langsung Jalan" [A: Energi −8/Uang +8/Mental −3 · B: Energi +8/Uang −12/Mental +5] · 3) pair-share refleksi 3'.

---

### DATA PER-SISWA — DIPASTIKAN JALAN DI MODUL INI

- **Tiap ronde simulasi (F1.1/F1.3/F1.4/F1.5) = 1 titik data per siswa.** Langkah 2 dari alur 6-langkah ("pilih A/B diam-diam") adalah penangkapan datanya — **bukan** keputusan grup. **WAJIB: kunci pilihan rahasia dulu (kirim Form / lingkari Kartu) SEBELUM diskusi grup dibuka.** Fasilitator ucapkan: *"Kunci pilihanmu dulu — baru diskusi."* Pilihan rahasia tidak boleh diubah setelah diskusi. Ini supaya skor pribadi benar-benar cerminan tiap siswa, bukan ikut-ikutan keputusan grup.
- **Digital-first:** 1 Google Form dipakai ulang (Kode Siswa **[pilih dari daftar kode, bukan ketik bebas — cegah salah ketik]** + dropdown Ronde [F1.1/F1.3/F1.4/F1.5] + pilihan A/B). Kode QR/link di tiap meja. Sheet pakai **Tabel Perubahan Poin** Fase 1 (angka di tabel rundown ini) → kolom poin pribadi otomatis.
- **Subtotal akhir Fase 1 (untuk profil "Mekar Belakangan"):** karena tiap jawaban sudah ditandai rondenya (F1.x), Sheet otomatis bisa menjumlahkan **khusus ronde Fase 1** (filter "ronde diawali F1") jadi **TotalF1** per kode siswa. Syendhi **simpan TotalF1 tiap siswa** di akhir modul ini — angka ini dipakai di Modul Fase 3 untuk mendeteksi siswa yang "jatuh di awal, bangkit di akhir". Tanpa simpan ini, profil "Mekar Belakangan" tidak bisa dihitung per-siswa.
- **Hitung skor = jepit saldo berjalan tiap ronde (0–200), bukan jumlah-sekali-di-akhir.** Operator (manual & Sheet) menjaga saldo berjalan per ronde lalu dijepit 0–200 tiap baris — sama persis dengan cara papan tulis/Kartu — supaya skor digital = skor kertas selalu cocok.
- **Backup non-tech tiap blok ber-tech:** pilih-rahasia → kertas dilipat A/B atau lingkari di **Kartu Skor Pribadi** (kolom "Pilihanku A/B" wajib terbaca jelas); papan skor live → papan tulis manual 3 warna (jepit 0–200 tiap ronde); refleksi → kolom kertas di Kartu. Setiap blok teknis di tabel sudah punya KATUP AMAN non-tech.
- **Cek integritas di akhir modul:** Syendhi pastikan **tiap kode siswa punya tepat 4 baris jawaban** (1 per ronde Fase 1) — kalau ada kode dengan >4 (kirim ganda) atau <4 (ada yang belum kirim), perbaiki sebelum simpan. Kalau digital meragukan, **Kartu Skor Pribadi kertas jadi sumber kebenaran.**
- **Akhir modul:** skor berjalan tiap siswa + **TotalF1** tersimpan (Sheet di-screenshot / Kartu difoto) sebagai skor dibawa ke fase berikut + backup mentah DPL.

---

### KALAU WAKTU SANGAT MEPET — URUTAN YANG BOLEH DIPANGKAS

Pangkas dengan urutan ini (paling aman dipotong dulu, inti tetap utuh): **(1)** ronde pemanasan tanpa skor di Blok 2 (−4'; otomatis sudah dilewati bila Modul Materi dijalankan kemarin); **(2)** pemanasan gerak di Blok 1 (−5'); **(3)** persempit semua diskusi grup dari 3' ke 2' di keempat ronde (−8' total); **(4)** ciutkan refleksi Blok 7 ke 1 pertanyaan saja, yaitu "Sifat/Nilai/Tujuan mana yang menang?" (−6'); **(5)** padatkan reveal tiap ronde ke 1 kalimat per pilihan; **(6)** jalan terakhir, **buang 1 skenario — drop F1.4** (Organisasi/Magang) karena trade-off-nya paling mirip dengan ronde lain, sisakan F1.1 (pembuka, terkait Tujuan), F1.3 (waktu sebagai sumber daya), F1.5 (jembatan ke krisis) sebagai tiga ronde inti.

Yang **TIDAK BOLEH** dipangkas dalam kondisi apa pun: pengumuman aturan poin 0–200; langkah "pilih A/B diam-diam" **yang dikunci sebelum diskusi** (itu data per-siswa untuk DPL); jepit saldo 0–200 tiap ronde; simpan **TotalF1** + skor di akhir. Dengan tiga ronde inti pun tiap siswa tetap punya skor Energi/Uang/Mental + bisa diekspor CSV — pondasi Fase 1 tetap berdiri.

---

# MODUL FASE 2 — KRISIS (2029–2032)
## LEAP 2036 — Rundown Menit-per-Menit · KKN STEM 2026, Kelompok 2

> **Sumber konten (reuse):** `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) — Bank Skenario Fase 2 (F2.1–F2.5), Kartu Kejutan (C.1–C.3), naskah penenangan, naskah transisi krisis, catatan keamanan emosi. Angka perubahan poin disalin dari Bank (sudah diterjemahkan ke bahasa polos). **Bila ada selisih angka, Bank Skenario yang menang.**
>
> **3 baterai disebut polos: ENERGI · UANG · MENTAL.** Semua mulai 100. **Aturan paku mati: poin tidak bisa kurang dari 0, tidak bisa lebih dari 200** (kalau hitungan lewat batas → tulis 0 atau 200).
>
> **Kunci pilihan rahasia DULU, baru diskusi:** tiap siswa pakai KODE UNIK (mis. A-07) dari Hari 1. Tiap ronde: pilih A/B **diam-diam (rahasia)** **sebelum** diskusi grup dibuka → masuk lewat **Google Form di HP** (cara utama) ATAU **"Kartu Skor Pribadi" kertas** (cadangan). Pilihan rahasia **tidak boleh diubah** setelah diskusi mulai. Itu sumber skor + Profil 2036 pribadi yang nanti diekspor CSV untuk DPL.
>
> **Mulai 09.00 · Total 126 menit (113' konten + 1 istirahat 12' + pemanasan, semua sudah dihitung) · selesai 11.06.** Ini **total yang dijadwalkan**; sisa sampai batas 180' = **54 menit cadangan TAK terjadwal** (bukan jadwal tambahan — jangan dijumlah jadi 180). Tone: tegang saat narasi, hangat saat hasil diceritakan. Selalu ada pintu aman.

---

## RUNDOWN

| Jam | Durasi | Kegiatan (detail polos) | Cara Main | Penanggung Jawab | KATUP AMAN (kalau mepet) |
|-----|--------|-------------------------|-----------|------------------|--------------------------|
| **09.00–09.12** | **12'** | **1. Pembukaan + Rekap Hari Lalu.** MC buka, sapa, **pemanasan gerak** ringan 1 menit (berdiri, regangkan badan, biar segar). Rekap kilat: "Kemarin kita bangun fondasi 2026–2028, optimis, banyak pintu kebuka. Skor kalian kebawa ke hari ini." Tayangkan **papan keragaman** (sebaran skor, BUKAN peringkat) sebentar. Ulang 3 lapis diri: **Sifat (DISC) / Nilai / Tujuan** — "ingat ini, bakal kepakai hari ini." | Pleno. Skor kemarin dimunculkan singkat (papan sebaran, tanpa urutan). | **Dex (MC)** | Skip pemanasan gerak + skip tayang papan; cukup ucapkan "kemarin fondasi, hari ini badai" + sebut skor kebawa. Hemat ~5'. |
| **09.12–09.20** | **8'** | **2. Masuk Fase Krisis + Pagar Aman.** Turunkan nada, tenang tapi serius. "Hari ini beda — masuk **Fase Krisis, 2029–2032**. Dunia jadi tidak pasti: kehilangan pekerjaan bisa datang, orang yang disayang bisa sakit, badan bisa kecapekan sampai habis." Umumkan **3 pagar aman ke siswa** (WAJIB, bukan catatan internal): **(1)** boleh **diam/lewat** kapan saja — tidak ada yang dipaksa cerita; **(2)** aturan diskusi: **yang dibahas TOKOH di cerita, bukan pengalaman pribadi kalian** — boleh kasih alasan tanpa buka hidup sendiri; **(3)** kalau ada yang terasa berat, **lambai ke Kak Maria / Mas Ben (tim keamanan emosi)** — mereka standby khusus untuk itu. Umumkan juga aturan poin polos: "baterai tidak pernah minus, tidak pernah lewat 200." | Pleno (cerita pembuka). Naskah reuse dari Bank (sudah polos). | **Dex** (Maria & Benediktus berdiri standby di posisi) | Inti tak boleh dipangkas (pagar aman = pondasi keamanan). Kalau mepet, padatkan jadi 5' tapi **3 pagar + aturan poin WAJIB tetap diucap**. |
| **09.20–09.30** | **10'** | **3. Penenangan (latihan napas) — SEBELUM skenario berat, WAJIB di sini.** Maria pimpin. Normalisasi: "wajar kalau sebentar lagi terasa menekan — ini simulasi, kita aman." **Latihan napas ~30 detik** bareng (tarik–tahan–buang, 3 kali). Tegaskan: "tidak ada keputusan yang salah — semua ada untung-ruginya." Ulang sekali lagi: boleh lewat, bahas tokoh bukan diri sendiri, tim keamanan emosi siap dipanggil. | Pleno (menenangkan, tenang). Mata boleh dipejam saat napas. | **Maria** (co: Benediktus, tim keamanan emosi standby) | Boleh dipadatkan ke 6' (napas 2x + 2 kalimat normalisasi). **Tidak boleh di-skip total** — ini pagar emosi sebelum krisis. |
| **09.30–09.44** | **14'** | **4. SKENARIO F2.1 — "Surat PHK" (2029).** Jembatan empati dulu: "kalian mungkin pernah lihat berita PHK massal — bayangin sekarang giliran tokoh kita dapat suratnya." **Narasi:** tokoh **di-PHK karena perusahaan dirombak besar-besaran** — pilih **A: ambil uang perpisahan dari kantor penuh, keluar, coba bangun usaha sendiri** ATAU **B: pindah bagian, gaji dipotong 30%, tetap aman**. **Alur biasa kita 6 langkah:** baca (~2') → **tiap siswa kunci pilihan A/B rahasia dulu** (masuk Form/Kartu **sebelum** diskusi) → diskusi grup (3') → grup putuskan → poin di-update → hasil diceritakan. **Perubahan poin (dari Bank): A:** Energi −5, Uang **+15**, Mental −10. **B:** Energi −10, Uang −10, Mental **+5** (rasa aman). Operator jepit 0–200. Hasil A: "uang perpisahan kasih kebebasan, tapi 3 bulan kemudian uang cepat menipis." Hasil B: "gaji kecil sesak tiap tanggal tua, tapi masih ada struktur & jaringan kantor." Tutup: "pilihan kalian dipengaruhi **tujuan hidup** kelompok, bukan karena satu lebih pintar." | **Alur 6 langkah.** Kunci pilihan rahasia (DATA per-siswa) **via Google Form di HP**, tiap kode 1 baris; skor live di Sheet. | **Benediktus** (lead Fase 2); **Syendhi** (operator skor) | **Cadangan tanpa internet:** pilih rahasia = **kertas dilipat tanda A/B**; skor = **papan tulis manual** (operator jepit: kalau < 0 tulis 0). Kalau mepet: diskusi grup dipotong ke 2', hasil diceritakan 1 kalimat. |
| **09.44–09.58** | **14'** | **5. SKENARIO F2.2 — "Telepon Tengah Malam" (2030).** **Ulang pagar aman sebelum baca** (titik sensitif: orang tua sakit) — "kita bahas tokohnya ya, bukan pengalaman pribadi." Jembatan empati singkat. **Narasi:** ayah tokoh masuk IGD, biaya kurang ~tabungan 8 bulan; lusa ada presentasi paling penting tahun ini. **A: ambil cuti darurat, pulang, kuras tabungan, urus sendiri** (proyek diserahkan rekan) ATAU **B: kirim sebagian uang, tetap presentasi, urus dari jauh + minta saudara bantu**. **Perubahan poin (Bank): A:** Energi −15, Uang **−20**, Mental **+5**. **B:** Energi −5, Uang −10, Mental **−15** (rasa bersalah). Hasil A: "kehilangan momentum & tabungan, tapi pas ayah sadar, kamu ada di sana." Hasil B: "presentasi sukses, tapi bayangan 'aku tidak ada saat dibutuhkan' mengikuti lebih lama." | **Alur 6 langkah.** Kunci pilihan rahasia dulu → Form HP (per kode). Maria & Benediktus **pantau ekspresi siswa** sepanjang blok. | **Benediktus** (co: **Maria** keamanan emosi); Syendhi (skor) | Cadangan tanpa internet: kertas dilipat + papan tulis. **Pagar aman & pemantauan tim keamanan emosi tidak boleh di-skip.** Kalau mepet: diskusi 2', langsung hasil. |
| **09.58–10.10** | **12'** | **ISTIRAHAT + air.** Tanpa anggaran konsumsi — siswa bawa minum sendiri / disediakan sekolah. Tim keamanan emosi (Maria/Benediktus) **berkeliling**, cek siswa yang mungkin terbawa berat tadi. Theana foto kandid. Syendhi cek Sheet/skor masih sinkron. | — | **Maria** (pantau emosi); Syendhi (cek teknis) | Boleh dipersingkat ke 8' kalau jadwal mepet, tapi **jangan dihapus** — jeda ini reset emosi sebelum 2 skenario berikutnya. |
| **10.10–10.24** | **14'** | **6. SKENARIO F2.3 — "Sudah Tidak Ada yang Tersisa" (2031).** **Ulang pagar aman** (tema kecapekan/kelelahan habis): "bahas pilihan tokoh ya, kalau ada yang ngerasa capek mirip ini boleh banget — tapi nggak wajib cerita, boleh lewat." Bingkai sebagai **kelelahan biasa**, jangan dibikin seperti diagnosa. **Narasi:** tokoh tidur 4 jam, lembur biasa, semua terasa malas dijalani; atasan tawarkan proyek "sayang dilewatkan" + bonus besar. **A: ambil jeda, mundur/cuti panjang untuk pulih** (dianggap "kurang ambisius") ATAU **B: terus jalan pakai kafein & tekad, ambil proyek + bonus**. **Perubahan poin (Bank): A:** Energi **+20**, Uang −20, Mental **+10**. **B:** Energi **−20**, Uang **+15**, Mental −15. Hasil A: "awalnya bersalah & tabungan menipis, tapi pelan-pelan kenal lagi suara sendiri." Hasil B: "bonus masuk & dipuji, sampai suatu titik benar-benar mentok dan berhenti lebih lama." Tegaskan: A bukan "jelas paling benar" — cuti itu mahal & bikin cemas tertinggal. | **Alur 6 langkah.** Kunci pilihan rahasia dulu → Form HP (per kode). Tim keamanan emosi standby, dekati personal bila ada yang terguncang. | **Benediktus** (co: **Maria**); Syendhi (skor) | Cadangan tanpa internet: kertas dilipat + papan tulis. Pagar aman + standby tim keamanan emosi wajib. Kalau mepet: diskusi 2'. |
| **10.24–10.38** | **14'** | **7. SKENARIO F2.4 — "Orang yang Menahanmu" (2031–2032).** **Ulang pagar aman** (titik paling sensitif: hubungan yang melelahkan): "ngomonginnya soal tokoh, bukan hubungan pribadi kalian." Framing: bahas **pola yang mengecilkan diri**, jangan salahkan satu orang. **Narasi:** hubungan lama, tokoh sering direndahkan tiap semangat soal mimpi ("ngapain sih, nggak usah aneh-aneh"); mulai mengecilkan diri. **A: akhiri hubungan baik-baik** (sakit & sendiri sementara) ATAU **B: bertahan, kompromi, kecilkan ambisi demi hubungan utuh**. **Perubahan poin (Bank): A:** Energi −10, Uang 0, Mental **−5 dulu lalu +15** → **operator masukkan HASIL BERSIH-nya saja: Mental +10** (siswa boleh diceritakan dinamika "sakit dulu baru lega", tapi angka yang dijumlahkan tetap **+10**, bukan −5 atau +15). **B:** Energi −5, Uang +5, Mental **−15**. Hasil A: "malam pertama sangat sepi & sempat ragu, pelan-pelan ruang itu terisi mimpi sendiri lagi." Hasil B: "dari luar utuh, setahun kemudian menatap cermin & tidak kenal versi diri yang mengecil." Catatan: untuk grup *Keluarga di Atas Segalanya*, B bisa benar sesuai nilai mereka — **jangan dihakimi**. | **Alur 6 langkah.** Kunci pilihan rahasia dulu → Form HP (per kode). Tim keamanan emosi standby penuh (titik paling sensitif). | **Benediktus** (co: **Maria**); Syendhi (skor) | Cadangan tanpa internet: kertas dilipat + papan tulis. Pagar aman + standby tim keamanan emosi **wajib, tidak boleh di-skip**. Kalau mepet: diskusi 2'. |
| **10.38–10.46** | **8'** | **8. KARTU KEJUTAN (OPSIONAL — boleh di-SKIP kalau mepet).** Syendhi **undi 1 kartu acak** dari tumpukan (C.1/C.2/C.3), **berlaku serempak ke SELURUH kelas** (bukan ke grup tertentu → tidak ada perbandingan, tetap NO JUARA). **Tanpa pilih A/B** (di luar kendali). Frame WAJIB (Dex): *"ini undian nasib, bukan hukuman, bukan soal grup mana lebih baik."* Pilihan kartu (super-simpel, tinggal dibacakan): **C.1 "Layar Mati Mendadak"** → Energi −10, Uang −10, Mental −5; grup sebut 1 cara biar tak terulang (60"). **C.2 "Rejeki Nomplok yang Bikin Pusing"** → Uang **+15**, Mental −10, Energi −5; grup putuskan 1 kalimat: dipakai apa & jaga damai (60"). **C.3 "Badai di Luar Kendali"** → Uang −15, Energi −10, Mental −10; grup sebut 2 sumber dukungan (90"). Operator jepit 0–200. | Pleno. Undi kartu, baca keras, operator update skor ke semua grup serempak. **Aturan data (penting):** karena kartu ini **sama untuk semua & tanpa pilihan rahasia**, efeknya **TIDAK dimasukkan ke skor PRIBADI tiap siswa** (skor pribadi murni dari pilihan rahasia A/B). Kartu Kejutan hanya menggeser **skor kelompok di papan**. Catat keputusan ini supaya skor pribadi (CSV DPL) tetap konsisten dengan kartu/Form. | **Syendhi** (undi) + **Dex** (narasi/frame) | **INI BLOK PALING BOLEH DI-SKIP** kalau waktu mepet (sesuai desain: opsional, bukan mekanik wajib). Kalau di-skip, langsung lompat ke Refleksi. Kalau jalan & teknis mati: undi **kartu fisik tercetak**, skor manual papan tulis. |
| **10.46–10.58** | **12'** | **9. Refleksi + Mini-jurnal (tempat melepas tegang).** Dex pimpin pelan. 2–3 siswa **sukarela** berbagi (soal **pola pilihan**, bukan kisah pribadi): "tadi di badai, pilihanmu lebih digerakkan **Sifat (DISC), Nilai, atau Tujuan** kelompok?" Lalu **mini-jurnal hening 2'** (di HP/Kartu): tulis 1 kalimat — *"lapis mana yang paling sering menang saat aku panik — Sifat, Nilai, atau Tujuan?"* + *"skenario mana yang paling mengganggu, kenapa?"*. Validasi **jalur paralel**: tiap kelompok tujuannya beda, jadi pilihan beda itu wajar — BUKAN benar/salah. | Pleno (share sukarela) + tulis hening individu. | **Dex** (co: **Maria** keamanan emosi) | Skip pleno-share, langsung **mini-jurnal 2' saja** (tempat lepas tegang wajib ada — jangan tancap gas ke Fase 3 tanpa pelepasan). Hemat ~7'. |
| **10.58–11.06** | **8'** | **10. Penutup Fase 2 + Jembatan ke Fase 3.** Dex naikkan tone ke tenang & lega: "badai mulai reda — besok/berikutnya kita masuk **Fase Panen 2033–2036**, lihat apa yang kalian panen dari semua keputusan ini." Apresiasi keberanian kelas melewati fase berat. **Pengingat:** skor & pilihan rahasia tiap siswa sudah tersimpan (Form/Kartu) — itu jadi bahan Profil 2036 nanti. Foto kelas singkat. | Pleno (seremonial, hangat). | **Dex**; **Theana** (foto); Syendhi (pastikan skor tersimpan/di-screenshot) | Padatkan ke 4' (1 kalimat penutup + pengingat skor tersimpan). Skor **wajib disimpan/di-foto** untuk dibawa ke Fase 3. |

---

## VERIFIKASI DURASI (cek jam per-baris)

Cek rantai jam (tiap "mulai" = "selesai" baris sebelumnya, tidak ada menit > 59):
09.00 →(12)→ 09.12 →(8)→ 09.20 →(10)→ 09.30 →(14)→ 09.44 →(14)→ 09.58 →(12 istirahat)→ 10.10 →(14)→ 10.24 →(14)→ 10.38 →(8)→ 10.46 →(12)→ 10.58 →(8)→ **11.06**. ✔ Rantai jam konsisten.

Jumlah durasi: 12 + 8 + 10 + 14 + 14 + **12 (istirahat)** + 14 + 14 + 8 + 12 + 8 = **126 menit.**
Mulai **09.00** → selesai **11.06**. **126 ≤ 180.** Konten murni (tanpa istirahat) = **114'**.

**Soal angka 126 vs 180 (supaya tidak salah baca):** **126 menit adalah TOTAL yang dijadwalkan** (sudah termasuk istirahat 12'). Sisa sampai batas keras 180' = **54 menit CADANGAN tak terjadwal** — itu bukan slot acara tambahan, **jangan dijumlah 126+54 jadi 180**. Yang berjalan di lapangan = 126'. Modul ini sengaja **ramping** (di bawah target ~150' konten) demi anti-gagal; kalau tim mau lebih penuh, lihat catatan reuse di bawah (selipkan F2.5 atau lebarkan diskusi tiap skenario ke 4').

**Catatan reuse:** 4 skenario dipakai (F2.1, F2.2, F2.3, F2.4). **F2.5 "Pintu yang Cuma Terbuka Sekali" sengaja TIDAK dimasukkan di modul ini** — hasilnya menunda ke Fase 3 ("Resolusi Taruhan F2.5"), jadi lebih bersih dijalankan di Modul Fase 3. Kalau tim mau 5 skenario & ada sisa waktu, F2.5 bisa diselipkan di slot Kartu Kejutan (tukar), tapi default-nya 4 skenario + 1 kartu opsional agar tetap longgar.

**Catatan operator skor (Syendhi) — supaya digital = manual:**
- **F2.4 di "Tabel Perubahan Poin" (Sheet/manual): masukkan Mental A = +10 (hasil bersih).** Jangan masukkan dua baris −5 dan +15, dan jangan masukkan salah satunya saja. Ini satu-satunya skenario Fase 2 dengan perubahan berurutan.
- **Kunci pilihan rahasia sebelum diskusi:** operator tutup/tandai ronde di Form **sebelum** diskusi grup dibuka. Form merekam jam masuk — buang jawaban yang masuk setelah diskusi dibuka, supaya skor pribadi murni dari pilihan rahasia (bukan ikut-ikutan grup). Inilah sinyal individu yang diminta DPL.
- **Kartu Kejutan TIDAK masuk skor pribadi** (lihat blok 8) — hanya geser skor kelompok di papan. Konsisten dengan CSV DPL.

---

## KALAU WAKTU SANGAT MEPET — URUTAN YANG BOLEH DIPANGKAS

Pangkas dari yang paling aman dulu, jangan sentuh pagar emosi. **Urutan pemangkasan:** (1) **SKIP total Kartu Kejutan** (blok 8, −8'; memang opsional by design). (2) **Potong pleno-share di Refleksi**, sisakan mini-jurnal 2' saja (−7'). (3) **Persingkat istirahat ke 8'** (−4') & potong pemanasan gerak + tayang papan di Pembukaan (−5'). (4) **Tiap skenario: potong diskusi grup ke 2'** dan ceritakan hasil dalam 1 kalimat (−2'/skenario). (5) Bila masih mepet, **turun ke 3 skenario** (buang F2.3 ATAU F2.4 — pertahankan F2.1 "PHK" + F2.2 "keluarga sakit" sebagai inti krisis; F2.4 lebih boleh dikorbankan daripada F2.2 karena F2.2 sudah menyentuh dilema bakti). **JANGAN PERNAH dipangkas:** 3 pagar aman + penenangan Maria (blok 2–3), pengulangan pagar sebelum F2.2/F2.4, standby tim keamanan emosi, mini-jurnal sebagai tempat lepas tegang, dan aturan poin tidak-pernah-minus. **Pilihan rahasia tetap dikunci sebelum diskusi** sekalipun mepet — itu data per-siswa untuk DPL. Dengan semua pangkasan, modul bisa turun ke ~85–95' tanpa merusak inti: tegang, aman, dan **data per-siswa tetap tertangkap tiap skenario** (pilih rahasia → Form/Kartu).

**File sumber load-bearing:** `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) (Bank Skenario F2.1–F2.5; Kartu Kejutan/Chaos C.1–C.3; naskah penenangan & pagar aman; catatan keamanan emosi).

---

# MODUL FASE 3 — PANEN (2033–2036) · LEAP 2036
## Rundown menit-per-menit · 1 hari workshop · versi padat 3 jam (KKN STEM 2026, Kelompok 2)

> **Sumber konten (REUSE):** `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) — skenario terminal **F3.1 "Tawaran Puncak"** & **F3.2 "Titik Balik 2036"** (§b, baris 537–581), Resolusi Taruhan F2.5 (§a), tangga 7-Profil (§B.2/B.3, ambang 115/85/35-gap, ΔF3≥25), flow reveal (§B.5), papan keragaman (§B.6), template Surat (§11b). Angka perubahan poin diambil persis dari sana, tinggal disebut polos: **"perubahan poin (+/−)"**.
>
> **3 poin disebut polos: ENERGI · UANG · MENTAL.** Semua mulai 100 (dibawa dari modul sebelumnya). **Aturan: poin tidak bisa kurang dari 0, tidak bisa lebih dari 200.**
>
> **Data per-siswa:** tiap siswa pakai KODE UNIK (mis. A-01) sejak Hari 1. Tiap skenario di modul ini, tiap siswa pilih A/B **diam-diam (rahasia)** → masuk Google Form/Sheet (1 baris/kode) ATAU ditulis di **Kartu Skor Pribadi** kertas. Di akhir modul ini tiap siswa punya skor akhir ENERGI/UANG/MENTAL + Profil 2036, siap diekspor CSV untuk DPL/laporan/skripsi.
>
> **Mulai 09.00.** Target ~150' konten + cadangan, total ≤180'.

---

## KAMUS MINI (khusus modul ini — istilah yang sempat dipakai tim/operator)

| Istilah (jangan diucap ke siswa) | Bahasa polos yang dipakai |
|----------------------------------|----------------------------|
| energizer | **pemanasan gerak** (biar nggak ngantuk/segar lagi) |
| re-anchor / anchor cerita | **tarik balik ke alur cerita** (ingatkan posisi cerita) |
| reframe profil berat | **bingkai ulang dengan sudut positif** |
| micro-debrief | **obrolan singkat penenang** |
| carry-over | **dibawa ke hari/fase berikutnya** |
| konsolidasi / reinvensi | **(JANGAN diucap)** pakai kalimat polos di label A/B |
| showcase | **galeri refleksi** |
| pivot (Sheet) / IFS / SUMIF / VLOOKUP | **(KHUSUS operator/Syendhi — tidak pernah diucap ke siswa)** |
| Tabel Delta | **Tabel Perubahan Poin** (nama internal operator) |

---

## RUNDOWN

| Jam | Durasi | Kegiatan (detail polos) | Cara Main | Penanggung Jawab | KATUP AMAN (kalau mepet) |
|-----|--------|--------------------------|-----------|------------------|--------------------------|
| 09.00–09.12 | **12'** | **1. Pembukaan + Recap "kita di mana".** MC sapa, pemanasan gerak 1 menit. Tayangkan/tunjuk skor berjalan tiap kelompok dari modul sebelumnya (Fase 2). Tarik balik ke alur cerita: *"Badai (2029–2032) sudah lewat. Sekarang 2033–2036 — waktunya PANEN: kita lihat hasil dari semua pilihan kalian. Hari ini kalian ambil 2 keputusan terakhir, hitung skor akhir, lalu lihat 'kalian jadi orang seperti apa' di 2036."* Ingatkan kode siswa masih dipakai + aturan poin (tidak bawah 0 / tidak atas 200). | Pleno. Skor lama tampil di proyektor (Sheet/Canvas) **atau** ditulis ulang di papan tulis dari foto skor kemarin. | **Dex** (MC); Syendhi (skor) | Lewati pemanasan gerak + recap panjang. Cukup 1 kalimat: *"Badai lewat, hari ini kita panen + lihat hasil."* Hemat ~5'. |
| 09.12–09.16 | **4'** | **2. Resolusi Taruhan F2.5 (tutup utang cerita).** Untuk tiap kelompok/siswa yang dulu pilih **A "Resign, gas usaha rintisan"** di skenario F2.5: tarik 1 **Kartu Hasil** (tumpukan "Berhasil/Belum" rasio 50:50 — BUKAN dadu/koin, hindari kesan judi). **Berhasil → UANG +20**; **Belum → tidak ada tambahan** (modal awal yang dulu keluar tetap hangus). Operator update skor sebelum skenario berikut. | Banker tarik kartu fisik di depan kelas, bacakan hasil tiap kelompok. Skor pribadi siswa yang pilih A juga di-update (di Sheet otomatis, atau siswa tulis sendiri di kartu). | **Dhevina** (banker); Syendhi (skor) | Kalau tidak ada yang pilih A / lupa catat → **SKIP total**. Tidak merusak inti. Hemat 4'. |
| 09.16–09.28 | **12'** | **3. Skenario Penutup #1 — F3.1 "Tawaran Puncak" (2034).** Fasilitator baca cerita (±2'): umur 27, datang tawaran karier/usaha/beasiswa terbesar — tapi minta 2–3 tahun intensitas penuh (pindah kota, jam kerja gila, jauh dari orang terdekat). **A "Ambil, sekarang atau tidak sama sekali":** UANG +18, ENERGI −15, MENTAL −12. **B "Tolak, aku sudah punya cukup":** MENTAL +14, ENERGI +8, UANG −12. Tutup dengan kalimat netral wajib: *"Yang melompat dan yang menahan diri sama-sama membayar, sama-sama dapat sesuatu."* | **Alur biasa kita (6 langkah):** (1) fasilitator baca cerita → (2) tiap siswa **pilih A/B diam-diam (rahasia) DULU, sebelum diskusi**, ke Form HP/kartu — operator tutup/tandai ronde sebelum diskusi mulai, pilihan tidak boleh diubah → (3) diskusi kelompok 3' → (4) kelompok putuskan A/B → (5) poin di-update (pribadi dari pilihan rahasia + kelompok dari konsensus) → (6) hasil diceritakan. | **Dhevina** (lead); Syendhi (skor); Maria (jaga emosi) | Potong diskusi kelompok jadi 1,5'. Pilihan rahasia (data) **jangan di-skip**. Bisa hemat ~3'. |
| 09.28–09.40 | **12'** | **4. Skenario Penutup #2 — F3.2 "Titik Balik 2036" (2036).** Fasilitator baca cerita (±2'): umur 29, ujung 10 tahun. Keputusan terakhir = *arah jiwa* ke depan. **A "Berhenti mengejar, mau hidup tenang & merasa cukup":** MENTAL +16, ENERGI +10, UANG −8. **B "Mulai babak baru, aku belum selesai bertumbuh":** ENERGI +14, UANG +6, MENTAL −13. *(catatan operator, jangan dibacakan: A=konsolidasi, B=reinvensi.)* Tutup dengan pesan penutup (Dex, ±1'): *"Setiap angka di layar bukan nilai rapor — itu cermin pola memilih kalian. Profil nanti bukan ramalan, bukan vonis."* | Sama: **alur biasa kita 6 langkah**. Pilihan rahasia tiap siswa **dikunci dulu sebelum diskusi** lalu masuk ke data. Ini skenario terakhir yang mengunci skor pribadi & kelompok. | **Dhevina** (lead); Syendhi (skor); Dex (pesan penutup) | Potong diskusi jadi 1,5'. Pilihan rahasia + update skor **wajib jalan** (ini mengunci data akhir). Hemat ~3'. |
| 09.40–09.50 | **10'** | **ISTIRAHAT + air** (siswa bawa minum sendiri / dari sekolah — tanpa anggaran konsumsi). **Di balik layar:** Syendhi finalisasi skor (cek Sheet sudah jepit 0–200) **atau** fasilitator kumpulkan/foto Kartu Skor Pribadi untuk input. | Jeda. Operator skor kerja diam-diam. | **Maria** (pantau emosi); Syendhi (siapkan skor) | Kalau skor sudah beres, istirahat boleh dipangkas jadi 5'. Pakai sisanya untuk reveal. |
| 09.50–10.03 | **13'** | **5. Hitung Skor Akhir + tentukan Profil (per-siswa + per-kelompok).** Operator finalkan 3 angka tiap siswa & tiap kelompok (sudah dijepit 0–200, dengan cara jepit yang SAMA seperti papan/kartu — jepit saldo berjalan tiap ronde, bukan jumlah-sekali-di-akhir, supaya digital = manual). Lalu tentukan **Profil 2036** pakai **tangga 7-baris (cek dari atas, berhenti di yang pertama cocok)**. Ambang polos: **TINGGI ≥115 · SEDANG 85–114 · RENDAH <85** (E=Energi, U=Uang, M=Mental): **(1)** Sukses-tapi-Tumbang = U TINGGI & (E RENDAH atau M RENDAH); **(2)** Pelari Tanpa Rem = E TINGGI & U TINGGI & M RENDAH; **(3)** Bijak yang Tenang = M TINGGI & E bukan-tinggi & U bukan-tinggi; **(4)** Mekar Belakangan = total naik ≥25 poin dari akhir Fase 1 ke akhir & total akhir-Fase-1 di bawah 290 *(butuh angka total tiap siswa/kelompok saat selesai Fase 1 — pastikan ini tercatat/terhitung; digital: jumlah ronde F1 saja)*; **(5)** Pemberontak Kreatif = selisih poin tertinggi−terendah ≥35 **DAN** minimal 1 poin TINGGI (≥115) **DAN** minimal 1 poin RENDAH (<85) *(tiga syarat — gap saja TIDAK cukup; contoh jebakan: E=110/U=110/M=70 gap 40 tapi tak ada yang ≥115 → BUKAN Pemberontak Kreatif)*; **(6)** Pembangun Seimbang = ketiga poin ≥85 & selisih antar-poin di bawah 35; **(7)** Penjelajah Reflektif = sisa (semua yang tak cocok di atas). | **Digital:** kolom `Profil` di Sheet pakai rumus (ranah operator) — hitung otomatis, sama persis dengan manual. Pastikan ada kolom **TotalF1** (jumlah skor saat selesai Fase 1) supaya Mekar Belakangan bisa terhitung per-siswa. **Non-tech:** operator + 1 fasilitator pakai **kartu cek 7 baris** di papan, baca dari atas, <20 detik/kelompok; tempel sticker profil ke kotak di papan keragaman. | **Syendhi** (operator); Dhevina (verifikasi) | **Default kalau dikerjakan manual:** hitung **profil KELOMPOK saja** di lokasi (6–8 kelompok, cepat). Profil INDIVIDU dihitung rumus **setelah acara** dari skor tersimpan/foto kartu — tidak ada yang hilang. (13' realistis hanya bila jalur digital otomatis sudah jalan.) |
| 10.03–10.23 | **20'** | **6. REVEAL Profil 2036 lewat "Papan Keragaman" (bukan peringkat).** **(±2') Framing:** Dex tegaskan SEBELUM angka muncul: *"Ini bukan papan juara. Tidak ada profil paling bagus. Ini cermin keragaman — dari start sama (100/100/100), kita jadi 7 macam orang yang sama-sama nyata."* **(7–8') Reveal KELOMPOK:** tampilkan profil tiap kelompok satu per satu; tiap profil dibaca **berpasangan untung+trade-off-nya** (mis. *"Pelari Tanpa Rem — energi & uang ngebut; trade-off-nya mental naik-turun"*), dikaitkan ke Tujuan Hidup kelompok. DILARANG kata "terbaik/menang/kalah/sayang skornya rendah". **(7–8') Reveal INDIVIDU (PRIVAT):** tiap siswa lihat profil pribadinya sendiri (dari pilihan rahasia) **di HP / kartu hasil / dibisikkan per meja — TIDAK diumumkan ke kelas, TIDAK diurutkan.** Pemantik: *"Profil pribadimu sama atau beda dari kelompok? Pas kamu pilih sendirian, kamu orang seperti apa?"* **(3') Obrolan singkat penenang (WAJIB):** Maria/Benediktus bingkai ulang profil "berat" (*Sukses-tapi-Tumbang / Pelari Tanpa Rem*) dengan sudut positif: *"Ini bukan vonis, cuma cermin pola — dan pola bisa diubah mulai besok."* | Papan keragaman = **sebaran**: diagram batang "berapa kelompok di tiap profil" (Sheet/proyektor) **atau** 7 kotak di papan tulis, tiap kelompok tempel sticker ke kotak profilnya. Headline terpampang: **"7 jalur. 0 juara. Semua nyata."** Tidak ada skor diurut. | **Dex** (pandu); Syendhi (tampilkan); Maria/Benediktus (penenang) | Reveal **kelompok saja**, patok ≤45 detik/kelompok. Profil individu dibagi lewat HP/kartu **tanpa dibacakan** (siswa lihat sendiri). **Obrolan penenang profil berat TIDAK BOLEH di-skip** (keamanan emosi). Hemat ~6'. |
| 10.23–10.26 | **3'** | **7. Jembatan ke Surat + ekspor data (di balik layar).** Dex transisi tone (tenang): *"Kalian sudah lihat jadi orang seperti apa. Sekarang, versi kalian di 2036 mau nulis surat ke kalian yang sekarang."* **Sementara itu** operator unduh data per-siswa (Kode, Energi, Uang, Mental, TotalF1, Profil) dari tab EKSPOR jadi file CSV — **data per-siswa untuk DPL beres**. | Pleno (Dex bicara). Operator ekspor diam-diam (tidak ditampilkan ke siswa — file data bukan untuk dipamerkan/diranking ke peserta). | **Dex** (transisi); Syendhi (ekspor CSV) | Ekspor CSV bisa dilakukan **kapan saja setelah skor final**, tidak harus di sini. Blok ini boleh digabung ke awal Surat. Hemat 3'. |
| 10.26–10.50 | **24'** | **8. MULAI nulis "Surat dari Diri 2036" (template terpandu).** Maria/Theana intro lembut (±3', musik tenang, lampu boleh diredupkan): *"Versi kalian di 2036 lagi nulis surat buat kalian yang umur 17–18 sekarang. Apa yang dia syukuri? Apa yang dia sesali? Apa yang dia mau kalian tahu dari sekarang? Tinggal isi yang kosong, dari hati. Nggak ada yang baca kecuali kalian."* (±20' menulis hening) Template rumpang ditampilkan: *"Hai [nama], umur [skrg]… aku menulis dari 2036, umurku __, hidupku __ … keputusan paling penting __ … yang paling kusyukuri __ … yang kusesali __ … satu hal supaya kamu nggak buta masa depan __ … kamu cukup __ …"* | Individu, hening. **Tech:** isi di Form HP → auto-jadi-PDF kenang-kenangan. **Non-tech:** kertas template tercetak, di-scan/foto kemudian. Maria & Theana berkeliling untuk siswa yang emosional (tisu, jangan dipaksa lanjut). | **Maria & Theana** (pandu); Dex (co) | Isi **3 baris inti saja** (hidupku 2036…, yang kusyukuri…, pesan supaya nggak buta masa depan…); sisanya diselesaikan di rumah / Fun Day. Surat **tidak boleh dihapus** dari acara (output kunci dibawa pulang). |
| 10.50–10.58 | **8'** | **9. Penutup Modul + titip ke Fun Day.** Rekap hangat: *"Hari ini kalian memanen 10 tahun, lihat profil kalian, dan mulai surat buat diri sendiri."* Ingatkan: skor pribadi + profil sudah tersimpan (privat). Pratinjau Fun Day: surat diselesaikan, games, galeri refleksi, apresiasi sama-rata. Foto kelas. **Pastikan tersimpan:** screenshot skor (digital) / foto papan + Kartu Skor Pribadi terkumpul (non-tech) sebagai backup data DPL. | Pleno. Foto kelas (Theana). Operator simpan/backup data. | **Dex** (penutup); Theana (foto); Syendhi (backup data) | Lewati pratinjau Fun Day panjang. Cukup: rekap 1 kalimat + foto kelas + **pastikan data tersimpan/terfoto** (jangan skip backup). Hemat ~4'. |

---

## VERIFIKASI DURASI

| Blok | Jam | Menit |
|------|-----|-------|
| 1. Pembukaan + Recap | 09.00–09.12 | 12 |
| 2. Resolusi Taruhan F2.5 | 09.12–09.16 | 4 |
| 3. Skenario F3.1 "Tawaran Puncak" | 09.16–09.28 | 12 |
| 4. Skenario F3.2 "Titik Balik 2036" | 09.28–09.40 | 12 |
| ISTIRAHAT | 09.40–09.50 | 10 |
| 5. Hitung Skor Akhir + Profil | 09.50–10.03 | 13 |
| 6. REVEAL via Papan Keragaman | 10.03–10.23 | 20 |
| 7. Jembatan + ekspor CSV | 10.23–10.26 | 3 |
| 8. Mulai Surat 2036 | 10.26–10.50 | 24 |
| 9. Penutup + titip Fun Day | 10.50–10.58 | 8 |
| **TOTAL** | **09.00–10.58** | **118 menit** |

**Aritmetika:** 12+4+12+12+10+13+20+3+24+8 = **118 menit**. Mulai 09.00 → selesai **10.58**. **Di bawah cap 180' dengan cadangan tak terjadwal ~62 menit** (sengaja lega: untuk transisi siswa SMA yang lambat, antrean isi Form HP, diskusi yang melar, dan momen emosional di Surat yang tak boleh diburu-buru). Bila tim ingin lebih dekat ke target ~150' konten, tambah waktu Surat ke 30' dan reveal individu ke penuh — tetap di bawah 180'.

**Cek jam berantai:** tiap "jam mulai" blok = "jam selesai" blok sebelumnya, tidak ada menit >59 atau jam melompat. 09.00→09.12→09.16→09.28→09.40→09.50→10.03→10.23→10.26→10.50→10.58. ✔

**Cek wajib:**
- **(a) Bahasa polos** — jargon diganti: "delta"→"perubahan poin (+/−)", "clamp/floor"→"poin tidak bawah 0 / tidak atas 200", "silent vote"→"pilih diam-diam (rahasia)", "hybrid"→"alur biasa kita 6 langkah", "diversity dashboard"→"papan keragaman", "energizer"→"pemanasan gerak", "re-anchor"→"tarik balik ke alur cerita", "micro-debrief"→"obrolan singkat penenang", "reframe"→"bingkai ulang sudut positif", "showcase"→"galeri refleksi". Label F3.2 tidak lagi pakai "Konsolidasi/Reinvensi" ke siswa (jadi catatan operator saja). Rumus Sheet ditandai KHUSUS operator.
- **(b) Backup non-tech** di tiap blok ber-tech: skor (Sheet→papan tulis), pilihan rahasia (Form→kertas dilipat/Kartu Skor Pribadi), profil (rumus→kartu cek 7 baris), reveal (proyektor→sticker di papan), Surat (Form auto-PDF→kertas template).
- **(c) Data per-siswa jalan** di tiap blok simulasi (F3.1, F3.2) lewat pilihan rahasia **yang dikunci sebelum diskusi** → skor pribadi (jepit saldo berjalan, sama dengan manual) → kolom TotalF1 ada → profil (7 profil utuh, termasuk Mekar Belakangan) → CSV.
- **(d) Total 118' ≤ 180'** terverifikasi.

---

## KALAU WAKTU SANGAT MEPET — urutan yang boleh dipangkas

Pangkas dari yang paling tidak merusak inti ke yang paling penting (jangan pernah sentuh tiga hal terakhir): **pertama**, lewati Resolusi Taruhan F2.5 kalau tak ada yang pilih A (−4'); **kedua**, pangkas Pembukaan/Recap jadi 1 kalimat dan Penutup jadi rekap singkat (−9'); **ketiga**, potong diskusi kelompok tiap skenario dari 3' jadi 1,5' (−6'); **keempat**, hitung dan reveal **profil KELOMPOK saja** di lokasi (≤45 detik/kelompok), sedangkan profil INDIVIDU + ekspor CSV dikerjakan dari skor/foto kartu **setelah acara** (−10'); **kelima**, persingkat Surat ke 3 baris inti dan selesaikan sisanya di Fun Day (−14'). Yang **TIDAK BOLEH** dikorbankan walau bagaimana pun: **(1)** pilihan rahasia tiap siswa di kedua skenario (dikunci sebelum diskusi) + update skor (ini satu-satunya sumber data per-siswa — kalau hilang, DPL tak dapat skor/profil per-anak); **(2)** obrolan singkat penenang yang bingkai ulang profil "berat" *Sukses-tapi-Tumbang / Pelari Tanpa Rem* (keamanan emosi); **(3)** prinsip papan keragaman non-juara ("7 jalur. 0 juara. Semua nyata.") — reveal boleh dipercepat tapi tidak boleh berubah jadi peringkat.

---

# MODUL FUN DAY (Hari Terakhir) — Rundown Menit-per-Menit
## LEAP 2036 — versi padat 3 jam/hari (KKN STEM 2026, Kelompok 2)

> **Sumber konten (reuse, disederhanakan bahasanya):** `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (arsip) — Template Surat 2036 (§11b), skrip Reveal Profil + "papan keragaman" (§12), skrip Surprise Apresiasi (§13), skrip Closing 3-pesan (§14), tabel backup 3-cara (§E).
>
> **Posisi modul:** Ini **hari TERAKHIR**, sesudah Modul Fase 3 (skor akhir + reveal profil sudah dihitung & sebagian sudah ditampilkan kemarin). Maka Fun Day **TIDAK menjalankan skenario / pilih-rahasia baru** — data per-siswa sudah lengkap dari fase sebelumnya. Tugas data di sini cuma: **FINALISASI + INPUT/CSV + tampilkan sebaran**. (Lihat baris bertanda **[DATA]**.)
>
> **Bahasa polos wajib:** poin = ENERGI/UANG/MENTAL; "papan keragaman" (bukan papan peringkat); tidak ada kata "juara/menang/terbaik". Tiap blok yang pakai HP/internet punya **cadangan tanpa teknologi**.
>
> **Filosofi:** fasilitator RINGAN — sebagian besar dijalankan siswa sendiri. **Siapa yang pegang Fun Day = KONFIRMASI APL** (ditandai di kolom Penanggung Jawab).

**Mulai: 09.00 · 140 menit konten · selesai 11.20 · sisa ~40 menit cadangan tak terjadwal · cap keras 180 menit.**

| Jam | Durasi | Kegiatan (detail polos) | Cara Main | Penanggung Jawab | KATUP AMAN (kalau mepet) |
|-----|--------|--------------------------|-----------|------------------|---------------------------|
| 09.00–09.10 | 10' | **1. Buka + Pemanasan Gerak "Salam 2036"** | MC sapa kelas hari terakhir. Pemanasan gerak ringan (gerak pencair suasana biar segar): semua berdiri, "tunjuk diri kamu yang sekarang → tunjuk diri kamu yang 2036". Tegaskan tone hari ini: **santai, rayakan, bukan ujian.** 1 kalimat: "Hari ini kita tutup perjalanan 10 tahun — sambil seru-seruan." | Pleno, gerak fisik. MC bicara <3 menit, sisanya siswa berdiri & ikut gerak. | MC — **konfirmasi APL** (kandidat: Dex) | Lewati gerak; cukup MC sapa verbal + 1 kalimat tone (~3'). |
| 09.10–09.35 | 25' | **2. Selesaikan Surat dari Diri 2036** | Siswa **menyelesaikan** Surat 2036 (kemarin baru mulai / 3 baris inti). Isi bagian rumpang dari hati. Privat — tidak dibaca siapa pun. Musik tenang, lampu boleh diredupkan. | Tiap siswa isi **template rumpang** (§11b) lewat Google Form di HP (otomatis jadi PDF) **atau** kertas template. Fasilitator berkeliling pelan, bawa tisu untuk yang emosional, **tidak memaksa**. | Pendamping emosi + dokumentasi — **konfirmasi APL** (kandidat: Maria & Theana) | **Cadangan tanpa teknologi:** kertas template; scan/foto nanti. Kalau mepet: cukup isi **3 baris inti** (hidupku 2036…, yang kusyukuri…, pesan biar nggak buta masa depan…), sisanya boleh diselesaikan di rumah. Surat TIDAK boleh di-skip (ini oleh-oleh utama). |
| 09.35–09.55 | 20' | **3. Game Seru #1 — "Tebak Jalur Hidup" (dijalankan siswa)** | Game tema ringan: tiap kelompok dapat 1 "kartu tokoh 2036" (1 paragraf cerita hidup orang di 2036). Kelompok lain menebak: tokoh ini Profil 2036 yang mana dari 7? Seru, ramai, tanpa skor. | Tiap kelompok baca kartunya keras-keras → kelompok lain angkat jari (1–7) tebak profilnya → kelompok pembaca buka jawabannya + 1 kalimat "untung-ruginya". **Dijalankan antar-siswa**; fasilitator cuma kasih aba-aba mulai/stop. | Pemandu game ringan — **konfirmasi APL** | **Cadangan tanpa teknologi:** kartu tokoh dicetak (tidak butuh sinyal). Kalau mepet: mainkan **2–3 kartu saja** (bukan semua kelompok), lalu lanjut. Boleh di-skip total kalau waktu kritis (lihat paragraf akhir). |
| 09.55–10.05 | 10' | **ISTIRAHAT + foto santai** | Istirahat + minum (siswa bawa sendiri / disediakan sekolah — **tanpa anggaran konsumsi**). Foto-foto santai. **[DATA]** Selagi istirahat, operator skor **finalisasi & input** data per-siswa di belakang layar (lihat blok 4). | Bebas. Operator kerja paralel agar tidak makan waktu acara. | Dokumentasi (kandidat: Theana) + Operator skor (kandidat: Syendhi) — **konfirmasi APL** | Bisa dipangkas ke 5' kalau butuh waktu. |
| 10.05–10.15 | 10' | **4. [DATA] Finalisasi Skor Akhir per-Siswa + siapkan CSV** | **Inti penangkapan data per-siswa di hari ini.** Operator pastikan TIAP kode siswa punya ENERGI/UANG/MENTAL akhir + Profil 2036. Jalur kertas (Kartu Skor Pribadi) di-input ke Sheet sekarang; kolom Profil dihitung otomatis; tab EKSPOR → **unduh CSV** untuk DPL/laporan/skripsi. | Operator: buka tab `Skor Siswa` → cek tidak ada baris kosong → cek tiap kode punya kolom **Total-Fase-1** terisi (supaya profil *Mekar Belakangan* ikut terhitung) → tab `EKSPOR` → `File → Download → CSV`. Profil terisi otomatis oleh rumus (ambang TINGGI 115 / RENDAH 85 / selisih 35). **Tidak ditampilkan / tidak diranking ke siswa.** *(istilah rumus Sheet = ranah operator, tidak pernah diucapkan ke siswa.)* | Operator skor — **konfirmasi APL** (kandidat: Syendhi; co: Dhevina verifikasi) | **Cadangan tanpa teknologi:** kalau sinyal mati, **foto semua Kartu Skor Pribadi** sekarang (cadangan mentah), input ke Sheet **setelah acara**. CSV tetap didapat belakangan — data per-siswa tidak hilang. Mepet parah: cukup pastikan 3 angka akhir + Total-Fase-1 + kode tiap siswa tersimpan/terfoto (Total-Fase-1 perlu untuk profil *Mekar Belakangan*). |
| 10.15–10.30 | 15' | **5. Papan Keragaman Kelas — sebaran profil (BUKAN peringkat)** | Tampilkan **sebaran** Profil 2036 satu kelas: "berapa orang/grup di tiap dari 7 profil". Tiap profil dibaca **berpasangan dengan untung-ruginya**. Headline papan: **"7 jalur. 0 juara. Semua nyata."** | Tampil di proyektor sebagai diagram batang sederhana (berapa siswa per profil). Tiap profil: 1 kalimat khas + 1 kalimat untung-rugi (skrip §12). **HARAM** kata "terbaik / tertinggi / menang". | Pemandu reveal — **konfirmasi APL** (kandidat: Dex; co: Maria) | **Cadangan tanpa teknologi:** tiap siswa **tempel 1 kertas tempel (sticky note)** di kolom profilnya pada papan tulis/dinding → jadi grafik batang manual hidup (malah lebih seru, dijalankan siswa). Mepet: sebut angka sebaran verbal (~3'). |
| 10.30–10.38 | 8' | **6. [DATA opsional] Bagikan ringkasan pribadi ke siswa** | Tiap siswa terima **ringkasan pribadinya** (ENERGI/UANG/MENTAL akhir + Profil 2036 + 1 kalimat penyemangat) — **PRIVAT**, lewat HP / kartu hasil. TIDAK diumumkan, TIDAK diurutkan ke kelas. | Form HP kirim hasil ke masing-masing, **atau** bagikan Kartu Hasil pribadi (operator tulis profil tangan). Untuk profil "berat" (Sukses-tapi-Tumbang / Pelari Tanpa Rem): wajib ada **penjelasan singkat penenang** — "ini cermin pola 5 hari, bukan vonis — pola bisa diubah." | Pemandu + pendamping emosi — **konfirmasi APL** | **Opsional seluruhnya** — kalau mepet, **skip blok ini**; ringkasan pribadi dikirim lewat grup WhatsApp setelah acara. Sebaran kelas (blok 5) sudah cukup untuk inti. |
| 10.38–10.55 | 17' | **7. Galeri Refleksi (relawan berbagi)** | 3–4 relawan berbagi refleksi jujur di depan (boleh baca sepotong Surat 2036 / 1 hal terbesar yang disadari). Bukan lomba — ini penghargaan untuk keberanian jujur. | Sukarela. MC undang relawan, apresiasi tiap orang hangat. Sisa kelas jadi pendengar baik. Foto santai. | MC + pendamping emosi — **konfirmasi APL** (kandidat: Dex; co: Maria) | **Cadangan tanpa teknologi:** tanpa mic, rapatkan lingkaran duduk. Mepet: cukup **2 relawan** (bukan 4); atau ganti jadi "1 kata refleksi" memutar cepat per kelompok (~5'). |
| 10.55–11.05 | 10' | **8. Surprise Apresiasi (amplop SAMA RATA, NON-JUARA)** | Apresiasi **sama rata** untuk semua relawan yang berani berbagi. Ucapkan eksplisit: **"Ini BUKAN hadiah profil terbaik — tidak ada profil terbaik. Ini apresiasi keberanian jujur."** | Bagikan amplop ke tiap relawan, sebut nama, tatap mata, terima kasih personal (skrip §13). **Nominal rupiah TIDAK diucapkan / tidak ditampilkan** — hanya ada di anggaran internal. | MC + bendahara — **konfirmasi APL** (kandidat: Dex; co: Dhevina) | **Cadangan tanpa teknologi:** kalau amplop fisik tidak siap — apresiasi verbal hangat + sebut nama + tepuk tangan kelas; sticker/sertifikat dibagi lewat grup WhatsApp. Pesan "keberanian, bukan kemenangan" **tetap wajib** diucapkan. |
| 11.05–11.20 | 15' | **9. Foto Kelas + Penutup** | Penutup 10 tahun: rekap **3 pesan kunci** — (1) 3 Lapis Diri (Sifat/Nilai/Tujuan), (2) melek masa depan, (3) tidak ada satu cara benar untuk hidup. Bagikan sticker + link sertifikat digital. Foto kelas besar. Tutup: **"Hidupi 10 tahun keputusanmu — mulai hari ini."** | MC bicara ~5' (skrip §14), lalu foto bersama. Sertifikat + Surat 2036 PDF dikirim ke grup WhatsApp. | MC + dokumentasi — **konfirmasi APL** (kandidat: Dex; foto: Theana) | **Cadangan tanpa teknologi:** link sertifikat → bagikan **kode QR tercetak** (yang discan kamera HP) / catat nomor WA. Mepet: rekap **1 pesan saja** (no. 3: "tidak ada satu cara benar") + langsung foto (~6'). Foto + kalimat penutup TIDAK boleh di-skip. |

---

### Verifikasi durasi (wajib ≤180')

10 + 25 + 20 + 10 + 10 + 15 + 8 + 17 + 10 + 15 = **140 menit konten.**
Mulai 09.00 → selesai **11.20.** Sisa **40 menit** di bawah cap 180' = cadangan tak terjadwal (untuk transisi / molor / diskusi yang hidup). **Terverifikasi ≤ 180.** ✓

**Cek konsistensi jam (berantai):** 09.00→09.10→09.35→09.55→10.05→10.15→10.30→10.38→10.55→11.05→11.20. Tiap jam-mulai = jam-selesai blok sebelumnya; tidak ada menit >59. ✓

**Cek syarat tugas:**
- Bahasa polos, tanpa jargon ✓ (poin Energi/Uang/Mental; "papan keragaman"; "gerak pencair suasana" bukan "energizer"; "kertas tempel" bukan "sticky-note"; "kode QR" dijelaskan; "penjelasan singkat penenang" bukan "micro-debrief"; "Galeri Refleksi" bukan "Showcase"; "ringkasan pribadi" bukan "ranking"; istilah rumus Sheet ditandai ranah operator).
- Tiap blok yang pakai HP/internet punya cadangan tanpa teknologi ✓ (Surat→kertas; sebaran→kertas tempel; CSV→foto kartu + input belakangan; sertifikat→kode QR/WA).
- **Penangkapan data per-siswa jalan** ✓ — di Fun Day berupa **finalisasi + input + CSV** (blok 4 **[DATA]**), karena pilih-rahasia sudah selesai di Modul Fase 3. Tiap siswa berakhir dengan skor E/U/M + Profil + bisa di-CSV. **Kolom Total-Fase-1 dicek terisi** supaya profil *Mekar Belakangan* tetap terhitung per-siswa (7 profil utuh, bukan 6).
- Fasilitator ringan / dijalankan siswa ✓ (game antar-siswa, kertas tempel sebaran, galeri refleksi sukarela).
- "Siapa pegang = konfirmasi APL" ✓ (semua di kolom Penanggung Jawab).

---

### Kalau waktu SANGAT mepet — urutan yang boleh dipangkas (dari paling boleh dibuang → paling wajib dipertahankan)

Pangkas dengan urutan ini: **(1) Game #1 "Tebak Jalur Hidup"** boleh di-skip total (paling tidak inti) → **(2) blok 6 "ringkasan pribadi ke siswa"** boleh di-skip, kirim lewat WA setelah acara → **(3) Pemanasan & Istirahat** dipangkas ke ~3–5' → **(4) Galeri Refleksi** dikurangi jadi 2 relawan atau "1 kata memutar" → **(5) Papan Keragaman** disebut verbal (~3') daripada visual. Yang **TIDAK BOLEH** dibuang dalam kondisi apa pun: **selesaikan Surat 2036 (minimal 3 baris inti), [DATA] finalisasi skor + CSV per-siswa (boleh lewat foto kartu + input belakangan, termasuk Total-Fase-1), Surprise Apresiasi non-juara (boleh verbal), dan Foto + kalimat penutup "Hidupi 10 tahun keputusanmu"** — empat hal ini adalah oleh-oleh, kewajiban data ke DPL, janji apresiasi, dan penutup emosional yang menjadi inti hari terakhir.

---

---

## Catatan & Yang Masih Terbuka

- 👤 **Fun Day — siapa yang handle?** Belum pasti. Desain dibuat **student-driven** (sebagian besar dijalankan siswa: games, galeri, sharing) + fasilitator ringan. **Konfirmasi ke APL** apakah ada penanggung jawab khusus.
- 📊 **Setup data H-1 (Syendhi):** 1 Google Form (kode siswa *dropdown* + ronde + pilihan) → Google Sheet (Tabel Perubahan Poin dari Bank + saldo berjalan jepit 0–200 + kolom TotalF1 + rumus Profil) → tab EKSPOR → CSV. Detail Bagian 1 §3. **Uji 1 kelas dummy** sebelum hari-H. Fallback: cetak Kartu Skor Pribadi 1 lembar/siswa.
- 🎓 **Peserta Agustus** = kelas 11 & 12 tahun ajaran baru (yang baru naik). Sapaan & contoh disesuaikan.
- 🧯 **Prinsip anti-gagal:** kalau ada yang gagal (sinyal/waktu), TURUN ke katup aman / backup tanpa-internet — workshop tetap jalan. Sinyal = bonus, bukan syarat.
- 🗃️ **Sumber skenario lengkap** (narasi + naskah penuh) = arsip `docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md` (versi 4–5 jam, disupersede dokumen ini; poin & skenario sudah disalin ke modul).

---
*LEAP 2036 — Rundown Modular v2 · 31 Mei 2026 · KKN STEM 2026 Kelompok 2. Dibangun via workflow multi-agent (5 modul + 3 auditor adversarial: timing ≤180' / bahasa polos / data per-siswa). Anggaran ≤Rp 500k tanpa makanan dibahas terpisah — lihat `PROJECT_MASTER.md` §8.*
