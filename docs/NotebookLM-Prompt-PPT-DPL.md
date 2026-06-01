# NOTEBOOKLM PROMPT — Generate PPT Presentasi DPL

> **Tujuan:** Generate PPT 15–20 slide untuk presentasi proposal Workshop LEAP 2036 ke DPL (dr. Loury Priiskila, M.Biomed.) via NotebookLM **Detailed Deck mode** (bukan Presenter Slides mode).
>
> **Audience:** Dosen akademisi medis-saintifik. Butuh: rigor metodologis, defensibility anggaran, kejelasan tim & timeline, awareness risiko.
>
> **Versi prompt:** 1.0 | Tanggal: 28 Mei 2026

---

## 📋 PRE-FLIGHT CHECKLIST (Sebelum Run Prompt)

Upload file berikut ke NotebookLM sebagai sumber:

1. ✅ **WAJIB:** `docs/Project-Master-LEAP-2036.md` (sumber utama, comprehensive)
2. 🟡 Opsional (untuk konteks tambahan kalau NotebookLM butuh elaborasi):
   - `docs/Proposal Workshop SMA Kelompok 2 - LEAP 2036-v2.md`
   - `docs/v2-patches.md`
   - `docs/Skenario-Starter-Pack.md`
3. ⛔ JANGAN upload:
   - `.agent/Dex-Core.md` (info internal Dex, bukan untuk publikasi)
   - `docs/Catatan APL & DPL.txt` (komunikasi informal internal)
   - `docs/Catatan Bahaya APL.txt` (info politik internal, sensitif)
   - `docs/Asisten-Brief_*.md` (panduan tim internal, bukan presentasi)

Pengaturan NotebookLM:
- Mode: **Detailed Deck**
- Bahasa: Bahasa Indonesia
- Target jumlah slide: 18 (target spesifik), batas 15–20

---

## 🎯 MASTER PROMPT (COPY-PASTE BLOCK INI KE NOTEBOOKLM)

