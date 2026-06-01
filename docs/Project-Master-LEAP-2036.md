# PROJECT MASTER — LEAP 2036

> **Workshop Simulasi Hidup 10 Tahun: Keputusanmu Hari Ini, Hidupmu 2036**
> Program KKN Tematik International Service Learning STEM 2026 — Kelompok 2
> Universitas Kristen Duta Wacana × Hong Kong Polytechnic University
>
> **Versi:** 2.0 | **Tanggal:** 28 Mei 2026 (revisi pasca-update LPPM)

---

## 0. CARA PAKAI DOKUMEN INI

File ini adalah **single source of truth** untuk seluruh aspek workshop LEAP 2036. Dirancang sebagai fondasi dari mana semua derivatif berikut bisa di-generate:

- Slide presentasi (PPT) — melalui NotebookLM atau manual
- Proposal formal untuk DPL/LPPM
- Materi briefing fasilitator (Asisten Brief)
- Konten media sosial (caption, script reel)
- Talking points presentasi
- Materi siswa (worksheet, kartu skenario, instrumen DISC, Card Sort Values)
- Skrip wawancara / FAQ untuk SMA mitra

**Cara generate PPT via NotebookLM:**
1. Upload file ini ke NotebookLM sebagai sumber utama
2. Tambahkan supporting docs (Proposal v2, Skenario Starter Pack, Canvas Lite HTML, v2-patches)
3. Prompt: *"Buatkan outline slide presentasi 10-12 slide untuk presentasi proposal workshop LEAP 2036 ke Dosen Pembimbing Lapangan (DPL). Fokus pada: problem statement, solusi unique (experiential learning + hybrid group-individu), mekanisme 'Decision Engine', 2 skenario pelaksanaan LPPM-1 dan LPPM-2, anggaran, indikator keberhasilan, dan timeline build app."*
4. Adjust dan polish hasil outline di Google Slides / Canva

**Cara update file ini:**
- Setiap keputusan baru → catat di Section 14 (Decision Log)
- Setiap perubahan struktural → update section terkait + bump versi di header
- Setiap risiko baru → catat di Section 13 (Risk Register)

---

## 1. EXECUTIVE SUMMARY

**LEAP 2036** adalah workshop softskill berbasis *experiential learning* untuk siswa SMA kelas 11–12 dalam rangka Program KKN Tematik International Service Learning STEM 2026 yang diselenggarakan oleh Universitas Kristen Duta Wacana (UKDW) bekerja sama dengan Hong Kong Polytechnic University (PolyU).

Workshop ini menggunakan format **simulasi interaktif berbasis kartu keputusan bertajuk "The Decision Engine"** dengan **model partisipasi hybrid** — kelompok kecil sebagai unit diskusi rich + silent individual voting untuk preserve personal agency + jurnal refleksi individu di akhir tiap hari. Melalui pengelolaan tiga sumber daya (Energi, Kapital, Kesehatan Mental) sepanjang tiga fase kehidupan 2026–2036, siswa diharapkan terbebas dari fenomena *future blindness* dan mengembangkan *future literacy* sebagai kompetensi hidup esensial.

**Per update LPPM 28 Mei 2026,** workshop disiapkan untuk **dua skenario pelaksanaan** (pilihan final LPPM masih pending):
- **LPPM-1:** 5 hari penuh di 1 SMA, 1 kelas yang sama
- **LPPM-2:** Split 2 hari di Sekolah A + 3 hari di Sekolah B, masing-masing 1 kelas

**Anggaran:** Rp 514.000 (LPPM-1 dengan hadiah symbolic) atau Rp 703.000 (LPPM-2 dengan hadiah symbolic) — defensible terhadap precedent Eye Care Rp 600.000 LPPM. Skema pendanaan: kombinasi LPPM UKDW (primer) + dana mandiri kelompok (backup).

**Strategi teknis:** Progressive enhancement 3-layer (kartu fisik → Canvas Lite HTML → fullstack Next.js+Supabase app) untuk menjamin workshop tetap berjalan apapun kondisi infrastruktur SMA mitra.

---

## 2. IDENTITAS PROGRAM

### 2.1 Institusi

| Aspek | Detail |
|-------|--------|
| Universitas Utama | Universitas Kristen Duta Wacana (UKDW), Yogyakarta |
| Mitra Internasional | Hong Kong Polytechnic University (PolyU) |
| Program | KKN Tematik International Service Learning STEM 2026 |
| Penyelenggara | Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) UKDW |
| Periode Eksekusi Lapangan | Agustus 2026 (window 3–7 Agustus 2026, mengikuti jadwal *Service Days*) |
| Periode Persiapan | Mei – Juli 2026 |

### 2.2 Tim Kelompok 2

| Jabatan Kepanitiaan | Nama Lengkap | NIM | Prodi |
|--------------------|--------------|-----|-------|
| **Ketua Pelaksana** | Dex Bennett | 72230663 | Sistem Informasi |
| **Sekretaris & Bendahara** | Dhevina Putri Agustya | 11231465 | Manajemen |
| **PDD (Publikasi, Dokumentasi & Desain)** | Theana Amabel Krismeiati | 41220708 | Kedokteran |
| **Perlengkapan & Teknis** | Syendhi Reswara S. | 71231061 | Informatika |
| **Humas & Hubungan Eksternal** | Maria Nadira Dosinaen | 41220677 | Kedokteran |
| **Pelaksana Program (Lead Fase 2)** | Benediktus Satria Trisnawan | 41220704 | Kedokteran |

### 2.3 Pembimbing

| Peran | Nama |
|-------|------|
| Dosen Pembimbing Lapangan (DPL) | dr. Loury Priiskila, M.Biomed. |
| Asisten Pembimbing Lapangan (APL) 1 | Eleonora Bintang Dahayu P — +62 858-1775-6217 |
| Asisten Pembimbing Lapangan (APL) 2 | Carolus Yasser Rombebunga — +62 852-5425-3035 |

> **Catatan:** Nama & nomor APL sudah terkonfirmasi (sinkron dengan kontak resmi KKN-HUB, 30 Mei 2026).

### 2.4 Brand Identitas Program

| Aspek | Detail |
|-------|--------|
| Judul Formal | Workshop Simulasi Hidup 10 Tahun: Keputusanmu Hari Ini, Hidupmu 2036 |
| Brand Internal | LEAP 2036 |
| Kepanjangan Brand | Life Experience & Action Planning |
| Tagline | Hidupi 10 tahun keputusanmu dalam 5 hari |
| Domain Web Workshop | `kknstem.vercel.app` (subdomain Vercel; tidak menggunakan domain berbayar) |

---

## 3. LATAR BELAKANG & FILOSOFI

### 3.1 Problem Statement: Fenomena *Future Blindness*

Siswa SMA kelas 11 dan 12 berada di persimpangan krusial dalam kehidupan mereka. Mereka menghadapi tekanan pengambilan keputusan besar seperti pemilihan jurusan, pilihan karier, gaya hidup, dan nilai-nilai yang akan membentuk identitas dewasa mereka, namun seringkali tanpa benar-benar merasakan konsekuensi nyata dari pilihan-pilihan tersebut. Fenomena ini disebut sebagai *future blindness* — ketidakmampuan untuk menghubungkan keputusan hari ini dengan dampaknya 5–10 tahun ke depan (Hershfield, 2011). Akibat dari kebutaan terhadap masa depan ini, banyak remaja membuat keputusan berdasarkan tekanan sosial, tren sesaat, atau sekadar untuk menghindari konflik jangka pendek, alih-alih berdasarkan refleksi sadar terhadap nilai-nilai dan tujuan hidup mereka.

### 3.2 Inadequacy Pendekatan Konvensional

Pendekatan konvensional dalam workshop *soft skill* (seminar motivasi satu arah, presentasi karier ceramah, sesi BK normatif) terbukti kurang efektif karena siswa hanya mendengar tanpa mengalami konsekuensi langsung. Intervensi dini yang **terstruktur dan terasa** sangat diperlukan — mencegah kesalahan pengambilan keputusan hidup secara *experiential* lebih efektif daripada menangani dampaknya di kemudian hari ketika kerusakan sudah terjadi.

### 3.3 Relasi dengan Program Eyecare KKN STEM

Program ini dirancang sebagai komplementer terhadap program KKN STEM Eyecare. Jika program Eyecare berfokus pada **penglihatan fisik** siswa (deteksi dan koreksi miopia), maka program workshop LEAP 2036 berfokus pada penguatan **penglihatan masa depan** siswa — *future literacy* sebagai kompetensi metakognitif untuk membayangkan, merencanakan, dan mempersiapkan diri menghadapi konsekuensi jangka panjang dari pola keputusan harian mereka.

