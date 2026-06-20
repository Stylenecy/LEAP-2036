/* =====================================================================
   LEAP 2036 — Supabase config TEMPLATE  (OPTIONAL)
   =====================================================================
   This is a template. To turn on the optional cloud data layer:

     1. COPY this file to  leap-config.js   (same folder).
            cp leap-config.example.js leap-config.js
     2. Fill in your real Supabase project URL + anon (public) key below.
     3. That's it — index.html already tries to load leap-config.js, and
        the game will start submitting pseudonymous results when online.

   If you do NOT create leap-config.js, nothing breaks: the game ignores
   it and plays fully offline, exactly as before (sync silently no-ops).

   Commit-or-gitignore is YOUR call:
     - The anon key is PUBLIC-BY-DESIGN (safe to commit / ship to the
       browser). It is protected by Row Level Security in schema.sql, not
       by being secret. Committing leap-config.js is fine.
     - If you'd rather keep it out of git anyway, add this line to
       .gitignore:   src/kkn-hub/leap/leap-config.js

   ⚠️ NEVER put the Supabase  service_role  / "secret"  key here (or in
      ANY client file). That key bypasses Row Level Security and would let
      anyone read/delete everything. Only the anon/public key belongs in
      the browser. The service_role key stays in the Supabase dashboard.
   ===================================================================== */
window.LEAP_SUPABASE = {
  // Project URL — Supabase dashboard -> Project Settings -> API -> Project URL
  url: 'https://YOUR-PROJECT-ref.supabase.co',

  // anon / public key — Supabase dashboard -> Project Settings -> API ->
  // Project API keys -> "anon" "public".  (NOT the service_role key.)
  anonKey: 'YOUR_ANON_PUBLIC_KEY'
};
