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
   policies (anon can INSERT; by default anon can also SELECT).

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

   - Committing `leap-config.js` to git is fine (anon key is public-safe).
     If you'd rather not, add `src/kkn-hub/leap/leap-config.js` to
     `.gitignore`. Your call.

### 5. (Optional) Tighten who can READ the data
By default the dashboard reads with the public anon key — easy, but it
means anyone with the anon key + URL could read the (pseudonymous) rows.
The data has no names, so the risk is limited, but if you want real
gating:

1. In `schema.sql`, switch the SELECT policy from anon to authenticated
   (the file has a clearly-commented **STRICTER ALTERNATIVE** block —
   drop `leap_results_select_anon`, enable `leap_results_select_auth`,
   and re-run those statements in the SQL Editor).
2. Then the dashboard must read with a real logged-in Supabase session
   (e.g. enable email magic-link auth and add a sign-in step), because
   the bare anon key will no longer be allowed to read.
3. **INSERT stays open to anon either way** — the game must be able to
   submit without anyone logging in. Tightening SELECT only changes who
   can *read*, not who can *write*.

### 6. Open the facilitator dashboard
1. Open `dashboard.html` (double-click, or serve it — same folder as the
   game so it picks up `leap-config.js`).
2. Enter the passcode. The default is `leap2036` — **change it** before
   sharing: edit the `PASSCODE` constant near the top of the `<script>`
   in `dashboard.html`.
3. You'll see: profile distribution (count per of the 7 profiles), a
   sortable table of every run, and a **Ekspor CSV** button.

---

## Honest privacy & security note

- The passcode on `dashboard.html` is a **light deterrent only**. It is
  client-side and readable in "View Source". It stops casual snooping,
  not a determined person.
- **Real protection** is two things working together:
  1. **Pseudonymity** — the table never contains names, so a leak
     exposes anonymous scores, not identities.
  2. **Row Level Security (RLS)** in Supabase — this is what actually
     controls access to the table. For genuine access control, use the
     "authenticated only" SELECT policy (Step 5).
- The **anon key is public by design**. It being visible in the browser
  is expected and safe *because* RLS limits what it can do. The
  **service_role / secret key is the dangerous one** — keep it out of
  every client file, forever.
- The optional service worker (`sw.js`) never caches Supabase requests,
  so submissions always go to the live network and reads are never
  served stale.

---

## Troubleshooting

- **Dashboard shows "Gagal memuat data"** → check the URL + anon key in
  `leap-config.js`, your internet, and whether the SELECT policy allows
  anon. If you switched to "authenticated only" (Step 5), the anon-key
  dashboard *cannot* read — that's expected; add an auth session.
- **No rows appear even though people played** → the players' devices may
  have been offline (rows are queued locally and sync on reconnect), or
  `leap-config.js` wasn't present/filled on those devices.
- **Game still works with no config?** → Yes. That's the whole point.
  Missing/empty `leap-config.js` = sync silently no-ops, game plays and
  scores exactly as before.
