# PROJECT MASTER: KKN UKDW STEM 2026 — Kelompok 2

> **Canonical STATE tracker** untuk SELURUH program KKN (Eyecare + Workshop SMA).
> Detail desain Workshop SMA ada di **`docs/Project-Master-LEAP-2036.md`** (jangan duplikat di sini — file itu deep-design, file ini state/status).
> **Last synced: 2026-05-30.** Update tiap sesi (Universal Session Protocol).

---

## 0. STATUS SNAPSHOT (30 Mei 2026)

**Dua program paralel:**
1. **SO Eyecare** — Vision Screening + Edukasi mata, SD/SMP, **Juni 2026**.
2. **Workshop Softskill SMA — "LEAP 2036"** — **Agustus 2026**.

**Status terkini:**
- Workshop SMA: konsep **LOCKED** = LEAP 2036 (desain v2.0, 28 Mei). Presentasi proposal ke DPL **28 Mei DONE**.
- ⚠️ **CONSTRAINT BARU — Pembekalan KKN II (30 Mei):** anggaran **max Rp 500.000** + **NO anggaran makanan** + wajib **backup plan** (antisipasi sinyal kelas lemah → local server/offline).
  - → **Revisi anggaran PENDING.** Skema lama (Rp 514k LPPM-1 / Rp 703k LPPM-2) **langgar** constraint: 514k > 500k, dan dua-duanya tumpu **snack Rp 300k** (= makanan, sekarang dilarang). Harus dirampingkan.
- **Fokus aktif (per arahan LPPM/APL):** sempurnakan **skema LPPM-2** (split 2+3 hari), **terutama Sekolah A (2 hari)**.
- LPPM **belum final** memilih skema (LPPM-1 vs LPPM-2) → tetap siapkan keduanya.

**🆕 UPDATE 31 Mei (Notul Pembekalan DPL 30 Mei + APL) — REVISI BESAR fondasi:**
- ⏰ **Waktu cuma ~3 jam/hari** (09.00–11.30/12.00), BUKAN 4–5 jam. Semua rundown wajib recompress ke ≤180'/hari. (Sekolah A 2-hari: A1 255'/A2 260' → OVER, harus dirombak.)
- 🗓️ Struktur hari (saran APL): Day1 Materi · Day2 Fase1 · Day3 Fase2 · Day4 Fase3 · Day5 **Fun Day** (APL sebut "Awarding" → tabrak no-juara, reconcile).
- 🏫 Config DPL (tentatif, prioritas **2 SMA**): Sekolah A 2h + Sekolah B 2h + 1 Fun Day. Tetap siapkan 5-hari-1-SMA (4 workshop + funday).
- 👥 Audience Agustus = tahun ajaran baru (peserta kelas 11–12 yang baru naik).
- 🗣️ **Jargon bikin bingung** (delta/floor/clamp) → ganti bahasa manusia.
- ⚠️ Random Event Card: Dex ga PD → kemungkinan disederhanakan/opsional.
- 🎯 Arahan: kurangi kompleksitas, tetap keren + robust + executable. Sumber: `docs/Catatan Bahaya APL.txt`, `docs/Pertimbangan_31-Mei.txt`.
- ✅ **v2 SELESAI (31 Mei)** → **`docs/LEAP-2036_Modular_v2.md`** (~113k char). 5 modul harian (Materi 150' · Fase1 103' · Fase2 126' · Fase3 118' · FunDay 140' — semua ≤180') + Bagian Skor/Data + Fitur + **2 Config assembly** (A: 5-hari-1-SMA · B: 2-SMA). **Plain-language** (Kamus Istilah) · **data per-siswa → CSV** (Google Form/Sheet + Kartu Skor kertas, req DPL) · katup aman tiap blok · Event Card simpel+opsional · Fun Day non-juara. Workflow gen→audit→fix + cleanup manual. Doc lama diarsip → `docs/_archive/LPPM-2_Sekolah-A_2hari_v1.md`.

