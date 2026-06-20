/**
 * LEAP 2036 — STUDENT-FACING DATA (classic script, offline / file:// safe)
 * =======================================================================
 * window.LEAP_DATA = { rounds(12), profiles(7), chaos(3), surat }.
 *
 * STUDENT-FACING TEXT ONLY. No numbers/deltas/thresholds live here — those
 * are in engine.js (the single source of scoring). Jargon is sanitized:
 * resources shown as Energi / Uang / Mental. Banned words (delta, clamp,
 * silent vote, reksa dana, leaderboard, juara, skor mentah) never appear.
 *
 * Profile keys (id_name) match engine.classifyProfil() return strings
 * byte-for-byte so the reveal lookup keys off the classifier output.
 */
(function (global) {
  'use strict';

  var ROUNDS = [
    {
      id: 'F1.1', phase: 'Fondasi', year: '2026',
      title: 'Persimpangan Pasca-SMA',
      situation: 'Pengumuman kuliah keluar. Kamu lolos di kampus negeri, tapi di jurusan pilihan kedua yang biasa-biasa saja — bukan bidang yang benar-benar kamu inginkan. Di saat yang sama, sebuah kampus swasta favorit menawarimu kursi di jurusan impianmu, lengkap dengan potongan biaya, tapi sisanya tetap membebani orang tua. Orang tuamu bilang "terserah kamu", padahal kamu tahu keuangan keluarga sedang pas-pasan.',
      optionA: 'Ambil kampus negeri di jurusan pilihan kedua — biaya jauh lebih ringan dan keluarga bangga, walau bukan bidang yang kamu cintai.',
      optionB: 'Ambil jurusan impian di kampus swasta dengan potongan biaya — sesuai panggilan hati, tapi orang tua harus menanggung sisanya.',
      revealA: 'Semester pertama aman secara keuangan dan keluarga bangga, tapi tiap kali membuka materi kuliah kamu mulai bertanya, "apa aku salah jurusan?"',
      revealB: 'Kamu bersemangat masuk kelas tiap pagi karena mencintai bidangmu, tapi tiap melihat tagihan biaya kuliah, ada rasa berutang budi yang menekan pada orang tua.',
      guardrail: ''
    },
    {
      id: 'F1.2', phase: 'Fondasi', year: '2026',
      title: 'Jeda Setahun atau Langsung Jalan',
      situation: 'Tekanan masuk kuliah atau kerja terasa berat, dan kamu belum benar-benar tahu apa yang kamu mau. Seorang teman mengambil jeda setahun dulu untuk magang, ikut kursus, dan menabung sebelum lanjut. Tapi keluarga dan lingkunganmu memandang jeda itu sebagai "menganggur" dan menyarankan kamu langsung jalan saja seperti yang lain. Waktu pendaftaran makin dekat.',
      optionA: 'Langsung lanjut kuliah atau kerja tahun ini juga — ikut arus, merasa aman, dan tidak tertinggal dari teman seangkatan.',
      optionB: 'Ambil jeda setahun yang terencana untuk magang, kursus, dan menabung sambil mematangkan arah.',
      revealA: 'Kamu tetap satu langkah dengan teman seangkatan dan merasa aman karena tidak tertinggal, tapi di tengah semester kamu kelelahan menjalani sesuatu yang arahnya belum benar-benar kamu pahami.',
      revealB: 'Setahun jeda membuatmu lebih matang, punya sedikit tabungan dan pengalaman magang, tapi kamu sempat merasa canggung "tertinggal" saat teman-teman sudah lebih dulu kuliah, dan kantong sempat lebih tipis.',
      guardrail: ''
    },
    {
      id: 'F1.3', phase: 'Fondasi', year: '2027',
      title: 'Kerja Sampingan atau Jaga Fokus',
      situation: 'Kamu sudah menjalani tahun pertama kuliah atau kerja. Muncul peluang kerja sampingan: jadi admin toko online dan jualan kecil-kecilan yang bisa menghasilkan uang jajan sendiri tiap bulan — lumayan untuk mengurangi minta ke orang tua. Tapi jam kerjanya bentrok dengan waktu belajar dan istirahatmu, sementara nilaimu semester ini sedang krusial. Kamu cuma punya 24 jam sehari.',
      optionA: 'Ambil kerja sampingan sekarang — punya pemasukan sendiri dan belajar bisnis lebih awal, walau waktu belajar dan istirahat tergerus.',
      optionB: 'Tahan dulu, fokus belajar dan jaga kesehatan — pemasukan ditunda, tapi fondasi nilai dan tenagamu terjaga.',
      revealA: 'Dompetmu mulai terisi sendiri dan kamu bangga bisa mandiri, tapi beberapa malam kamu begadang mengejar pesanan sambil mengorbankan tidur dan tugas.',
      revealB: 'Nilai dan tenagamu terjaga rapi dan kamu punya ruang napas yang sehat, tapi sesekali kamu iri melihat teman yang sudah punya pemasukan sendiri — dan uang jajan tetap harus minta ke orang tua.',
      guardrail: ''
    },
    {
      id: 'F1.4', phase: 'Fondasi', year: '2027',
      title: 'Organisasi atau Magang',
      situation: 'Dua kesempatan datang di waktu yang sama dan kamu cuma bisa pilih satu. Pertama, kamu ditawari jadi ketua panitia acara besar kampus atau komunitas — bergengsi, jejaring luas, tapi menyita banyak waktu dan tenaga tanpa bayaran. Kedua, ada slot magang di perusahaan kecil yang relevan dengan bidangmu — pengalaman kerja nyata dan sedikit uang saku, tapi rutin dan kurang "terlihat".',
      optionA: 'Ambil jadi ketua panitia — bangun jejaring luas, keterampilan memimpin, dan rekam jejak organisasi yang membanggakan.',
      optionB: 'Ambil magang — dapat pengalaman kerja nyata, sedikit uang saku, dan portofolio yang relevan dengan kariermu.',
      revealA: 'Lingkaran pertemananmu meluas dan namamu dikenal banyak orang, kamu pulang dengan rasa bangga dan koneksi baru, tapi tabungan dan waktu istirahatmu terkuras untuk acara.',
      revealB: 'CV-mu terisi pengalaman kerja konkret dan kamu paham ritme dunia profesional lebih awal, tapi kamu melewatkan keseruan dan jejaring sosial yang dinikmati teman-teman organisasimu.',
      guardrail: ''
    },
    {
      id: 'F1.5', phase: 'Fondasi', year: '2028',
      title: 'Uang Pertama: Nikmati atau Tumbuhkan',
      situation: 'Kerja keras sampinganmu membuahkan hasil: untuk pertama kalinya ada saldo lumayan di rekeningmu. Teman-temanmu mulai naik gaya hidup — HP baru, nongkrong di kafe, outfit kekinian — dan kamu merasa "pantas" merayakan jerih payahmu. Tapi seorang kakak tingkat menyarankan kamu mulai menyisihkan dana darurat dan sebagian disisihkan untuk ditabung dan ditumbuhkan pelan-pelan. Godaan dan nasihat itu datang bersamaan.',
      optionA: 'Nikmati hasil kerjamu — sedikit naik gaya hidup dan rayakan jerih payahmu sekarang. Kamu merasa dihargai, tapi tabungan nyaris tidak bertambah.',
      optionB: 'Sisihkan untuk dana darurat dan mulai ditabung serta ditumbuhkan pelan-pelan. Kamu menahan diri sekarang demi rasa aman dan dana yang bertumbuh nanti.',
      revealA: 'Kamu merasa hidupmu naik kelas dan jerih payahmu terbayar dengan kesenangan yang nyata, tapi saat ada kebutuhan mendadak di akhir tahun, rekeningmu kosong dan kamu kembali bergantung pada orang tua.',
      revealB: 'Dana daruratmu mulai terbentuk dan kamu lebih tenang menghadapi ketidakpastian, tapi kamu kerap menahan diri saat teman-teman bersenang-senang dan sesekali merasa "kurang menikmati masa muda".',
      guardrail: ''
    },
    {
      id: 'F2.1', phase: 'Krisis', year: '2029',
      title: 'Surat dari Kantor',
      situation: 'Kamu sudah dua tahun kerja kantoran dan baru mulai stabil. Senin pagi, surel dari kantor masuk: perusahaan melakukan perampingan. Kamu ditawari dua pilihan — ambil uang pesangon penuh dan keluar sekarang, atau pindah ke divisi baru dengan gaji dipotong tapi tetap bekerja. Teman-teman seangkatanmu ramai keluar, ada yang bilang "mending ambil pesangon buat modal usaha." Sisa minggu ini untuk memutuskan.',
      optionA: 'Ambil pesangon penuh, keluar, dan coba bangun sesuatu sendiri — usaha kecil atau jadi pekerja lepas.',
      optionB: 'Bertahan di divisi baru dengan gaji dipotong, demi keamanan dan rekam jejak.',
      revealA: 'Pesangon memberimu kebebasan, tapi tiga bulan berikutnya kamu sadar membangun dari nol itu sepi dan menakutkan — sebagian besar uang cepat menipis untuk biaya hidup.',
      revealB: 'Gaji yang lebih kecil terasa menyesakkan tiap tanggal tua, tapi kamu masih punya struktur, jaminan, dan jaringan kantor yang ternyata jadi pijakan saat badai berikutnya datang.',
      guardrail: ''
    },
    {
      id: 'F2.2', phase: 'Krisis', year: '2030',
      title: 'Telepon Tengah Malam',
      situation: 'Karier mulai naik lagi. Lalu satu telepon mengubah segalanya. Jam 11 malam, ibumu menelepon dengan suara bergetar: ayahmu masuk IGD dan butuh tindakan yang tidak sepenuhnya ditanggung jaminan kesehatan. Kekurangan biayanya besar — kira-kira setara tabungan delapan bulanmu. Di saat yang sama, lusa kamu dijadwalkan presentasi proyek terpenting tahun ini yang bisa menentukan promosimu. Keluarga menatapmu sebagai yang "paling bisa diandalkan".',
      optionA: 'Ambil cuti darurat, pulang, kuras tabungan dan urus semuanya sendiri — proyek diserahkan ke rekan.',
      optionB: 'Kirim sebagian uang lewat transfer, tetap presentasi, dan urus ayah dari jarak jauh sambil minta saudara turun tangan.',
      revealA: 'Kamu kehilangan momentum karier dan tabungan, tapi saat ayahmu sadar, matanya mencarimu dan kamu ada di sana — sesuatu yang tidak bisa dibeli ulang.',
      revealB: 'Presentasimu sukses dan promosi mungkin datang, tapi bayangan "aku tidak ada saat dibutuhkan" mengikutimu lebih lama dari yang kamu kira.',
      guardrail: 'Kita membahas pilihan TOKOH di cerita ini, bukan pengalaman pribadimu — kamu boleh memberi alasan tanpa menceritakan hidupmu sendiri, dan boleh pass kapan saja.'
    },
    {
      id: 'F2.3', phase: 'Krisis', year: '2031',
      title: 'Sudah Tidak Ada yang Tersisa',
      situation: 'Dua tahun kamu lari kencang dan tenaga mulai menipis. Belakangan kamu tidur cuma empat jam, lembur jadi biasa, dan akhir pekan habis untuk kerja juga. Hal-hal yang dulu kamu nikmati sekarang terasa malas dijalani, dan kamu sadar sudah jalan pakai sisa-sisa tenaga. Atasanmu menawarkan proyek baru yang "sayang kalau dilewatkan" — dengan bonus besar. Tapi diam-diam kamu tahu kamu sudah kehabisan tenaga.',
      optionA: 'Ambil jeda — mundur dari proyek, ambil cuti panjang untuk pulih, walau dianggap "kurang ambisius".',
      optionB: 'Tetap jalan pakai tekad, ambil proyek itu — pulih nanti saja kalau sudah ada uangnya.',
      revealA: 'Beberapa minggu pertama terasa bersalah dan "tertinggal", dan tabunganmu ikut menipis tanpa pemasukan — tapi perlahan kamu mengenali lagi suaramu sendiri, dan sadar karier terasa kosong kalau kamu terlalu lelah untuk menikmatinya.',
      revealB: 'Bonus masuk rekening dan semua memuji etos kerjamu, sampai suatu titik kamu benar-benar mentok — dan terpaksa berhenti jauh lebih lama daripada cuti yang tadinya kamu tolak.',
      guardrail: ''
    },
    {
      id: 'F2.4', phase: 'Krisis', year: '2031',
      title: 'Orang yang Menahanmu',
      situation: 'Bukan badai dari luar — badai dari dalam relasi terdekat. Kamu menjalani hubungan yang sudah lama, dan orang ini dulu sangat berarti. Tapi belakangan, tiap kali kamu bersemangat soal mimpi atau peluang, ia merendahkan: "Ngapain sih, nggak usah aneh-aneh." Kamu mulai mengecilkan diri supaya tidak ribut. Keluar dari hubungan ini berarti kesepian dan dianggap "tega"; bertahan berarti perlahan kehilangan versi terbaik dirimu.',
      optionA: 'Akhiri hubungan baik-baik, walau sakit dan sendirian untuk sementara.',
      optionB: 'Bertahan, coba berkompromi, kecilkan mimpimu demi menjaga hubungan tetap utuh.',
      revealA: 'Malam-malam pertama terasa sangat sepi dan kamu sempat ragu, tapi pelan-pelan ruang yang dulu dipakai untuk meredam diri kini terisi kembali oleh mimpi-mimpimu sendiri.',
      revealB: 'Hubungan tetap utuh dan terlihat baik dari luar, tapi setahun kemudian kamu menatap cermin dan tidak begitu mengenali orang yang melihat balik — versi dirimu yang mengecil.',
      guardrail: 'Kita membahas POLA dalam cerita tokoh ini, bukan hubungan pribadimu — tidak ada yang perlu membongkar pengalaman sendiri, dan kamu boleh pass kapan saja.'
    },
    {
      id: 'F2.5', phase: 'Krisis', year: '2032',
      title: 'Pintu yang Cuma Terbuka Sekali',
      situation: 'Di tengah kelelahan, datang tawaran yang terlalu bagus untuk ditolak dan terlalu berisiko untuk diterima. Seorang kenalan menawarkan kesempatan langka: gabung usaha besar yang bisa melompatkan hidupmu — pindah kota, modal patungan setara seluruh tabunganmu, peluang sukses besar tapi tidak pasti. Jendelanya cuma 48 jam. Kalau berhasil, hidupmu berubah; kalau gagal, kamu mulai lagi dari bawah. Semua orang yang kamu tanya memberi jawaban berbeda.',
      optionA: 'Lompat — pertaruhkan tabungan dan kenyamanan untuk peluang besar ini.',
      optionB: 'Lewatkan — tetap di jalur aman, terima bahwa beberapa pintu memang tidak untukmu.',
      revealA: 'Kamu melompat ke ketidakpastian total — beberapa bulan ke depan terasa seperti rollercoaster, dan apakah ini keputusan terbaik atau terburuk hidupmu baru akan ketahuan nanti saat masa panen.',
      revealB: 'Kamu tidur nyenyak malam itu karena aman, tapi nama usaha itu sesekali muncul lagi di kepalamu dengan satu pertanyaan yang tak terjawab: "bagaimana kalau dulu aku berani?"',
      guardrail: ''
    },
    {
      id: 'F3.1', phase: 'Panen', year: '2034',
      title: 'Tawaran Puncak',
      situation: 'Tahun 2034, kamu sekarang 27 tahun. Sembilan tahun sejak lulus SMA, kerja kerasmu mulai kelihatan hasilnya — kamu dapat tawaran besar. Bisa posisi manajer di perusahaan yang sedang naik daun, bisa kesempatan memperbesar usaha yang kamu rintis, bisa beasiswa lanjut studi ke luar kota yang dulu kamu impikan. Apa pun bentuknya, intinya sama: ini lompatan karier terbesar yang pernah ditawarkan kepadamu. Tapi ada ongkosnya — dua sampai tiga tahun ke depan dengan intensitas penuh: pindah kota, jam kerja gila, jauh dari orang-orang terdekat.',
      optionA: 'Ambil. Sekarang atau tidak sama sekali — kamu lompat, karier melesat dan namamu mulai dikenal, tapi tubuh dan hubunganmu yang membayar harganya.',
      optionB: 'Tolak. Aku sudah punya cukup — kamu menjaga keseimbangan yang sudah dibangun: keluarga, kesehatan, komunitas. Hati tenang, tapi ada bayangan "bagaimana kalau" dan momentum keuangan melambat.',
      revealA: 'Tahun 2035 datang dengan pencapaian yang dulu cuma mimpi — tapi juga dengan tubuh yang sering ngambek dan beberapa pesan dari orang tersayang yang belum sempat kamu balas. Sukses itu nyata; begitu juga ongkosnya.',
      revealB: 'Hidupmu di 2035 tidak viral dan tidak naik podium — tapi kamu tidur nyenyak, hadir di acara keluarga, dan hampir tidak pernah merasa kosong. "Cukup" ternyata keputusan yang berani, bukan kalah.',
      guardrail: ''
    },
    {
      id: 'F3.2', phase: 'Panen', year: '2036',
      title: 'Titik Balik 2036',
      situation: 'Tahun 2036, kamu 29 tahun. Kamu berdiri di ujung sepuluh tahun yang penuh keputusan — sebagian membanggakan, sebagian kamu sesali. Hidupmu sekarang adalah hasil panen semua pilihan itu. Tapi panen bukan akhir; panen adalah benih untuk dekade berikutnya. Kamu dihadapkan pada satu keputusan terakhir tentang bagaimana kamu mendefinisikan dirimu ke depan. Bukan soal kerja lagi — soal arah jiwa.',
      optionA: 'Konsolidasi — akhirnya merasa aman dan utuh. Kamu merawat apa yang ada: memulihkan kesehatan, merapikan keuangan, menyembuhkan hubungan yang retak, berdamai dengan diri. Stabilitas naik, tapi kamu menutup beberapa pintu petualangan.',
      optionB: 'Reinvensi — kamu belum selesai bertumbuh. Kamu membuka bab baru yang berisiko: pindah jalur karier, proyek idealis, atau jalan yang sama sekali baru. Energi hidup menyala lagi, ada potensi besar, tapi kamu mengguncang stabilitas yang susah payah dibangun.',
      revealA: 'Tahun 2036 menutup dengan napas lega — bukan cerita heroik, tapi cerita yang selesai dengan damai. Ada keindahan dalam berhenti mengejar dan mulai menikmati.',
      revealB: 'Tahun 2036 ditutup bukan dengan titik, tapi dengan koma — kamu melangkah ke dekade baru masih lapar, masih penasaran. Ada keindahan dalam tidak pernah merasa "sudah jadi".',
      guardrail: ''
    }
  ];

  var PROFILES = [
    {
      id_name: 'Pelari Tanpa Rem', en_name: 'Hustler Maverick',
      when: 'Energimu tinggi dan uangmu tinggi (dua-duanya 115 ke atas), tapi Mental kamu turun di bawah 85 — kamu ngebut kencang di semua lini, cuma rem buat istirahat batinnya jarang kepakai.',
      tradeoff: 'Kamu bisa bergerak cepat dan menghasilkan banyak dalam 5 hari ini, tapi harga yang dibayar adalah ruang buat nafas dan menenangkan diri yang ikut terpangkas.',
      safe_reframe: 'Punya mesin sekencang ini itu bakat langka — yang kamu butuhkan bukan ngerem total, cuma belajar kapan harus pelan, biar larimu bisa jauh, bukan cuma cepat.',
      reveal_paragraph: 'Kamu punya bahan bakar yang luar biasa: ketika kamu mau sesuatu, kamu kejar habis-habisan dan hasilnya kelihatan. Itu kekuatan yang banyak orang impikan. Pola 5 hari ini cuma menunjukkan satu hal yang gampang dilewatkan saat lagi semangat — diri yang ngebut juga butuh tempat berhenti sebentar untuk isi ulang. Ini bukan vonis soal siapa kamu; ini cermin yang bilang: kecepatanmu nyata, dan kamu boleh menjaganya dengan istirahat yang juga nyata.',
      surat_seed: 'Ke diriku yang lari kencang: aku bangga kamu nggak pernah berhenti mimpi — tahun ini aku mau belajar berhenti sebentar bukan karena lelah, tapi karena sayang sama diri sendiri.'
    },
    {
      id_name: 'Sukses-tapi-Tumbang', en_name: 'Burnout Achiever',
      when: 'Uangmu tinggi (115 ke atas), tapi salah satu dari Energi atau Mental kamu jatuh di bawah 85 — pencapaianmu terlihat, namun ada bagian dalam diri yang kelelahan menopangnya.',
      tradeoff: 'Kamu berhasil membangun sesuatu yang nyata dan bisa dibanggakan, tapi sebagian dari tenaga atau ketenangan batinmu terpakai lebih banyak dari yang sempat kamu sadari.',
      safe_reframe: 'Capaianmu itu bukti kamu mampu — dan kabar baiknya, hal yang lagi lelah itu bisa dipulihkan; kamu nggak perlu memilih antara sukses dan utuh, dua-duanya bisa kamu rawat bareng.',
      reveal_paragraph: 'Kamu sudah menunjukkan kamu bisa membangun dan mencapai — itu nyata dan layak dirayakan. Pola 5 hari ini cuma berbisik lembut soal sesuatu yang sering kita lupa di tengah mengejar: tubuh dan hati yang membawa kita sampai sini juga butuh dirawat. Ini bukan tanda kamu gagal di mana pun; justru kamu sudah jalan jauh. Yang ditawarkan cermin ini cuma undangan untuk pulang ke diri sendiri sebentar, isi ulang yang kosong, lalu lanjut dengan langkah yang lebih ringan.',
      surat_seed: 'Ke diriku yang sudah berjuang keras: terima kasih sudah membawaku sampai sini — tahun ini aku izinkan diriku beristirahat tanpa merasa bersalah, karena aku juga layak utuh, bukan cuma berhasil.'
    },
    {
      id_name: 'Bijak yang Tenang', en_name: 'Steady Sage',
      when: 'Mental kamu tinggi (115 ke atas), sementara Energi dan Uang kamu santai di bawah 115 — kamu memilih hidup yang waras dan tenang, dengan ambisi yang secukupnya.',
      tradeoff: 'Kamu menjaga kedamaian batin yang banyak orang cari, walau itu berarti kamu nggak mengejar pencapaian sekencang yang lain — dan itu pilihan yang sadar, bukan kekurangan.',
      safe_reframe: 'Tenang itu bukan tanda kurang ambisi — itu kemewahan yang sulit dimiliki; kamu sedang menunjukkan bahwa cukup pun bisa jadi bentuk berani.',
      reveal_paragraph: 'Di tengah dunia yang menyuruh semua orang lari, kamu memilih melangkah dengan tenang dan tetap waras. Itu bukan hal kecil — banyak orang menghabiskan bertahun-tahun baru sampai ke ketenangan yang kamu jaga sekarang. Pola 5 hari ini menunjukkan kamu tahu apa yang cukup buatmu, dan kamu nyaman di situ. Ketenangan ini adalah pondasi; dari sini kamu bisa tumbuh ke arah mana pun yang kamu mau, kapan pun kamu siap.',
      surat_seed: 'Ke diriku yang memilih tenang: aku bangga kamu nggak tergoda ikut lari semua orang — tahun ini aku mau menjaga kedamaian ini sambil pelan-pelan berani bermimpi sedikit lebih besar.'
    },
    {
      id_name: 'Mekar Belakangan', en_name: 'Late Bloomer',
      when: 'Di akhir Fase 1 total skormu masih di bawah 290 (awalnya berat), tapi dari situ sampai akhir kamu naik 25 poin atau lebih — kamu mulai dari posisi sulit lalu bangkit makin kuat.',
      tradeoff: 'Awalmu mungkin terasa berat dan lambat dibanding yang lain, tapi justru dari titik rendah itulah kamu menemukan tenaga untuk naik — kisahmu adalah kisah pemulihan.',
      safe_reframe: 'Mulai dari belakang bukan berarti tertinggal — kamu sedang membuktikan bahwa yang penting bukan dari mana kamu mulai, tapi ke mana kamu bergerak.',
      reveal_paragraph: 'Kamu memulai dari titik yang nggak mudah, dan kamu nggak berhenti di situ — kamu bangkit. Itu jenis kekuatan yang nggak semua orang punya: kemampuan untuk naik justru setelah jatuh. Pola 5 hari ini merekam ceritamu yang paling berharga, yaitu arah geraknya yang terus ke atas. Awal yang berat sekarang jadi bukti bahwa kamu tahu caranya bangkit — dan itu bekal yang akan kamu bawa seumur hidup.',
      surat_seed: 'Ke diriku yang sempat jatuh di awal: lihat seberapa jauh kamu naik — tahun ini aku mau ingat bahwa setiap kali aku mulai dari bawah, aku selalu punya cara untuk bangkit lagi.'
    },
    {
      id_name: 'Pemberontak Kreatif', en_name: 'Creative Rebel',
      when: 'Jarak antara modal tertinggi dan terendahmu lebar (35 poin atau lebih), dengan minimal satu modal tinggi (115 ke atas) dan minimal satu modal rendah (di bawah 85) — kamu berani ambil jalur ekstrem dan nggak biasa.',
      tradeoff: 'Kamu berani all-in pada satu hal yang kamu yakini, dan itu bikin satu sisi melesat tinggi — sambil sadar sisi lain sengaja kamu korbankan demi pilihan beranimu.',
      safe_reframe: 'Berani timpang demi sesuatu yang kamu yakini itu bukan ceroboh — itu keberanian; dunia berubah justru karena orang yang berani ambil jalur yang nggak biasa.',
      reveal_paragraph: 'Kamu nggak takut keluar dari pola yang aman — kamu berani mempertaruhkan banyak demi satu hal yang benar-benar kamu yakini. Itu bikin jalurmu beda dari kebanyakan orang, dan itulah justru hal menariknya. Pola 5 hari ini menunjukkan kamu seorang yang berani memilih, bukan sekadar mengikuti. Keberanian seperti ini yang sering jadi awal dari hal-hal baru yang belum pernah ada — kamu cuma perlu mengarahkannya dengan sadar.',
      surat_seed: 'Ke diriku yang berani beda: aku suka kamu nggak takut ambil jalur sendiri — tahun ini aku mau terus berani memilih, sambil belajar menjaga sisi-sisi yang sempat aku lupakan.'
    },
    {
      id_name: 'Pembangun Seimbang', en_name: 'Balanced Builder',
      when: 'Ketiga modalmu — Energi, Uang, Mental — semuanya 85 ke atas, dan jaraknya rapat (selisih di bawah 35) — kamu stabil merata, nggak ada satu sisi pun yang timpang.',
      tradeoff: 'Kamu menjaga semua sisi hidup tetap sehat dan seimbang, walau itu berarti kamu nggak melesat ekstrem di satu titik seperti yang ambil jalur all-in — keseimbangan itu sendiri pencapaianmu.',
      safe_reframe: 'Menjaga semua sisi tetap berdiri itu justru paling sulit — keseimbanganmu bukan main aman, tapi keterampilan langka yang orang butuh bertahun-tahun untuk dikuasai.',
      reveal_paragraph: 'Kamu berhasil menjaga energi, sumber daya, dan ketenangan batinmu tetap berdiri bareng-bareng — dan percaya deh, itu jauh lebih sulit dari kelihatannya. Banyak orang harus mengorbankan satu sisi demi sisi lain; kamu menolak melakukannya. Pola 5 hari ini menunjukkan kamu seorang pembangun yang sabar dan menyeluruh. Dari fondasi yang merata ini, kamu bisa bertumbuh ke arah mana pun tanpa takut ada bagian dirimu yang ambruk.',
      surat_seed: 'Ke diriku yang menjaga semua tetap seimbang: aku kagum kamu nggak membiarkan satu pun sisi hidupku tumbang — tahun ini aku mau merawat keseimbangan ini sambil berani sesekali melangkah lebih jauh.'
    },
    {
      id_name: 'Penjelajah Reflektif', en_name: 'Reflective Wanderer',
      when: 'Skormu nggak menonjol tajam di satu modal mana pun, dan totalnya cenderung lebih santai (di bawah 270) — kamu menjelajah banyak arah, kaya pengalaman, dan banyak merenung.',
      tradeoff: 'Kamu menjalani banyak hal dan terbuka pada banyak kemungkinan, walau itu berarti kamu belum mengunci satu jalur tertentu — keluasan inilah modalmu, bukan kekuranganmu.',
      safe_reframe: 'Belum menonjol di satu titik bukan berarti tersesat — kamu sedang menjelajah, dan masa menjelajah adalah cara paling jujur untuk menemukan ke mana kamu benar-benar mau pergi.',
      reveal_paragraph: 'Kamu menjalani 5 hari ini dengan cara yang terbuka — mencoba, merasakan, dan merenung, tanpa buru-buru mengunci diri pada satu jalur. Itu cara hidup yang kaya: kamu mengumpulkan pengalaman dari banyak arah. Pola ini menunjukkan kamu seorang penjelajah yang masih membaca peta, dan itu sepenuhnya wajar di usiamu. Setiap arah yang kamu coba sedang diam-diam mengajarimu siapa dirimu — dan suatu hari semua kepingan ini akan ketemu jalannya.',
      surat_seed: 'Ke diriku yang masih menjelajah: nggak apa-apa belum tahu mau ke mana — tahun ini aku mau nikmati setiap pengalaman yang aku kumpulkan, karena tiap langkah pelan-pelan menunjukkan jalanku sendiri.'
    }
  ];

  var CHAOS = [
    {
      id: 'C.1', title: 'Layar Mati Mendadak',
      narrative: 'Laptop kerja kalian rusak total. Data penting belum sempat disalin ke tempat aman, dan ini benar-benar di luar perkiraan. Biaya ganti dan perbaikan langsung menggerus tabungan, waktu, dan ketenangan kalian. Energi turun, Uang turun, Mental turun. Ingat: ini bukan hukuman dan bukan karena ada yang salah pilih. Kadang badai datang ke semua orang sekaligus. Yang kita lihat bukan "siapa yang salah", tapi "sekarang gimana?".',
      group_instruction: 'Dalam 60 detik: tiap grup sebutkan SATU hal yang akan kalian lakukan supaya pukulan seperti ini tidak terulang.'
    },
    {
      id: 'C.2', title: 'Berita Baik yang Bikin Pusing',
      narrative: 'Saudara jauh tiba-tiba mengirim rejeki nomplok ke kalian. Senang? Iya. Tapi keluarga besar langsung ribut soal pembagiannya, dan drama itu menyita hati dan tenaga. Uang naik, tapi Mental dan Energi ikut turun. Ini undian nasib murni, bukan hadiah karena kalian "menang" apa pun. Pelajarannya: keberuntungan pun datang dengan beban. Bertahan bukan cuma soal melewati hal buruk, tapi juga mengelola hal baik dengan kepala dingin.',
      group_instruction: 'Dalam 60 detik: tiap grup putuskan SATU kalimat — rejeki ini dipakai untuk apa, dan bagaimana cara menjaga damai keluarga?'
    },
    {
      id: 'C.3', title: 'Badai di Luar Kendali',
      narrative: 'Krisis ekonomi melanda kotamu dan banyak orang kehilangan pekerjaan. Ini bukan salah siapa-siapa — semua kena bersamaan. Uang turun, Energi turun, Mental turun. Saat semua terasa runtuh, yang menentukan bukan seberapa kuat kalian sendirian, tapi siapa dan apa yang bisa kalian sandari. Menyandarkan diri pada dukungan itu kekuatan, bukan kelemahan.',
      group_instruction: 'Tiap grup punya 90 detik: sebutkan DUA sumber dukungan (orang, komunitas, atau cara) yang bisa kalian andalkan saat semua terasa runtuh.'
    }
  ];

  // F2.5 deferred-bet resolution — neutral 50:50 result card (no dice/coin).
  // Shown only if F2.5 = A was chosen. Numbers (the payoff) live in engine.F25.
  var BET = {
    id: 'F2.5-RES',
    title: 'Hasil Taruhan dari 2032',
    intro: 'Dulu di 2032 kamu memilih melompat — mempertaruhkan tabungan untuk peluang besar. Sekarang, di awal masa panen, hasilnya baru ketahuan. Tarik satu kartu hasil. Peluangnya seimbang, dan apa pun hasilnya, keberanianmu tetap nyata.',
    success_title: 'Kartu BERHASIL',
    success_text: 'Usaha yang kamu rintis tumbuh. Taruhanmu cair — uangmu naik, dan lompatan itu terasa sepadan dengan biaya awal yang dulu kamu keluarkan.',
    fail_title: 'Kartu BELUM BERHASIL',
    fail_text: 'Taruhan kali ini belum cair. Biaya yang dulu kamu keluarkan tetap jadi pelajaran — tidak ada hukuman tambahan, dan keberanian mencoba tetap jadi milikmu. Banyak hal besar lahir dari percobaan yang belum jadi.'
  };

  var SURAT = {
    template: 'SURAT DARI DIRIKU DI TAHUN 2036\n\nHai, {{nama_panggilan}} yang sekarang berumur {{umur_sekarang}} tahun.\n\nIni aku — kamu, sepuluh tahun dari sekarang, menulis dari tahun 2036. Sekarang aku berumur {{umur_2036}} tahun, dan hidupku... {{hidupku_sekarang}}.\n\nKeputusan paling penting yang kuambil adalah ketika aku memilih untuk {{keputusan_terpenting}}. Waktu itu rasanya {{rasanya_waktu_itu}}, tapi sekarang aku {{sekarang_aku_merasa}}.\n\nHal yang paling kusyukuri adalah {{satu_hal_kusyukuri}}, karena {{alasan_kusyukuri}}.\n\nTapi jujur, ada juga yang kusesali: {{satu_hal_kusesali}}. Kalau aku bisa kembali menemuimu sekarang, aku mau bilang: {{pesan_buat_diriku}}.\n\nSatu hal yang aku mau kamu tahu mulai sekarang, supaya kamu nggak buta sama masa depan: {{pesan_supaya_tak_buta}}.\n\nKamu nggak harus jadi aku yang sempurna. Kamu cukup {{kamu_cukup}}.\n\nSampai ketemu di 2036. Aku menunggumu.\n\nPeluk hangat,\nKamu — di umur {{umur_2036}} tahun.',
    // The 3 KATUP AMAN (minimum) fields if time is short.
    required_keys: ['hidupku_sekarang', 'satu_hal_kusyukuri', 'pesan_supaya_tak_buta'],
    blanks: [
      { key: 'nama_panggilan', label: 'Nama panggilanmu', multiline: false },
      { key: 'umur_sekarang', label: 'Umurmu sekarang (tahun)', multiline: false },
      { key: 'umur_2036', label: 'Umurmu nanti di tahun 2036 (tahun)', multiline: false },
      { key: 'hidupku_sekarang', label: 'Hidupku di 2036... (1-2 kalimat: sibuk apa, tinggal di mana, jadi orang seperti apa)', multiline: true },
      { key: 'keputusan_terpenting', label: 'Keputusan paling penting yang kuambil: aku memilih untuk...', multiline: true },
      { key: 'rasanya_waktu_itu', label: 'Waktu itu rasanya... (mis. menakutkan, berat, membingungkan)', multiline: false },
      { key: 'sekarang_aku_merasa', label: 'Tapi sekarang aku... (mis. bersyukur, lega, atau sedikit menyesal)', multiline: false },
      { key: 'satu_hal_kusyukuri', label: 'Hal yang paling kusyukuri adalah...', multiline: false },
      { key: 'alasan_kusyukuri', label: '...karena... (alasannya)', multiline: false },
      { key: 'satu_hal_kusesali', label: 'Yang juga kusesali adalah...', multiline: false },
      { key: 'pesan_buat_diriku', label: 'Kalau bisa kembali, aku mau bilang ke diriku yang sekarang...', multiline: true },
      { key: 'pesan_supaya_tak_buta', label: 'Satu hal yang harus kamu tahu mulai sekarang supaya nggak buta sama masa depan...', multiline: true },
      { key: 'kamu_cukup', label: 'Kamu nggak harus sempurna. Kamu cukup...', multiline: false }
    ]
  };

  // =====================================================================
  //  FRONT-HALF — IDENTITY ONBOARDING (Values / DISC-lite / Goal Hidup)
  //  ---------------------------------------------------------------------
  //  Captured BEFORE the first decision round (F1.1). This is IDENTITY
  //  METADATA only — it adds ZERO resource deltas. The engine stays the
  //  single source of scoring for the 12 rounds. All selections persist to
  //  localStorage and are appended to the CSV export AFTER the original 6
  //  columns. Pseudonymous: only a Kode is ever stored, never a real name.
  //
  //  Source: docs/workshop/LEAP-2036_Modular_v2.md §1 (15 nilai), §2 (DISC),
  //  §3 (3-Lapis), §4 (8 Goal Hidup, cap 5 nilai); arah condong/menjauh from
  //  docs/arsip/LPPM-2_Sekolah-A_2hari_v1.md §B.3 (lines 205 & 228).
  // =====================================================================
  var FRONTHALF = {
    // ----- VALUES: pick EXACTLY 5 (game default; facilitator KATUP AMAN = 3) -----
    values_pick: 5,
    values_pick_min: 3,        // facilitator safety valve when time is tight
    values_title: '5 Hal yang Tak Bisa Ditawar',
    values_prompt: 'Pilih TEPAT 5 nilai yang buatmu tidak bisa ditawar — yang kalau dicabut, kamu ngerasa "itu bukan aku lagi". Bukan yang kedengaran keren, tapi yang beneran kamu.',
    values_hint: 'Tombol lanjut terbuka setelah persis 5 terpilih.',
    values: [
      'Keluarga',
      'Kebebasan',
      'Prestasi',
      'Stabilitas',
      'Kreativitas',
      'Menolong orang lain',
      'Petualangan',
      'Kejujuran',
      'Keamanan finansial (uang aman)',
      'Pertumbuhan diri',
      'Persahabatan',
      'Iman/spiritualitas',
      'Pengakuan/dihargai',
      'Kesehatan',
      'Keadilan'
    ],

    // ----- DISC-LITE: self-pick exactly ONE of D/I/S/C -----
    disc_title: 'Gaya Alamimu',
    disc_prompt: 'Mana yang paling kerasa "aku banget"? Pilih satu.',
    disc: [
      { type: 'D', label: 'Penggerak',   descriptor: 'Aku tegas dan langsung ke tujuan — "udah, kerjain aja", yang penting hasil kelihatan.' },
      { type: 'I', label: 'Penyemangat', descriptor: 'Aku suka orang dan bikin suasana hidup — antusias, ramai, gampang nyambung sama siapa aja.' },
      { type: 'S', label: 'Penjaga',     descriptor: 'Aku sabar dan tenang, pendengar yang baik — bikin orang di sekitarku ngerasa nyaman.' },
      { type: 'C', label: 'Pemikir',     descriptor: 'Aku teliti dan hati-hati — mikir matang dulu, baru bertindak, biar nggak salah langkah.' }
    ],

    // ----- GOAL HIDUP: pick exactly ONE of 8. REQUIRED (anchors the reveal). -----
    goal_title: 'Tujuan Hidupmu',
    goal_prompt: 'Kalau membayangkan dirimu di 2036, mana yang paling kamu mau? Pilih satu — ini yang akan kita lihat lagi di akhir.',
    goals: [
      { id: 'wirausaha',  label: 'Wirausahawan Kreatif',          desc: 'Bikin usaha sendiri dari nol dan jalanin ide jadi nyata.' },
      { id: 'keluarga',   label: 'Keluarga di Atas Segalanya',    desc: 'Yang paling penting: dekat dan ada buat keluarga.' },
      { id: 'dampak',     label: 'Berdampak buat Banyak Orang',   desc: 'Hidup yang bikin perubahan baik buat banyak orang sekaligus.' },
      { id: 'keahlian',   label: 'Mendalami Satu Keahlian',       desc: 'Jadi jago banget di satu bidang yang kamu cintai.' },
      { id: 'penjelajah', label: 'Penjelajah Bebas',              desc: 'Hidup ringan dan bebas, jelajahi tempat dan pengalaman baru.' },
      { id: 'karier',     label: 'Karier Stabil & Punya Komunitas', desc: 'Pekerjaan yang aman dan jejaring/komunitas yang erat.' },
      { id: 'pembaru',    label: 'Pembaru / Pencipta Hal Baru',   desc: 'Menciptakan hal-hal baru yang belum pernah ada.' },
      { id: 'perawat',    label: 'Perawat / Penolong',            desc: 'Merawat dan menyembuhkan — hadir buat orang yang butuh.' }
    ],

    // ----- 3-LAPIS-DIRI bridge card (zero new input; replays chosen data) -----
    bridge_title: '3 Lapis Dirimu',
    bridge_layers: {
      sifat: 'Lapis 1 — SIFAT',
      nilai: 'Lapis 2 — NILAI',
      tujuan: 'Lapis 3 — TUJUAN'
    },
    bridge_layer_notes: {
      sifat: 'gaya alami kamu.',
      nilai: 'hal yang tak bisa kamu tawar.',
      tujuan: 'mau jadi apa kamu nanti.'
    },
    bridge_closer: 'Kadang ketiganya nggak sejalan. Pas kamu lagi galau milih nanti — mana yang menang: Sifatmu, Nilaimu, atau Tujuanmu? Itu yang bakal kita lihat.',

    // ----- REVEAL ANCHOR — "cermin Tujuan" at end-game (no gagal/menang/kalah) -----
    // Bucket = Condong | Menjauh | Campuran, derived from the alignment table
    // below. NEVER says "kamu gagal mencapai Tujuanmu". Always closes with the
    // canonical "cermin pola, BUKAN vonis" line.
    reveal_anchor: {
      buckets: {
        // {Tujuan} replaced with the chosen goal's label.
        Condong: 'Sepanjang 10 tahun ini, pilihan-pilihanmu banyak yang condong ke arah Tujuanmu: {Tujuan}. Kamu cukup setia sama yang kamu mau jadi.',
        Menjauh: 'Menarik — di awal kamu pilih Tujuan {Tujuan}, tapi banyak keputusanmu malah membawamu ke arah lain. Itu bukan salah; kadang kita nemu jalan yang nggak kita rencanain. Yang penting kamu lihat polanya.',
        Campuran: 'Pilihanmu kadang dekat, kadang jauh dari Tujuan {Tujuan}. Hidup memang nggak selalu lurus — dan itu wajar.'
      },
      closer: 'Ingat: ini cermin pola pilihanmu, BUKAN vonis — dan pola selalu bisa diubah.',
      heading: 'Cermin Tujuanmu'
    },

    // ----- ALIGNMENT TABLE (metadata only — NO resource delta) -----
    // Per goal id: which choice ('A'/'B') at a round is "selaras Tujuan".
    // Only rounds that meaningfully lean toward/away from a goal are listed;
    // unlisted rounds are neutral for that goal and don't count either way.
    // Derived from facilitator notes §B.3 ("Goal hidupmu bilang apa soal ini?",
    // lines 205 & 228): e.g. Family-First -> A at F1.1; Master-a-Craft /
    // Innovator -> B at F1.1; Stable-Career -> A & Reflective/Travel -> B at F1.3.
    // The reveal computes aligned-vs-not over the rounds the player actually
    // answered, then buckets Condong / Menjauh / Campuran. Pure label, no score.
    goal_align: {
      // Wirausahawan Kreatif — berani ambil peluang/usaha, taruhan, reinvensi.
      wirausaha:  { 'F1.1': 'B', 'F1.3': 'A', 'F1.4': 'A', 'F1.5': 'A', 'F2.1': 'A', 'F2.5': 'A', 'F3.1': 'A', 'F3.2': 'B' },
      // Keluarga di Atas Segalanya — aman, hadir buat keluarga, konsolidasi.
      keluarga:   { 'F1.1': 'A', 'F1.2': 'A', 'F1.5': 'B', 'F2.1': 'B', 'F2.2': 'A', 'F2.5': 'B', 'F3.1': 'B', 'F3.2': 'A' },
      // Berdampak buat Banyak Orang — memimpin, menolong, ambil peran besar.
      dampak:     { 'F1.4': 'A', 'F2.2': 'A', 'F2.3': 'A', 'F2.4': 'A', 'F3.1': 'A', 'F3.2': 'B' },
      // Mendalami Satu Keahlian — fokus, magang/portofolio, jaga arah sendiri.
      keahlian:   { 'F1.1': 'B', 'F1.3': 'B', 'F1.4': 'B', 'F2.4': 'A', 'F3.1': 'A', 'F3.2': 'A' },
      // Penjelajah Bebas — jeda, ringan, lepas dari yang mengekang, reinvensi.
      penjelajah: { 'F1.1': 'B', 'F1.2': 'B', 'F1.3': 'B', 'F2.3': 'A', 'F2.4': 'A', 'F3.1': 'B', 'F3.2': 'B' },
      // Karier Stabil & Punya Komunitas — aman, bertahan, jejaring, konsolidasi.
      karier:     { 'F1.1': 'A', 'F1.3': 'A', 'F1.4': 'A', 'F1.5': 'B', 'F2.1': 'B', 'F2.5': 'B', 'F3.1': 'B', 'F3.2': 'A' },
      // Pembaru / Pencipta Hal Baru — berani beda, taruhan, bab baru.
      pembaru:    { 'F1.1': 'B', 'F1.4': 'A', 'F1.5': 'A', 'F2.1': 'A', 'F2.4': 'A', 'F2.5': 'A', 'F3.1': 'A', 'F3.2': 'B' },
      // Perawat / Penolong — hadir buat orang, menjaga, pulih, merawat hubungan.
      perawat:    { 'F1.4': 'B', 'F2.2': 'A', 'F2.3': 'A', 'F2.4': 'A', 'F3.1': 'B', 'F3.2': 'A' }
    }
  };

  var DATA = {
    headline: '7 jalur. 0 juara. Semua nyata.',
    rounds: ROUNDS,
    profiles: PROFILES,
    chaos: CHAOS,
    bet: BET,
    surat: SURAT,
    fronthalf: FRONTHALF
  };

  if (global) { global.LEAP_DATA = DATA; }
  if (typeof module !== 'undefined' && module.exports) { module.exports = DATA; }

})(typeof window !== 'undefined' ? window : this);
