/* =====================================================================
   LEAP 2036 — Facilitator dashboard data proxy (Vercel serverless).

   Replaces the old client-side passcode compare + direct anon-key REST
   fetch in dashboard.html. Both were bypassable: the passcode was a
   plaintext string in the shipped JS (readable via View Source), and
   the anon key that fetched leap_results directly could be used by
   anyone (curl, browser console, a forked page) since it's public by
   design and committed in this repo — regardless of the passcode.

   This function is the only thing that holds the real secret
   (SUPABASE_SERVICE_ROLE_KEY, which bypasses RLS) and the only thing
   that checks the real password. Both live in Vercel environment
   variables — never in a client file, never in git.

   Required env vars (set in Vercel Project Settings -> Environment
   Variables, not in this repo):
     LEAP_SUPABASE_URL        — same Supabase project URL as leap-config.js
     SUPABASE_SERVICE_ROLE_KEY — service_role key from Supabase dashboard
                                  (Project Settings -> API). SECRET.
     DASHBOARD_PASSWORD        — the facilitator password. SECRET.
   ===================================================================== */

var crypto = require('crypto');

function safeEqual(a, b) {
  var bufA = Buffer.from(String(a));
  var bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) {
    // Compare against itself so a length mismatch takes the same time
    // as a real compare (avoids leaking password length via timing).
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  var expectedPassword = process.env.DASHBOARD_PASSWORD;
  var supabaseUrl = process.env.LEAP_SUPABASE_URL;
  var serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!expectedPassword || !supabaseUrl || !serviceKey) {
    res.status(500).json({ error: 'Dashboard belum dikonfigurasi di server (env var kosong). Cek Vercel Project Settings -> Environment Variables.' });
    return;
  }

  var body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  var password = body && body.password;

  if (!password || !safeEqual(password, expectedPassword)) {
    res.status(401).json({ error: 'Kata sandi salah.' });
    return;
  }

  try {
    var endpoint = String(supabaseUrl).replace(/\/+$/, '') + '/rest/v1/leap_results?select=*&order=created_at.desc';
    var r = await fetch(endpoint, {
      headers: {
        apikey: serviceKey,
        Authorization: 'Bearer ' + serviceKey
      }
    });
    if (!r.ok) {
      res.status(502).json({ error: 'Gagal ambil data dari Supabase (HTTP ' + r.status + ')' });
      return;
    }
    var rows = await r.json();
    res.status(200).json({ rows: Array.isArray(rows) ? rows : [] });
  } catch (e) {
    res.status(502).json({ error: 'Gagal konek ke Supabase.' });
  }
};