### 3.4 Landasan Teoritis

Workshop ini berpijak pada tiga kerangka teori utama:

1. **Experiential Learning Theory** (Kolb, 1984): Pembelajaran terjadi melalui siklus pengalaman konkret → observasi reflektif → konseptualisasi abstrak → eksperimentasi aktif. Simulasi LEAP 2036 mengaktifkan keempat tahap ini dalam satu kesatuan.
2. **Future Self-Continuity** (Hershfield, 2011): Kemampuan individu merasakan kontinuitas antara diri saat ini dengan diri di masa depan berkorelasi positif dengan kualitas pengambilan keputusan jangka panjang.
3. **Future Literacy** (Miller, 2018): Kompetensi membayangkan masa depan yang plausibel dan menggunakannya sebagai kerangka pengambilan keputusan hari ini, dipromosikan oleh UNESCO sebagai kompetensi esensial abad ke-21.

---

## 4. KONSEP WORKSHOP

### 4.1 Tagline & Framing

> **"Hidupi 10 tahun keputusanmu dalam 5 hari."**

Workshop tidak menjual jawaban — workshop memberikan pengalaman. Siswa tidak diceritakan "begini cara hidup yang baik," melainkan **mengalami sendiri** bahwa setiap pola keputusan punya konsekuensi.

### 4.2 Tujuan Kegiatan

1. Meningkatkan kesadaran siswa SMA tentang dampak jangka panjang dari pola keputusan harian mereka.
2. Mengembangkan kemampuan pengambilan keputusan yang reflektif, sadar nilai, dan berorientasi masa depan.
3. Membangun *future literacy* — kemampuan membayangkan, merencanakan, dan mempersiapkan diri untuk masa depan secara realistis.
4. Mendorong siswa untuk mengidentifikasi nilai-nilai inti (*core values*) yang ingin mereka jadikan kompas hidup.
5. Mengembangkan kemampuan kerja sama tim dengan diversitas kepribadian melalui struktur kelompok dengan goal hidup berbeda.

### 4.3 Filosofi "Parallel Journeys, Not Competing Teams"

Workshop ini **secara sengaja tidak menggunakan sistem pemenang/juara** baik untuk individu maupun untuk kelompok. Keputusan ini adalah komitmen filosofis yang membedakan LEAP 2036 dari workshop kompetitif konvensional.

**Alasan filosofis utama:**

> Memberikan hadiah kepada "pemenang" (individu atau kelompok) akan mengimplikasikan bahwa ada **satu pola hidup yang lebih unggul** dari yang lain — pesan yang secara langsung kontra-produktif terhadap tujuan reflektif workshop. Setiap pola keputusan memiliki *trade-off* unik. Tidak ada profil 2036 yang "lebih baik" dari profil lainnya — hanya *trade-off* yang berbeda.

**Implementasi konkret:**

- Setiap kelompok memiliki **goal hidup berbeda** sejak Day 1. Mereka tidak bersaing untuk mencapai tujuan yang sama; mereka menjalani perjalanan paralel menuju tujuan yang berbeda.
- Tidak ada *leaderboard* peringkat di dashboard. Yang ditampilkan adalah **diversity dashboard** — sebaran profil kelompok sebagai visualisasi kekayaan jalur hidup, bukan ranking.
- Semua peserta menerima apresiasi setara: sticker, snack, sertifikat digital, file Surat dari Diri 2036.
- Di sesi *Showcase Reflection* Day 5, diadakan **"Surprise Apresiasi"** untuk volunteer yang berani sharing refleksi terdalam mereka di depan kelas — bentuk apresiasi tak terduga atas keberanian berbagi (bukan untuk "refleksi terbaik," karena tidak ada penilaian peringkat).

### 4.4 Mengapa Simulasi (Bukan Ceramah)

| Pendekatan Konvensional | Pendekatan LEAP 2036 |
|------------------------|---------------------|
| Siswa mendengar | Siswa mengalami |
| Konsekuensi diceritakan | Konsekuensi terasa di skor |
| Pengetahuan deklaratif | Pengetahuan prosedural |
| Lupa dalam 1 minggu | Memorable karena terhubung emosi |
| Fasilitator sebagai narasumber | Fasilitator sebagai *game master* |

### 4.5 Mengapa Model Hybrid Group-Individu

Workshop mengadopsi **model partisipasi hybrid**: kelompok kecil sebagai unit diskusi + silent individual voting untuk decision + jurnal refleksi individu untuk processing.

**Mengapa hybrid (bukan full-group atau full-individu):**

- **Group sebagai unit diskusi** memberikan peer learning organic, energi diskusi tinggi, dan refleksi realita (keputusan IRL selalu di-influence sosial).
- **Silent individual vote sebelum group discussion** mempertahankan personal agency. Setiap siswa harus berpikir sendiri dulu sebelum dipengaruhi pendapat orang lain.
- **Jurnal refleksi individu** di akhir tiap hari menciptakan momen *self-awareness killer*: "Aku silent vote A, tapi group milih B. Kenapa aku ngalah? Apakah itu kompromi sehat atau hilang voice?"
- **Surat dari Diri 2036** tetap individual artefak — personal takeaway yang siswa bawa pulang dan bisa dibaca ulang.

Model ini mengajarkan tiga lapis identitas sekaligus:
1. **Tendency** (DISC type) — pola natural reaksi
2. **Values** (5 Non-Negotiables) — apa yang penting bagi kamu
3. **Goals** (goal hidup kelompok) — arah yang dipilih

Insight terdalam workshop: **mana yang menang saat dilema** — tendency, values, atau goals? Jawabannya berbeda untuk setiap siswa, dan kesadaran itu adalah *future literacy* yang sebenarnya.

---

## 5. MEKANISME — "THE DECISION ENGINE"

### 5.1 Tiga Modalitas Sumber Daya

Setiap **kelompok** memulai workshop dengan modal awal yang seragam. Setiap **individu** juga memiliki track score paralel berdasarkan silent vote pribadi mereka.

| Modal | Poin Awal | Representasi |
|-------|-----------|--------------|
| **Energi** | 100 | Kapasitas fisik, semangat, vitalitas, manajemen waktu |
| **Kapital** (Uang/Waktu) | 100 | Sumber daya finansial, alokasi waktu, investasi material |
| **Kesehatan Mental** | 100 | Keseimbangan emosi, ketahanan psikologis, *resilience* |

Setiap pilihan keputusan dalam simulasi akan menambah atau mengurangi salah satu (atau beberapa) modal. Konsekuensi dinyatakan dalam delta numerik (mis. `+15 Kapital, -10 Kesehatan Mental, -5 Energi`).

### 5.2 Model Partisipasi Hybrid — Flow per Skenario

Setiap skenario dalam simulasi mengikuti alur berikut:

| Step | Aktivitas | Mode | Durasi |
|------|-----------|------|--------|
| 1 | Fasilitator membacakan skenario | Plenary | 2 menit |
| 2 | **Silent Individual Vote** — setiap siswa pilih A/B di HP/kertas, tidak terlihat siapapun | Individual | 30 detik |
| 3 | **Group Discussion** — sharing reason, debate, persuasion | Group | 3–5 menit |
| 4 | **Group Consensus** atau majority vote → group decision | Group | 30 detik |
| 5 | Score update: skor individu (dari silent vote) + skor group | System | 30 detik |
| 6 | Reveal konsekuensi — narrative dari fasilitator | Plenary | 1–2 menit |

**Total per skenario:** 7–10 menit.

**End of day:**
- **Reflection Journal Individu** — 10 menit silent writing. Pertanyaan pemandu: "Hari ini aku gravitate ke pilihan apa? Beda dari group atau sama? Kalau beda, kenapa aku ngalah?"

**End of program (Day terakhir):**
- **Surat dari Diri 2036** — INDIVIDU (personal artefak)
- **Group Profile 2036** — collective journey dari group decisions
- **Individual Profile 2036** — personal score dari silent votes (revealed kepada masing-masing siswa)

### 5.3 Tiga Fase Kronologis

Simulasi makro didekomposisi secara kronologis ke dalam tiga fase transisi sosiologis-psikologis:

