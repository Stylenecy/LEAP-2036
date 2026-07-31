# LEAP 2036 — Optional Supabase Data Layer + Facilitator Dashboard

This is **optional**. The LEAP 2036 game works fully offline from
`file://` / USB with no setup at all. Follow this only if you want runs
to be collected centrally (so you can see a whole class's results and a
profile distribution on one screen).

When configured, the game appends **one pseudonymous row per completed
run** to a Supabase table. When there's no config or no network, results
are queued on the device and synced later — the game never breaks.

---

## What gets stored (and what does NOT)

**Stored (pseudonymous only):**

| Column | Meaning |
|---|---|
| `kode` | the short student code they optionally typed (e.g. `A-01`); empty for group play |
| `energi`, `uang`, `mental` | the three final scores (0–200) |
| `total_f1` | total at the end of Phase 1 |
| `profil` | one of the 7 profile names |
| `nilai` | the 5 chosen values |
| `disc` | D / I / S / C |
| `tujuan` | chosen life-goal label |
| `arah_tujuan` | Condong / Menjauh / Campuran |
| `created_at` | timestamp (filled by the database) |

**NOT stored:** real names, email, phone, class name, device id, IP-as-identity. There is no field for any of these. You cannot re-identify a student from this table unless *you* keep a separate paper roster mapping codes to names — keep that roster offline.

---

## Steps

### 1. Create a Supabase project
1. Go to <https://supabase.com> → sign in → **New project**.
2. Pick a name + database password (save the password somewhere safe).
3. Wait for it to finish provisioning (~1–2 min).

### 2. Run the schema
1. In the project, open **SQL Editor** (left sidebar).
2. Open `schema.sql` from this folder, copy **all** of it, paste into a
   new query, and click **Run**.
3. This creates the `leap_results` table and the Row Level Security
   policies: anon can INSERT (the game submits without login), but
   SELECT is **authenticated-only by default** — the anon/public key can
   never read the table back. The facilitator dashboard reads through a
   server-side proxy instead (Step 5).
4. **Already have a project from before 2026-07-31?** Run
   `migration_2026-07-31_security_fix.sql` instead (or as well) — it
   closes the old open-read policy on an existing table and adds the
   CHECK constraints, safely, without dropping any data.

### 3. Get your keys
1. Open **Project Settings → API**.
2. Copy two things:
   - **Project URL** — looks like `https://abcdxyz.supabase.co`
   - **anon / public** key (under *Project API keys*) — this one is
     **public-safe** and is the only key that goes in the browser.
3. ⚠️ **Do NOT** copy the `service_role` / *secret* key. It bypasses Row
   Level Security. It must **never** go into `leap-config.js`,
   `dashboard.html`, or any client file. Leave it in the dashboard only.

### 4. Turn on sync in the game
1. Copy the template to a real config file (same folder):
   ```
   cp leap-config.example.js leap-config.js
   ```
2. Open `leap-config.js` and paste your **Project URL** + **anon key**.
3. Done. `index.html` already loads `leap-config.js` if it exists. From
   now on, when a device running the game is **online**, each completed
   run is submitted automatically. Offline runs queue and sync later
   (on next load or when the device reconnects).

   - Committing `leap-config.js` to git is fine (anon key is public-safe,
     and it can now only INSERT — it lost SELECT access in Step 2).

### 5. Set up the facilitator dashboard (server-side auth)
The dashboard no longer uses a client-side passcode or the anon key to
read data — it calls `api/dashboard-data.js`, a small Vercel serverless
function that holds the real secret and checks the real password on the
server. Set these in **Vercel → Project Settings → Environment
Variables** (do NOT put them in any file in this repo):

| Variable | Value | Notes |
|---|---|---|
| `LEAP_SUPABASE_URL` | same Project URL as `leap-config.js` | not secret, just needs to exist server-side too |
| `SUPABASE_SERVICE_ROLE_KEY` | Project Settings → API → `service_role` key | **SECRET.** Bypasses RLS. Never put this in a client file — only here. |
| `DASHBOARD_PASSWORD` | pick a real password | **SECRET.** This replaces the old hardcoded `leap2036`. |

After adding the env vars, redeploy (`vercel --prod` or push to the
branch Vercel auto-deploys) so the function picks them up.

### 6. Open the facilitator dashboard
1. Open the deployed `dashboard.html` (it needs the Vercel serverless
   function, so this only works on the live URL — not `file://`/USB).
2. Enter the `DASHBOARD_PASSWORD` you set in Step 5.
3. You'll see: profile distribution (count per of the 7 profiles), a
   sortable table of every run, and a **Ekspor CSV** button.

---

## Honest privacy & security note

- The dashboard's password check now happens **server-side**, in
  `api/dashboard-data.js` — not in the shipped JS. Viewing page source no
  longer reveals it, and there's no way to read `leap_results` with just
  the anon key (curl, browser console, or a forked page all get nothing).
- **Real protection** is three things working together:
  1. **Pseudonymity** — the table never contains names, so a leak
     exposes anonymous scores, not identities.
  2. **Row Level Security (RLS)** in Supabase — anon can INSERT only;
     SELECT is `authenticated`-only, which the anon key never is.
  3. **Server-side password + service_role key** — both live in Vercel
     environment variables, never in a client file or git.
- The **anon key is still public by design** (it's in `leap-config.js`,
  committed on purpose) — that's fine now because it can only append
  rows, never read them.
- The optional service worker (`sw.js`) never caches Supabase or `/api`
  requests, so submissions always go to the live network and reads are
  never served stale.

---

## Troubleshooting

- **Dashboard shows "Dashboard belum dikonfigurasi di server"** → the
  Vercel env vars from Step 5 aren't set (or the function wasn't
  redeployed after setting them).
- **Dashboard shows "Kata sandi salah"** → `DASHBOARD_PASSWORD` on Vercel
  doesn't match what you typed. Check for trailing spaces/typos in the
  env var value.
- **No rows appear even though people played** → the players' devices may
  have been offline (rows are queued locally and sync on reconnect), or
  `leap-config.js` wasn't present/filled on those devices.
- **Game still works with no config?** → Yes. That's the whole point.
  Missing/empty `leap-config.js` = sync silently no-ops, game plays and
  scores exactly as before.
