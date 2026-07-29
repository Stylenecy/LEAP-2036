# HANDOFF SPEC — LEAP 2036 Visual Polish

> Format per `_Dex-Brain/Agent-Protocol.md` §15.1. Read this fully before touching any file.
> Owner/orchestrator: Dex + Claude (in `_Dex-Brain`). Executor: whichever tool Dex points at this folder (Antigravity recommended — this is frontend/visual work).

## TASK
Polish the visual presentation of the LEAP 2036 game (currently functional but visually plain — built fast for KKN Tematik STEM 2026 workshop use). Game logic and scoring are locked and verified correct (see VERIFIED STATE below) — this task touches **presentation only**.

## KLASIFIKASI (dari §14 AGENTS.md)
Tier: 🟢/🟡 (visual/CSS work, mechanical-to-moderate, reversible via git) | Tool tujuan: Antigravity | Model disarankan: whatever Antigravity ships with

## VERIFIED STATE (checked 2026-07-29, this session — not stale)
- Single git commit exists: `e4b7e84 feat: standalone LEAP 2036 game (kid-friendly, offline-ready PWA)`, dated 2026-06-21. No commits since — untouched for ~5 weeks.
- **Engine verified working right now:** ran `node parity.test.js` this session → `ALL CASES PASS` / `PARITY_RESULT=PASS`. Scoring logic (Energi/Uang/Mental, clamp, 7-profile classification) matches the reference `.gs` implementation exactly. Do not assume this is stale — it was executed and observed, not inferred.
- **Database/Supabase sync is OFF right now.** Only `leap-config.example.js` exists, no real `leap-config.js` — per `SETUP.md`, missing config = silent no-op, game runs 100% local. Not a blocker for this task.
- **NOT verified this session:** actual browser playthrough (does the UI flow feel good, any layout breakage, mobile rendering). Whoever picks this up should open `index.html` and click through all 12 rounds before/after changes.

## ACCEPTANCE CRITERIA
- `node parity.test.js` still prints `ALL CASES PASS` after your changes (run it — don't assume).
- `index.html` opened directly via `file://` still completes a full playthrough (12 rounds → 1 of 7 profiles shown) with no console errors.
- Visual target: "cerah & ramah anak" (bright, kid-friendly), mobile-first — per README's stated design intent. Bring concrete before/after screenshots back, not just a verbal "looks better."
- No changes to `engine.js` or `data.js` score/round logic. `style.css` and presentational markup in `index.html` are fair game. If a visual idea requires touching `engine.js`/`data.js`, stop and flag it back to Dex/Claude instead of doing it — that's a scope boundary, not a suggestion.

## KONTEKS RELEVAN
- `README.md` — file map + design intent ("cerah & ramah anak, mobile-first").
- `engine.js`, `data.js` — locked, read-only reference for what state exists to render.
- `style.css`, `index.html` — the actual editable surface.
- `parity.test.js` — run before AND after to prove nothing broke.

## JANGAN SENTUH
- `engine.js`, `data.js` (scoring/round logic — locked, verified correct).
- `schema.sql`, `leap-sync.js`, `leap-config.example.js` (optional Supabase layer — out of scope, not part of this task).
- Git history — no force-push, no rewriting the single existing commit.

## BUKTI YANG HARUS DIBAWA BALIK (§15.2)
- Diff/final code.
- `node parity.test.js` output (before is already known-PASS; must show PASS after too).
- Screenshot or screen recording of a full playthrough in a browser, before and after.
- Explicit list of what was touched vs. skipped, per Agent-Protocol §2.5/§9.

---
*Written by Claude in `_Dex-Brain` orchestrator session, 2026-07-29. If this file goes stale (game gets touched outside this handoff), update the VERIFIED STATE section — don't let it rot.*