#### Fase 1 — Fondasi (2026–2028): Pendidikan & Awal Karier
- **Lead Fasilitator:** Dhevina Putri Agustya (Manajemen) + Dex Bennett
- **Durasi target dalam 1 hari penuh:** 4–5 jam (multiple skenario + group debrief)
- **Fokus:** Transisi pasca-SMA — pilihan pendidikan tinggi vs kerja, *side hustle* vs istirahat, organisasi vs magang, investasi pertama, *lifestyle inflation* vs *saving*.
- **Tone:** Optimistis, eksplorasi, banyak opsi, konsekuensi belum terlalu berat.
- **Jumlah skenario:** 7–10 (group + individu paralel tracking)

#### Fase 2 — Krisis (2029–2032): Karier, Relasi & Badai Pertama
- **Lead Fasilitator:** Benediktus Satria T. (Kedokteran) + Syendhi Reswara (Informatika)
- **Durasi target dalam 1 hari penuh:** 4–5 jam (skenario padat + *Random Event Cards*)
- **Fokus:** Fase paling intens — dinamika dewasa awal di bawah fluktuasi VUCA (PHK, krisis kesehatan keluarga, *burnout*, *toxic relationship*, kesempatan besar mendadak).
- **Mekanik tambahan:** *Random Event Cards* / Kartu Chaos yang dibagikan acak per kelompok — untuk menguji *resilience* kolektif.
- **Tone:** Tegang, dilematis, banyak situasi tanpa jawaban "benar."
- **Jumlah skenario:** 8–12 (lebih banyak karena chaos)

#### Fase 3 — Panen (2033–2036): Konsekuensi & Refleksi
- **Lead Fasilitator:** Seluruh tim
- **Durasi target dalam 1 hari penuh:** 4–5 jam (skor final + reveal profil + grup debrief)
- **Fokus:** "Panen" hasil akumulasi keputusan. Skor akhir dikalkulasi via Google Sheets. Setiap kelompok dan setiap individu mendapat klasifikasi **Profil 2036**.
- **Sistem menegaskan:** tidak ada *ending* sempurna. Setiap profil punya *trade-off* masing-masing.

### 5.4 Taksonomi Profil 2036

Berdasarkan kombinasi skor residual modalitas akhir, kelompok dan individu diklasifikasikan ke dalam profil-profil berikut:

| Profil | Karakteristik | *Trade-off* Utama |
|--------|---------------|-------------------|
| **The Balanced Builder** | Skor 3 modal stabil di rentang menengah-tinggi | Tidak menonjol di satu sisi |
| **The Burnout Achiever** | Kapital tinggi, Energi & Kesehatan Mental rendah | Sukses karier tapi tubuh & mental rusak |
| **The Late Bloomer** | Krisis di fase 1–2, bangkit di fase 3 | Kehilangan momentum awal |
| **The Creative Rebel** | Jalur tidak konvensional, dampak besar | Risiko tinggi, perjalanan tidak linear |
| **The Steady Sage** | Kesehatan Mental tinggi, modal lain modest | Hidup tenang, ambisi terbatas |
| **The Hustler Maverick** | Energi & Kapital tinggi, Mental volatile | Eksploitasi diri demi target |
| **The Reflective Wanderer** | Pola eksplorasi tanpa akumulasi besar | Pengalaman kaya, stabilitas rendah |

(Profil tambahan dapat dimunculkan sesuai kombinasi skor yang tidak terduga.)

### 5.5 Sistem Goal Hidup per Kelompok

Setiap kelompok di Day 1 memilih (atau diundi) salah satu dari **8 goal hidup** yang tersedia:

| Goal Hidup | Deskripsi Singkat |
|------------|-------------------|
| **Creative Entrepreneur** | Bangun bisnis sendiri, freedom over comfort |
| **Family-First Life** | Stabilitas relasional, anak, rumah |
| **Global Social Impact** | Kerja untuk perubahan sosial / sustainability |
| **Master a Craft** | Jadi expert di bidang spesifik (musisi, peneliti, atlet) |
| **Travel & Free-Spirit** | Eksplorasi, pengalaman, no settled life |
| **Stable Career + Community** | Pekerjaan tetap + kontribusi lokal |
| **Innovator/Inventor** | Riset, R&D, breakthrough thinking |
| **Caregiver/Healer Path** | Profesi medis, mental health, atau social work |

**Mekanisme distribusi:**
1. Day 1 setelah Values Exercise + DISC: 8 kartu goal hidup dipajang di dinding kelas.
2. Siswa self-pick goal yang most resonates (individual reflection).
3. Kelompok terbentuk by shared goal preference.
4. **Cap maksimum 5 siswa per goal** untuk mencegah ketidakseimbangan. Jika 1 goal overload, siswa pilih option kedua mereka.
5. Total kelompok: 6–8 group (tergantung jumlah siswa, ~30–40 siswa per kelas).

**Mengapa goal-based formation:**

| Aspek | Manfaat |
|-------|---------|
| Realistic | Real-life teams form around shared purpose, bukan shared personality |
| Bonding instant | Sharing goal = sharing values direction. Quick connection point |
| Diversity natural | Tiap kelompok punya mix DISC types organic |
| DISC USEFUL within group | Selama 5 hari, anggota lihat: "kamu DISC C detail-oriented, aku DISC I energizer." Belajar kerja bareng walau beda kepribadian |
| Skenario menjadi LIVING TEST | Goal hidup group MENGARAHKAN keputusan. "Goal kami social impact, jadi kalau dilema A vs B, pilih A walau Kapital -15" |
| Teaching moment terdalam | Workshop expose 3 layer identity: (1) Tendency (DISC), (2) Values (exercise), (3) Goals (group pick). Mana yang menang saat dilema? |

### 5.6 Luaran Personal: "Surat dari Diri 2036"

Pada sesi Day 5 workshop, setiap siswa menulis (mengetik di HP/laptop) **Surat dari Diri 2036** — surat dari versi diri mereka 10 tahun ke depan kepada diri saat ini. Surat ini ditulis berdasarkan profil 2036 personal mereka (dari silent vote tracking).

- **Format:** Digital, mengetik di HP via Google Form atau aplikasi LEAP 2036
- **Output:** Auto-generated PDF dengan layout "surat" yang dapat di-download dan dicetak mandiri oleh siswa
- **Distribusi:** PDF langsung dibagikan di Day 5 (tidak ada time capsule scheduled email — siswa langsung punya artefak)
- **Privasi:** Surat adalah milik siswa. Hanya peserta yang setuju yang surat-nya diarsipkan untuk dokumentasi program (anonim untuk publikasi).

### 5.7 Sistem Skor Live

| Komponen | Tool |
|----------|------|
| Tracking skor real-time (kelompok + individu) | Google Sheets dengan formula auto-calculate (2 sheets: GROUP_SCORES + INDIVIDUAL_SCORES) |
| Display ke peserta | Proyektor / layar TV di ruang workshop — tampilkan **diversity dashboard** (bukan ranking) |
| Operator | Syendhi Reswara (Divisi Perlengkapan & Teknis) |
| Backup | Papan tulis manual + spidol warna (Layer 1 fallback) |

---

## 6. SKENARIO PELAKSANAAN

### 6.1 Konteks dari LPPM (Update 28 Mei 2026)

Per komunikasi resmi LPPM UKDW via APL pada 28 Mei 2026, Kelompok 2 diminta menyiapkan **DUA SKENARIO PELAKSANAAN** karena lokasi dan bentuk kegiatan final masih dalam proses konfirmasi:

#### Skema LPPM-1 — "5 Hari di 1 SMA, 1 Kelas yang Sama"
- 1 kelompok mendampingi 1 kelas yang sama selama 5 hari berturut-turut
- Per hari: durasi 4–6 jam (sesuai kesediaan SMA)
- Total: 1 SMA dijangkau, ~30–40 siswa dengan kedalaman tinggi
- **Karakter:** Deep immersion, bonding tim-siswa kuat, room untuk reflection yang dalam

#### Skema LPPM-2 — "Split 2 + 3 Hari di 2 SMA Berbeda"
- 2 hari di Sekolah A (1 kelas) + 3 hari di Sekolah B (1 kelas)
- Per hari: durasi 4–6 jam (sesuai kesediaan SMA)
- Total: 2 SMA dijangkau, ~60–80 siswa dengan kedalaman bervariasi
- **Karakter:** Reach 2x lebih luas, tapi durasi per sekolah lebih singkat. Tim Dex harus deliver workshop terkompresi di Sekolah A tanpa mengurangi kualitas inti.

**Status per 28 Mei 2026 pagi:** APL memberikan toleransi presentasi DPL hari ini dengan progress yang sudah disiapkan. Jika DPL menanyakan rundown yang belum mencakup info LPPM, APL akan membantu menjawab dan menjelaskan miskomunikasi yang baru di-clarify.