**🆕 UPDATE 1 Juni — KKN-HUB v3 (polish + a11y + mobile + first-impression):** Web hub di-overhaul besar (audit 5-lensa workflow → 75 temuan → 12-step plan → implement → adversarial review).
- **First-impression (goal utama):** dashboard dirombak → landing langsung tampil **"Kamu siapa?" name-picker** (localStorage, no backend) → pilih nama → **kartu Tugasku** (peran + dokumen pribadi). Plus **quick-action** (Tugasku/Tanya AI/Proker/Dokumen) + **two-program strip** (Eyecare Juni / Workshop Agustus). 3 alert medis dihapus dari dashboard (duplikat halaman Prosedur).
- **Visual:** kontras dinaikkan (token --t2/--t3), tombol primary dark-on-indigo, badge border 30%, card depth, situation-card hero. Nav di-reorder per seksi (Untukmu / Workshop SMA / Eyecare / Tim & Tools).
- **WCAG AA:** keyboard nav penuh (nav + kontrol generated), :focus-visible ring, skip-link, landmarks, h1/h2, aria-label, prefers-reduced-motion, modal focus-managed (ganti alert()).
- **Mobile-safe:** tap target ≥44px, overflow code, safe-area insets, body-scroll-lock, 2-col grids collapse, screenshot 390px verified clean.
- **Bug fixes:** DPL tel: link digit-clean, timeline sort + un-cache, chat race guard + maxOutputTokens 1500 + MAX_TOKENS note, lsSet() private-mode-safe, tugas "KAMU" highlight dari getUser(), dead code removed.
- **Security:** Gemini key **TETAP client-side** (keputusan Dex — tool sementara, tim gaptek). Dex action (free, opsional): restrict HTTP referrer ke `kknstem.vercel.app/*` di Google AI Studio. Lihat memory `kkn-hub-gemini-key-exposed`.
- Lulus `node --check` + 4 state di-screenshot-verify (fresh/member × desktop/mobile). Adversarial review: 0 critical/high/medium, 10 low semua di-fix.
- ✅ **COMMITTED `a4437cb` + DEPLOYED prod (1 Jun) → live di kknstem.vercel.app** (verified serving v3). Deploy via `vercel --prod` (no git remote — Vercel CLI linked).

**⏸️ NEXT ACTIONS (urut):**
1. ✅ DONE (30 Mei) — Reconcile dokumen: PROJECT_MASTER (ini) jadi canonical; LEAP master §2.3 APL confirmed + §7 banner constraint anggaran.
2. ✅ DONE (30 Mei) — KKN-HUB synced: `data.js` (latestUpdates + decisions + prokerFinal + proker arsip) + **`GEMINI_CONTEXT` rewrite** (AI sekarang paham LEAP 2036 + constraint). `app.js` de-stale (banner brainstorm + judul rundown). Lulus `node --check`. ⚠️ *Belum deploy — perlu commit + push ke Vercel.*
3. ✅ DONE (30 Mei) — Skema LPPM-2 Sekolah A (2 hari) → **`docs/LPPM-2_Sekolah-A_2hari.md`** (~123k char). Rundown A1 (255') & A2 (260') menit-per-menit · Bank Skenario (F1.1–F1.5, F2.1–F2.5 + 3 Kartu Chaos, F3.1–F3.2) · naskah fasilitator 14 segmen + template Surat 2036 · backup plan · checklist. Dibangun via workflow (gen → audit adversarial → fixer reconcile). Anggaran masih dipisah (item 4).
4. ✅ DONE (31 Mei) — **KKN-HUB di-update ke v2 (digestible)**: proker ringkas · latestUpdates "start here" · **taskAssignments USULAN per orang** (FK confirm-items ⭐, Theana fleksibel/magang) · `GEMINI_CONTEXT` v2 + **AI tanya-dulu-siapa** (kecuali Dex) · framing netral (buang "kamu"/"YOU" → "Ketua") · kontras CSS dinaikkan · v2 doc masuk Dokumen. Lulus `node --check`. ⚠️ **Belum commit/deploy**.
5. ✅ DONE (1 Jun) — **Commit (`a4437cb`) + deploy prod** KKN-HUB v3 → live `kknstem.vercel.app` (verified).
6. ✅ DONE (1 Jun) — **Sistem data per-siswa dibangun** → `docs/data-system/`: (a) `leap2036-build.gs` Apps Script (paste→run→auto-bikin Google Form + Sheet; skor running-clamp 0–200 + Profil 2036 via JS + ekspor CSV; delta asli dari Bank Skenario), (b) `kartu-skor.html` print fallback, (c) `PANDUAN-SISTEM-DATA.md` panduan Syendhi. Logika di-test (semua pass). **Syendhi tinggal: paste script → setup → uji 1 kelas dummy.**
   - 🐞 **Fix bawaan:** profil **Pelari Tanpa Rem** sebelumnya *unreachable* (urutan IFS doc: Sukses dicek dulu → telan semua kasus Pelari). Sudah dibetulkan (Pelari dicek dulu) di script + `LEAP-2036_Modular_v2.md` (IFS §3 Langkah 4, cheat §3C + reveal) + panduan. Sekarang 7 profil semua bisa keluar.