```
Generate a Detailed Deck presentation in Bahasa Indonesia dengan TARGET 18 SLIDE (batas hard 15–20 slide). Audiens presentasi adalah Dosen Pembimbing Lapangan (DPL), dr. Loury Priiskila, M.Biomed. — seorang akademisi medis. Tujuan presentasi adalah memperoleh persetujuan dan masukan DPL untuk pelaksanaan Program Workshop LEAP 2036 sebagai bagian dari KKN Tematik International Service Learning STEM 2026.

PRINSIP UTAMA PENYUSUNAN:
1. Format DETAILED DECK — setiap slide harus information-rich dengan kalimat penjelasan yang lengkap. JANGAN gunakan format key talking points / short bullets seperti Presenter Slides. Setiap bullet harus berupa kalimat utuh yang menjelaskan substansi, bukan kata kunci satu-dua kata.
2. Setiap slide harus memiliki: judul slide yang jelas, subtitle/konteks (jika perlu), konten body yang substantif (3–6 elemen utama berupa kalimat penjelas, tabel, atau diagram), dan visual elements yang relevan.
3. Tone: AKADEMIK FORMAL TAPI DAPAT DIBACA — bukan ceramah, bukan marketing pitch, bukan terlalu kaku. Bayangkan presentasi proposal riset ke supervisor akademik.
4. Gunakan tabel dan struktur visual untuk: anggaran, rundown harian, indikator keberhasilan, perbandingan skenario, pembagian tugas. JANGAN sajikan ini dalam paragraf prose.
5. Gunakan diagram alur untuk: mekanisme "The Decision Engine," flow silent vote → group discussion → reveal, strategi 3-layer progressive enhancement.
6. Visual style: profesional, color palette navy/biru dengan aksen emas atau oranye (mirror academic poster style). HINDARI warna mencolok atau cartoonish.

STRUKTUR 18 SLIDE YANG DIINSTRUKSIKAN (HARUS DIIKUTI URUTAN INI):

SLIDE 1 — COVER / TITLE
- Judul: "Workshop Simulasi Hidup 10 Tahun: Keputusanmu Hari Ini, Hidupmu 2036"
- Subtitle: "LEAP 2036 — Life Experience & Action Planning"
- Konteks: "Proposal Program Kerja KKN Tematik International Service Learning STEM 2026"
- Identitas: Kelompok 2 | Universitas Kristen Duta Wacana × Hong Kong Polytechnic University
- DPL: dr. Loury Priiskila, M.Biomed.
- Tanggal presentasi: 28 Mei 2026

SLIDE 2 — RINGKASAN EKSEKUTIF
- 1 paragraf padat (4–5 kalimat) menjelaskan inti workshop: target audiens (siswa SMA kelas 11–12), pendekatan (experiential learning + hybrid group-individu participation), mekanisme inti (The Decision Engine berbasis kartu keputusan dengan 3 sumber daya dan 3 fase kehidupan 2026–2036), luaran utama (Surat dari Diri 2036 + profil 2036 personal), dan total anggaran (Rp 514–703k tergantung skema).
- 1 visual highlight: 3 angka utama dalam kotak besar — misalnya "5 HARI · 3 FASE · 1 KELAS" untuk LPPM-1, atau "2+3 HARI · 2 SMA · 60–80 SISWA" untuk LPPM-2.

SLIDE 3 — PROBLEM STATEMENT: FUTURE BLINDNESS
- Definisi *future blindness* (Hershfield, 2011): ketidakmampuan remaja menghubungkan keputusan hari ini dengan dampak 5–10 tahun ke depan.
- Tiga manifestasi konkret di siswa SMA: (a) keputusan jurusan berdasarkan tren / tekanan sosial, (b) lifestyle inflation tanpa kesadaran konsekuensi finansial, (c) toleransi terhadap *burnout* sebagai "harga sukses."
- Kenapa intervensi konvensional (seminar motivasi, ceramah BK) tidak cukup: pengetahuan deklaratif lupa dalam 1 minggu, bukan terkoneksi pengalaman emosional.

SLIDE 4 — SOLUSI: PENDEKATAN EXPERIENTIAL LEARNING
- Quote landasan: Kolb (1984) Experiential Learning Theory — siklus pengalaman konkret → observasi reflektif → konseptualisasi abstrak → eksperimentasi aktif.
- Tabel komparatif 2 kolom: "Pendekatan Konvensional" vs "Pendekatan LEAP 2036" (siswa mendengar vs mengalami, konsekuensi diceritakan vs terasa, lupa 1 minggu vs memorable, dst).
- 1 kalimat closing: workshop memberikan pengalaman, bukan jawaban.

SLIDE 5 — KONSEP INTI: "THE DECISION ENGINE"
- Diagram 3 sumber daya dengan ikon: Energi (100) — Kapital (100) — Kesehatan Mental (100).
- Diagram 3 fase kronologis: Fase 1 Fondasi (2026–2028) → Fase 2 Krisis (2029–2032) → Fase 3 Panen (2033–2036).
- Penjelasan singkat 2–3 kalimat: setiap keputusan menambah/mengurangi sumber daya. Setiap fase punya skenario dilematis. Tidak ada jawaban "benar" — hanya konsekuensi.

SLIDE 6 — INOVASI 1: MODEL PARTISIPASI HYBRID
- Diagram flow 6-langkah per skenario: (1) Skenario dibacakan, (2) Silent Individual Vote 30 detik, (3) Group Discussion 3–5 menit, (4) Group Consensus, (5) Score Update group + individu, (6) Reveal konsekuensi.
- Tabel 3 kolom: "Full Individu," "Full Group," "HYBRID (yang dipilih)" — bandingkan pros/cons untuk menjelaskan rasional keputusan hybrid.
- Insight di bawah: hybrid menciptakan momen self-awareness terdalam — "Aku silent vote A, tapi group milih B. Kenapa aku ngalah?"

SLIDE 7 — INOVASI 2: GROUP FORMATION BY GOAL HIDUP
- Penjelasan singkat: kelompok terbentuk berdasarkan "goal hidup" yang dipilih siswa, BUKAN berdasarkan circle pertemanan atau algoritma personality.
- Tabel atau grid 8 goal hidup: Creative Entrepreneur, Family-First Life, Global Social Impact, Master a Craft, Travel & Free-Spirit, Stable Career + Community, Innovator/Inventor, Caregiver/Healer Path.
- Penjelasan 2 kalimat: realistic — real-world teams form around shared purpose, bukan shared personality. Cap maksimum 5 siswa per goal untuk menjaga keseimbangan.

SLIDE 8 — INOVASI 3: 3 LAYER IDENTITY (Day 1 Self-Discovery)
- Diagram piramida atau lapisan: TENDENCY (DISC Assessment) → VALUES ("5 Non-Negotiables" + Card Sort Values) → GOALS (Goal Hidup Kelompok).
- Penjelasan kenapa 3 lapis sengaja: workshop expose siswa pada 3 lapis identitas mereka, dan teaching moment terdalam adalah saat mereka menyadari **mana yang menang saat dilema** — tendency, values, atau goals.
- Penjelasan singkat tentang DISC framing: "tendency bukan destiny" — workshop menguji selama 5 hari apakah keputusan siswa konsisten dengan tendency atau ada surprise.

SLIDE 9 — DUA SKENARIO PELAKSANAAN (Update LPPM 28 Mei)
- Tabel komparatif 2 kolom: SKEMA LPPM-1 vs SKEMA LPPM-2.
- Baris: Jumlah SMA, Jumlah hari, Total siswa terdampak, Kedalaman per siswa, Karakter pengalaman, Anggaran total.
- LPPM-1: 1 SMA × 5 hari × 1 kelas (~30–40 siswa) — deep immersion, Rp 514k.
- LPPM-2: 2 SMA × (2 + 3) hari × 1 kelas masing-masing (~60–80 siswa total) — reach lebih luas, Rp 703k.
- Catatan footer: Kelompok 2 siap mengeksekusi kedua skenario; pilihan final menunggu konfirmasi LPPM.

SLIDE 10 — RUNDOWN LPPM-1: 5 HARI DI 1 SMA
- Tabel 5 baris (Day 1–Day 5) dengan kolom: Hari | Tema Hari | Konten Inti (3–4 kalimat penjelas).
- Day 1: Foundation Day — Values Exercise + DISC Assessment + Group Formation by Goal + Mechanic Briefing + Warm-up Skenario.
- Day 2: Fase 1 Fondasi (2026–2028) — 7–10 skenario pendidikan & karier awal.
- Day 3: Fase 2 Krisis (2029–2032) — 8–12 skenario + Random Event Cards.
- Day 4: Fase 3 Panen (2033–2036) — Skor akhir + Reveal Profil 2036 + mulai Surat 2036.
- Day 5: Showcase Day — Gallery Walk + Showcase Reflection + Surprise Apresiasi + closing.

SLIDE 11 — RUNDOWN LPPM-2: SPLIT 2 + 3 HARI DI 2 SMA
- Dua tabel side-by-side: Sekolah A (2 hari compressed) | Sekolah B (3 hari full-medium).
- Sekolah A Day A1: Foundation + Fase 1 Compressed (Values + DISC lite + Group Formation + Briefing + 4–5 skenario Fase 1).
- Sekolah A Day A2: Fase 2 + Fase 3 + Showcase (4–5 skenario Fase 2 + 3 kompresi + Surat 2036 + closing).
- Sekolah B Day B1: Foundation + Fase 1 (full Day 1 + Day 2 LPPM-1 equivalent).
- Sekolah B Day B2: Fase 2 (Krisis full + Event Cards).
- Sekolah B Day B3: Fase 3 + Showcase + Closing.
- Note kunci di bawah: same core content, scaled durasi. Bukan "appetizer vs main course."

SLIDE 12 — ANGGARAN: LPPM-1 (5 hari × 1 SMA)
- Tabel anggaran lengkap dengan kolom: No | Uraian | Volume | Satuan | Harga Satuan | Jumlah.
- 6 item: Sticker custom (Rp 14k), Snack sachet 5 hari (Rp 300k), Cetak dokumen formal (Rp 20k), Buffer transport (Rp 30k), Surprise Apresiasi 3 volunteer × Rp 25k (Rp 75k), DISC Assessment buffer (Rp 75k).
- TOTAL: Rp 514.000.
- Note di footer: Defensible vs precedent Eye Care Rp 600k LPPM (di bawah baseline).

SLIDE 13 — ANGGARAN: LPPM-2 (2+3 hari × 2 SMA)
- Tabel anggaran lengkap kolom: No | Uraian | Sekolah A | Sekolah B | Sub-Total.
- 7 item dengan breakdown per sekolah.
- Sub-Total Sekolah A: Rp 356.500. Sub-Total Sekolah B: Rp 346.500.
- TOTAL: Rp 703.000.
- Note di footer: 17% di atas baseline Eye Care, masih defensible untuk scope 2 SMA.

SLIDE 14 — STRATEGI EFISIENSI & SUMBER PENDANAAN
- Bullet substantif: (a) Sertifikat digital (no print cost), (b) Surat 2036 auto-PDF (no logistik cetak), (c) Web hosting Vercel subdomain (no domain berbayar), (d) NO reward/hadiah pemenang (filosofis), (e) Banner fisik tidak digunakan.
- Sumber pendanaan: kombinasi LPPM UKDW (primer) + dana mandiri kelompok (backup jika LPPM dipotong).
- 1 kalimat closing: Anggaran dirancang untuk maximum impact per rupiah dengan strategi digitalisasi luaran.

SLIDE 15 — INDIKATOR KEBERHASILAN & ALAT VERIFIKASI
- Tabel 8 baris indikator: Kehadiran penuh (≥80%), Penyelesaian Surat 2036 (≥70%), Peningkatan skor pre vs post-test (≥60%), Partisipasi aktif debrief (≥50%), Konsistensi group dengan goal hidup (≥60%), Group survival rate (100%), Kelengkapan dokumentasi (100%), Penyerahan ke SMA mitra (100%).
- Tabel singkat alat verifikasi: kuesioner pre/post-test (Google Form), Google Sheets live scoring, reflection journal, Surat 2036 PDF, dokumentasi visual, notulensi Showcase Reflection.

SLIDE 16 — TIM & PEMBAGIAN TUGAS KEPANITIAAN
- Tabel 6 baris dengan kolom: Jabatan Kepanitiaan | Nama | Prodi | Tugas Utama (1 kalimat ringkas per orang).
- Ketua Pelaksana: Dex Bennett (SI) — koordinasi keseluruhan + MC utama.
- Sekretaris-Bendahara: Dhevina Putri Agustya (Manajemen) — admin, anggaran, banker simulasi.
- PDD: Theana Amabel Krismeiati (Kedokteran) — dokumentasi, desain, publikasi.
- Perlengkapan: Syendhi Reswara S. (Informatika) — teknis hari-H, dashboard.
- Humas: Maria Nadira Dosinaen (Kedokteran) — komunikasi SMA, emotional safety.
- Pelaksana Program: Benediktus Satria Trisnawan (Kedokteran) — Lead Fase 2.
- Footer: di bawah supervisi DPL dr. Loury Priiskila, M.Biomed.

SLIDE 17 — RISK AWARENESS & MITIGASI (KOMPRESI TOP 5)
- Tabel 5 baris dengan kolom: Risiko | Probabilitas | Dampak | Mitigasi (1 kalimat).
- Pilih 5 risiko paling kritis:
  (1) Skema final LPPM berbeda dari yang dikembangkan — Mitigasi: dual skema sudah disiapkan.
  (2) Layer 3 fullstack app tidak siap hari-H — Mitigasi: 3-layer progressive enhancement (kartu fisik sebagai guaranteed working).
  (3) Jaringan WiFi SMA mitra lemah — Mitigasi: Canvas Lite offline standalone, Layer 1 tidak butuh internet.
  (4) Siswa terdampak emosional dari skenario berat — Mitigasi: emotional safety protocol, reflection journal sebagai outlet, fasilitator Maria standby.
  (5) DISC results disalahgunakan jadi self-pigeonholing — Mitigasi: framing eksplisit "tendency bukan destiny," workshop test selama 5 hari.

SLIDE 18 — PENUTUP, JADWAL, & PERMOHONAN MASUKAN
- 1 paragraf penutup (3–4 kalimat): apresiasi kepada DPL, komitmen kelompok, kesiapan menerima masukan dan revisi.
- Tabel jadwal kunci: 28 Mei presentasi DPL, 30 Mei Pembekalan II + konsultasi DPL, 13–19 Juni Training Eyecare, 3–7 Agustus Service Days eksekusi workshop.
- Closing line besar: "Kami terbuka terhadap saran dan penyesuaian yang diperlukan."
- Kontak: Dex Bennett (Ketua) sebagai koordinator komunikasi utama.

LARANGAN KETAT (HAL-HAL YANG TIDAK BOLEH MUNCUL DI PPT):
- JANGAN buat slide khusus daftar pustaka lengkap (cukup mention 2–3 nama kunci inline: Hershfield 2011, Kolb 1984, Miller 2018). Daftar lengkap di proposal v2.
- JANGAN buat slide timeline build aplikasi 10 minggu detail per minggu — DPL tidak butuh roadmap teknis.
- JANGAN expose dinamika internal tim ("3 anggota silent," dll) — info ini internal Kelompok 2.
- JANGAN tampilkan stack teknis (Next.js, Supabase, Vercel) dalam detail teknis — cukup mention "platform web modern dengan progressive enhancement 3-layer." 
- JANGAN ulang konten yang sama di multiple slide.
- JANGAN buat slide "About Us" panjang — identitas kelompok cukup di Slide 1 dan Slide 16.
- JANGAN gunakan emoji berlebihan. Maksimal 1 ikon profesional per slide jika perlu.
- JANGAN gunakan stock photo orang asing — kalau perlu visual, gunakan ikon/diagram abstrak atau placeholder "[Photo Kelompok 2]" / "[Diagram Decision Engine]".
- JANGAN sajikan konten berbentuk pertanyaan retoris ("Tahukah Anda...?") — audiens akademik tidak butuh hook gaya seminar.

STYLE GUIDE VISUAL:
- Color palette utama: Navy (#1E3A8A), Biru muda (#3B82F6), Putih (#FFFFFF), Aksen emas (#F59E0B) atau oranye (#EA580C).
- Typography: Sans-serif modern (Helvetica/Arial/Inter) untuk readability. Heading bold, body regular.
- Layout: konsisten antar slide — judul slide di atas, content di tengah/bawah, footer minimal (page number + brand "LEAP 2036").
- Tabel: header berwarna navy dengan teks putih, body putih dengan border tipis grey, alternating row shading untuk readability.
- Diagram: gunakan boxes dengan rounded corners, panah jelas, label semua elemen.
- White space: jangan terlalu padat. Setiap slide harus "breathable."

OUTPUT FORMAT:
- 18 slide dalam format Detailed Deck.
- Setiap slide harus standalone-readable — pembaca yang baru lihat slide tertentu tetap bisa memahami konteksnya tanpa harus baca slide sebelumnya.
- Bahasa Indonesia formal akademik konsisten.
- Tidak ada slide kosong, tidak ada placeholder "Lorem ipsum."

Mulai generate sekarang.
```