**Pendekatan Kelompok 2:** Fokus develop **Skema LPPM-2 dulu** karena lebih kompleks. Once LPPM-2 matang, adaptasi ke LPPM-1 menjadi straightforward (LPPM-1 = subset complexity dari LPPM-2).

### 6.2 Rundown Skema LPPM-1 — 5 Hari di 1 SMA

Konten per hari (per kelas yang sama selama 5 hari):

| Hari | Tema | Konten Inti | Durasi |
|------|------|-------------|--------|
| **Day 1** | **Foundation Day** | Values Exercise + DISC Assessment + Group Formation by Goal Hidup + Mechanic Briefing + Warm-up Skenario | 4–5 jam |
| **Day 2** | **Fase 1 — Fondasi (2026–2028)** | 7–10 skenario pendidikan & karier awal, group decision flow, reflection journal | 4–5 jam |
| **Day 3** | **Fase 2 — Krisis (2029–2032)** | 8–12 skenario + *Random Event Cards*, krisis & fluktuasi VUCA, reflection journal | 4–5 jam |
| **Day 4** | **Fase 3 — Panen (2033–2036)** | Skenario terminal, kalkulasi skor akhir, reveal Profil 2036 group + individu, mulai penulisan Surat 2036 | 4–5 jam |
| **Day 5** | **Showcase Day** | Finalisasi Surat 2036, Gallery Walk hasil group, Showcase Reflection sharing, Surprise Apresiasi, foto kelas, collective vision board | 4–5 jam |

#### Detail Rundown Day 1 — "Foundation Day" (5 jam version)

| Block | Aktivitas | Durasi | Mode |
|-------|-----------|--------|------|
| 1 | Opening + Energizer + Welcome | 30 menit | Plenary |
| 2 | Konsep "Future Blindness" + Why Workshop Ini Beda (lightweight talk, bukan ceramah) | 30 menit | Plenary |
| 3 | **Values Exercise:** "5 Non-Negotiables" + Card Sort Values lite | 45 menit | Individual → Plenary share |
| 4 | **DISC Assessment:** Online quick test (15 menit) + Reveal & Plenary Discussion (30 menit) | 45 menit | Individual → Plenary share |
| 5 | Bridge Talk: "Tendency (DISC) vs Values vs Goals — 3 Layer Identity Kamu" | 20 menit | Plenary |
| 6 | **Group Formation by Goal Hidup** — siswa self-pick goal, cap max 5/goal, form 6–8 group | 40 menit | Individual → Group |
| 7 | Group Identity Exercise — nama kelompok, vision statement 1 kalimat, brief intro antar anggota group | 20 menit | Group |
| 8 | Mechanic Briefing — The Decision Engine 3 sumber daya + 3 fase + silent vote + group consensus flow | 30 menit | Plenary |
| 9 | Mini Warm-up Skenario (1 skenario practice, no real score, sekadar latihan flow) | 30 menit | Group + Individual |
| 10 | Reflection Journal Day 1 + Closing | 20 menit | Individual + Plenary |
| **TOTAL** | | **5 jam (300 menit)** | |

#### Detail Rundown Day 2/3/4 — "Fase Days" (template 4–5 jam)

| Block | Aktivitas | Durasi |
|-------|-----------|--------|
| 1 | Opening Day X — recap kemarin, brief intro fase hari ini | 15 menit |
| 2 | Skenario Block A (3–4 skenario, flow penuh: read → silent vote → group discuss → consensus → reveal) | 60–75 menit |
| 3 | Break + energizer | 15 menit |
| 4 | Skenario Block B (3–4 skenario lanjutan) | 60–75 menit |
| 5 | Special segment — Day 2 (Fase 1): "Mid-fase reflection circle"; Day 3 (Fase 2): "Random Event Cards" + chaos drill; Day 4 (Fase 3): Skor kalkulasi + reveal Profil 2036 group + individu | 30–45 menit |
| 6 | Skenario Block C (2–4 skenario closing fase) — kecuali Day 4 fokus reveal & Surat 2036 prep | 45–60 menit |
| 7 | Reflection Journal individu + group debrief singkat | 20–30 menit |
| 8 | Closing Day X + preview Day X+1 | 15 menit |
| **TOTAL** | | **4–5 jam** |

#### Detail Rundown Day 5 — "Showcase Day" (5 jam version)

| Block | Aktivitas | Durasi | Mode |
|-------|-----------|--------|------|
| 1 | Opening Day 5 + recap journey 4 hari sebelumnya | 20 menit | Plenary |
| 2 | **Finalisasi Surat dari Diri 2036** — siswa selesaikan penulisan personal | 60 menit | Individual |
| 3 | Distribusi Surat 2036 dalam bentuk PDF — share link/file ke siswa | 15 menit | Individual download |
| 4 | **Gallery Walk** — tiap group siapkan display profil 2036 + journey highlights di sudut kelas. Siswa walk around, baca journey grup lain | 45 menit | Group → Walk |
| 5 | Break + foto group | 15 menit | Group |
| 6 | **Showcase Reflection** — 3–4 volunteer sharing refleksi terdalam mereka (non-juara, non-material di depan). Apresiasi: standing applause + genuine acknowledgment | 45 menit | Individual → Plenary |
| 7 | **Surprise Apresiasi** — di akhir sharing, semua volunteer dapat amplop apresiasi (sama isi: Rp 25k e-money atau cash). Disebut sebagai "terima kasih telah berani berbagi dengan otentik" — bukan ranking | 10 menit | Plenary |
| 8 | **Collective Vision Board** — kelas bersama-sama buat satu vision board bertema "Apa yang ingin kelas ini pesan untuk Diri 2036?" — sticky notes, gambar, kata kunci | 30 menit | Plenary collaborative |
| 9 | **Foto kelas + closing ceremony** — sticker dibagi, sertifikat digital di-link, kesan-pesan tim | 30 menit | Plenary |
| 10 | **Fun Element** — pilihan kelas: mini debate "What if," games kecil terkait skenario hidup, atau open mic kesan workshop | 30 menit | Plenary |
| **TOTAL** | | **5 jam (300 menit)** | |

### 6.3 Rundown Skema LPPM-2 — Split 2 + 3 Hari di 2 SMA

> 📄 **DETAIL SEKOLAH A (2 hari) → `docs/LPPM-2_Sekolah-A_2hari.md`** — desain eksekusi-ready: rundown menit-per-menit Day A1 (255') & A2 (260'), Bank Skenario (F1.1–F1.5, F2.1–F2.5 + 3 Kartu Chaos, F3.1–F3.2), naskah fasilitator 14 segmen + template Surat 2036, backup plan berlapis, checklist H-1/Hari-H. (v1.0, 30 Mei — hasil workflow multi-agent + audit adversarial.) Subbab di bawah = ringkasan; file itu = sumber detail.

**Filosofi:** Same core content, scaled durasi. Sekolah A (2 hari) = experience compressed dengan kualitas inti dipertahankan. Sekolah B (3 hari) = experience full-medium dengan eksplorasi lebih lebar.

#### Rundown Sekolah A (2 Hari) — Compressed

| Hari | Tema | Konten Inti | Durasi |
|------|------|-------------|--------|
| **Day A1** | **Foundation + Fase 1 Compressed** | Values Exercise lite (30 min) + DISC lite (30 min) + Group Formation (30 min) + Mechanic Briefing (30 min) + Fase 1 skenario padat 4–5 skenario (90 min) + reflection journal (15 min) | 4–5 jam |
| **Day A2** | **Fase 2 + Fase 3 + Showcase** | Fase 2 skenario padat 4–5 skenario + *Event Card* singkat (90 min) + Fase 3 reveal Profil 2036 (45 min) + Surat 2036 + Showcase Reflection + Surprise Apresiasi + foto kelas (90 min) | 4–5 jam |

**Adjustments untuk Sekolah A 2-hari:**
- DISC disederhanakan ke 1-line type quick assessment (mis. "Pilih: D-Doer, I-Influencer, S-Steady, C-Conscientious") — saving 30 menit
- Card Sort Values dipangkas ke "5 Non-Negotiables" saja
- Skenario per fase dipadatkan ke 4–5 (vs 7–12 di rundown 5-hari)
- Reflection journal lebih singkat, focus on key insight

#### Rundown Sekolah B (3 Hari) — Full-Medium

