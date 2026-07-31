-- =====================================================================
-- LEAP 2036 — Supabase schema  (OPTIONAL data layer)
-- =====================================================================
-- Run this ONCE in your Supabase project: Dashboard -> SQL Editor ->
-- paste -> Run.  See SETUP.md for the full walkthrough.
--
-- WHAT THIS STORES (privacy):
--   ONLY pseudonymous game results. There is NO name, email, phone,
--   class, or device id here. The strongest identifier is `kode` — the
--   short student code the player OPTIONALLY types (e.g. "A-01"); group
--   play stores no code at all. Everything else is a game score or a
--   game-chosen label. You cannot re-identify a student from this table
--   without a separate paper roster that you keep offline.
--
-- WHY THE ANON KEY IS SAFE IN THE CLIENT:
--   Supabase's `anon` (public) key is public-by-design. It is NOT a
--   secret. What protects the table is ROW LEVEL SECURITY (RLS) below:
--   the anon role can ONLY do exactly what the policies allow (insert a
--   result; optionally read results). The `service_role` / secret key is
--   a different key with NO RLS — it must NEVER appear in any client file
--   (index.html, leap-sync.js, leap-config.js, dashboard.html). Keep it
--   only in the Supabase dashboard.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) TABLE — one row per completed run.
--    Columns mirror the pseudonymous CSV the game already exports:
--    Kode, Energi, Uang, Mental, TotalF1, Profil, Nilai1..5, DISC,
--    Tujuan, ArahTujuan  (plus an id + created_at the DB fills in).
--    We store the 5 values as a text[] array (`nilai`) — simplest to
--    insert from JS and to read back in the dashboard.
-- ---------------------------------------------------------------------
create table if not exists public.leap_results (
  id          uuid          primary key default gen_random_uuid(),
  kode        text          check (kode is null or char_length(kode) <= 12), -- optional student code, e.g. "A-01" ('' = group play)
  energi      int           check (energi is null or (energi between 0 and 200)), -- Energi 0..200
  uang        int           check (uang is null or (uang between 0 and 200)),     -- Uang (engine "Kapital") 0..200
  mental      int           check (mental is null or (mental between 0 and 200)), -- Mental 0..200
  total_f1    int,                        -- TotalF1 = E+K+M captured at end of Fase 1
  profil      text,                       -- one of the 7 profile names
  nilai       text[],                     -- the 5 chosen values (Nilai1..Nilai5)
  disc        text,                       -- one of D / I / S / C
  tujuan      text,                       -- chosen life-goal label
  arah_tujuan text,                       -- Condong / Menjauh / Campuran
  created_at  timestamptz   not null default now()
);
-- Data-shape guards above stop a raw curl/POST from writing out-of-range
-- scores or oversized text (the anon INSERT policy below has no other
-- validation — "with check (true)" accepts any row shape the table allows).

-- Helpful for the dashboard's "newest first" sort + profile grouping.
create index if not exists leap_results_created_at_idx on public.leap_results (created_at desc);
create index if not exists leap_results_profil_idx     on public.leap_results (profil);

-- ---------------------------------------------------------------------
-- 2) ROW LEVEL SECURITY
--    With RLS enabled and NO policy, every request is denied. We then
--    grant exactly the access the game + dashboard need, and nothing more.
-- ---------------------------------------------------------------------
alter table public.leap_results enable row level security;

-- 2a) INSERT — the game (anon key) must be able to submit a result.
--     `with check (true)` = any row shape the table allows is accepted.
--     This is intentional: anonymous classroom submission. There is no
--     UPDATE or DELETE policy, so the anon role can ONLY append — it can
--     never edit or erase existing rows.
drop policy if exists leap_results_insert_anon on public.leap_results;
create policy leap_results_insert_anon
  on public.leap_results
  for insert
  to anon
  with check (true);

-- 2b) SELECT — needed by the facilitator dashboard to show the
--     distribution + table.
--
--     >>> DEFAULT (secure): only the `authenticated` role can read. <<<
--     The anon/public key (shipped in leap-config.js, same key the game
--     uses to INSERT) can NEVER read this table — not curl, not a
--     browser console, not a forked copy of dashboard.html. The
--     facilitator dashboard does not use a Supabase login session
--     either: it reads through a small Vercel serverless function
--     (`api/dashboard-data.js`) that holds the service_role key
--     server-side and checks a password server-side before returning
--     any rows. See dashboard.html / api/dashboard-data.js.
drop policy if exists leap_results_select_auth on public.leap_results;
create policy leap_results_select_auth
  on public.leap_results
  for select
  to authenticated
  using (true);

-- ---------------------------------------------------------------------
--     >>> LEGACY / DO NOT USE — kept only for history. <<<
--     This project used to run with SELECT open to the anon role, which
--     meant anyone holding the public anon key (public by design, and
--     it's committed in this repo) could read every row directly via
--     the REST API, completely bypassing dashboard.html's passcode.
--     Confirmed exploitable 2026-07-31. Do not re-enable this without
--     also removing the raw REST fetch from the client and replacing it
--     with a server-side gate.
--
--   drop policy if exists leap_results_select_anon on public.leap_results;
--   create policy leap_results_select_anon
--     on public.leap_results
--     for select
--     to anon
--     using (true);
-- ---------------------------------------------------------------------

-- =====================================================================
-- NOTE: INSERT stays open to anon either way — the game must submit
-- without anyone logging in. Tightening SELECT (above) only changes who
-- can READ the collected results, not who can WRITE them.
-- =====================================================================