---

## 🔄 ALTERNATIVE PROMPTS (Fallback)

### Alternative 1 — Kalau NotebookLM Generate Terlalu Singkat (Format Presenter Slides)

```
Re-generate the previous deck, but make each slide more information-rich. Each bullet point should be a complete sentence that explains substance, not just a 2-3 word keyword. Increase the body content per slide so the slide alone communicates the message without requiring a speaker. Maintain the 18-slide structure I specified earlier.
```

### Alternative 2 — Kalau NotebookLM Skip Tabel/Diagram

```
Re-generate slides 9, 10, 11, 12, 13, 15, 16, and 17 with explicit table structures. Use markdown-style tables with clear column headers and row data. These slides are unreadable without tabular structure. Do not convert them to bullet lists.
```

### Alternative 3 — Kalau NotebookLM Tampilkan Konten Yang Dilarang

```
Re-generate the deck. Remove the following content if it appears: (a) any slide dedicated to bibliography/daftar pustaka, (b) any slide showing technical stack details (Next.js, Supabase, Vercel as implementation details), (c) any mention of internal team dynamics or anggota silent, (d) any slide showing 10-week build timeline. Cite Hershfield 2011, Kolb 1984, and Miller 2018 only inline where relevant in slides 3, 4, and 8.
```

### Alternative 4 — Kalau Slide Terlalu Padat