| Hari | Tema | Konten Inti | Durasi |
|------|------|-------------|--------|
| **Day B1** | **Foundation + Fase 1** | Values Exercise (45 min) + DISC (45 min) + Bridge Talk (20 min) + Group Formation (40 min) + Mechanic Briefing (30 min) + Fase 1 skenario 6–7 (90 min) + reflection journal (20 min) | 5 jam |
| **Day B2** | **Fase 2 (Krisis)** | Brief recap (15 min) + Fase 2 skenario 8–10 + *Random Event Cards* (180 min) + group debrief krisis (45 min) + reflection journal (30 min) + closing prep Day 3 (30 min) | 5 jam |
| **Day B3** | **Fase 3 + Showcase + Closing** | Fase 3 skenario 4–5 (75 min) + Skor kalkulasi + Reveal Profil 2036 (45 min) + Surat 2036 penulisan (60 min) + Gallery Walk (30 min) + Showcase Reflection + Surprise Apresiasi (60 min) + foto + closing (30 min) | 5 jam |

### 6.4 Trade-off Antar Skema (untuk Komunikasi ke DPL/LPPM)

| Aspek | LPPM-1 (5×1) | LPPM-2 (2+3) |
|-------|-------------|--------------|
| Jumlah siswa terdampak | 30–40 | 60–80 |
| Kedalaman per siswa | Tinggi (5 hari penuh) | Bervariasi (2 hari ringkas, 3 hari medium) |
| Bonding tim-siswa | Sangat kuat | Sedang (per sekolah) |
| Operasional logistik | Simple (1 lokasi, 5 hari) | Lebih kompleks (transisi antar 2 SMA) |
| Surat 2036 quality | Lebih reflektif (jurnal 4 hari) | Sekolah A: lebih singkat. Sekolah B: cukup reflektif |
| Diversifikasi pengalaman tim KKN | Single context | Dual context (2 sekolah, mungkin demografi beda) |
| Anggaran (dengan hadiah symbolic) | Rp 514.000 | Rp 703.000 |

---

## 7. ANGGARAN

> ⚠️ **CONSTRAINT BARU (Pembekalan KKN II, 30 Mei 2026):** anggaran **maksimal Rp 500.000** + **TIDAK boleh ada anggaran makanan/konsumsi**. Angka di bawah (Rp 514.000 / Rp 703.000, termasuk **snack Rp 300.000**) adalah versi **PRA-constraint** → **REVISI PENDING**. Snack harus di-drop/diganti, total dirampingkan ≤ Rp 500k, + siapkan **backup plan** (sinyal lemah → local server/offline). Lihat `PROJECT_MASTER.md` §0 & §8.

### 7.1 Anggaran Skema LPPM-1 — 5 Hari di 1 SMA

| No | Uraian | Volume | Satuan | Harga Satuan | Jumlah |
|----|--------|--------|--------|--------------|--------|
| 1 | Sticker custom LEAP 2036 (1 lembar isi 6 sticker, jasa cetak) | 7 | lembar | Rp 2.000 | Rp 14.000 |
| 2 | Snack ringan sachet (40 siswa × 5 hari = 200 sachet, 1 pack berisi 10 sachet) | 20 | pack | Rp 15.000 | Rp 300.000 |
| 3 | Cetak dokumen formal (proposal cetak, surat izin, MoU) | 1 | SMA | Rp 20.000 | Rp 20.000 |
| 4 | Buffer transport & operasional 5 hari | 1 | paket | Rp 30.000 | Rp 30.000 |
| 5 | **Surprise Apresiasi Volunteer Sharing** (e-money/cash, Rp 25k × 3 volunteer di Day 5) | 3 | volunteer | Rp 25.000 | Rp 75.000 |
| 6 | DISC Assessment online (jika gratis: Rp 0; jika berbayar versi premium: alokasi buffer) | 1 | paket | Rp 75.000 | Rp 75.000 |
|    | **TOTAL ANGGARAN LPPM-1** |        |        |              | **Rp 514.000** |

### 7.2 Anggaran Skema LPPM-2 — Split 2+3 Hari di 2 SMA

| No | Uraian | Sekolah A (2 hari) | Sekolah B (3 hari) | Sub-Total |
|----|--------|-------------------|-------------------|-----------|
| 1 | Sticker custom (1 lembar = 6 sticker) | 7 lembar × Rp 2k = Rp 14.000 | 7 lembar × Rp 2k = Rp 14.000 | Rp 28.000 |
| 2 | Snack ringan sachet (40 siswa) | 2 hari = 80 sachet = 8 pack × Rp 15k = Rp 120.000 | 3 hari = 120 sachet = 12 pack × Rp 15k = Rp 180.000 | Rp 300.000 |
| 3 | Cetak dokumen formal | Rp 20.000 | Rp 20.000 | Rp 40.000 |
| 4 | Buffer transport & operasional | Rp 15.000 | Rp 20.000 | Rp 35.000 |
| 5 | **Surprise Apresiasi** (Rp 25k × 3 volunteer per sekolah) | Rp 75.000 | Rp 75.000 | Rp 150.000 |
| 6 | DISC Assessment buffer | Rp 75.000 shared | — | Rp 75.000 |
| 7 | Cetak materi Card Sort Values (kartu fisik 30 cards × 2 set) | Rp 37.500 | Rp 37.500 | Rp 75.000 |
|    | **Sub-Total per Sekolah** | **Rp 356.500** | **Rp 346.500** | |
|    | **TOTAL ANGGARAN LPPM-2** | | | **Rp 703.000** |

### 7.3 Strategi Efisiensi (Berlaku untuk Kedua Skema)

- Sertifikat partisipasi diterbitkan dalam bentuk **digital (PDF)** yang didistribusikan via grup WhatsApp/email — meniadakan biaya cetak per peserta.
- Luaran "Surat dari Diri 2036" diproduksi dalam format **digital auto-generated** dari sistem simulasi, dapat disimpan/dicetak mandiri oleh siswa.
- Platform web workshop menggunakan **hosting Vercel** dengan subdomain resmi (`kknstem.vercel.app`) — meniadakan biaya domain tahunan.
- Tidak terdapat alokasi biaya untuk reward/hadiah pemenang — sesuai komitmen filosofis no-juara. Surprise Apresiasi untuk volunteer sharing **bukan** ranking, tetapi bentuk terima kasih atas keberanian berbagi.
- Banner fisik tidak digunakan — identitas visual workshop dideliver melalui sticker + interface digital di proyektor.

### 7.4 Sumber Pendanaan

Anggaran kegiatan diajukan kepada **LPPM UKDW** dalam skema pengabdian masyarakat KKN STEM 2026. Skema pendanaan:

- **Primer:** Pengajuan ke LPPM (precedent: KKN STEM Eyecare 2024/2025 memperoleh pendanaan Rp 600.000 dari LPPM).
- **Backup:** Apabila pendanaan tidak terpenuhi secara penuh atau di-cut, kekurangan akan ditanggung secara mandiri oleh 6 anggota kelompok melalui sistem iuran proporsional sebagai komitmen pelaksanaan program.

**Benchmark defensibility:**
- LPPM-1 (Rp 514.000) — di bawah baseline Eye Care Rp 600.000.
- LPPM-2 (Rp 703.000) — sedikit di atas baseline (17% lebih tinggi) karena 2 SMA, masih defensible.

---

## 8. INDIKATOR KEBERHASILAN

| No | Indikator | Target Kuantitatif | Metode Pengukuran |
|----|-----------|-------------------|-------------------|
| 1 | Tingkat kehadiran penuh peserta (seluruh hari workshop) | ≥80% peserta terdaftar | Daftar hadir fisik bercap sekolah per hari |
| 2 | Tingkat penyelesaian Surat dari Diri 2036 | ≥70% peserta hadir | Sistem auto-tracking submisi PDF di Day 5 |
| 3 | Peningkatan skor pemahaman dampak jangka panjang keputusan | ≥60% peserta menunjukkan peningkatan pre vs post-test | Google Form pre/post-test |
| 4 | Partisipasi aktif sesi debrief / group discussion (≥1 insight konkret diutarakan) | ≥50% peserta hadir | Observasi fasilitator + rekaman notulensi |
| 5 | Konsistensi keputusan group dengan goal hidup yang dipilih (group internal coherence) | ≥60% keputusan group selaras dengan goal hidup mereka | Self-report group debrief + observasi fasilitator |
| 6 | Tingkat group survival (kelompok tetap fungsional sampai Day 5, tidak ada walkout) | 100% group complete program | Observasi fasilitator + daftar hadir per group |
| 7 | Kelengkapan dokumentasi visual (foto, video, data sebaran profil) | 100% sesi terdokumentasi | Checklist PDD per hari |
| 8 | Penyerahan dokumen ringkasan agregat ke SMA mitra | 100% SMA mitra menerima | Tanda terima dokumen dari Guru BK / Wakasek |

