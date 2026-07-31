-- =====================================================================
-- LEAP 2036 — Security fix migration (2026-07-31)
-- =====================================================================
-- WHAT: closes public read access to `leap_results` (was readable by
-- anyone with the anon key — confirmed exploitable via a plain curl to
-- the REST endpoint, bypassing dashboard.html's passcode entirely) and
-- adds data-shape guards so a raw POST can't insert garbage.
--
-- HOW TO RUN: Supabase Dashboard -> SQL Editor -> paste this whole file
-- -> Run. Safe to re-run (every statement is idempotent).
--
-- AFTER RUNNING: the facilitator dashboard reads through the new
-- /api/dashboard-data serverless proxy (service_role key, server-side
-- only) instead of the anon key directly — see dashboard.html /
-- api/dashboard-data.js in this same commit. The game's INSERT path
-- (anon key, index.html / leap-sync.js) is UNCHANGED by this migration.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) Close public SELECT.
--    Anon (the public key shipped in leap-config.js) can no longer read
--    this table from anywhere — not curl, not a browser console, not a
--    forked copy of dashboard.html. Only the `authenticated` role could
--    in theory, and nothing in this project currently uses that role
--    (the dashboard now goes through service_role server-side instead),
--    so in practice this makes the table SELECT-proof from any client.
-- ---------------------------------------------------------------------
drop policy if exists leap_results_select_anon on public.leap_results;

drop policy if exists leap_results_select_auth on public.leap_results;
create policy leap_results_select_auth
  on public.leap_results
  for select
  to authenticated
  using (true);

-- INSERT stays open to anon on purpose — the game must still be able to
-- submit a result with nobody logged in. Not touched by this migration.

-- ---------------------------------------------------------------------
-- 2) Data-shape guards on insert — stop a raw curl/POST from writing
--    out-of-range scores or oversized text into the table.
-- ---------------------------------------------------------------------
alter table public.leap_results drop constraint if exists leap_results_energi_range;
alter table public.leap_results add constraint leap_results_energi_range
  check (energi is null or (energi between 0 and 200));

alter table public.leap_results drop constraint if exists leap_results_uang_range;
alter table public.leap_results add constraint leap_results_uang_range
  check (uang is null or (uang between 0 and 200));

alter table public.leap_results drop constraint if exists leap_results_mental_range;
alter table public.leap_results add constraint leap_results_mental_range
  check (mental is null or (mental between 0 and 200));

alter table public.leap_results drop constraint if exists leap_results_kode_len;
alter table public.leap_results add constraint leap_results_kode_len
  check (kode is null or char_length(kode) <= 12);

-- =====================================================================
-- VERIFY (run these yourself, or ask Claude to re-check with curl):
--   1. SELECT — from an environment with only the anon key, this should
--      now return an empty array (previously returned every row):
--        curl "<SUPABASE_URL>/rest/v1/leap_results?select=*" \
--          -H "apikey: <ANON_KEY>" -H "Authorization: Bearer <ANON_KEY>"
--   2. Constraints — an insert with e.g. energi=99999 should now be
--      rejected (HTTP 400 / check constraint violation) instead of
--      silently accepted.
-- =====================================================================
