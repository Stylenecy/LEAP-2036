# 🚀 LEAP 2036 — Decision Engine

Permainan simulasi "hidupi 10 tahun keputusanmu dalam beberapa menit". Pemain menjalani 12 keputusan dari 2026 → 2036, mengelola tiga modal hidup — **Energi**, **Uang**, **Mental** — lalu bertemu salah satu dari **7 profil 2036**. Tidak ada juara: 7 jalur, 0 juara, semua nyata.

Dibuat untuk **KKN Tematik STEM 2026 (UKDW × Hong Kong PolyU)** sebagai aktivitas workshop bagi siswa. Tampilan dirancang **cerah & ramah anak**, mobile-first.

> Repo ini **khusus game** (yang dimainkan peserta). Situs koordinasi mahasiswa KKN berada di repo terpisah.

## Main

- **Online:** buka URL deployment (mis. `https://leap-2036.vercel.app`).
- **Offline / tanpa sinyal:** unduh folder ini, buka `index.html` langsung dari file (`file://`) — atau dari USB. Tidak butuh internet, server, atau CDN. Bisa juga **di-install sebagai app (PWA)** saat dibuka via http(s).

## Isi

| File | Fungsi |
|------|--------|
| `index.html` | Game + flow controller (script klasik, inline). |
| `engine.js` | **Satu-satunya sumber skor** — delta, clamp 0–200, TotalF1, klasifikasi 7 profil. Byte-identical dengan versi Google Apps Script. |
| `data.js` | Konten: 12 ronde, 3 kartu chaos, taruhan F2.5, profil, front-half (Values/DISC/Goal), Surat. |
| `style.css` | Presentasi (tema terang ramah-anak). Mengubah ini **tidak** menyentuh logika/skor. |
| `manifest.webmanifest`, `sw.js`, `icon.svg` | Lapisan PWA (installable + offline shell). Opsional; game tetap jalan tanpa ini. |
| `leap-sync.js`, `leap-config.example.js`, `schema.sql`, `dashboard.html`, `api/dashboard-data.js`, `SETUP.md` | **Opsional**: sinkronisasi data pseudonim ke Supabase + dashboard fasilitator (auth password dicek server-side lewat serverless function, bukan di client). Tanpa konfigurasi = no-op senyap (game tetap jalan). Panduan di `SETUP.md`. |
| `parity.test.js` | Uji paritas engine vs referensi. Jalankan: `node parity.test.js`. |

## Privasi

Tidak mengumpulkan nama. Bila Supabase dikonfigurasi, yang tersimpan hanya **kode + skor + profil + Values/DISC/Goal** (pseudonim). `anon key` aman publik (memang sengaja di-commit di `leap-config.js` — lihat `leap-config.example.js`) dan sejak `migration_2026-07-31_security_fix.sql` cuma bisa INSERT, gak bisa baca data balik. **jangan** pernah taruh `service_role` di klien — itu cuma hidup di env var Vercel (`api/dashboard-data.js`).

## Deploy (Vercel)

Static murni — tanpa build step.

```bash
vercel          # preview
vercel --prod   # production
```

## Lisensi / kredit

Materi KKN Tematik STEM 2026 — Kelompok 2, UKDW.