---

## 9. ALAT VERIFIKASI

| Tahapan | Instrumen | Output |
|---------|-----------|--------|
| Pra-Workshop | Kuesioner *baseline* digital (Google Form) — measurement *future literacy* awal | File ekspor CSV per SMA |
| Pra-Workshop | Surat izin pelaksanaan dari SMA | Dokumen bertanda tangan kepala sekolah |
| Selama Workshop | Daftar hadir fisik + foto registrasi per hari | Dokumen daftar hadir bercap sekolah |
| Selama Workshop | **DISC Assessment results** per peserta (Day 1) | Spreadsheet hasil DISC + tipe per siswa |
| Selama Workshop | **Card Sort Values output** per peserta (Day 1) | Foto / scan kartu top 5 values per siswa |
| Selama Workshop | Sistem skor *live* Google Sheets — group + individu | 2 sheet ekspor CSV (GROUP_SCORES + INDIVIDUAL_SCORES) |
| Selama Workshop | Reflection journal harian (Day 1–4) | Arsip digital + scan tulisan tangan jika ada |
| Pasca-Workshop | File "Surat dari Diri 2036" peserta — auto-generated PDF | Arsip digital per peserta (dengan persetujuan) |
| Pasca-Workshop | Kuesioner *post-test* digital (Google Form) | File ekspor CSV per SMA |
| Pasca-Workshop | Notulensi sesi Showcase Reflection | Dokumen Word per SMA |
| Pasca-Workshop | Dokumentasi visual (foto + video pendek + Gallery Walk display) | Folder Google Drive terorganisir per SMA |
| Pasca-Workshop | Rekapitulasi distribusi Profil 2036 (group + individu) | Grafik dan tabel agregat |
| Pasca-Workshop | Laporan pengabdian masyarakat | Dokumen PDF + presentasi ke LPPM |

Seluruh data hasil verifikasi diarsipkan dalam Google Drive kelompok dan dilampirkan dalam laporan akhir KKN STEM 2026.

---

## 10. MEDIA PUBLIKASI LUARAN

| Kanal | Bentuk Konten | Volume Estimasi |
|-------|---------------|-----------------|
| Instagram Kelompok 2 KKN STEM 2026 | Teaser pra-program, daily highlights selama workshop, recap pasca-program | 5–10 postingan per SMA mitra |
| TikTok / Reels Instagram | Video pendek 30–60 detik (cuplikan momen kunci + testimoni siswa) | 2–3 video per SMA mitra |
| Video Kompilasi Profil 2036 | Visualisasi anonim distribusi profil peserta keseluruhan program | 1 video master |
| Artikel Pengabdian Masyarakat | Tulisan untuk kanal resmi LPPM UKDW / website Prodi | 1 artikel master |
| Laporan Diseminasi ke SMA Mitra | Dokumen ringkasan agregat sebaran profil siswa untuk Guru BK / Wakasek | 1 dokumen per SMA |
| Website KKN-HUB (`kknstem.vercel.app`) | Halaman dedicated "Proker SMA" — proposal final, rundown 2 skema, decision log | 1 halaman live, di-update progresif |
| **(Optional) Microsite Workshop** (`leap2036.vercel.app`) | Siswa & alumni workshop dapat akses materi & community board | 1 microsite live |

---

## 11. STRATEGI TEKNIS — PROGRESSIVE ENHANCEMENT

### 11.1 Filosofi 3-Layer Fallback

Workshop dirancang dengan **3 layer teknologi**, di mana layer atas merupakan *stretch goal* dan layer bawah merupakan *guaranteed working*. Jika layer atas gagal di hari-H (jaringan WiFi sekolah lemah, server down, bug), workshop tetap berjalan dengan layer di bawahnya.

| Layer | Bentuk | Status Kepastian |
|-------|--------|------------------|
| **Layer 1** | Kartu skenario fisik cetak + papan tulis skor + spidol warna | ✅ Pasti work — no tech dependency |
| **Layer 2** | Canvas Lite HTML standalone (`canvas_Visualisasi-Simulator_LEAP_2036.html`) — fasilitator input pilihan di proyektor | 🟡 Sudah ada (1015 baris HTML/Tailwind/JS, 7 skenario, 4 profil, sandbox, surat dynamic) — siap demo. Perlu adapt ke group mode |
| **Layer 3** | Fullstack Next.js 15 + Tailwind + Supabase (auth/realtime/postgres) + Vercel — siswa main sendiri di HP via QR session code, dengan group sub-session + individu silent vote tracking | 🟠 Stretch goal — perlu ~15–20 hari kerja serius dalam window 10 minggu |

### 11.2 Stack Layer 3 (Stretch Goal)

| Komponen | Teknologi |
|----------|-----------|
| Frontend | Next.js 15 + Tailwind CSS |
| Backend & Database | Supabase (Auth + Realtime + Postgres) |
| Hosting | Vercel |
| Domain | Subdomain `.vercel.app` (tidak menggunakan domain berbayar) |
| Inspirasi UX | **Little Hope** (Supermassive Games — choice-driven narrative, branching consequences, cinematic) + **Kahoot/Quizizz** (multi-user realtime, teacher host, PIN/QR join, live leaderboard) |

### 11.3 Flow Hari-H Layer 3 (Vision Final dengan Hybrid Model)

1. Operator (Syendhi) membuka dashboard teacher → generate session PIN (mis. `LEAP-3847`)
2. Proyektor menampilkan PIN + QR code
3. Siswa scan QR di HP mereka → join sesi dengan nama → assign ke group (yang sudah terbentuk Day 1)
4. Operator klik *Start* → semua siswa melihat Skenario 1.1 secara sinkron
5. **Silent Individual Vote phase:** Siswa pilih A/B di HP (countdown 30 detik) — pilihan tersembunyi
6. Setelah timer habis: group discussion phase (3-5 menit, fasilitator memantau)
7. **Group Consensus phase:** group leader (rotating) submit group decision di HP
8. Reveal: animasi stats berubah live untuk group + individu, konsekuensi cinematic dinarrate fasilitator
9. **Diversity Dashboard** di proyektor: tampilkan posisi semua group (BUKAN ranking, BUKAN leaderboard)
10. Lanjut: Fase 1 → break → Fase 2 (event cards chaos) → Fase 3 (panen)
11. Reveal Profil 2036 group + personal → sesi penulisan Surat dari Diri 2036 → auto-PDF download

### 11.4 Timeline Build (10 Minggu: 26 Mei → 3 Agustus 2026)

| Minggu | Periode | Milestone |
|--------|---------|-----------|
| W1 | 26 Mei – 1 Juni | Presentasi DPL + repo setup + Supabase auth foundation |
| W2 | 2 – 8 Juni | Port skenario engine HTML → React (single-user playable, individu mode) |
| W3–W4 | 9 – 22 Juni | Multi-user session + teacher dashboard MVP + group/individu dual tracking |
| W5 | 23 – 29 Juni | UI polish + Surat 2036 PDF export + mobile-first + DISC integration |
| W6–W7 | 30 Juni – 13 Juli | Buffer + Testing + bug fix + Card Sort Values integration |
| W8–W9 | 14 – 27 Juli | Dress rehearsal dengan tim + adjust + simulasi lengkap 5-day flow |
| W10 | 28 Juli – 3 Agustus | Final test + deploy + freeze code |

### 11.5 Gap Layer 2 → Layer 3 yang Perlu Dibangun

- Multi-user session + autentikasi (Supabase)
- Group + individu dual-tracking system (silent vote + group consensus)
- Class session code / QR join
- Persistence database (refresh-safe)
- Teacher dashboard (operator: Syendhi) — realtime monitor group + individu
- Data export CSV (untuk laporan KKN/skripsi)
- Mobile-first responsive design
- Skenario lebih banyak (20+, lengkap untuk Fase 1+2+3, plus Random Event Cards)
- 7 profiles vs 4 di Canvas Lite
- DISC Assessment lite integrasi (atau redirect ke 3rd party)
- Card Sort Values digital interface
- Goal Hidup picking & group formation interface
- Reflection Journal interface (private, per siswa)
- Print/export Surat 2036 sebagai PDF
- Gallery Walk digital display (Day 5)

---

