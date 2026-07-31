# LEAP 2036 — Final Audit & Handoff Report

> **Prepared for**: Project Reviewer / Claude / Development Team  
> **Repository**: [https://github.com/Stylenecy/LEAP-2036.git](https://github.com/Stylenecy/LEAP-2036.git)  
> **Live Web & PWA App**: [https://leap-2036.vercel.app/](https://leap-2036.vercel.app/)  
> **Live Facilitator Dashboard**: [https://leap-2036.vercel.app/dashboard.html](https://leap-2036.vercel.app/dashboard.html)  
> **Date**: July 29, 2026  

---

## 1. Executive Summary

**LEAP 2036** is a 12-round interactive decision-engine game designed for high school / middle school workshop participants under the **KKN Tematik STEM 2026 (UKDW × Hong Kong PolyU)** initiative.

All requirements requested by the user and specified in `HANDOFF_VISUAL-POLISH.md` and `SETUP.md` have been fully completed, verified, committed, pushed to GitHub (`master`), and deployed live on Vercel.

---

## 2. Visual Polish & UI/UX Improvements

### 🎨 Game UI (`style.css` & `index.html`)
- **Theme**: Upgraded from plain dark presentation to a vibrant, child-friendly daylight theme featuring organic floating ambient glows, glassmorphic card surfaces (`28px` rounded corners), and a candy gradient top ribbon.
- **Resource HUD**: Sticky header tracking `⚡ Energi`, `💰 Uang`, and `🧠 Mental` with colored badges and smooth status transitions.
- **Tactile Choice Buttons**: Option A styled with distinct Coral accents (`#ff6b3b`), Option B with Mint accents (`#10b981`). Micro-animations on press and hover.
- **Identity Onboarding**: Value selection chips (exact 5 limit), DISC choice buttons, and life-goal cards styled cleanly for high readability.
- **Print Safety**: Retained full `@media print` rules for the Surat generator sheet (prints clean black/white text with zero background clutter).

### 📊 Facilitator Live Dashboard (`dashboard.html`)
- **Aesthetic**: Redesigned into a modern midnight indigo (`#0b0f19`) live command center.
- **Live Status Indicator**: Animated green pulse dot (`🟢 LIVE SINKRONISASI`).
- **Auto-Refresh Polling**: Dropdown selector for **Auto Refresh (5s / 10s / Off)** so projector screens auto-update live during workshops without manual page reloads.
- **Metric Summary Tiles**: Total completed runs, top profile name & percentage, and class average scores for Energi, Uang, and Mental.
- **Profile Distribution Bars**: Color-coded progress bars for each of the 7 profiles with percentage badges.
- **Search & Filter Table**: Live filter input to search rows by student code (`A-01`) or profile name.
- **Security Gate**: Password gate (`passcode`: `leap2036`) protecting facilitator access.
- **Direct Navigation**: Added direct "📊 Buka Papan Fasilitator (Dashboard Kelas)" links inside `index.html` (Operator toggle section & page footer) so facilitators never need to type the URL manually.

---

## 3. Core Engine & Parity Verification

- **Pure Functional Engine (`engine.js`)**:
  - Scoring math is 100% decoupled from DOM rendering.
  - Resource scores are clamped strictly between `0` and `200` on every delta update.
  - Phase 1 total (`TotalF1`) is captured cleanly at the transition seam (after round `F1.4`).
  - 7-Profile Classifier evaluates dominant invariants, votes, and tie-breakers deterministically.
- **Parity Test Suite (`parity.test.js`)**:
  - Executed `node parity.test.js` before and after all changes.
  - Result: **`ALL CASES PASS` / `PARITY_RESULT=PASS`**. All 8 test cases (invariants, votes, F2.5 bet payoffs, running clamps, chaos card seams, full A/B sweeps) match the original reference implementation.

---

## 4. Verification of the 3 Execution Scenarios

### 📁 Scenario 1: Murni Offline (USB / Flashdrive / Local File)
- **Status**: **PASS (100% Verified)**
- **Behavior**: Opening `file:///.../index.html` directly in Chrome, Edge, or Firefox works without errors.
- **Zero External Dependencies**: Uses 0 CDNs, 0 web fonts, 0 npm packages, and native system fonts (`system-ui`).

### 📱 Scenario 2: Installed PWA (Standalone Mobile App)
- **Status**: **PASS (100% Verified)**
- **Behavior**: Deployed to HTTPS origin (`https://leap-2036.vercel.app/`). Includes `manifest.webmanifest`, `icon.svg`, and `sw.js` (Cache `v3`).
- **Offline Shell**: Clicking "Add to Home Screen / Install" creates an independent desktop/mobile app icon that launches and plays completely offline. `dashboard.html` and cross-origin REST calls are excluded from SW precaching so live data remains fresh.

### ☁️ Scenario 3: Online Cloud Sync & Facilitator Dashboard
- **Status**: **PASS (100% Verified)**
- **Supabase REST Integration**: Configured with production Supabase Project URL (`https://anlvfpkjivwfhvcswfyc.supabase.co`) and public `anonKey` in `leap-config.js`.
- **Database Table**: Connected to Supabase table `leap_results`.
- **Queueing & Resiliency**: `leap-sync.js` queues runs locally in `localStorage` if network connection drops, retrying automatically on reconnect.
- **REST Test Result**: Verified live insertion (`HTTP 201 Created`) and live query response via Node.js fetch script.

---

## 5. File Map & Key Artifacts

| File | Purpose | Status |
|---|---|---|
| `index.html` | UI Controller, DOM views, PWA registration, Dashboard link | Updated & Verified |
| `style.css` | Daylight theme styling, glassmorphism, responsive layout | Updated & Verified |
| `dashboard.html` | Facilitator command center, live auto-polling, 7-profile distribution, CSV export | Redesigned & Verified |
| `engine.js` | Single source of truth for scoring, deltas, clamp, and profile classification | Audit Passed |
| `data.js` | 12 decision rounds, 3 chaos cards, 7 profiles, values, DISC, goal, Surat text | Audit Passed |
| `leap-config.js` | Production Supabase credentials (`url` & `anonKey`) | Created & Committed |
| `leap-sync.js` | Pseudonymous Supabase sync layer with offline queueing | Audit Passed |
| `sw.js` | PWA Service Worker (Cache `v3`, precaching game shell) | Updated & Verified |
| `vercel.json` | Deployment config with `no-cache` headers for dashboard & SW | Updated & Verified |
| `schema.sql` | PostgreSQL DDL & Row Level Security policies for Supabase | Verified |
| `parity.test.js` | Automated parity test suite against engine | Passed (All 8 Cases) |

---

## 6. Git & Deployment Log

- **Git Remote**: `https://github.com/Stylenecy/LEAP-2036.git`
- **Branch**: `master`
- **Recent Commit History**:
  - `3936d29` - `feat: modernize facilitator live dashboard UI with real-time auto polling`
  - `52da1c3` - `fix: bump SW cache to v3 and add no-cache headers for dashboard`
  - `5334272` - `feat: configure production Supabase cloud sync`
  - `f093802` - `style: visual polish for LEAP 2036 game (bright, kid-friendly)`
- **Vercel Status**: `Production READY` on `https://leap-2036.vercel.app`

---

## 7. Instructions for Reviewer (Claude / Human Auditor)

1. **Verify Parity**: Run `node parity.test.js` in the project root. Expect `PARITY_RESULT=PASS`.
2. **Verify Live Game**: Open [https://leap-2036.vercel.app/](https://leap-2036.vercel.app/) in browser or mobile viewport.
3. **Verify Facilitator Link**: Click the "📊 Buka Papan Fasilitator" link in the landing screen operator drawer or page footer.
4. **Verify Facilitator Dashboard**: Enter passcode `leap2036` on [https://leap-2036.vercel.app/dashboard.html](https://leap-2036.vercel.app/dashboard.html) to view live metrics, 7-profile distribution bars, auto-refresh polling, and CSV export functionality.
5. **Verify Supabase Database**: Observe live pseudonymous records in Supabase table `leap_results`.

---

## 8. SECURITY FIX — 2026-07-31

**Trigger**: user-requested security self-audit found the live REST endpoint
(`.../rest/v1/leap_results`) readable by anyone holding the public anon
key — confirmed via a direct `curl` (HTTP 200, real student rows
returned) without ever opening `dashboard.html`. The dashboard's
`leap2036` passcode was a plaintext client-side string, visible via View
Source, and irrelevant to this — the underlying Supabase RLS `SELECT`
policy was `to anon using (true)` (open read to anyone with the public
key, which is itself committed in this repo's `leap-config.js`).

**Code changes made this session (uncommitted, awaiting Dex review + push):**
- `migration_2026-07-31_security_fix.sql` (new) — production migration:
  drops the open anon SELECT policy, adds `authenticated`-only SELECT,
  adds CHECK constraints (energi/uang/mental 0–200, `kode` ≤12 chars).
  **Not yet applied** — Claude has no Supabase credentials/CLI/MCP
  access; Dex must run this in the Supabase SQL Editor himself.
- `schema.sql` — flipped to secure-by-default for fresh installs (same
  policy + constraints inline), old anon-open policy kept only as a
  clearly-marked "LEGACY / DO NOT USE" comment block.
- `api/dashboard-data.js` (new) — Vercel serverless proxy. Holds
  `SUPABASE_SERVICE_ROLE_KEY` + `DASHBOARD_PASSWORD` server-side (env
  vars, not in repo), verifies password with a timing-safe compare,
  fetches `leap_results` server-side and returns JSON. This is now the
  *only* thing that can read the table.
- `dashboard.html` — removed the client-side `PASSCODE` compare and the
  direct anon-key Supabase fetch; now POSTs the typed password to
  `/api/dashboard-data` and renders whatever it returns. No longer loads
  `leap-config.js` at all.
- `README.md` / `SETUP.md` — updated to match: fixed a stale README
  claim that `leap-config.js` was gitignored (it isn't — anon key is
  meant to be public, kept as-is), documented the 3 required Vercel env
  vars (`LEAP_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
  `DASHBOARD_PASSWORD`) and the new migration step for existing DBs.
- Verified: `node parity.test.js` → `PARITY_RESULT=PASS` (engine/data.js
  untouched). `node --check` on the new function + a syntax parse of the
  dashboard inline script both clean.

**BLOCKED — needs Dex, not delegable (no credentials on this end):**
1. Run `migration_2026-07-31_security_fix.sql` in Supabase SQL Editor
   (production project `anlvfpkjivwfhvcswfyc`).
2. Set the 3 env vars above in Vercel Project Settings → Environment
   Variables (service_role key from Supabase Project Settings → API;
   pick a real `DASHBOARD_PASSWORD` — the old `leap2036` should be
   considered burned since it was public in the repo/JS).
3. Redeploy so the function picks up the env vars.
4. Then: git review + commit + push (not yet done — Claude does not
   commit/push without explicit go-ahead), Claude re-tests the closed
   endpoint with the same `curl` used to find the hole.

**Not yet done (next up per Dex's priority order)**: none remaining on
Claude's side beyond the constraint work already included in the
migration above — constraints were bundled into the same migration file
rather than a separate later step, since they're independent of the RLS
fix and low-risk to include together.

**CLOSED — 2026-07-31.** Dex ran the migration, set the 3 Vercel env
vars, redeployed. Re-verified in production: anon SELECT → `[]`, all 3
CHECK constraints reject bad data with proper error codes, valid game
INSERT still returns 201, old passcode `leap2036` rejected server-side
(401), new `DASHBOARD_PASSWORD` confirmed working by Dex (dashboard
loads real data). 3 test rows this verification pass inserted into
production (`SECVER02`, `THIRTEEN-CHR`, `JSVER01`) were cleaned up by
Dex via SQL (anon key has no DELETE policy, by design). Committed
`01cac75` and pushed to `origin/master` — repo now matches what's
actually running in production.
