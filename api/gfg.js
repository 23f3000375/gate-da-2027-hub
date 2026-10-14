/**
 * Vercel Serverless Function: /api/gfg.js
 * Fetches a GeeksforGeeks article server-side (bypassing browser CORS)
 * and returns the article HTML for in-portal rendering on your Vercel app.
 *
 * Credits & Attribution: All educational content belongs to GeeksforGeeks
 * (Sanchhaya Education Private Limited - https://www.geeksforgeeks.org/).
 */

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const targetUrl = req.query.url;
  if (!targetUrl || !targetUrl.startsWith("https://www.geeksforgeeks.org/")) {
    return res.status(400).json({
      error: "Please provide a valid GeeksforGeeks URL starting with https://www.geeksforgeeks.org/"
    });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `GeeksforGeeks returned HTTP ${response.status}` });
    }

    const html = await response.text();
    return res.status(200).json({
      source: "GeeksforGeeks (https://www.geeksforgeeks.org/)",
      url: targetUrl,
      contents: html
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Failed to fetch GeeksforGeeks article" });
  }
}