7. ⏳ Revisi anggaran ≤ Rp 500k tanpa makanan + tulis backup plan. ← **next**
8. ⏳ (opsional, free) Dex: restrict Gemini key by HTTP referrer di Google AI Studio (`kknstem.vercel.app/*`).
9. ⏳ Tim: putuskan F2.5 payoff (+20 Uang utk yg Berhasil, opsional) + Kartu Chaos mana yang dipakai (set di `CONFIG.chaosPlayed`).

**✅ RESOLVED (30 Mei) — desain Sekolah A 2-hari SELESAI & dirakit ke `docs/LPPM-2_Sekolah-A_2hari.md`.** Pipeline: gen workflow `wy61qdhg1` → fixer `wu8o9m48w` (reconcile rundown↔bank + audit-fix: Day A2 260' · score-floor 0–200 · no-food · safety F2.3 · no-juara · bilingual) → cleanup clutter. Scaffolding dihapus. LEAP master §6.3 di-point ke file. Audit verifikasi adversarial sudah diterapkan.

---

## 1. VISION & MISSION

- **Why:** Menyelesaikan program KKN Tematik International Service Learning STEM (UKDW × Hong Kong PolyU) dengan sukses, berdampak nyata bagi target (SD/SMP & SMA), serta mendokumentasikan prosesnya rapi untuk laporan + potensi data skripsi.
- **Fokus Utama:**
  1. **SO Eyecare:** Skrining mata (Vision Screening) & Edukasi untuk SD/SMP.
  2. **Workshop Softskill SMA:** Program inovatif anti-mainstream untuk SMA = **LEAP 2036**.

---

## 2. PAST (sudah selesai)

- *Brainstorming* masif ide Workshop SMA via 4 AI (Claude, ChatGPT, Gemini, Grok) → tier list (riwayat di KKN-HUB `proker.ideas`).
- Website **KKN-HUB** (Dashboard, Timeline, Prosedur, Lokasi, Tugas, Dokumen, AI assistant) — Vanilla JS, **live di Vercel** (`kknstem.vercel.app`).
- Pahami peran UKDW di SO Eyecare (fasilitator komunikasi/translasi, bukan operator alat medis).
- **24 Mei:** Lock tema Workshop = "Simulasi Hidup 10 Tahun" → brand **LEAP 2036**. Draft proposal v1.
- **27 Mei:** Scoping fullstack (Next.js+Supabase), funding plan 3-tier, audit Canvas Lite + contoh proposal Eye Care.
- **28 Mei:** **Presentasi proposal LEAP 2036 ke DPL (DONE).** Lock desain final v2.0:
  - Model partisipasi **HYBRID** (group discuss + silent individual vote + reflection journal).
  - **NO juara** (parallel journeys, goal hidup beda per kelompok).
  - **2 skema LPPM** disiapkan (LPPM-1 5×1, LPPM-2 2+3).
  - Anggaran final (versi pra-Pembekalan-II): Rp 514k / Rp 703k.
  - Generate: `Project-Master-LEAP-2036.md` v2.0, Proposal v3, NotebookLM PPT prompt, `LEAP_2036_Strategic_Blueprint.pdf`.

---

## 3. PRESENT (sedang berjalan)

- **30 Mei 07.30–12.00:** Pembekalan Tahap II (WAJIB, Auditorium Koinonia UKDW). **10.45–12.00:** Konsultasi Program dengan DPL (peluang follow-up).
- **Reconcile dokumen** (berantakan pasca-pivot 27–28 Mei) — file ini jadi single source of truth state.
- **Perbaiki KKN-HUB** — data.js + AI context tertinggal di realita 24 Mei.
- **Sempurnakan skema LPPM-2 Sekolah A (2 hari).**
- **Revisi anggaran** (≤500k, no food) + **backup plan** (sinyal).

---

## 4. FUTURE (roadmap & deadline)

| Periode | Milestone | Program |
|---------|-----------|---------|
| 30 Mei | Pembekalan II + Konsultasi DPL | Umum |
| Sebelum 21 Juni | Submit proposal Workshop SMA final ke DPL + checklist persiapan (14 item) | SMA |
| 13–19 Juni | Training penggunaan alat SO Eyecare (WAJIB) | Eyecare |
| 20 Juni | Opening Ceremony | Eyecare |
| 21–25 Juni | **Service Days SD/SMP** (5 hari) | Eyecare |
| 27 Juni | Closing Ceremony | Eyecare |
| 28–29 Juni | Video Edukasi Mata (5–10 mnt, semua anggota tampil) | Eyecare |
| 19 Juli | Orientation Session UKDW × PolyU (~4 jam) | Umum |
| **3–7 Agustus** | **Service Days SMA — eksekusi Workshop LEAP 2036** | SMA |
| 10–14 Agustus | Laporan kegiatan + presentasi akhir ke DPL | Umum |

**Build app LEAP 2036 (stretch, Layer 3):** timeline 10 minggu 26 Mei → 3 Agustus (detail di LEAP master §11.4).

---

## 5. DOC MAP — di mana cari apa (anti-drift)

| File | Isi | Status |
|------|-----|--------|
| **`PROJECT_MASTER.md`** (ini) | Canonical STATE seluruh KKN (Vision/Past/Present/Future + snapshot) | ✅ canonical |
| `docs/Project-Master-LEAP-2036.md` | Deep-design Workshop LEAP 2036 (v2.0) — sumber NotebookLM | ✅ canonical (workshop) |
| `docs/Proposal Workshop SMA Kelompok 2 - LEAP 2036-v3.md` | Proposal terbaru (28 Mei) | ✅ latest draft |
| `docs/LEAP_2036_Strategic_Blueprint.pdf` | Blueprint PDF (export) | referensi |
| `src/kkn-hub/` | Website + AI assistant (`kknstem.vercel.app`) | live; data.js perlu sync |
| `last-progress_*.md` | Log sesi ber-tanggal (28-Mei_PPT = transkrip mentah) | histori |
| `Dex-Core.md` §13/§18 | Rollup lintas-proyek | cross-project |

> ✅ **Reconcile:** Site `proposalPath` sudah dipoint ke **v3** (canonical proposal). File proposal un-versioned + v1/v2 dibiarkan sebagai arsip (jangan dihapus).

---

## 6. WORKSHOP LEAP 2036 — RINGKAS (detail → LEAP master)

- **Judul:** Workshop Simulasi Hidup 10 Tahun: Keputusanmu Hari Ini, Hidupmu 2036.
- **Brand:** LEAP 2036 (*Life Experience & Action Planning*). **Tagline:** "Hidupi 10 tahun keputusanmu dalam 5 hari."
- **Target:** SMA kelas 11–12. **Metode:** experiential learning, kartu keputusan **"The Decision Engine."**
- **3 sumber daya:** Energi / Kapital / Kesehatan Mental (100 each).
- **3 fase:** Fondasi (2026–28) → Krisis (2029–32) → Panen (2033–36).
- **Hybrid:** group diskusi + silent individual vote + jurnal refleksi. **No juara** (8 goal hidup, cap 5/group).
- **Day 1 tools:** Values (5 Non-Negotiables + Card Sort) + DISC.
- **Output:** Surat dari Diri 2036 (PDF) + Profil 2036 (7 tipe) + Surprise Apresiasi (non-ranking).
- **Tech 3-layer:** kartu fisik → Canvas Lite HTML → Next.js+Supabase app.

### 2 Skema LPPM (belum final dipilih)
| | LPPM-1 | LPPM-2 |
|--|--------|--------|
| Bentuk | 5 hari × 1 SMA, 1 kelas | 2 hari Sekolah A + 3 hari Sekolah B |
| Jangkauan | 30–40 siswa, deep | 60–80 siswa, bervariasi |
| Anggaran (PRA-constraint) | Rp 514k | Rp 703k |
| Strategi | subset dari LPPM-2 | **develop dulu** (lebih kompleks) |

---

## 7. TIM & PEMBIMBING

| Jabatan | Nama | Prodi |
|---------|------|-------|
| Ketua Pelaksana | Dex Bennett | Sistem Informasi |
| Sekretaris & Bendahara | Dhevina Putri Agustya | Manajemen |
| PDD | Theana Amabel Krismeiati | Kedokteran |
| Perlengkapan & Teknis | Syendhi Reswara S. | Informatika |
| Humas & Eksternal | Maria Nadira Dosinaen | Kedokteran |
| Pelaksana (Lead Fase 2) | Benediktus Satria Trisnawan | Kedokteran |

- **DPL:** dr. Loury Priiskila, M.Biomed. — +62 813-9070-9672
- **APL 1:** Eleonora Bintang Dahayu P — +62 858-1775-6217
- **APL 2:** Carolus Yasser Rombebunga — +62 852-5425-3035

---

## 8. OPEN THREADS / PENDING

- [ ] **Revisi anggaran** ≤ Rp 500k, **tanpa makanan** (drop/ganti snack Rp 300k). Update LEAP master §7 + proposal + data.js.
- [ ] **Backup plan** sinyal lemah (local server / Canvas Lite offline / kartu fisik) — tulis eksplisit di proposal.
- [x] ✅ **Rundown Modular v2 (3 jam/hari)** → `docs/LEAP-2036_Modular_v2.md` (31 Mei) — 5 modul + 2 Config assembly (A: 5-hari · B: 2-SMA). Supersede doc Sekolah A 4–5 jam (diarsip `docs/_archive/`).
- [ ] **Fun Day — penanggung jawab?** Konfirm APL (desain sementara: student-driven + fasilitator ringan).
- [ ] **Setup + uji data per-siswa** (Google Form/Sheet → CSV Energi/Uang/Mental/Profil, req DPL) — Syendhi, test 1 kelas dummy sebelum hari-H.
- [ ] **Sinkron `docs/Skenario-Starter-Pack.md`** — taksonomi Profil lama + skenario crypto, tidak sinkron dgn kanonik. Update biar konsisten.
- [ ] **LPPM final** pilih skema 1 vs 2 — tunggu konfirmasi.
- [ ] **Konfirmasi SMA mitra** (SMA BOPKRI + 1 lagi, masih tentative).
- [x] ✅ Repoint site proposalPath → v3 (30 Mei).
- [x] ✅ Sync KKN-HUB `data.js` + `GEMINI_CONTEXT` ke desain LEAP terbaru (30 Mei). ⚠️ Belum deploy.

---

*Single source of truth STATE — Workshop LEAP 2036 KKN STEM 2026 Kelompok 2 UKDW × PolyU. Update tiap sesi; jangan biarkan stale.*
