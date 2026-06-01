# Progress KKN STEM 2026 — Kelompok 2
> Dokumen ini dibuat untuk melanjutkan brainstorming di sesi berikutnya.
> Last updated: 2026-05-19

---

## Status Keseluruhan

| Area | Status | Catatan |
|---|---|---|
| KKN HUB Website | ✅ Live & deployed | https://kknstem.vercel.app — 9 halaman, design upgraded |
| Halaman Ide Workshop SMA | ✅ Live | Semua 10 ide + role per prodi + rekomendasi sudah ada di website |
| Catatan master KKN | ✅ Selesai | `Catatan-KKN-STEM-2026.md` |
| Brainstorm proker SMA | 🟡 In progress | 4 AI sudah run, ide sudah di website, belum dipilih final |
| Proposal workshop SMA | ❌ Belum dimulai | Tunggu jawaban DPL dulu |
| Koordinasi dengan DPL | ❌ Belum | Perlu konfirmasi: berapa sesi, durasi, constraint tema? |

---

## Bagian 1 — KKN HUB Website

### Apa yang Sudah Dibuat

Website SPA (Single Page Application) di `D:\AT Kuliah\Semester 6\7. KKN\kkn-hub\` dengan 8 halaman:

| Halaman | Isi | Status |
|---|---|---|
| Dashboard | Situasi Sekarang (phase-aware), countdown, quick contact, checklist teaser, progress bar | ✅ |
| Timeline | Gantt chart seluruh rangkaian KKN | ✅ |
| Tim & Kontak | 6 anggota Kelompok 2, DPL, APL, teman kelompok lain | ✅ |
| Prosedur | 10 prosedur vision screening, tabel rotasi tim per service day, pembagian edu teams | ✅ |
| Lokasi | SD/SMP (7 sekolah), SMA (tentative), Orientation Session | ✅ |
| Cari Info / AI | Smart search (Fuse.js) + AI Q&A (Gemini API) | ✅ |
| Checklist | 14 item dengan progress bar, grouped by category | ✅ |
| Catatan | Free-form notes, disimpan di localStorage | ✅ |

### Tech Stack

- Vanilla JS + HTML + CSS (no framework, no build tool)
- Google Fonts: DM Sans
- Fuse.js 7.0 untuk fuzzy search
- Google Gemini API untuk AI Q&A
  - Default key embedded di `data.js` (keputusan sadar, accepted tradeoff)
  - Model fallback chain: `gemini-2.5-flash-lite → gemini-2.0-flash-lite → gemini-flash-lite-latest → gemini-2.5-flash`
- Deployment: Vercel (scope: `stylenecys-projects`, project: `kknstem`)
- Deploy command: `vercel --yes --prod --scope stylenecys-projects` dari folder `kkn-hub`

### Color Palette (Design System)

```
--bg:       #07071c  (midnight navy)
--surface:  #0c0c28
--card:     #111130
--indigo:   #818cf8  (primary accent)
--cyan:     #22d3ee
--gold:     #fbbf24
--green:    #34d399
--rose:     #fb7185
--violet:   #c084fc
--orange:   #fb923c
```

### Yang Bagus di Website

- Dashboard berfungsi sebagai "briefing harian" — phase-aware, langsung kasih tahu apa yang harus dilakukan sekarang berdasarkan tanggal hari ini
- AI Q&A bekerja dan markdown render dengan benar (bold, bullet list, heading)
- Mobile-friendly: ada hamburger menu, topbar fixed, layout responsive
- Gantt chart dengan today marker
- Smart search covers semua data KKN (FAQ, prosedur, timeline, lokasi, tim, kontak)
- Deploy 1 command, langsung live

### Yang Tidak Bagus / Jangan Diulangi

- ❌ **Jangan hardcode model Gemini lama** (gemini-1.5-flash dll sudah deprecated per Mei 2026) — gunakan fallback chain yang sudah ada
- ❌ **Jangan deploy tanpa `--scope stylenecys-projects`** — akan error missing scope
- ❌ **CSS class rename tanpa cek semua referensi** — waktu redesign sempat ada mismatch `b-purple` vs `b-violet`, `contact-role` vs `c-role`, dll. Selalu grep dulu sebelum rename.
- ❌ **Double `res.json()` call** — bug ini pernah terjadi, parse JSON hanya sekali setelah loop model

### File-File Penting Website

```
D:\AT Kuliah\Semester 6\7. KKN\kkn-hub\
├── index.html      — struktur halaman, sidebar, topbar mobile
├── style.css       — design system, semua komponen, responsive
├── app.js          — router, semua render functions, md(), AI chat
├── data.js         — semua data KKN + GEMINI_DEFAULT_KEY + GEMINI_CONTEXT
└── vercel.json     — {"name": "kknstem"}
```

### Update 2026-05-21

- ✅ Font upgrade: Inter (body) + Instrument Serif italic (headings) — lebih clean dan premium
- ✅ Base font size naik 14px → 15px
- ✅ Card design improved: subtle inner glow + hover shadow
- ✅ Sidebar gradient accent di logo area
- ✅ Halaman baru "Ide Workshop SMA" — semua 10 ide dengan tabel role per prodi, rekomendasi kombinasi Opsi A/B, pros/cons, setup notes
- ✅ Deployed ke production https://kknstem.vercel.app

### To-Do Website (Low Priority)

- [ ] Fix deprecation warning `name` property di vercel.json (minor)
- [ ] Tambah halaman "Proposal Final SMA" setelah ide dipilih dan disetujui DPL
- [ ] Pertimbangkan tambah notifikasi/reminder berbasis tanggal (misal H-7 service day)

---

## Bagian 2 — Catatan Master KKN

### File
`D:\AT Kuliah\Semester 6\7. KKN\Catatan-KKN-STEM-2026.md`

### Isi
Kompilasi dari:
- 7 foto materi pembekalan
- 2 PDF dokumen resmi KKN
- Catatan teman (sudah dikoreksi typo-nya)

### Informasi Kritis yang Sudah Dikonfirmasi

**Program:** KKN Tematik International Service Learning STEM — SO (Student Outreach) Eyecare
**Kolaborasi:** UKDW Yogyakarta × Hong Kong Polytechnic University (PolyU HK)

**Kelompok 2 — Anggota:**
| No | Nama | Prodi | Gender |
|---|---|---|---|
| 1 | Syendhi Reswara S. | Informatika | Pria |
| 2 | Benediktus Satria Trisnawan | Kedokteran | Pria |
| 3 | Maria Nadira Dosinaen | Kedokteran | Wanita |
| 4 | Theana Amabel Krismeiati | Kedokteran | Wanita |
| 5 | Dhevina Putri Agustya | Manajemen | Wanita |
| 6 | **Dex Bennett** | Sistem Informasi | Pria ← ini kamu |

**DPL:** dr. Loury Priiskila, M.Biomed. (+62 813-9070-9672)
**APL 1:** Eleonora Bintang Dahayu P (+62 858-1775-6217)
**APL 2:** Carolus Yasser Rombebunga (+62 852-5425-3035)

**Timeline Besar:**
| Fase | Tanggal | Kegiatan |
|---|---|---|
| Fase 1 | 9 Mei – 19 Jun 2026 | Persiapan, training SO Eyecare (13-19 Jun) |
| Fase 2 | 20–27 Jun 2026 | Opening Ceremony + 5 Service Days SD/SMP |
| Fase 3 | 28 Jun – 31 Jul 2026 | Video edukasi, proposal SMA, Orientation Session (19 Jul) |
| Fase 4 | 3–14 Agt 2026 | 5 Service Days SMA + laporan + presentasi DPL |

**10 Prosedur Vision Screening:**
1. Distance Vision — Snellen Chart
2. Near Vision — Near Vision Chart
3. Stereopsis — Stereofly test / Titmus
4. Color Blindness — Ishihara Plates
5. Cover Test — Cover paddle
6. Motility Test — Penlight / pena
7. Pupil Test — Penlight
8. Auto-Refraction — Autorefractor
9. Intraocular Pressure (IOP) — Tonometer
10. **Fundus Photo / Funduscopy — Fundus Camera ⛔ RESTRICTED ke PolyU HK only**

**Peran UKDW:** Translasi in-class (materi PolyU → Bahasa Indonesia), support komunikasi anak-anak. **Tidak mengoperasikan alat medis.**

**Kode Tim:**
- A / B / C = sub-tim UKDW (3 kelompok berbeda)
- SO1 / SO2 = sub-tim PolyU HK
- Rotasi tiap hari untuk Vision Screening (VS) dan Education (Edu)

**Sekolah SD/SMP (7):** SD Budi Utama, SMP Kristen Kalam Kudus, SD Joanes Bosco, SMP Stella Duce 2 (TBC), SMP Budya Wacana, SD BOPKRI Gondolayu, SMP BOPKRI

**SMA:** 3 sekolah, salah satunya SMA BOPKRI — masih tentative

---

## Bagian 3 — Brainstorm Proker Workshop SMA

### Konteks Sesi SMA

- Ada sesi **khusus UKDW + siswa SMA** tanpa PolyU HK
- Tim UKDW = fasilitator utama (bukan tim medis, bukan SO Eyecare)
- Fokus: softskill / hardskill / pengembangan diri untuk kelas 11-12
- Contoh dari DPL: softskill = cara interview; hardskill = cara pakai Canva
- Format ideal: 2 sesi, masing-masing ±90–120 menit
- Fasilitas: ruang kelas, proyektor, siswa punya smartphone

### Keinginan Dex

- Antimainstream, engaging, memorable (bukan seminar motivasi biasa)
- Ada elemen kompetisi / gamification
- Kalau bisa, ada **sneaky data collection** yang berguna untuk laporan/skripsi
- AI-related content sangat welcome (AI prompting, AI tools)
- Pernah kepikiran: lomba business plan dengan AI, lomba prompting, bikin mereka jadi responden skripsi, SDGs research

---

### Ide dari Claude (Aku)

**1. AI Prompting Royale**
- Kompetisi antar tim: task yang sama (misal bikin kampanye kesehatan mata), semua pakai AI, 30 menit, paling bagus menang
- Rubrik: kreativitas output, relevansi, efisiensi (jumlah prompt)
- Dex + Informatika = juri teknis; FK = juri konten; Manajemen = juri bisnis
- ✅ Pros: Skill berlaku besok pagi, paling relevan 2026, tidak ada SMA yang ngajarin ini
- ❌ Cons: Perlu internet stabil untuk semua siswa

**2. Mini Shark Tank × SDGs Gachapon**
- Siswa random draw 1 SDG goal, 45 menit bikin micro-pitch pakai AI, present ke panel
- Sneaky data: format pitch mengharuskan mereka identify masalah nyata di lingkungan sekitar dulu → Dex collect insight itu
- Bisa di-formalkan jadi data skripsi dengan informed consent di awal
- ✅ Pros: Fun, data kualitatif dari 30+ siswa, legitimizable untuk laporan
- ❌ Cons: SDG framing bisa terasa "serius" untuk SMA kalau tidak dibungkus dengan fun

**3. Career Mythology Debunking**
- Tiap anggota tim debunk 3 mitos tentang prodinya, format game show, siswa tebak mana mitos vs fakta
- ✅ Pros: Personal, relatable untuk yang galau mau kuliah mana, tim = bukti hidupnya
- ❌ Cons: Bisa jadi boring kalau fasilitatornya tidak energetic

**4. Responden Skripsi Terselubung (Bonus Absurd)**
- Workshop "Research Literacy: Cara Jadi Responden yang Baik" → mereka ngisi kuesioner buatan Dex
- Transparansi penuh di awal + informed consent
- ✅ Pros: Data clean, educational juga, mereka ngerasa berkontribusi
- ❌ Cons: Perlu approval DPL kalau mau jadi data skripsi resmi

---

### Ide dari ChatGPT

**1. "Simulasi Hidup 10 Tahun"** ⭐ GOLD
- Siswa masuk ke "tahun 2036" berdasarkan kombinasi pilihan mereka sendiri (jurusan, lifestyle, kebiasaan, dll)
- Jalani simulasi cepat konsekuensi hidup 10 tahun ke depan
- Twist: "Surat dari Diri 2036" yang ditulis berdasarkan pola keputusan mereka selama workshop
- Framing: *Black Mirror versi SMA*
- Peran: FK (health events, burnout, stres), Manajemen (uang, hutang), Informatika (sistem scoring), SI (dashboard visualisasi)
- Data collect: pola kecemasan terbesar, value system, keputusan hidup paling impulsif
- ✅ Pros: Paling emotionally impactful dari semua AI, personalized, twist-nya genius
- ❌ Cons: Butuh prep signifikan (randomizer, event cards, sistem scoring), FK perlu siap handle siswa yang emotionally triggered

**2. "The Algorithm Owns You"** ⭐ SILVER
- Siswa audit digital life sendiri: feed, screen time, doomscrolling, topik yang bikin insecure
- Bedah identitas digital mereka sendiri, bukan ceramah "HP itu buruk"
- Output: "Digital Personality Report"
- Peran: Informatika (cara algoritma bekerja), SI (live polling + data viz), Manajemen (attention economy), FK (dopamin, kecemasan, tidur)
- ✅ Pros: Personal dan unsettling, data harvest kaya, peran SI/Informatika shine
- ❌ Cons: Risiko jadi ceramah kalau facilitatornya kurang snappy

**3. "Escape Room: Krisis Umur 25"**
- Semi roleplay escape room, selesaikan masalah realistis (burnout, gaji kecil, pinjol, AI replacing jobs)
- Twist: tidak ada ending sempurna — semua tim pasti kehilangan sesuatu
- ✅ Pros: Terasa seperti game, memorable
- ❌ Cons: Butuh props, setup kompleks untuk kelas biasa

**4. "Your Body is a Startup"**
- Tubuh = startup, energi = capital, tidur = maintenance, habit = compound growth
- Output: "Annual Report Tubuh"
- ✅ Pros: Analogi kena banget
- ❌ Cons: Konten ini sudah terlalu sering ada di LinkedIn/self-help, kurang antimainstream

**5. "AI vs You: Pekerjaan Mana yang Mati Duluan?"**
- Game prediksi masa depan kerja: profesi mana hilang, skill mana mahal
- Twist: AI menilai apakah profil siswa "replaceable" atau "anti-replaceable"
- ✅ Pros: Provocative, siswa genuinely anxious soal ini
- ❌ Cons: Bisa bikin anxiety tambah parah kalau tidak dihandle well

**6. "Identity Marketplace"**
- Bikin dua profil: "Aku yang diposting" vs "Aku yang sebenarnya"
- Twist: kartu anonim berisi ketakutan terbesar semua orang di ruangan
- ❌ Tidak direkomendasikan: Lebih kayak sesi konseling kelompok, butuh skill psikologi profesional

**7. "The Human Patch Update"**
- Diri sendiri = OS, tulis "patch notes" hidup sendiri (fixed, removed, optimized, known issues)
- Output: "Patch Notes v2.0" yang Instagrammable
- ✅ Bagus sebagai OUTPUT FORMAT atau closing activity dari workshop lain, bukan modul penuh sendiri

**Rekomendasi kombinasi ChatGPT:**
- Sesi 1: "The Algorithm Owns You" (disruption)
- Sesi 2: "Simulasi Hidup 10 Tahun" (reconstruction)

---

### Ide dari Gemini ⚠️ Kasus Spesial

> Gemini menulis disertasi akademis 5000+ kata alih-alih workshop pitch. Ada permata di dalamnya tapi harus digali. Jangan baca linear — langsung ke modul-modulnya.

**1. "Autopsi Masa Depan"**
- Investigasi karakter fiktif 25 tahun yang karir dan hidupnya hancur — siswa jadi investigator forensik
- Twist: karakter fiktif itu ternyata dibangun dari survei anonim siswa sendiri sebelum workshop
- ✅ Bagus tapi: versi ChatGPT ("Simulasi Hidup 10 Tahun") lebih elegant dan emotionally impactful

**2. "Bursa Efek Kewarasan"** ⭐⭐ GOLD TERKUAT
- Mock stock exchange di mana yang diperdagangkan adalah token "kesehatan mental" vs "validasi sosial"
- Siswa berlomba kumpulkan validasi sosial (likes, followers imajiner) sampai semua resources habis
- Twist: "Algorithmic Crash" — fasilitator trigger crash, semua token validasi sosial jatuh ke nol, yang selamat hanya yang pegang token "kesehatan mental"
- Peran: Manajemen (banker, manipulasi market), FK (potong poin ketika kewarasan habis), SI/Informatika (live dashboard bursa di proyektor)
- ✅ Pros: PALING anti-mainstream dari semua AI, theatrical, visualnya strong, data harvest clean
- ❌ Cons: Butuh prep buat "bursa" system (bisa pakai Google Sheets sederhana), kalau sistem awkward suasana mati

**3. "Simulator Kiamat Karier"**
- Distopia 2035, 80% profesi hancur oleh AI, siswa harus pivot instan dengan skill yang tersisa
- Twist: profesi "absurd" yang mereka ciptakan ternyata sudah exist di dunia nyata dengan income tinggi
- ✅ Bagus tapi: mirip "Zombie Apocalypse Career" dari Grok dan "AI vs You" dari ChatGPT

**4. "Dekonstruksi Detik Kritis" (Klitih Angle)** ⭐ HIGH RISK HIGH REWARD
- Bedah anatomi satu keputusan fatal terkait kenakalan remaja, deconstruct second-by-second
- Siswa voting anonim via QR code: di detik mana dan tindakan apa yang seharusnya diintervensi
- Sangat spesifik Yogyakarta (klitih)
- ✅ Pros: Hyper-relevan lokal, belum pernah ada workshop seperti ini di SMA manapun, FK shine untuk neurobiologi impulsivitas
- ❌ Cons: Perlu izin DPL, framing sangat hati-hati, risiko terasa menghakimi atau malah memperkenalkan konsep yang belum mereka tahu

**5. "Kasino Biologis"**
- Kebiasaan sehari-hari sebagai perjudian yang berujung kebangkrutan metabolik
- ❌ Terlalu mirip "Your Body is a Startup" tapi lebih rumit

**6. "Forensik Jejak Berdarah" (OSINT Demo)** ⭐ SILVER
- Siswa jadi analis intelijen, bedah rekam jejak digital 3 kandidat beasiswa fiktif dari digital footprint publik
- Twist: dengan consent sukarela, Informatika/SI lakukan micro-audit jejak digital 1-2 siswa relawan live di layar
- ✅ Pros: Tech team shine paling, efek kejutnya genuine dan nempel seumur hidup
- ❌ Cons: Perlu informed consent ketat, butuh 1 orang yang genuinely bisa demo OSINT basic

**7. "Lelang Prioritas Ekstrem"**
- Siswa pakai mata uang waktu & energi untuk "beli" target sukses (nilai sempurna, relasi, kesehatan, popularitas)
- Twist: menjelang akhir, barang yang paling mahal mereka beli tiba-tiba devaluasi total
- ✅ Pros: Theatrically genius, forces hierarki prioritas nyata
- ❌ Cons: Energinya terlalu chaotic untuk sesi pembuka, setup real-time bidding lumayan teknis

**Rekomendasi kombinasi Gemini:**
- Sesi 1: "Lelang Prioritas Ekstrem" (kalibrasi internal)
- Sesi 2: "Bursa Efek Kewarasan" (pertahanan eksternal)

---

### Ide dari Grok

**1. "Miopi Masa Depan"** ⭐⭐ GOLD — PALING KONTEKSTUAL
- Gabungin skrining kesehatan mata/mental sederhana dengan simulasi bagaimana kebiasaan sekarang memengaruhi masa depan
- Metafora "miopi karir" = kebutaan terhadap masa depan karena habits buruk sekarang
- Output: "Eye & Brain Health Report" pribadi
- Twist: "Future Blind Auction" — bid "kebiasaan buruk" yang mau dijual, pemenang dapat "hukuman" gamified
- Peran: FK (lead health screening, miopi, burnout, dopamine), Manajemen (ROI hidup), Tech (tracker / Notion template)
- ✅ Pros: SATU-SATUNYA ide yang terhubung langsung ke SO Eyecare — narrative arc "penglihatan fisik → penglihatan masa depan" sangat powerful dan cohesive. Membuat keduaKKN fase terasa connected.
- ❌ Cons: Harus hati-hati agar health screening tidak terasa seperti lanjutan KKN medis (bukan workshop softskill)

**2. "Larangan Karir: 7 Hal yang Bikin Kamu Gagal Sebelum Mulai"**
- Bedah mitos karir + self-sabotage via data nyata + cerita dari kakak senior
- Format: "roast session" + interactive courtroom (siswa jadi jaksa & terdakwa karir mereka sendiri)
- Output: "Larangan Karir Pribadi" card fisik + "Future Self Letter" yang bisa difoto (Instagrammable)
- ✅ Pros: Format courtroom fresh dan belum umum, output fisik yang bisa dibawa pulang
- ❌ Cons: Butuh facilitator yang energetic dan berani, bisa flat kalau pembawaannya kurang

**3. "Dex 2.0 Lab: Build Your Unfair Advantage OS"**
- Siswa bikin "Personal OS v1.0" canvas — framework pengembangan diri pakai tools kesehatan, bisnis, & tech
- Provocation Cards: kartu absurd ("Kalau boleh drop out besok, kamu ngapain?") → hasil collect jadi insight
- ❌ Tidak direkomendasikan untuk dibawa ke SMA: terlalu personal-branded (Dex 2.0), awkward untuk siswa yang tidak kenal Dex. Tapi framework-nya bisa diadaptasi.

**4. "Zombie Apocalypse Career"** ⭐ SILVER
- Simulasi dystopia 2035, AI udah ambil banyak pekerjaan, survive dalam tim dengan resource terbatas
- "Infection Card" (bad habits yang nyata) menyebar antar kelompok → chaos relatable
- Peran: FK (Health Resource Manager — stamina habis = mati), Manajemen (resource allocation), Tech (innovation challenges)
- ✅ Pros: Full gamified, paling fun secara energi, props sederhana
- ❌ Cons: Mirip dengan Simulator Kiamat Karier (Gemini) dan AI vs You (ChatGPT)

**5. "Love Letter ke Versi Diri yang Gagal"** ⭐ SILVER
- Siswa nulis surat cinta ke versi diri yang "gagal total" — lepaskan perfectionism & fear of failure
- Twist: surat disegel dan "dikirim" ke alamat rumah 3 bulan kemudian (atau Google Form scheduled email)
- ✅ Pros: Paling emotionally unique, anti-perfectionism messaging kuat, output jadi karya seni
- ❌ Cons: Bisa terlalu heavy, FK perlu siap handle emotional spillover, postal Indonesia unreliable (pakai scheduled email)

**Rekomendasi kombinasi Grok:**
- Sesi 1: "Miopi Masa Depan" (health + foundation)
- Sesi 2: "Dex 2.0 Lab" atau "Larangan Karir" (action + personal OS)

---

## Bagian 4 — Analisis & Rekomendasi Final

### Tier List Semua Ide

**⭐⭐ GOLD — Paling layak dieksekusi:**
1. **"Bursa Efek Kewarasan"** (Gemini) — paling anti-mainstream, theatrical, memorable
2. **"Miopi Masa Depan"** (Grok) — satu-satunya yang terhubung ke SO Eyecare, narrative arc paling cohesive
3. **"Simulasi Hidup 10 Tahun"** (ChatGPT) — paling emotionally impactful, twist "surat 2036" genius

**⭐ SILVER — Worth considering:**
4. **"The Algorithm Owns You"** (ChatGPT) — data harvest kaya, peran tech team shine
5. **"Forensik Jejak Berdarah"** (Gemini) — unforgettable jika OSINT demo berhasil
6. **"Zombie Apocalypse Career"** (Grok) — paling fun secara energi
7. **"Love Letter ke Versi Diri yang Gagal"** (Grok) — paling emotionally unique
8. **"AI Prompting Royale"** (Claude) — paling skill-transferable

**🤔 SITUASIONAL — Bagus tapi perlu kondisi khusus:**
9. **"Dekonstruksi Detik Kritis / Klitih"** (Gemini) — high risk high reward, perlu izin DPL
10. **"AI vs You: Pekerjaan Mana yang Mati"** (ChatGPT) — bagus tapi bisa memperparah anxiety

**❌ SKIP:**
- "Identity Marketplace" — terlalu mirip sesi konseling profesional
- "Your Body is a Startup" / "Kasino Biologis" — konten sudah terlalu umum
- "Dex 2.0 Lab" — terlalu personal untuk siswa yang tidak kenal Dex
- "Escape Room Krisis Umur 25" — setup terlalu kompleks

### Rekomendasi Kombinasi Terkuat (versi Claude)

**Opsi A — Maximum impact + data collection:**
- Sesi 1: **"Miopi Masa Depan"** (Grok) — jembatan antara SO Eyecare dan workshop SMA
- Sesi 2: **"Bursa Efek Kewarasan"** (Gemini) — climax theatrical yang unforgettable

**Opsi B — Maximum emotional resonance:**
- Sesi 1: **"The Algorithm Owns You"** (ChatGPT) — sadar diri
- Sesi 2: **"Simulasi Hidup 10 Tahun"** (ChatGPT) — rekonstruksi

**Mengapa Opsi A lebih kuat:**
Opsi A punya *narrative arc yang cohesive*: kamu datang sebagai tim yang baru selesai ngerjain pemeriksaan penglihatan fisik — dan sekarang kamu ngomongin "kebutaan masa depan" (Sesi 1), lalu demonstrasikan bagaimana validasi sosial membutakan mereka dari kesehatan mental yang sebenarnya (Sesi 2). Itu storytelling yang solid.

### Satu Ide Tambahan dari Claude (Belum Ada di AI Manapun)

**"Sidang Masa Depan Indonesia"**
- Siswa dibagi jadi faksi (Faksi Kesehatan, Faksi Ekonomi, Faksi Teknologi, Faksi Sosial)
- Harus presentasikan argumen tentang masalah terbesar Indonesia 2035 dari sudut pandang faksi masing-masing
- Voting solusi terbaik, Dex = Hakim Agung
- Sneaky data collection: semua argumen mereka → data kualitatif untuk laporan KKN / skripsi
- Lebih terstruktur dari SDGs Gachapon, lebih legitimate secara akademis

---

## Bagian 5 — Prompt Lanjutan untuk AI

### Untuk ChatGPT — Kembangkan "Simulasi Hidup 10 Tahun"

> *"Kembangkan hanya modul 'Simulasi Hidup 10 Tahun' menjadi rundown fasilitator 90 menit yang detail. Fokus pada: (1) decision tree yang realistis untuk siswa SMA kelas 11-12 Indonesia, (2) cara randomizer bekerja tanpa butuh software khusus, (3) bagaimana 'Surat dari Diri 2036' dihasilkan secara otomatis dari input mereka, (4) protokol untuk fasilitator jika ada siswa yang terdampak secara emosional. Output: Tabel rundown menit per menit + script pembuka fasilitator."*

### Untuk Gemini — Paksa Dia Singkat

> *"Buat rundown fasilitator 90 menit untuk HANYA satu workshop: 'Bursa Efek Kewarasan'. LARANGAN: tidak boleh ada paragraf teori, tidak boleh ada kata akademis seperti 'epistemologis' atau 'biopsikososial'. FORMAT WAJIB: menit ke-0 sampai menit ke-90, dalam tabel, kolom: Waktu | Aktivitas | Yang Fasilitator Katakan | Yang Siswa Lakukan | Siapa dari Tim yang Lead. Tidak lebih dari 600 kata total."*

### Untuk Grok — Kembangkan "Miopi Masa Depan" dengan Konteks KKN

> *"Kembangkan workshop 'Miopi Masa Depan' dengan mempertimbangkan bahwa tim fasilitator baru saja menyelesaikan 5 hari service day SO Eyecare (pemeriksaan kesehatan mata) di SD dan SMP bersama tim dari Hong Kong PolyU. Bagaimana kita bisa secara eksplisit menggunakan pengalaman SO Eyecare sebagai pembuka yang powerful? Sertakan: script pembuka yang reference SO Eyecare, 'Future Blind Auction' yang lebih detail, cara collect data anonim via Google Form dalam workshop ini, dan satu output siswa yang bisa mereka foto dan share."*

---

## Bagian 6 — To-Do List Lengkap

### 🔴 Urgent (sebelum Juni 2026)

- [ ] **Konfirmasi ke DPL**: Ada berapa sesi UKDW-only dengan SMA? Berapa durasi per sesi? Format bebas atau ada template?
- [ ] **Pilih konsep final workshop** setelah dapat jawaban DPL
- [ ] **Run prompt lanjutan** ke ChatGPT, Gemini, Grok (prompt ada di Bagian 5)
- [ ] **Susun proposal workshop SMA** yang harus disetujui DPL sebelum Agustus
- [ ] **Konfirmasi jadwal training SO Eyecare** 13–19 Juni

### 🟡 Before Service Day 1 (sebelum 21 Juni)

- [ ] Kerjakan semua checklist di website (14 items)
- [ ] Pelajari 10 prosedur vision screening
- [ ] Konfirmasi lokasi Opening Ceremony 20 Juni
- [ ] Cek rotasi tim untuk hari pertama

### 🟢 After SD/SMP Phase (28 Juni – Juli)

- [ ] **Video edukasi mata**: 5–10 menit, semua 6 anggota wajib tampil — deadline 29 Juni
- [ ] Finalisasi dan submit proposal workshop SMA
- [ ] Persiapan Orientation Session PolyU HK (19 Juli)
  - Siapkan materi interactive games (~1 jam)
  - UKDW rotasi ke tiap kelompok PolyU untuk ice breaking (15 mnt/kelompok, ~2 jam)
- [ ] Buat laporan refleksi fase SD/SMP

### 🔵 Website (Low Priority)

- [ ] Pertimbangkan tambah halaman "Proker SMA" setelah proposal final
- [ ] Pertimbangkan tambah notifikasi/reminder berbasis tanggal

---

## Bagian 7 — Open Questions

1. **Berapa sesi persis yang tersedia untuk workshop SMA?** (1 sesi atau 2 sesi?)
2. **Apakah ada constraint tema dari DPL/LPPM?** (misal: harus berkaitan dengan kesehatan/STEM)
3. **Apakah data collection untuk skripsi perlu approval formal dari LPPM atau cukup DPL?**
4. **Apakah Dex niat serius pakai data workshop untuk skripsi/laporan akademis?** — kalau iya, desain informed consent form dari awal
5. **Apakah lokasi SMA sudah fixed atau masih tentative?** — penting untuk planning logistik

---

---

*File ini dibuat 2026-05-19. Last updated: 2026-05-21.*
*Next session: konfirmasi ke DPL (berapa sesi, durasi, constraint tema), lalu pilih ide final dari website, lalu jalankan prompt lanjutan ke ChatGPT/Gemini/Grok untuk develop rundown detail.*