```
The deck is over-packed. Reduce each slide body to maximum 4 substantive elements (sentences, table rows, or diagram components). Move excess detail to speaker notes if the platform supports it. Maintain the 18-slide structure and keep the most critical content per slide.
```

---

## ✅ POST-GENERATION CHECKLIST (Verifikasi Manual)

Setelah NotebookLM generate, cek:

| # | Item | Cara Cek |
|---|------|----------|
| 1 | Total slide 15–20? | Hitung slide |
| 2 | Slide 1 cover lengkap (judul, brand, identitas, DPL, tanggal)? | Lihat slide 1 |
| 3 | Mekanisme Decision Engine ada diagram/visual yang jelas? | Slide 5 |
| 4 | Tabel anggaran LPPM-1 muncul lengkap dengan kolom? | Slide 12 |
| 5 | Tabel anggaran LPPM-2 muncul lengkap dengan kolom? | Slide 13 |
| 6 | Dua skenario LPPM ditampilkan eksplisit di slide terpisah (Rundown)? | Slide 10 & 11 |
| 7 | Tabel pembagian tugas tim ada 6 anggota dengan NIM/Prodi? | Slide 16 |
| 8 | Risiko ada 5 item dengan mitigasi konkret? | Slide 17 |
| 9 | Indikator keberhasilan ada % target measurable? | Slide 15 |
| 10 | Slide penutup tidak terlalu generic, mengundang masukan DPL? | Slide 18 |
| 11 | Tidak ada slide dedicated daftar pustaka? | Cek seluruh deck |
| 12 | Tidak ada slide timeline build 10-minggu? | Cek seluruh deck |
| 13 | Tidak ada dinamika internal tim yang ter-expose? | Cek seluruh deck |
| 14 | Bahasa Indonesia formal konsisten? | Sample 3 slide random |
| 15 | Color palette profesional navy-biru-emas? | Lihat overview |

