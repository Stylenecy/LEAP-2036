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
  kode        text,                       -- optional student code, e.g. "A-01" ('' = group play)
  energi      int,                        -- Energi 0..200
  uang        int,                        -- Uang (engine "Kapital") 0..200
  mental      int,                        -- Mental 0..200
  total_f1    int,                        -- TotalF1 = E+K+M captured at end of Fase 1
  profil      text,                       -- one of the 7 profile names
  nilai       text[],                     -- the 5 chosen values (Nilai1..Nilai5)
  disc        text,                       -- one of D / I / S / C
  tujuan      text,                       -- chosen life-goal label
  arah_tujuan text,                       -- Condong / Menjauh / Campuran
  created_at  timestamptz   not null default now()
);

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

-- 2b) SELECT — needed by dashboard.html to show the distribution + table.
--
--     >>> DEFAULT (simple): allow the anon role to read. <<<
--     This is the easy path: open dashboard.html with the anon key and it
--     just works, no login. Because the data is pseudonymous (no names),
--     the exposure if the anon key leaks is limited to anonymous scores.
--     The dashboard adds a light client-side passcode on top (deterrent
--     only — see the honest note in dashboard.html / SETUP.md).
drop policy if exists leap_results_select_anon on public.leap_results;
create policy leap_results_select_anon
  on public.leap_results
  for select
  to anon
  using (true);

-- ---------------------------------------------------------------------
--     >>> STRICTER ALTERNATIVE (recommended if you want real gating) <<<
--     Switch to this if you'd rather the data NOT be readable with the
--     public anon key. Then only a logged-in Supabase user (authenticated
--     role) can read, and the dashboard must use a Supabase auth session
--     (e.g. magic-link login) instead of the bare anon key.
--
--     To switch:
--       1. Comment out / drop the `leap_results_select_anon` policy above:
--             drop policy if exists leap_results_select_anon on public.leap_results;
--       2. Enable the policy below.
--       3. Give the dashboard a real auth session (see SETUP.md "tighten
--          SELECT RLS"). The bare anon-key dashboard will then read nothing.
--
--   drop policy if exists leap_results_select_auth on public.leap_results;
--   create policy leap_results_select_auth
--     on public.leap_results
--     for select
--     to authenticated
--     using (true);
-- ---------------------------------------------------------------------

-- =====================================================================
-- NOTE: INSERT stays open to anon either way — the game must submit
-- without anyone logging in. Tightening SELECT (above) only changes who
-- can READ the collected results, not who can WRITE them.
-- =====================================================================
