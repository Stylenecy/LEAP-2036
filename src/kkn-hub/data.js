const GEMINI_DEFAULT_KEY = 'AIzaSyCOgaP1r6vNsszVdqMFdo64E5uzw_LEmVM';

const KKN = {
  meta: {
    title: "KKN STEM 2026 — Kelompok 2",
    program: "KKN Tematik International Service Learning STEM",
    kolaborasi: "UKDW Yogyakarta × Hong Kong Polytechnic University (HK PolyU)",
    semester: "Genap 2025/2026",
    kelompok: 2,
    totalKelompok: 10,
  },

  // ══ LATEST UPDATES (push signal — paling baru di atas) ══
  latestUpdates: [
    {
      date: "2026-05-24",
      title: "Tema Workshop SMA Fix: Simulasi Hidup 10 Tahun (LEAP 2036)",
      desc: "Kelompok memutuskan tema final. Draft proposal v1.0 sudah selesai. GMeet malam ini 20.00 WIB untuk sharing progress ke DPL.",
      tag: "DECISION",
      gotoPage: "proker",
    },
    {
      date: "2026-05-24",
      title: "Halaman Tugas Tim Tersedia",
      desc: "Tugas spesifik per anggota sudah dibreakdown. Cek bagianmu di halaman Tugas Tim.",
      tag: "NEW",
      gotoPage: "tugas",
    },
    {
      date: "2026-05-21",
      title: "Website Upgrade: Font + Halaman Ide Workshop",
      desc: "Font baru (Inter + Instrument Serif), tampilan card lebih clean, halaman ide workshop SMA tersedia.",
      tag: "UPDATE",
      gotoPage: "proker",
    },
  ],

  // ══ DECISION LOG (keputusan yang sudah fix) ══
  decisions: [
    {
      date: "2026-05-24",
      topic: "Tema Workshop SMA",
      decision: "Workshop Simulasi Hidup 10 Tahun: Keputusanmu Hari Ini, Hidupmu 2036",
      brand: "LEAP 2036 (Life Experience & Action Planning)",
      reason: "Konsep paling emotionally impactful (twist 'Surat dari Diri 2036'), durasi fleksibel 4-6 jam, sesuai brief APL.",
      status: "FIXED — menunggu review DPL",
    },
    {
      date: "2026-05-24",
      topic: "Struktur Proyek (Dex OS)",
      decision: "Folder direstrukturisasi: /docs, /assets, /src, /.agent. PROJECT_MASTER.md di root.",
      reason: "Konsistensi dengan standar Dex OS, memudahkan navigasi dan kolaborasi.",
      status: "DONE",
    },
    {
      date: "2026-05-21",
      topic: "Tech Stack KKN-HUB",
      decision: "Vanilla JS + HTML + CSS, deploy ke Vercel (kknstem.vercel.app)",
      reason: "Cepat dibangun, no build step, mudah di-maintain, langsung accessible buat semua anggota.",
      status: "DONE",
    },
    {
      date: "2026-05-19",
      topic: "Format Brainstorm Workshop SMA",
      decision: "Crowdsource ide dari 4 AI (Claude, ChatGPT, Gemini, Grok), kurasi tier list.",
      reason: "Diversifikasi sumber ide, hindari bias satu AI, dapatkan range terluas.",
      status: "DONE",
    },
  ],

  // ══ FINAL PROKER (workshop yang sudah fix) ══
  prokerFinal: {
    locked: true,
    judul: "Workshop Simulasi Hidup 10 Tahun: Keputusanmu Hari Ini, Hidupmu 2036",
    brand: "LEAP 2036",
    brandExpand: "Life Experience & Action Planning",
    tagline: "Black Mirror versi SMA — jalani 10 tahun keputusanmu dalam beberapa jam",
    targetSiswa: "Siswa SMA Kelas 11 & 12",
    durasi: "4–6 jam per service day (sesuai kesediaan SMA)",
    metode: "Experiential Learning — Simulasi berbasis kartu keputusan",
    proposalPath: "docs/Proposal-Workshop-SMA-Kelompok2.md",
    visi: "Memaksa siswa menyadari bahwa keputusan 'kecil' hari ini adalah *compound interest* bagi hidup mereka 10 tahun ke depan.",
    tujuan: [
      "Meningkatkan kesadaran siswa SMA tentang dampak jangka panjang dari pola keputusan harian mereka.",
      "Mengembangkan kemampuan pengambilan keputusan yang reflektif, sadar nilai, dan berorientasi masa depan.",
      "Membangun future literacy — kemampuan membayangkan, merencanakan, dan mempersiapkan diri untuk masa depan secara realistis.",
      "Mendorong siswa mengidentifikasi core values yang ingin mereka jadikan kompas hidup.",
    ],
    mekanisme: {
      sumberDaya: ["Energi (100)", "Kapital/Uang (100)", "Kesehatan Mental (100)"],
      fase: [
        { name: "Fase 1 — Fondasi", years: "2026–2028", focus: "Pendidikan & Awal Karier" },
        { name: "Fase 2 — Krisis", years: "2029–2032", focus: "Karier, Relasi & Badai Pertama" },
        { name: "Fase 3 — Panen", years: "2033–2036", focus: "Konsekuensi & Refleksi" },
      ],
      twist: "'Surat dari Diri 2036' — siswa menulis surat dari versi masa depan diri mereka berdasarkan pola keputusan selama simulasi.",
    },
    rundown5h: [
      { time: "08.00–08.30", duration: "30m", segmen: "Opening & Perkenalan", lead: "Semua" },
      { time: "08.30–09.00", duration: "30m", segmen: "Briefing Mekanisme", lead: "Dex" },
      { time: "09.00–10.00", duration: "60m", segmen: "FASE 1: Fondasi", lead: "Dhevina + Dex" },
      { time: "10.00–10.15", duration: "15m", segmen: "Break", lead: "—" },
      { time: "10.15–11.30", duration: "75m", segmen: "FASE 2: Krisis", lead: "Benediktus + Syendhi" },
      { time: "11.30–12.15", duration: "45m", segmen: "FASE 3: Panen", lead: "Semua" },
      { time: "12.15–12.45", duration: "30m", segmen: "Debrief & Refleksi", lead: "Dex" },
      { time: "12.45–13.15", duration: "30m", segmen: "Surat dari Diri 2036", lead: "Maria + Theana" },
      { time: "13.15–13.30", duration: "15m", segmen: "Closing & Dokumentasi", lead: "Semua" },
    ],
    sumberDayaAwal: { energi: 100, kapital: 100, mental: 100 },
    profil2036: [
      { emoji: "⚡", name: "The Burnout Achiever", desc: "Karier tinggi, mental hancur — sukses tapi exhausted" },
      { emoji: "💚", name: "The Balanced Builder", desc: "Stabil di semua aspek — slow but sustainable" },
      { emoji: "🌊", name: "The Late Bloomer", desc: "Sempat krisis, bangkit di fase akhir" },
      { emoji: "💡", name: "The Creative Rebel", desc: "Jalur tidak konvensional, impact besar" },
      { emoji: "🔥", name: "The Survivor", desc: "Selamat dari banyak crisis, resilient" },
      { emoji: "🦅", name: "The Visionary", desc: "Risk-taker yang berhasil — semua aspek tinggi" },
    ],
  },

  // ══ DOKUMEN KELOMPOK (link ke MD files yang sudah disiapkan) ══
  dokumenKelompok: [
    {
      kategori: "Handover & Index",
      files: [
        { name: "Handover Master", file: "Handover-Master.md", desc: "Peta navigasi semua dokumen — baca dulu kalau bingung", priority: "high" },
      ],
    },
    {
      kategori: "Dokumen Proposal & Materi",
      files: [
        { name: "Proposal Workshop SMA", file: "Proposal-Workshop-SMA-Kelompok2.md", desc: "Proposal LEAP 2036 lengkap untuk DPL", priority: "high" },
        { name: "Skenario Starter Pack", file: "Skenario-Starter-Pack.md", desc: "15+ skenario draft per fase + template Surat 2036", priority: "high" },
      ],
    },
    {
      kategori: "Asisten Brief (Per Person)",
      files: [
        { name: "Brief untuk Dhevina (Manajemen)", file: "Asisten-Brief_Dhevina.md", desc: "Tugas, script, materi belajar — Lead Fase 1", priority: "high", forPerson: "Dhevina" },
        { name: "Brief untuk Syendhi (Informatika)", file: "Asisten-Brief_Syendhi.md", desc: "Tugas, setup Google Sheets, materi belajar — Lead teknis", priority: "high", forPerson: "Syendhi" },
      ],
    },
    {
      kategori: "Master & History",
      files: [
        { name: "Catatan Master KKN", file: "Catatan-KKN-STEM-2026.md", desc: "Master info program KKN (timeline, prosedur, kontak)", priority: "medium" },
        { name: "Progress Brainstorm", file: "Progress-KKN-STEM-2026.md", desc: "Riwayat brainstorm 4 AI + tier list ide", priority: "low" },
        { name: "Catatan APL/DPL", file: "Catatan APL & DPL.txt", desc: "Update dari APL: jadwal, format proposal, durasi workshop", priority: "high" },
      ],
    },
    {
      kategori: "Komunikasi",
      files: [
        { name: "GMeet Talking Points (Dex)", file: "GMeet-Talking-Points_24-Mei.md", desc: "Script Dex untuk GMeet sharing progress 24 Mei", priority: "medium" },
      ],
    },
  ],

  // ══ TASK ASSIGNMENTS (kepemilikan per anggota) ══
  taskAssignments: [
    {
      anggota: "Dex Bennett",
      prodi: "Sistem Informasi",
      emoji: "⚡",
      color: "cyan",
      perWorkshop: ["MC utama / koordinator hari-H", "Sistem skor live (Google Sheets dashboard)", "Briefing mekanisme di pembukaan", "Lead debrief & refleksi sesi"],
      preWorkshop: ["Maintain KKN-HUB website", "Finalisasi proposal & PPT untuk DPL", "Decision matrix (skenario per fase)", "Setup Google Form data collection"],
      status: "ACTIVE",
    },
    {
      anggota: "Syendhi Reswara S.",
      prodi: "Informatika",
      emoji: "💻",
      color: "purple",
      perWorkshop: ["Co-lead Fase 2 (Krisis)", "Operator dashboard skor live di proyektor", "Backup teknis (proyektor, audio, koneksi)"],
      preWorkshop: ["Setup Google Sheets template scoring system", "Test alur teknis sebelum hari-H"],
      status: "PENDING — minta konfirmasi",
    },
    {
      anggota: "Dhevina Putri Agustya",
      prodi: "Manajemen",
      emoji: "📊",
      color: "orange",
      perWorkshop: ["Lead Fase 1 (Fondasi) — skenario finansial & karier awal", "Banker event di simulasi", "Bantu hitung modal Kapital/Uang siswa"],
      preWorkshop: ["Buat 5-7 skenario finansial untuk Fase 1", "Riset insight finansial sederhana untuk briefing"],
      status: "PENDING — minta konfirmasi",
    },
    {
      anggota: "Benediktus Satria T.",
      prodi: "Kedokteran",
      emoji: "🩺",
      color: "green",
      perWorkshop: ["Lead Fase 2 (Krisis) — handle burnout & krisis kesehatan event", "Brief insight medis tentang stres & mental health"],
      preWorkshop: ["Buat 5-7 skenario kesehatan untuk Fase 2", "Siapkan brief singkat soal burnout & sleep debt"],
      status: "PENDING — minta konfirmasi",
    },
    {
      anggota: "Maria Nadira Dosinaen",
      prodi: "Kedokteran",
      emoji: "🩺",
      color: "green",
      perWorkshop: ["Co-lead segmen 'Surat dari Diri 2036'", "Fasilitator kelompok kecil", "Emotional support protocol jika ada siswa terdampak"],
      preWorkshop: ["Buat template 'Surat dari Diri 2036'", "Riset protokol emotional safety untuk experiential learning"],
      status: "PENDING — minta konfirmasi",
    },
    {
      anggota: "Theana Amabel K.",
      prodi: "Kedokteran",
      emoji: "🩺",
      color: "green",
      perWorkshop: ["Co-lead segmen 'Surat dari Diri 2036'", "Fasilitator kelompok kecil", "Dokumentasi foto/video selama workshop"],
      preWorkshop: ["Bantu Maria buat template Surat 2036", "Siapkan checklist dokumentasi"],
      status: "PENDING — minta konfirmasi",
    },
  ],

  team: [
    { no: 1, nama: "Syendhi Reswara S.", prodi: "Informatika", gender: "Pria", emoji: "💻", color: "purple" },
    { no: 2, nama: "Benediktus Satria Trisnawan", prodi: "Kedokteran", gender: "Pria", emoji: "🩺", color: "green" },
    { no: 3, nama: "Maria Nadira Dosinaen", prodi: "Kedokteran", gender: "Wanita", emoji: "🩺", color: "green" },
    { no: 4, nama: "Theana Amabel Krismeiati", prodi: "Kedokteran", gender: "Wanita", emoji: "🩺", color: "green" },
    { no: 5, nama: "Dhevina Putri Agustya", prodi: "Manajemen", gender: "Wanita", emoji: "📊", color: "orange" },
    { no: 6, nama: "Dex Bennett", prodi: "Sistem Informasi", gender: "Pria", emoji: "⚡", color: "cyan", isMe: true },
  ],

  contacts: [
    { role: "DPL", nama: "dr. Loury Priiskila, M.Biomed.", phone: "628139070-9672", phoneDisplay: "+62 813-9070-9672", note: "Dosen Pembimbing Lapangan" },
    { role: "APL 1", nama: "Eleonora Bintang Dahayu P", phone: "6285817756217", phoneDisplay: "+62 858-1775-6217", note: "Asisten Pembimbing Lapangan" },
    { role: "APL 2", nama: "Carolus Yasser Rombebunga", phone: "6285254253035", phoneDisplay: "+62 852-5425-3035", note: "Asisten Pembimbing Lapangan" },
  ],

  friendGroups: [
    { nama: "Hans Gunawan", kelompok: 6, prodi: "Sistem Informasi" },
    { nama: "Dave Aryanda Agape", kelompok: 9, prodi: "Sistem Informasi" },
  ],

  locations: {
    sdSmp: [
      { nama: "SD Budi Utama", jenjang: "SD", confirmed: true },
      { nama: "SMP Kristen Kalam Kudus", jenjang: "SMP", confirmed: true },
      { nama: "SD Joanes Bosco", jenjang: "SD", confirmed: true },
      { nama: "SMP Stella Duce 2", jenjang: "SMP", confirmed: false, note: "TBC" },
      { nama: "SMP Budya Wacana", jenjang: "SMP", confirmed: true },
      { nama: "SD BOPKRI Gondolayu", jenjang: "SD", confirmed: true },
      { nama: "SMP BOPKRI", jenjang: "SMP", confirmed: true },
    ],
    sma: [
      { nama: "SMA BOPKRI", confirmed: false, note: "Tentative" },
      { nama: "2 SMA lainnya", confirmed: false, note: "Tentative" },
    ],
  },

  timeline: [
    { id: "pembekalan", label: "Pembekalan KKN", start: "2026-05-09", end: "2026-05-09", phase: "persiapan", color: "cyan", done: true },
    { id: "persiapan-proposal", label: "Persiapan Proposal Workshop SMA", start: "2026-05-11", end: "2026-05-13", phase: "persiapan", color: "cyan", done: true },
    { id: "presentasi-proposal", label: "Presentasi Proposal ke DPL", start: "2026-05-25", end: "2026-05-26", phase: "persiapan", color: "cyan", done: false },
    { id: "persiapan-so", label: "Persiapan SO Eyecare (Consent Form)", start: "2026-06-13", end: "2026-06-17", phase: "eyecare", color: "purple", done: false },
    { id: "opening", label: "Opening Ceremony", start: "2026-06-20", end: "2026-06-20", phase: "eyecare", color: "green", done: false },
    { id: "sd1", label: "Service Day 1", start: "2026-06-21", end: "2026-06-21", phase: "eyecare", color: "orange", done: false, isServiceDay: true },
    { id: "sd2", label: "Service Day 2", start: "2026-06-22", end: "2026-06-22", phase: "eyecare", color: "orange", done: false, isServiceDay: true },
    { id: "sd3", label: "Service Day 3", start: "2026-06-23", end: "2026-06-23", phase: "eyecare", color: "orange", done: false, isServiceDay: true },
    { id: "sd4", label: "Service Day 4", start: "2026-06-24", end: "2026-06-24", phase: "eyecare", color: "orange", done: false, isServiceDay: true },
    { id: "sd5", label: "Service Day 5", start: "2026-06-25", end: "2026-06-25", phase: "eyecare", color: "orange", done: false, isServiceDay: true },
    { id: "closing", label: "Closing Ceremony", start: "2026-06-27", end: "2026-06-27", phase: "eyecare", color: "green", done: false },
    { id: "video", label: "Pembuatan Video Edukasi Mata", start: "2026-06-28", end: "2026-06-29", phase: "pasca", color: "purple", done: false },
    { id: "penyusunan", label: "Penyusunan Proposal SMA", start: "2026-06-24", end: "2026-07-01", phase: "sma", color: "cyan", done: false },
    { id: "orientation", label: "Orientation Session UKDW × PolyU", start: "2026-07-19", end: "2026-07-19", phase: "orientasi", color: "purple", done: false },
    { id: "persiapan-sma", label: "Persiapan Service Day SMA", start: "2026-07-30", end: "2026-07-31", phase: "sma", color: "cyan", done: false },
    { id: "sma-1", label: "Service Day SMA 1–5", start: "2026-08-03", end: "2026-08-07", phase: "sma", color: "orange", done: false, isServiceDay: true },
    { id: "laporan", label: "Pembuatan Laporan Kegiatan", start: "2026-08-10", end: "2026-08-12", phase: "akhir", color: "cyan", done: false },
    { id: "presentasi-dpl", label: "Presentasi ke DPL", start: "2026-08-13", end: "2026-08-14", phase: "akhir", color: "green", done: false },
  ],

  procedures: [
    { no: 1, name: "Distance Vision", en: "Distance Vision", desc: "Ketajaman penglihatan jarak jauh. Biasanya menggunakan Snellen Chart (papan huruf/angka) dari jarak 6 meter.", alat: "Snellen Chart", restricted: false },
    { no: 2, name: "Near Vision", en: "Near Vision", desc: "Ketajaman penglihatan jarak dekat. Menggunakan kartu baca berukuran kecil.", alat: "Near Vision Chart", restricted: false },
    { no: 3, name: "Stereopsis", en: "Stereopsis", desc: "Tes persepsi kedalaman / kemampuan melihat secara 3D. Penting untuk koordinasi mata-tangan.", alat: "Stereofly test / Titmus", restricted: false },
    { no: 4, name: "Color Blindness", en: "Color Blindness", desc: "Tes buta warna. Anak diminta membaca angka/pola dari buku Ishihara plates (titik-titik berwarna).", alat: "Ishihara Plates", restricted: false },
    { no: 5, name: "Cover Test", en: "Cover Test", desc: "Deteksi strabismus (mata juling). Satu mata ditutup secara bergantian, diamati apakah mata lain bergerak/menyimpang.", alat: "Cover paddle", restricted: false },
    { no: 6, name: "Motility Test", en: "Ocular Motility Test", desc: "Tes gerakan bola mata ke berbagai arah (atas, bawah, kiri, kanan, diagonal). Cek fungsi 6 otot mata.", alat: "Penlight / pena", restricted: false },
    { no: 7, name: "Pupil Test", en: "Pupillary Reflex Test", desc: "Tes refleks pupil terhadap cahaya. Pupil normal mengecil saat terkena cahaya (pupillary light reflex).", alat: "Penlight", restricted: false },
    { no: 8, name: "Auto-Refraction", en: "Auto-Refraction", desc: "Pengukuran otomatis minus/plus/silinder mata menggunakan mesin autorefractor. Hasilnya = ukuran kacamata awal.", alat: "Autorefractor", restricted: false },
    { no: 9, name: "Intraocular Pressure (IOP)", en: "Intraocular Pressure", desc: "Mengukur tekanan cairan dalam bola mata. Tekanan tinggi = indikasi glaukoma. Normal: 10–21 mmHg.", alat: "Tonometer / Non-contact tonometer", restricted: false },
    { no: 10, name: "Fundus Photo / Funduscopy", en: "Fundus Photography", desc: "Foto bagian belakang mata (retina, saraf optik, makula, pembuluh darah). HANYA mahasiswa PolyU HK yang boleh operasikan alat ini.", alat: "Fundus Camera", restricted: true },
  ],

  serviceTeamRotation: [
    { day: "Service Day 1", vs: "A+SO1 & B+SO2", edu: "C" },
    { day: "Service Day 2", vs: "B+SO2 & C+SO1", edu: "A" },
    { day: "Service Day 3", vs: "C+SO1 & A+SO2", edu: "B" },
    { day: "Service Day 4", vs: "A+SO1 & B+SO2", edu: "C" },
    { day: "Service Day 5", vs: "B+SO2 & C+SO1", edu: "A" },
  ],

  eduTeams: [
    { team: "Tim A", usia: "3–6 tahun", note: "Anak TK/SD kelas 1" },
    { team: "Tim B", usia: "6–8 tahun", note: "SD kelas 1–2" },
    { team: "Tim C", usia: "9–12 tahun", note: "SD kelas 3–6" },
  ],

  checklist: [
    { id: "c1", text: "Konfirmasi masuk Tim A, B, atau C", category: "Tim", urgent: true },
    { id: "c2", text: "Ikuti training penggunaan alat dari PolyU (WAJIB hadir)", category: "Training", urgent: true },
    { id: "c3", text: "Pastikan proposal workshop SMA sudah disetujui DPL", category: "Akademik", urgent: true },
    { id: "c4", text: "Data Consent Form sekolah sudah dikumpulkan (13–17 Juni)", category: "Administrasi", urgent: false },
    { id: "c5", text: "Siapkan fisik dan mental — 5 service days berturut-turut", category: "Persiapan Diri", urgent: false },
    { id: "c6", text: "Simpan kontak DPL: dr. Loury Priiskila +62 813-9070-9672", category: "Kontak", urgent: false },
    { id: "c7", text: "Simpan kontak APL 1: Eleonora Bintang +62 858-1775-6217", category: "Kontak", urgent: false },
    { id: "c8", text: "Simpan kontak APL 2: Carolus Yasser +62 852-5425-3035", category: "Kontak", urgent: false },
    { id: "c9", text: "Pelajari 10 prosedur vision screening (terutama yang tidak restricted)", category: "Materi", urgent: false },
    { id: "c10", text: "Pelajari materi edukasi sesuai kelompok usia yang ditangani", category: "Materi", urgent: false },
    { id: "c11", text: "Siapkan bahan ice-breaking untuk Orientation Session 19 Juli", category: "Orientation", urgent: false },
    { id: "c12", text: "Mulai diskusi topik workshop softskill untuk SMA dengan kelompok", category: "Workshop SMA", urgent: false },
    { id: "c13", text: "Video edukasi mata — pastikan semua anggota bisa tampil 28–29 Juni", category: "Video", urgent: false },
    { id: "c14", text: "Online coaching dengan HK PolyU (jadwal tentative — pantau info)", category: "Koordinasi", urgent: false },
  ],

  faq: [
    {
      q: "Kapan service day pertama?",
      a: "Service Day 1 adalah 21 Juni 2026. Sebelumnya ada Opening Ceremony pada 20 Juni 2026.",
      tags: ["jadwal", "service day", "tanggal"],
    },
    {
      q: "Siapa saja anggota kelompok 2?",
      a: "Kelompok 2 terdiri dari: Syendhi Reswara S. (Informatika), Benediktus Satria Trisnawan (Kedokteran), Maria Nadira Dosinaen (Kedokteran), Theana Amabel Krismeiati (Kedokteran), Dhevina Putri Agustya (Manajemen), dan Dex Bennett (Sistem Informasi).",
      tags: ["tim", "anggota", "kelompok 2"],
    },
    {
      q: "Alat apa yang tidak boleh dipegang mahasiswa UKDW?",
      a: "Fundus Camera (untuk Funduscopy / Fundus Photo) hanya boleh dipegang dan dioperasikan oleh mahasiswa PolyU HK. Ada beberapa alat lain yang juga restricted — akan dijelaskan saat training sebelum kolaborasi.",
      tags: ["alat", "restricted", "funduscopy", "PolyU"],
    },
    {
      q: "Apa itu stereopsis?",
      a: "Stereopsis adalah kemampuan persepsi kedalaman / melihat secara 3D. Tes ini menguji apakah kedua mata bisa bekerja sama menghasilkan persepsi kedalaman yang akurat. Sering menggunakan alat seperti Stereofly test atau Titmus fly test.",
      tags: ["prosedur", "stereopsis", "pemeriksaan mata"],
    },
    {
      q: "Apa itu funduscopy?",
      a: "Funduscopy (atau Fundus Photo) adalah pemeriksaan bagian belakang mata — retina, saraf optik, makula, dan pembuluh darah. Menggunakan fundus camera. Alat ini HANYA boleh dioperasikan oleh mahasiswa PolyU HK.",
      tags: ["prosedur", "funduscopy", "fundus", "restricted"],
    },
    {
      q: "Siapa DPL kelompok 2?",
      a: "DPL (Dosen Pembimbing Lapangan) kelompok 2 adalah dr. Loury Priiskila, M.Biomed. Kontak: +62 813-9070-9672. APL: Eleonora Bintang Dahayu P (+62 858-1775-6217) dan Carolus Yasser Rombebunga (+62 852-5425-3035).",
      tags: ["DPL", "APL", "kontak", "pembimbing"],
    },
    {
      q: "Apa peran mahasiswa UKDW?",
      a: "Mahasiswa UKDW berperan sebagai: (1) Penerjemah in-class selama sesi edukasi, (2) Support komunikasi dengan anak-anak saat vision screening, (3) Interpretation assistance untuk kelancaran layanan. Kita TIDAK mengoperasikan alat medis.",
      tags: ["peran", "UKDW", "tugas"],
    },
    {
      q: "Apa itu SO Eyecare?",
      a: "SO Eyecare adalah nama program kolaborasi UKDW × PolyU HK ini. Program ini menggantikan program sebelumnya (EEE / Electronic and Electrical Engineering). Fokusnya adalah skrining penglihatan dan edukasi kesehatan mata untuk anak SD dan SMP di Yogyakarta.",
      tags: ["SO Eyecare", "program", "pengertian"],
    },
    {
      q: "Berapa durasi video edukasi mata?",
      a: "Video Edukasi Mata dibuat setelah Service Days SD/SMP (28–29 Juni). Durasi minimal 5 menit, maksimal 10 menit. Seluruh anggota kelompok wajib tampil dalam video.",
      tags: ["video", "edukasi", "durasi", "syarat"],
    },
    {
      q: "Kapan orientation session?",
      a: "Orientation Session UKDW × PolyU HK berlangsung pada 19 Juli 2026, durasi sekitar 4 jam. Sesi ini terdiri dari: ice-breaking UKDW dengan mahasiswa PolyU (~2 jam, 7 kelompok, rotasi 15 menit/kelompok), demo vision screening oleh PolyU (~1 jam), dan interactive games/activities dari UKDW untuk PolyU (~1 jam).",
      tags: ["orientation session", "19 juli", "PolyU", "ice breaking"],
    },
    {
      q: "Maksud kode A, B, C, SO1, SO2 di tabel rotasi itu apa?",
      a: "Kode-kode itu adalah singkatan pembagian sub-tim saat service days:\n\n• A, B, C = sub-tim dari mahasiswa UKDW\n• SO1, SO2 = sub-grup dari mahasiswa PolyU HK (SO = Supporting Officer / sub-officer dari pihak Hong Kong)\n\nJadi 'A+SO1' artinya sub-tim UKDW A bekerja bersama sub-grup PolyU SO1 sebagai satu tim Vision Screening (VS) di hari itu.\n\nContoh baca tabel di Service Day 1:\n• Vision Screening: Tim (A+SO1) pergi ke satu sekolah, dan Tim (B+SO2) pergi ke sekolah lain — jadi ada DUA tim VS yang beroperasi bersamaan di sekolah berbeda.\n• Education: Tim C mengisi sesi edukasi kesehatan mata di kelas.\n\nSetiap service day, peran A/B/C berotasi sehingga semua punya pengalaman di kedua tugas (VS dan Edu). Tim UKDW A, B, C belum diumumkan siapa isinya — akan dikonfirmasi saat briefing/training.",
      tags: ["rotasi", "tim", "SO1", "SO2", "A B C", "service day", "kode", "pembagian"],
    },
    {
      q: "Di sekolah mana saja kita bertugas?",
      a: "Untuk program SO Eyecare (Juni): SD Budi Utama, SMP Kristen Kalam Kudus, SD Joanes Bosco, SMP Stella Duce 2 (TBC), SMP Budya Wacana, SD BOPKRI Gondolayu, SMP BOPKRI. Untuk Workshop SMA (Agustus): 2 SMA (tentative, salah satunya SMA BOPKRI).",
      tags: ["lokasi", "sekolah", "SD", "SMP"],
    },
    {
      q: "Apa penyebab miopi?",
      a: "Miopi (rabun jauh) terjadi ketika bentuk bola mata lebih lonjong dari normal, sehingga titik fokus cahaya jatuh di depan retina, bukan tepat di atasnya. Faktor penyebab: (1) Genetik — jika orang tua miopi, anak lebih berisiko. (2) Screen time berlebih — layar HP/komputer memaksa mata fokus jarak dekat terlalu lama. Solusi: kacamata sejak dini, batasi screen time, perbanyak aktivitas outdoor.",
      tags: ["miopi", "penyebab", "kesehatan mata"],
    },
    {
      q: "Apa itu IOP?",
      a: "IOP = Intraocular Pressure, yaitu tekanan cairan di dalam bola mata. Normal: 10–21 mmHg. Tekanan terlalu tinggi bisa menjadi indikasi glaukoma. Diukur dengan tonometer atau non-contact tonometer (tidak menyentuh mata).",
      tags: ["IOP", "intraocular pressure", "glaukoma", "prosedur"],
    },
    {
      q: "Apa itu cover test?",
      a: "Cover test adalah pemeriksaan untuk mendeteksi strabismus (mata juling). Caranya: satu mata ditutup secara bergantian dengan paddle/penutup mata, lalu diamati apakah mata yang tidak tertutup bergerak/menyimpang. Jika bergerak, ada kemungkinan mata tersebut biasanya 'malas' dan bergantung pada mata lainnya.",
      tags: ["cover test", "strabismus", "mata juling", "prosedur"],
    },
    {
      q: "Berapa lama per sesi edukasi?",
      a: "Setiap sesi edukasi berlangsung sekitar 40 menit, terdiri dari presentasi PPT dan interactive games. Hingga 4 kelas bisa berjalan bersamaan. Materi PPT dibuat oleh PolyU dan diterjemahkan ke Bahasa Indonesia oleh mahasiswa UKDW.",
      tags: ["edukasi", "durasi", "sesi", "education team"],
    },
  ],

  proker: {
    status: "brainstorm",
    lastUpdate: "2026-05-19",
    openQuestions: [
      "Berapa sesi yang tersedia untuk workshop SMA? (1 atau 2 sesi per sekolah?)",
      "Ada constraint tema dari DPL/LPPM? Misal harus berkaitan dengan kesehatan atau STEM?",
      "Data collection untuk skripsi — perlu approval formal LPPM, atau cukup izin DPL?",
      "Lokasi SMA mana yang sudah fixed? Penting untuk planning logistik.",
    ],
    rekomendasiKombinasi: [
      {
        opsi: "A",
        label: "Opsi A — Maximum Impact + Data Collection",
        preferred: true,
        sesiIdList: ["miopi-masa-depan", "bursa-efek"],
        alasan: "Narrative arc yang paling cohesive: tim baru selesai ngerjain pemeriksaan penglihatan fisik (SO Eyecare SD/SMP) — sekarang ngomongin 'kebutaan masa depan' di Sesi 1, lalu demonstrasikan bagaimana validasi sosial membutakan mereka dari kesehatan mental di Sesi 2. Dua fase KKN terasa connected, bukan dua program yang terpisah.",
      },
      {
        opsi: "B",
        label: "Opsi B — Maximum Emotional Resonance",
        preferred: false,
        sesiIdList: ["algorithm-owns-you", "simulasi-hidup"],
        alasan: "Fokus penuh pada disruption digital → rekonstruksi diri. 'Surat dari Diri 2036' adalah momen paling emotionally impactful dari semua ide yang ada. Tidak ada koneksi ke SO Eyecare — berdiri sendiri. Cocok kalau DPL tidak mensyaratkan kaitan ke eyecare.",
      },
    ],
    ideas: [
      {
        id: "bursa-efek",
        name: "Bursa Efek Kewarasan",
        tier: "gold",
        rank: 1,
        source: "Gemini",
        emoji: "📈",
        tagline: "Mock stock exchange: kesehatan mental vs validasi sosial — siapa yang bertahan setelah crash?",
        description: "Siswa bermain di 'bursa saham' imajiner di mana yang diperdagangkan bukan saham perusahaan — melainkan token 'Kewarasan' vs token 'Validasi Sosial' (likes, followers, social proof imajiner). Semua berlomba mengumpulkan validasi sosial sampai resources hampir habis. Suasana: kompetitif, ramai, FOMO terasa nyata.",
        twist: "Di tengah permainan, fasilitator trigger 'Algorithmic Crash' — semua token validasi sosial jatuh ke nol seketika. Yang selamat hanya siswa yang masih pegang token 'Kewarasan'. Reveal utama: semua yang mereka kejar selama ini tidak bisa melindungi mereka saat sistem runtuh.",
        duration: "90 menit",
        sesiIdeal: 2,
        roles: {
          manajemen: { who: "Dhevina", desc: "Banker + market maker: atur supply/demand token, manipulasi market sesuai skenario (jual 'validasi murah' dengan konsekuensi tersembunyi). Ini peran paling central — Manajemen shine paling kuat di sini." },
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "Regulator Kewarasan: potong poin kesehatan mental siswa saat mereka over-invest di validasi sosial. Di akhir sesi, berikan brief singkat dampak psikologis validasi sosial berlebihan (cortisol, anxiety, burnout)." },
          informatika: { who: "Syendhi", desc: "Dashboard bursa live di proyektor — bisa Google Sheets update real-time. Juga jelasin momen 'Algorithmic Crash' dari sisi teknis: inilah yang sebenarnya terjadi di algoritma medsos setiap hari." },
          si: { who: "Dex (kamu)", desc: "System designer + data collector: rancang mekanisme bursa, setup sistem token, collect data anonim tentang keputusan siswa (risk-averse vs FOMO) untuk laporan KKN atau skripsi." },
        },
        pros: [
          "Paling anti-mainstream dari semua ide — belum ada SMA di Indonesia yang punya workshop seperti ini",
          "Theatrical dan memorable: 'Algorithmic Crash' adalah momen yang tidak akan terlupakan seumur hidup",
          "Data harvest sangat clean: pola keputusan finansial + social validation preferences siswa",
          "Setiap prodi punya peran yang distinct, bermakna, dan tidak bisa ditukar satu sama lain",
        ],
        cons: [
          "Butuh sedikit prep: sistem token (bisa kertas berwarna 2 warna), papan bursa di proyektor",
          "Kalau setup awkward atau fasilitator kurang tegas, suasana bisa mati total dan mekaniknya terasa konyol",
          "Perlu briefing awal yang sangat jelas agar siswa paham mekanisme sebelum mulai",
        ],
        dataCollect: "Tipe keputusan finansial + social validation preferences siswa — data kualitatif berharga untuk laporan KKN atau skripsi.",
        setupNotes: "Token = kertas berwarna 2 warna berbeda (cetak atau tulis tangan). Papan bursa = Google Sheets live di proyektor. Butuh 1–2 orang yang tidak ikut bermain untuk jaga sistem.",
        catatan: null,
      },
      {
        id: "miopi-masa-depan",
        name: "Miopi Masa Depan",
        tier: "gold",
        rank: 2,
        source: "Grok",
        emoji: "👁️",
        tagline: "Dari penglihatan fisik ke penglihatan masa depan — kebiasaan hari ini yang membutakanmu",
        description: "Gabungkan awareness kesehatan mata/mental sederhana dengan simulasi bagaimana kebiasaan hari ini memengaruhi masa depan. Metafora 'miopi karir' = kebutaan terhadap konsekuensi jangka panjang dari habits buruk sekarang (screen time, sleep debt, dopamine trap). Output per siswa: 'Eye & Brain Health Report' pribadi yang bisa difoto.",
        twist: "'Future Blind Auction' — siswa bid dengan 'kebiasaan buruk' mereka sendiri. Contoh: 'Aku jual 2 jam scroll TikTok per hari.' Pemenang yang sacrifice paling banyak dapat reward, tapi langsung merasakan 'hukuman' gamified dari habits tersebut dalam simulasi.",
        duration: "90 menit",
        sesiIdeal: 1,
        roles: {
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "LEAD ROLE: brief tentang hubungan screen time → miopi fisik, dopamin → anxiety, sleep deprivation → kognisi. Kuasai sesi pembuka dan penutup. Ini adalah momen paling natural FK shine di luar SO Eyecare." },
          manajemen: { who: "Dhevina", desc: "ROI Hidup: bantu siswa kalkulasi kebiasaan buruk sebagai 'hutang jangka panjang' vs kebiasaan baik sebagai 'investasi compound'. Frame semuanya dalam bahasa finansial yang konkret." },
          informatika: { who: "Syendhi", desc: "Jelasin bagaimana algoritma medsos dirancang untuk maximize dopamin hits — dan kenapa itu merugikan jangka panjang. Boleh demo singkat data screen time dari settings HP." },
          si: { who: "Dex (kamu)", desc: "Design mekanik 'Future Blind Auction' + setup collect data anonim via Google Form dalam sesi. Data: habits digital terburuk siswa, goals terbesar, apa yang mereka pilih untuk sacrifice." },
        },
        pros: [
          "SATU-SATUNYA ide yang terhubung langsung ke SO Eyecare — narrative arc 'penglihatan fisik → penglihatan masa depan' sangat cohesive",
          "Membuat dua fase KKN terasa connected, bukan dua program yang terpisah sama sekali",
          "Output personal ('Eye & Brain Health Report') yang bisa difoto dan dibawa pulang — shareable",
          "Ideal sebagai Sesi 1 dalam Opsi A sebelum Bursa Efek Kewarasan",
        ],
        cons: [
          "Harus sangat hati-hati agar tidak terasa seperti lanjutan KKN medis — ini workshop softskill, bukan medical checkup",
          "Kalau siswa tidak relate dengan metafora 'kebutaan masa depan', framing bisa gagal di awal",
        ],
        dataCollect: "Habits digital terburuk siswa + habits yang mereka mau sacrifice — data anonim via Google Form.",
        setupNotes: "Health awareness harus di-frame sebagai 'self-reflection exercise', bukan pemeriksaan medis. Tidak perlu alat apapun — semua self-report.",
        catatan: "Direkomendasikan sebagai Sesi 1 dalam Opsi A. Koneksi ke SO Eyecare adalah keunggulan yang tidak dimiliki ide lain.",
      },
      {
        id: "simulasi-hidup",
        name: "Simulasi Hidup 10 Tahun",
        tier: "gold",
        rank: 3,
        source: "ChatGPT",
        emoji: "⏳",
        tagline: "Masuk ke tahun 2036 — jalani konsekuensi 10 tahun keputusanmu dalam 90 menit",
        description: "Siswa 'masuk' ke tahun 2036 berdasarkan kombinasi pilihan hidup mereka sendiri (jurusan, lifestyle, kebiasaan, sikap terhadap uang, relasi, dll). Mereka menjalani simulasi cepat konsekuensi 10 tahun ke depan via event cards dan decision points. Framing: Black Mirror versi SMA. Setiap keputusan ada konsekuensinya.",
        twist: "'Surat dari Diri 2036' — di akhir sesi, setiap siswa menulis surat dari versi mereka di tahun 2036, berdasarkan pola keputusan yang mereka buat selama simulasi. Surat ini adalah cermin dari pilihan hari ini, ditulis oleh mereka sendiri.",
        duration: "90 menit",
        sesiIdeal: 2,
        roles: {
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "Kurator health events dalam simulasi: burnout card, anxiety event, sleep deprivation consequences. Juga stand by sebagai support kalau ada siswa yang terdampak emosional — protocol harus disiapkan sebelumnya." },
          manajemen: { who: "Dhevina", desc: "Kurator financial events: hutang pendidikan, gaji vs gaya hidup, sunk cost fallacy, keputusan investasi impulsif. Narasikan konsekuensi finansial dari tiap pilihan dengan jelas." },
          informatika: { who: "Syendhi", desc: "Sistem scoring + randomizer: bisa pakai dadu, kartu, atau simple spreadsheet. Pastikan mekanik randomizer berjalan smooth agar tidak ada downtime selama simulasi." },
          si: { who: "Dex (kamu)", desc: "Dashboard visualisasi state tiap pemain di proyektor. Desain sistem 'Surat dari Diri 2036': kumpulkan input keputusan siswa dan generate narasi personalised per surat (bisa manual atau AI-assisted)." },
        },
        pros: [
          "Paling emotionally impactful dari semua ide — 'Surat dari Diri 2036' adalah twist yang genuinely genius",
          "Sangat personal: setiap siswa dapat hasil yang berbeda berdasarkan keputusan mereka sendiri",
          "Format Black Mirror resonan dengan anak 2026 yang familiar dengan dystopian content",
          "Data collect natural: pola keputusan hidup siswa tersimpan dalam sistem simulasi",
        ],
        cons: [
          "Butuh prep signifikan: event cards, sistem randomizer, decision tree realistis untuk konteks SMA Indonesia",
          "Tim FK perlu genuinely siap handle siswa yang triggered emosional — beberapa event bisa terasa terlalu berat",
          "Tanpa prep yang matang, terasa seperti 'permainan biasa' dan kehilangan seluruh impact-nya",
        ],
        dataCollect: "Pola keputusan hidup siswa (nilai mana yang diprioritaskan) — data kualitatif dari event card choices.",
        setupNotes: "Event cards bisa dicetak atau pakai kartu fisik. Decision tree perlu didesain realistis untuk konteks SMA Yogyakarta 2026. Dadu biasa sebagai randomizer sudah cukup.",
        catatan: "Cocok sebagai Sesi 2 dalam Opsi A (setelah Miopi Masa Depan) atau Opsi B (setelah Algorithm Owns You).",
      },
      {
        id: "algorithm-owns-you",
        name: "The Algorithm Owns You",
        tier: "silver",
        rank: 4,
        source: "ChatGPT",
        emoji: "📱",
        tagline: "Audit digital life sendiri — algoritma yang diam-diam mengendalikan siapa kamu",
        description: "Siswa mengaudit kehidupan digital mereka sendiri: feed konten, screen time, kebiasaan doomscrolling, topik yang bikin insecure. Bukan ceramah 'HP itu buruk' — tapi bedah bagaimana identitas digital mereka terbentuk tanpa mereka sadari. Output per siswa: 'Digital Personality Report'.",
        twist: "Siswa jujur mengidentifikasi 3 konten yang paling sering dikonsumsi + 3 perasaan yang paling sering muncul setelah scroll. Korelasi keduanya di-aggregate live di proyektor = reveal tentang apa yang algoritma 'percaya' tentang seluruh ruangan.",
        duration: "90 menit",
        sesiIdeal: 1,
        roles: {
          informatika: { who: "Syendhi", desc: "STAR ROLE: jelasin cara algoritma content recommendation bekerja (collaborative filtering, engagement loop, echo chamber). Demo langsung kalau bisa — tunjukkan 1 interaction = 1 sinyal ke algoritma." },
          si: { who: "Dex (kamu)", desc: "Live polling + data visualisasi di proyektor (Mentimeter, Slido, atau Google Forms). Aggregate jawaban anonim siswa → tunjukkan pattern kolektif real-time." },
          manajemen: { who: "Dhevina", desc: "Attention economy: perhatian siswa adalah produk yang dijual ke pengiklan. Jelasin model bisnis medsos dalam bahasa yang konkret dan tidak abstrak." },
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "Dampak biologis: brief tentang dopamin, serotonin, cortisol dalam loop medsos — kecemasan, gangguan tidur, FOMO dari perspektif neuroscience yang accessible." },
        },
        pros: [
          "Data harvest sangat kaya — aggregate jawaban anonim siswa = insight nyata tentang digital behavior Gen Z",
          "Peran tech team (Informatika + SI) shine paling natural di sini",
          "Tidak ada yang 'ceramah' — semua berbasis data siswa sendiri, tidak bisa disangkal",
        ],
        cons: [
          "Risiko jadi ceramah kalau facilitator kurang snappy dan interaktif dalam memimpin sesi",
          "Butuh internet stabil untuk live polling di Mentimeter/Slido",
        ],
        dataCollect: "Pola konsumsi konten digital + emotional response siswa — rich dataset untuk laporan.",
        setupNotes: "Siapkan akun Mentimeter atau Slido (free plan cukup). Bisa juga pakai Google Forms + proyeksikan hasilnya secara live.",
        catatan: "Sangat cocok sebagai Sesi 1 dalam Opsi B — bangun kesadaran diri digital sebelum Simulasi Hidup 10 Tahun.",
      },
      {
        id: "forensik-jejak",
        name: "Forensik Jejak Berdarah",
        tier: "silver",
        rank: 5,
        source: "Gemini",
        emoji: "🔍",
        tagline: "Jadi analis intelijen — bedah digital footprint 3 kandidat beasiswa fiktif",
        description: "Siswa berperan sebagai analis intelijen. Mereka diberi profil 3 kandidat beasiswa fiktif dan diminta investigate siapa yang layak berdasarkan digital footprint publik (postingan medsos, aktivitas online, dll). Profil kandidat sudah disiapkan tim sebelumnya — tapi efeknya terasa nyata.",
        twist: "Dengan consent sukarela, Informatika/SI lakukan micro-audit digital footprint 1–2 siswa relawan secara live di layar di depan kelas. Efek kejutnya genuine dan nempel seumur hidup — mereka melihat sendiri betapa banyaknya informasi publik tentang diri mereka.",
        duration: "90 menit",
        sesiIdeal: 1,
        roles: {
          informatika: { who: "Syendhi", desc: "STAR ROLE: lead demo OSINT (Google Dorks, reverse image search, public profile analysis). Perlu genuinely bisa demo teknik OSINT basic. Kalau demo ini gagal atau awkward, impact seluruh sesi hilang." },
          si: { who: "Dex (kamu)", desc: "Co-investigator: bantu Syendhi saat demo live. Setup sistem informed consent untuk siswa relawan + collect insights dari diskusi sebagai data laporan." },
          manajemen: { who: "Dhevina", desc: "Bedah 'personal brand' ketiga kandidat dari perspektif bisnis/HR: kalau kamu HRD, profil mana yang kamu hire dan kenapa? Apa yang recruiter pertama kali lihat?" },
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "Aspek psikologis: motivasi di balik oversharing di medsos, digital narcissism, anxiety terkait personal branding yang berlebihan." },
        },
        pros: [
          "Demo live OSINT = efek kejut yang genuinely tidak akan pernah mereka lupakan",
          "Sangat educational: siswa langsung sadar konsekuensi digital footprint mereka sendiri",
          "Tech team (Informatika + SI) shine paling maksimal di ide ini",
        ],
        cons: [
          "Bergantung PENUH pada kemampuan teknis Syendhi/Dex untuk demo OSINT — kalau gagal, sesi kehilangan seluruh impact utamanya",
          "Informed consent untuk siswa relawan harus sangat ketat dan transparan",
          "Butuh internet stabil untuk demo live",
        ],
        dataCollect: "Persepsi siswa tentang privasi digital dan personal branding.",
        setupNotes: "Profil 3 kandidat fiktif harus disiapkan jauh sebelumnya. Latih demo OSINT minimal 1 minggu sebelum sesi — test run wajib.",
        catatan: "High reward tapi high dependency pada kemampuan teknis. Kalau tidak yakin bisa demo smooth, pilih ide lain.",
      },
      {
        id: "zombie-apocalypse",
        name: "Zombie Apocalypse Career",
        tier: "silver",
        rank: 6,
        source: "Grok",
        emoji: "🧟",
        tagline: "Distopia 2035: AI hancurkan pekerjaan — survive dalam tim dengan resource terbatas",
        description: "Simulasi dystopia 2035. AI sudah mengambil sebagian besar pekerjaan — siswa harus pivot instan, berkolaborasi, dan survive dalam tim dengan resource terbatas. 'Infection Card' (bad habits nyata: malas networking, tidak punya skill digital, dll) menyebar antar kelompok seperti zombie infection.",
        twist: "Di akhir simulasi, fasilitator reveal bahwa profesi 'absurd' yang siswa ciptakan selama pivot — ternyata sudah exist di dunia nyata sekarang dengan income sangat tinggi. (Content creator spesialisasi, prompt engineer, AI trainer, dll.)",
        duration: "90 menit",
        sesiIdeal: 2,
        roles: {
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "Health Resource Manager: kelola 'stamina points' tiap tim. Kalau stamina habis = tim tersebut 'terinfeksi'. Brief tentang burnout sebagai ancaman karir nyata di balik gameplay." },
          manajemen: { who: "Dhevina", desc: "Resource allocation + negosiasi: distribusi 'survival resources' (koneksi, modal, waktu) antar tim, kelola trading dan deal." },
          informatika: { who: "Syendhi", desc: "Technology challenges: tim bisa unlock resource tambahan kalau bisa solve tech problem sederhana. Track infection spreading." },
          si: { who: "Dex (kamu)", desc: "Game master: track semua status tim di proyektor, timing seluruh sesi, dan pastikan simulasi berjalan smooth. Optional: scoring system sederhana." },
        },
        pros: [
          "Paling fun secara energi dari semua ide — gamified sepenuhnya, tidak ada momen membosankan",
          "Props sederhana: infection cards dan resource cards dari kertas biasa",
          "Format tim naturally builds collaboration dan communication skills",
        ],
        cons: [
          "Overlap konsep dengan beberapa ide lain (Simulator Kiamat Karier dari Gemini, AI vs You dari ChatGPT)",
          "Kalau siswa terlalu fokus 'menang' permainan, lessons bisa tidak tersampaikan",
        ],
        dataCollect: "Strategi survival yang dipilih tiap tim — insight tentang problem-solving style Gen Z.",
        setupNotes: "Infection cards + resource cards bisa dicetak atau ditulis tangan. Game master perlu brief yang sangat jelas agar timing tepat dan tidak ada kebingungan aturan.",
        catatan: null,
      },
      {
        id: "love-letter",
        name: "Love Letter ke Versi Diri yang Gagal",
        tier: "silver",
        rank: 7,
        source: "Grok",
        emoji: "💌",
        tagline: "Surat cinta ke versi dirimu yang gagal total — melawan perfectionism dari dalam",
        description: "Siswa menulis surat cinta ke versi diri mereka yang 'gagal total' — versi yang tidak lulus ujian, tidak diterima kampus impian, kehilangan sesuatu yang penting. Bukan pity letter, tapi genuinely surat yang penuh penerimaan dan dorongan. Melawan fear of failure dan perfectionism culture.",
        twist: "Surat disegel dan 'dikirim' 3 bulan kemudian — siswa setup scheduled email sendiri (Google Forms + email scheduler). Di masa depan, mereka akan mendapat surat dari versi diri mereka hari ini, saat lagi butuh pengingat.",
        duration: "60 menit",
        sesiIdeal: 2,
        roles: {
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "Open dan close sesi dari perspektif psikologis: brief tentang fear of failure, perfectionism culture di pendidikan Indonesia, dan cara process grief of unmet expectations. Stand by untuk emotional spillover." },
          manajemen: { who: "Dhevina", desc: "Reframe kegagalan: 'gagal = ROI negatif yang bisa di-redirect'. Berikan contoh konkret pivot karir yang berhasil dari kegagalan awal — bukan motivasi klise, tapi data nyata." },
          informatika: { who: "Syendhi", desc: "Setup scheduled email system: bantu siswa set Google Forms + email otomatis yang akan terkirim 3 bulan kemudian. Mungkin perlu demo singkat cara setup-nya." },
          si: { who: "Dex (kamu)", desc: "Dokumentasi sesi + optional: collect tema umum dari surat (anonim) untuk insight tentang ketakutan terbesar siswa SMA 2026 — data unik untuk laporan." },
        },
        pros: [
          "Paling emotionally unique dari semua ide — tidak ada workshop SMA yang seperti ini",
          "Anti-perfectionism messaging sangat relevan untuk siswa kelas 11–12 yang sedang tekanan masuk PTN",
          "Output surat = karya seni personal yang mereka simpan sendiri",
        ],
        cons: [
          "Bisa terlalu heavy kalau tidak di-frame dengan sangat hati-hati — perlu pembuka yang tepat",
          "Tim FK perlu genuinely siap handle emotional spillover, bukan hanya berdiri di sudut",
          "Durasi lebih pendek — lebih cocok sebagai penutup sesi 2 daripada modul penuh sendiri",
        ],
        dataCollect: "Tema ketakutan terbesar siswa SMA (anonim) — insight kualitatif mendalam.",
        setupNotes: "Suasana kondusif penting: tidak ada musik ramai, pencahayaan tenang. Pastikan semua punya kertas + pena. Demo cara setup scheduled email sebelum mereka mulai menulis.",
        catatan: "Lebih cocok sebagai aktivitas penutup dari Sesi 2 daripada modul mandiri. Bisa digabungkan dengan Simulasi Hidup 10 Tahun.",
      },
      {
        id: "ai-prompting-royale",
        name: "AI Prompting Royale",
        tier: "silver",
        rank: 8,
        source: "Claude",
        emoji: "🤖",
        tagline: "Kompetisi prompting: task yang sama, semua pakai AI — siapa yang bisa 'bicara' paling efektif?",
        description: "Kompetisi antar tim: semua mendapat task yang sama (misal: buat kampanye kesehatan mata untuk remaja 17 tahun, 30 menit). Semua pakai AI (ChatGPT/Gemini). Dinilai bukan seberapa bagus AI-nya, tapi seberapa baik mereka mengarahkan AI. Rubrik: kreativitas output, relevansi, efisiensi prompting.",
        twist: "Round 2: task yang sama — tapi semua harus pakai prompt yang persis sama yang sudah ditentukan fasilitator. Siswa melihat sendiri: hasil yang identik dengan prompt yang sama, tapi sangat berbeda ketika mereka custom. Prompt = instruksi = skill yang bisa dipelajari.",
        duration: "90 menit",
        sesiIdeal: 1,
        roles: {
          informatika: { who: "Syendhi", desc: "Co-juri teknis + brief awal: apa itu prompt, kenapa kata-kata yang tepat menghasilkan output sangat berbeda. Jelasin dari perspektif teknis cara AI language model bekerja." },
          si: { who: "Dex (kamu)", desc: "Juri teknis utama + setup tools. Pilih platform AI yang accessible untuk semua (Gemini free tier). Desain rubrik penilaian yang objektif dan fair sebelum sesi." },
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "Juri konten: apakah output AI akurat dan relevan secara kesehatan? Konteks SO Eyecare bisa jadi tema task ('buat kampanye kesehatan mata untuk remaja')" },
          manajemen: { who: "Dhevina", desc: "Juri bisnis: apakah output bisa diaplikasikan nyata? Aspek persuasiveness dan market fit dari konten yang dihasilkan AI." },
        },
        pros: [
          "Skill berlaku besok pagi — prompting AI adalah kemampuan yang langsung applicable di dunia kerja 2026",
          "Tidak ada SMA di Indonesia yang mengajarkan ini secara structured",
          "Task bisa dikaitkan dengan SO Eyecare ('kampanye kesehatan mata') untuk continuity",
        ],
        cons: [
          "Butuh internet stabil untuk semua siswa — kalau WiFi sekolah lemah, sesi tidak bisa jalan",
          "Kalau siswa tidak familiar sama sekali dengan AI tools, butuh onboarding ekstra di awal",
        ],
        dataCollect: "Strategi prompting + topik yang paling banyak dipilih siswa — insight tentang cara Gen Z menggunakan AI.",
        setupNotes: "Test koneksi internet sekolah H-1. Siapkan Gemini sebagai default (gratis). Brief cara buka dan pakai Gemini di 10 menit pertama sebelum kompetisi dimulai.",
        catatan: "Salah satu ide paling 'future-proof' tapi sangat bergantung infrastruktur internet sekolah.",
      },
      {
        id: "dekonstruksi-klitih",
        name: "Dekonstruksi Detik Kritis",
        tier: "situasional",
        rank: 9,
        source: "Gemini",
        emoji: "⚖️",
        tagline: "Bedah anatomi satu keputusan fatal — di detik mana seharusnya ada intervensi?",
        description: "Bedah satu kasus keputusan fatal yang relevan secara lokal Yogyakarta (misal: kenakalan remaja). Siswa jadi investigator: melihat rekonstruksi kejadian detik per detik dan voting anonim — di mana dan dengan cara apa seharusnya ada intervensi. Sangat spesifik konteks lokal.",
        twist: "Voting anonim real-time via QR Code: siswa pilih di 'frame ke-berapa' mereka akan intervensi dan cara apa. Aggregate votes muncul di proyektor — tampak pattern yang mengejutkan tentang di mana masyarakat 'buta' terhadap tanda-tanda bahaya.",
        duration: "90 menit",
        sesiIdeal: 1,
        roles: {
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "LEAD ROLE: neurobiologi impulsivitas dan pengambilan keputusan di bawah tekanan sosial. Brief: apa yang terjadi di otak saat seseorang 'ikut-ikutan' vs saat resist peer pressure." },
          informatika: { who: "Syendhi", desc: "QR code voting system real-time — pakai Mentimeter atau Slido untuk voting anonim yang aggregate live di proyektor." },
          manajemen: { who: "Dhevina", desc: "Decision theory: sunk cost fallacy dalam keputusan impulsif, mob mentality dari sisi game theory, kenapa rational decision-making breakdown dalam situasi sosial." },
          si: { who: "Dex (kamu)", desc: "Desain rekonstruksi kasus (riset kasus nyata atau buat kasus fiktif yang believable). Collect data voting untuk insight laporan." },
        },
        pros: [
          "Hyper-relevan lokal Yogyakarta — tidak ada workshop yang pernah ada seperti ini",
          "Tim FK bisa shine sangat dalam di sini (neurobiologi keputusan adalah domain mereka)",
          "Data voting sangat berharga untuk laporan — insight tentang apa yang dianggap 'titik intervensi' oleh remaja Yogyakarta",
        ],
        cons: [
          "HARUS dapat izin eksplisit DPL sebelum jalan — konten sensitif dan bisa dipersepsikan salah",
          "Framing sangat hati-hati diperlukan agar tidak terasa menghakimi atau memperkenalkan konsep yang belum familiar",
          "Risiko siswa yang punya pengalaman personal terkait kasus serupa terdampak emosional berat",
        ],
        dataCollect: "Pola 'titik intervensi' dari perspektif remaja — data sangat unik untuk laporan sosial.",
        setupNotes: "Kasus harus disiapkan dan direview DPL jauh sebelumnya. Jangan improvise kasus di hari H.",
        catatan: "⚠️ Minta approval DPL secara eksplisit dan tertulis. Kalau DPL tidak setuju, jangan dilanjutkan.",
      },
      {
        id: "ai-vs-you",
        name: "AI vs You: Pekerjaan Mana yang Mati Duluan?",
        tier: "situasional",
        rank: 10,
        source: "ChatGPT",
        emoji: "💀",
        tagline: "Game prediksi kolektif: skill mana yang mahal, pekerjaan mana yang hilang duluan?",
        description: "Game prediksi kolektif: siswa vote profesi mana yang hilang digantikan AI dalam 10 tahun, dan skill mana yang paling mahal. AI (ditampilkan live) 'menilai' apakah profil siswa 'replaceable' atau 'anti-replaceable'. Bukan ceramah — semua berbasis interaksi real-time.",
        twist: "Siswa input profil singkat (jurusan incaran, hobi, nilai terbaik) ke AI. AI generate assessment: seberapa 'replaceable' mereka di 2036, dan skill apa yang bisa membuat mereka 'anti-replaceable'. Hasil yang muncul bisa sangat mengejutkan.",
        duration: "90 menit",
        sesiIdeal: 1,
        roles: {
          informatika: { who: "Syendhi", desc: "Jelasin technical landscape: AI apa yang sudah replace pekerjaan apa, dan kenapa secara teknis. Data konkret, bukan spekulasi atau fear-mongering." },
          si: { who: "Dex (kamu)", desc: "Demo live 'AI assessment': masukkan profil siswa ke AI, tunjukkan outputnya di proyektor. Collect data anonim tentang ketakutan karir siswa." },
          manajemen: { who: "Dhevina", desc: "Career strategy: skills economy, cara re-skill/up-skill, profesi hybrid (manusia + AI) yang paling prospektif dalam 10 tahun." },
          kedokteran: { who: "Benediktus · Maria · Theana", desc: "AI anxiety dan existential dread: cara channel kecemasan masa depan jadi fuel untuk action, bukan paralysis. Penting agar sesi tidak berakhir dengan siswa yang semakin cemas." },
        },
        pros: [
          "Siswa genuinely anxious soal ini — resonansi topik sangat tinggi",
          "Provocative dan membuat mereka berpikir serius tentang skill development",
        ],
        cons: [
          "Kalau tidak dihandle sangat hati-hati, bisa memperparah anxiety siswa alih-alih membantu",
          "AI assessment bisa bias atau inaccurate — harus di-frame sebagai thought experiment, bukan prediksi akurat",
        ],
        dataCollect: "Ketakutan karir siswa + profesi yang paling banyak mereka khawatirkan.",
        setupNotes: "Siapkan framing yang sangat jelas di awal: ini bukan ramalan, ini thought experiment untuk persiapan. Pastikan ada closure yang positif dan actionable di akhir — jangan tinggalkan siswa tanpa 'exit ramp'.",
        catatan: "High risk kalau facilitation tidak solid. Pertimbangkan lagi sebelum pilih ini.",
      },
    ],
  },
};