## 12. PEMBAGIAN TUGAS DETAIL TIM

### 12.1 Tugas Per Anggota — Sebelum Workshop (Pra-Eksekusi)

| Anggota | Tugas Pre-Workshop |
|---------|-------------------|
| **Dex Bennett** (Ketua) | Maintain KKN-HUB website, finalisasi Project Master + proposal v2 + PPT untuk DPL, decision matrix (skenario per fase), setup Google Form data collection, build Layer 3 app (lead), kompilasi 8 kartu goal hidup, kompilasi 30 kartu Card Sort Values |
| **Dhevina** (Sek-Bend) | 7–10 skenario finansial untuk Fase 1, riset insight finansial sederhana untuk briefing, administrasi proposal & laporan, pengelolaan anggaran, banker simulasi hari-H |
| **Theana** (PDD) | Desain visual sticker LEAP 2036, template sertifikat digital, template Surat 2036 PDF layout, checklist dokumentasi harian per SMA, bantu Maria template emotional safety |
| **Syendhi** (Perlengkapan) | Setup Google Sheets template scoring system (group + individu), test alur teknis sebelum hari-H, bantu build Layer 3 app, riset DISC Assessment online gratis vs berbayar |
| **Maria** (Humas) | Komunikasi formal ke SMA mitra, pengurusan surat izin, riset protokol *emotional safety* untuk experiential learning, koordinasi dengan Guru BK |
| **Benediktus** (Pelaksana) | 8–12 skenario kesehatan untuk Fase 2, brief singkat tentang *burnout* & *sleep debt*, lead Fase 2 hari-H, koordinasi alur skenario antar fase |

### 12.2 Tugas Per Anggota — Saat Workshop Hari-H

| Anggota | Tugas Per Hari Workshop |
|---------|------------------------|
| **Dex** | MC utama / koordinator hari-H, briefing mekanisme di Day 1, lead Bridge Talk "3 Layer Identity," lead debrief & Showcase Reflection di Day 5 |
| **Dhevina** | Lead Fase 1 (Day 2 di LPPM-1; Day A1/B1 di LPPM-2), *banker event* di simulasi, bantu hitung modal Kapital per group |
| **Theana** | Co-lead segmen 'Surat dari Diri 2036' di Day 5, fasilitator group kecil, dokumentasi foto/video selama workshop, koordinasi Gallery Walk |
| **Syendhi** | Operator dashboard skor live di proyektor (Diversity Dashboard, BUKAN leaderboard), backup teknis (proyektor, audio, koneksi), operator silent vote interface |
| **Maria** | Co-lead segmen 'Surat dari Diri 2036', fasilitator group kecil, *emotional support protocol* jika ada siswa terdampak Fase 2 |
| **Benediktus** | Lead Fase 2 (Day 3 di LPPM-1; Day A2/B2 di LPPM-2), handle *burnout* & krisis kesehatan event, brief insight medis singkat |

---

## 13. RISK REGISTER & MITIGASI

| # | Risiko | Probabilitas | Dampak | Mitigasi |
|---|--------|--------------|--------|----------|
| R1 | LPPM final konfirmasi skema (LPPM-1 vs LPPM-2) berbeda dari yang dikembangkan | Medium | Tinggi | Project Master cover KEDUA skema secara explicit. Kelompok 2 fokus develop LPPM-2 (lebih kompleks); LPPM-1 = subset = mudah adapt |
| R2 | 3 anggota Kedokteran (Benediktus, Maria, Theana) silent / kurang responsif | Tinggi (sudah terjadi) | Medium | Dex eksekusi sendiri dengan AI thinking partner untuk fase persiapan; reframe ke ownership formal via struktur kepanitiaan; engagement via WA personal bukan grup |
| R3 | Layer 3 (fullstack app) tidak siap di hari-H | Medium | Rendah (sudah ada fallback) | Layer 2 (Canvas Lite) sudah siap demo; Layer 1 (kartu fisik + papan tulis) sebagai *guaranteed working* |
| R4 | DPL menolak konsep atau minta revisi besar di presentasi 28 Mei | Rendah-Medium | Tinggi | APL+Yaser commit back-up klarifikasi di presentasi DPL; Konsultasi DPL follow-up di Pembekalan II (30 Mei, sesi 10.45–12.00) |
| R5 | Jaringan WiFi SMA mitra lemah / tidak ada | Tinggi | Medium | Layer 2 Canvas Lite jalan offline standalone; Layer 1 kartu fisik tidak butuh internet; DISC Assessment versi PDF/printed sebagai backup |
| R6 | Pendanaan LPPM dipotong / ditolak | Rendah-Medium | Rendah | Anggaran modest (Rp 514k LPPM-1 atau Rp 703k LPPM-2); selisih ditanggung iuran 6 anggota |
| R7 | Siswa SMA tidak responsif / pasif | Medium | Medium | Format experiential + group dynamics + DISC excitement di Day 1 meminimalisir risiko; *Random Event Cards* untuk Fase 2 menjaga engagement; goal-based group formation natural memotivasi |
| R8 | Konten skenario terlalu berat secara emosional untuk siswa SMA | Medium | Medium | *Emotional safety protocol* di-handle Maria; Pre-test brief mental health; sesi debrief disiapkan untuk *normalize* perasaan kalau muncul; reflection journal sebagai outlet processing |
| R9 | Konflik filosofis APL "Awarding Day" vs lock no-juara | Medium (sudah teridentifikasi) | Rendah | Reframe ke "Showcase Reflection + Surprise Apresiasi" — non-material ranking, hanya apresiasi keberanian sharing; komunikasikan ke APL sebagai konsultasi (bukan rejeksi) |
| R10 | Group internal conflict — dominant personality hijack decisions | Medium | Medium | Silent individual vote sebelum group discussion memastikan voice individu tertangkap; reflection journal mengangkat ke kesadaran ("kenapa aku ngalah?"); fasilitator monitor & intervene kalau group disfungsional |
| R11 | DISC results disalahgunakan jadi self-pigeonholing siswa | Medium | Medium | Framing eksplisit di Day 1: "DISC = tendency, bukan destiny." Workshop test selama 5 hari: keputusan konsisten dengan tendency atau ada surprise? Insight = saat MELANGGAR tendency |
| R12 | Goal hidup distribution timpang (1 goal overload, beberapa kosong) | Medium | Rendah | Cap maksimum 5 siswa per goal; siswa overload pilih option kedua; fasilitator dapat manual rebalance |
| R13 | Sekolah A (2 hari di LPPM-2) merasa dapet 'versi setengah' | Medium | Medium | Konten Sekolah A didesain sebagai "complete-but-compressed," BUKAN "half-done." Communicate ke sekolah upfront: 2 hari = essential core, 3 hari = expanded experience |

---

## 14. DECISION LOG

