// Vercel serverless proxy for Gemini — keeps the API key server-side (Vercel env
// GEMINI_KEY) so it is NEVER in the public client bundle/repo (no more leaked-key
// auto-disable). The browser POSTs {contents, generationConfig} here.
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed' } });
  }
  const key = process.env.GEMINI_KEY;
  if (!key) {
    return res.status(500).json({ error: { message: 'GEMINI_KEY belum diset di Vercel env.' } });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  if (!body || !body.contents) {
    return res.status(400).json({ error: { message: 'Body tidak valid (contents kosong).' } });
  }

  const MODELS = ['gemini-2.5-flash-lite', 'gemini-2.0-flash-lite', 'gemini-flash-lite-latest', 'gemini-2.5-flash'];
  let data = { error: { message: 'No model responded.' } };
  try {
    for (const model of MODELS) {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
      );
      data = await r.json();
      if (!data.error) break;
    }
  } catch (e) {
    return res.status(502).json({ error: { message: 'Gagal hubungi Gemini: ' + (e && e.message) } });
  }
  return res.status(200).json(data);
}