Kalau ada item yang gagal → jalankan **Alternative Prompts** yang relevan.

---

## 🎨 MANUAL TWEAKS PASCA-GENERATE (Di Google Slides / Canva)

Setelah NotebookLM export ke Google Slides, lakukan polish manual:

| Area | Tweak |
|------|-------|
| Slide 1 | Tambahkan logo UKDW dan PolyU di pojok bawah |
| Slide 5 | Cek diagram Decision Engine — kalau kurang jelas, redraw manual dengan SmartArt |
| Slide 9 | Buat tabel komparatif jadi side-by-side visual (bukan vertikal stacked) |
| Slide 12 & 13 | Highlight total anggaran dengan box berwarna emas untuk emphasis |
| Slide 17 | Color-code probabilitas (rendah=hijau, medium=kuning, tinggi=merah) di tabel risiko |
| Slide 18 | Tambahkan QR code link ke proposal v2 / website KKN-HUB jika DPL mau eksplorasi lanjut |
| Semua slide | Cek konsistensi font, ukuran, dan alignment |
| Speaker notes | Isi speaker notes untuk slide 5, 6, 8, 10, 11 dengan talking points kunci |

---

## 🚀 TIPS UMUM NOTEBOOKLM DETAILED DECK

- **Iterasi cepat.** Kalau hasil pertama belum optimal, langsung jalankan Alternative Prompts. NotebookLM tidak charge per generation.
- **Export ke Google Slides** untuk polish manual. Format Detailed Deck NotebookLM lebih cocok di Slides daripada di PowerPoint asli.
- **Jangan over-edit di NotebookLM.** Lebih baik manual tweak di Slides untuk kontrol presisi.
- **Backup file Project Master.** Pastikan `docs/Project-Master-LEAP-2036.md` versi terbaru (v2.0 atau lebih tinggi) yang di-upload.
- **Cek output dengan tim.** Sebelum kirim ke DPL, share preview ke Dhevina/Syendhi untuk second opinion.

---

*Dokumen ini disusun: 28 Mei 2026 | Penyusun: Dex (untuk workflow NotebookLM → PPT DPL) | Versi: 1.0*