const GEMINI_CONTEXT = `
Kamu adalah asisten KKN STEM 2026 untuk Dex Bennett (kelompok 2, UKDW Yogyakarta).
Jawab pertanyaan berdasarkan data KKN berikut. Gunakan Bahasa Indonesia yang santai tapi informatif.
Jika tidak ada informasi yang relevan, katakan dengan jujur.

PROGRAM: KKN Tematik International Service Learning STEM 2026, kolaborasi UKDW × Hong Kong Polytechnic University (PolyU HK).
Fokus: SO Eyecare (kesehatan mata) + Workshop Softskill SMA.
Sebelumnya program ini bernama EEE (Electronic and Electrical Engineering), sudah diubah.

KELOMPOK 2:
- Syendhi Reswara S. (Informatika)
- Benediktus Satria Trisnawan (Kedokteran)
- Maria Nadira Dosinaen (Kedokteran)
- Theana Amabel Krismeiati (Kedokteran)
- Dhevina Putri Agustya (Manajemen)
- Dex Bennett (Sistem Informasi) — pengguna aplikasi ini
DPL: dr. Loury Priiskila, M.Biomed. (+62 813-9070-9672)
APL: Eleonora Bintang (+62 858-1775-6217), Carolus Yasser (+62 852-5425-3035)

TIMELINE:
- Mei 9: Pembekalan KKN (sudah selesai)
- Mei 11-13: Persiapan proposal workshop SMA
- Mei 25-26: Presentasi proposal ke DPL
- Juni 13-17: Persiapan SO Eyecare (consent form)
- Juni 20: Opening Ceremony
- Juni 21-25: Service Day 1-5 (SD/SMP) ← FASE UTAMA
- Juni 27: Closing Ceremony
- Juni 28-29: Pembuatan Video Edukasi Mata (min 5 menit, max 10 menit, semua anggota tampil)
- Juli 19: Orientation Session UKDW × PolyU (~4 jam)
- Agustus 3-7: Service Day SMA 1-5
- Agustus 10-12: Pembuatan Laporan
- Agustus 13-14: Presentasi ke DPL

LOKASI SD/SMP: SD Budi Utama, SMP Kristen Kalam Kudus, SD Joanes Bosco, SMP Stella Duce 2 (TBC), SMP Budya Wacana, SD BOPKRI Gondolayu, SMP BOPKRI.

PERAN UKDW: Translasi, support komunikasi dengan anak-anak, interpretation assistance. TIDAK mengoperasikan alat medis.

PROSEDUR VISION SCREENING (10 langkah):
1. Distance Vision - Snellen Chart
2. Near Vision - kartu baca
3. Stereopsis - persepsi kedalaman
4. Color Blindness - Ishihara plates (buta warna)
5. Cover Test - deteksi mata juling (strabismus)
6. Motility Test - gerakan bola mata
7. Pupil Test - refleks pupil
8. Auto-Refraction - ukuran minus/plus/silinder
9. Intraocular Pressure (IOP) - deteksi glaukoma, normal 10-21 mmHg
10. Fundus Photo/Funduscopy - RESTRICTED, hanya mahasiswa PolyU yang pegang alat ini!

ROTASI TIM SERVICE DAY:
- A, B, C = sub-tim UKDW. SO1, SO2 = sub-grup mahasiswa PolyU HK (Supporting Officer groups).
- "A+SO1" = UKDW sub-tim A + PolyU SO1 = satu tim Vision Screening bersama.
- Setiap service day: DUA tim VS beroperasi serentak di sekolah berbeda + SATU tim Edu di kelas.
- Rotasi: Day1: VS=(A+SO1)&(B+SO2), Edu=C | Day2: VS=(B+SO2)&(C+SO1), Edu=A | Day3: VS=(C+SO1)&(A+SO2), Edu=B | Day4: VS=(A+SO1)&(B+SO2), Edu=C | Day5: VS=(B+SO2)&(C+SO1), Edu=A
- Siapa masuk tim A/B/C belum diumumkan, akan dikonfirmasi saat briefing/training.

EDUKASI ANAK: Tim A (usia 3-6), Tim B (usia 6-8), Tim C (usia 9-12). Tiap sesi 40 menit. Materi dari PolyU, UKDW terjemahkan.

ORIENTATION SESSION 19 Juli: 7 kelompok, UKDW rotasi ke tiap kelompok PolyU 15 menit (total 2 jam ice breaking), lalu demo vision screening dari PolyU (1 jam), lalu UKDW buat activities untuk PolyU (1 jam).

VIDEO SMA WORKSHOP: 1 kelompok = 1 materi workshop softskill. Harus disetujui DPL dulu.
`;