| Tanggal | Topik | Keputusan | Alasan | Status |
|---------|-------|-----------|--------|--------|
| 19 Mei | Format brainstorm | Crowdsource 4 AI (Claude, ChatGPT, Gemini, Grok), kurasi tier list | Diversifikasi ide, hindari bias single-AI | DONE |
| 21 Mei | Tech stack KKN-HUB | Vanilla JS + HTML + CSS, deploy Vercel | Cepat dibangun, no build step, mudah maintain | DONE |
| 24 Mei | Struktur proyek | Dex OS folder structure: `/docs`, `/assets`, `/src`, `/.agent` | Konsistensi standar, mudah navigasi | DONE |
| 24 Mei | Tema Workshop SMA | "Workshop Simulasi Hidup 10 Tahun: Keputusanmu Hari Ini, Hidupmu 2036" | Konsep paling emotionally impactful, durasi fleksibel, sesuai brief APL | FIXED |
| 24 Mei | Brand internal | LEAP 2036 (Life Experience & Action Planning) | Memorable, expandable, professional | FIXED |
| 24 Mei | Format | Experiential learning berbasis kartu keputusan | Bukan ceramah — siswa mengalami konsekuensi | FIXED |
| 27 Mei | Visi fullstack | Next.js 15 + Supabase + Vercel; inspirasi Little Hope + Kahoot | Ambisius tapi achievable dalam 10 minggu dengan progressive enhancement | FIXED |
| 27 Mei | Sumber dana | Kombinasi LPPM (primer) + self-funded backup | Precedent Eye Care valid (LPPM); self-funded sebagai komitmen | FIXED |
| 27 Mei | Reward sistem | NO juara material individu/group. Surprise Apresiasi non-material di Showcase Reflection | Filosofis — kontradiksi dengan core teaching kalau ada "hidup terbaik" | FIXED |
| 27 Mei | Surat 2036 medium | Digital — ngetik di HP, auto-PDF, shareable | Konsisten vibe Kahoot/app, no logistik cetak, archive-able | FIXED |
| 27 Mei | Web hosting | Vercel subdomain (no custom domain berbayar) | Cukup untuk MVP; domain bisa di-add nanti | FIXED |
| 28 Mei | Pembagian tugas formal | Struktur kepanitiaan Ketua/Sek-Bend/PDD/Perlengkapan/Humas/Pelaksana | Standar format proposal KKN; mapping ke 6 anggota | FIXED |
| 28 Mei | Daftar pustaka inti | Kolb (1984), Hershfield (2011), Markus & Nurius (1986), Miller (2018), UNESCO (2020) | Foundational sources untuk experiential learning + future self + future literacy | FIXED |
| 28 Mei | **Scope skema (UPDATE dari LPPM)** | DUA SKENARIO disiapkan: LPPM-1 (5 hari × 1 SMA) + LPPM-2 (2+3 hari split). Skema A original (5 SMA × 1 hari) DROP | LPPM clarify "1 kelompok = 1 kelas" artinya pendampingan multi-hari, BUKAN multi-SMA | FIXED |
| 28 Mei | **Model partisipasi** | HYBRID — group untuk diskusi, silent individual vote untuk decision, jurnal refleksi individu | Preserve agency + benefit peer learning + self-awareness moment ("aku silent vote A, group milih B") | FIXED |
| 28 Mei | **Group competition** | DROP. Group = parallel journeys (goal hidup berbeda), BUKAN competing teams | Konsisten dengan filosofi "no best life" | FIXED |
| 28 Mei | **Group formation method** | Choose Your Adventure by Goal Hidup + cap max 5/goal (dengan algoritma diversity backup kalau timpang) | Realistic — real teams form around shared purpose, bukan shared personality | FIXED |
| 28 Mei | **Day 1 self-discovery tools** | Values Exercise ("5 Non-Negotiables" + Card Sort) + DISC Assessment (lite/online) FULL BOTH | User insight: keduanya berguna untuk dipakai di group dynamics + teaching moment 3 layer identity | FIXED |
| 28 Mei | **Time capsule Surat 2036** | DROP. PDF langsung dibagikan ke siswa di Day 5 | Simpler, siswa langsung punya artefak, no risk drop ball | FIXED |
| 28 Mei | **Hadiah Showcase Reflection** | Surprise Apresiasi Rp 25k × 3 volunteer per SMA (e-money/cash). Framing: terima kasih atas keberanian berbagi, BUKAN ranking | Konsisten dengan no-juara filosofis; tetap memberi appreciation tangible | FIXED |
| 28 Mei | **Anggaran final** | LPPM-1: Rp 514.000. LPPM-2: Rp 703.000. Proposal v2 tampilkan kedua skema | Modest, defensible vs precedent Eye Care Rp 600k | FIXED |
| 28 Mei | **Skema LPPM-2 differentiation** | Same core content, scaled durasi (Sekolah A 2-hari compressed, Sekolah B 3-hari full-medium). BUKAN appetizer vs main course | Konsistensi quality antar SMA; tidak ada "versi setengah" | FIXED |
| 28 Mei | **APL names** | Tentative: Kak Eleonora & Kak Yasser. Perlu konfirmasi ejaan resmi | User report; LPPM penugasan resmi belum dicek | TENTATIVE |

---

## 15. JADWAL KUNCI

| Tanggal | Event | Status |
|---------|-------|--------|
| 24 Mei 2026 | GMeet awal (DPL tidak hadir, APL bilang ide keren) | DONE |
| 25 Mei – 2 Juni 2026 | Window presentasi proposal ke DPL | ACTIVE |
| 28 Mei 2026 pagi | **LPPM update via APL — 2 skenario disiapkan** | DONE |
| **28 Mei 2026** | **Presentasi proposal LEAP 2036 ke DPL Kelompok 2** | 🔴 HARI-H |
| 30 Mei 2026, 07.30–12.00 | Pembekalan Tahap II (WAJIB) — Auditorium Gedung Koinonia UKDW | UPCOMING |
| 30 Mei 2026, 10.45–12.00 | Konsultasi Program KKN dengan DPL (opportunity follow-up) | UPCOMING |
| 30 Mei 2026 (sore/malam) | Diskusi revisi rundown bersama APL+Yaser (jika diperlukan) | TENTATIVE |
| 13–19 Juni 2026 | Training SO Eyecare | UPCOMING |
| 3–7 Agustus 2026 | **Service Days — Eksekusi Workshop LEAP 2036 di SMA mitra** | TARGET |

---

## 16. DAFTAR PUSTAKA

Hershfield, H. E. (2011). Future self-continuity: How conceptions of the future self transform intertemporal choice. *Annals of the New York Academy of Sciences, 1235*(1), 30–43. https://doi.org/10.1111/j.1749-6632.2011.06201.x

Kolb, D. A. (1984). *Experiential learning: Experience as the source of learning and development*. Prentice-Hall.

Markus, H., & Nurius, P. (1986). Possible selves. *American Psychologist, 41*(9), 954–969. https://doi.org/10.1037/0003-066X.41.9.954

Miller, R. (Ed.). (2018). *Transforming the future: Anticipation in the 21st century*. Routledge & UNESCO Publishing.

UNESCO. (2020). *Futures literacy: An essential competency for the 21st century*. UNESCO Publishing.

---

## 17. APPENDIX — SUPPORTING DOCUMENTS

File-file pendukung yang dapat di-upload bersama dokumen ini ke NotebookLM untuk konteks tambahan:

| File | Lokasi | Fungsi |
|------|--------|--------|
| Proposal v2 | `docs/Proposal Workshop SMA Kelompok 2 - LEAP 2036-v2.md` | Versi formal proposal untuk DPL |
| V2 Patches | `docs/v2-patches.md` | Drop-in copy-paste blocks untuk 6 gap kritis di v2 |
| Skenario Starter Pack | `docs/Skenario-Starter-Pack.md` | 15+ skenario draft per fase (perlu expand ke 20+) |
| Canvas Lite HTML | `docs/canvas_Visualisasi-Simulator_LEAP_2036.html` | Working prototype Layer 2 (1015 baris, demo-able; perlu adapt ke group mode) |
| Asisten Brief Dhevina | `docs/Asisten-Brief_Dhevina.md` | Panduan lengkap peran Dhevina + section anggaran |
| Asisten Brief Syendhi | `docs/Asisten-Brief_Syendhi.md` | Panduan lengkap peran Syendhi |
| Catatan APL & DPL | `docs/Catatan APL & DPL.txt` | Notulensi komunikasi awal |
| Catatan Bahaya APL | `docs/Catatan Bahaya APL.txt` | Update LPPM 28 Mei tentang 2 skenario |
| Saran Rundown APL | `docs/Saran perbaikan rundown_APL.pdf` | Saran rundown 5-hari dari APL+Yaser |
| Contoh Proposal Eye Care | `docs/Contoh_Proposal Eye Care SMA Stero.docx` | Reference proposal KKN STEM tahun lalu (Rp 600k LPPM) |
| Dex-Core (Lokal) | `.agent/Dex-Core.md` | Hub progress + decision log internal |

---

## 18. KONTAK & TINDAK LANJUT

- **Pertanyaan teknis program / koordinasi:** Dex Bennett (Ketua) — koordinator komunikasi utama
- **Pertanyaan administrasi / anggaran:** Dhevina Putri Agustya (Sekretaris-Bendahara)
- **Pertanyaan media / publikasi:** Theana Amabel Krismeiati (PDD)
- **Pertanyaan teknis hari-H / perlengkapan:** Syendhi Reswara S. (Perlengkapan)
- **Pertanyaan koordinasi dengan SMA mitra:** Maria Nadira Dosinaen (Humas)
- **Pertanyaan konten skenario fase 2 / medis:** Benediktus Satria T. (Pelaksana)

---

*Dokumen ini disusun sebagai single source of truth untuk Program Workshop LEAP 2036 KKN STEM 2026 Kelompok 2 UKDW × PolyU.*

*Versi: 2.0 | Tanggal disusun: 28 Mei 2026 (revisi pasca-update LPPM) | Status: ACTIVE — siap upload NotebookLM*
*Update terakhir: 28 Mei 2026 pagi (lock model hybrid + group formation goal-based + 2 skenario LPPM + anggaran final + Surprise Apresiasi framing)*
