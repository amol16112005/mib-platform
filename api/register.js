export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ ok: false, error: "Method not allowed." });
    return;
  }

  const entry = request.body || {};
  if (!entry.name || !entry.eventName) {
    response.status(400).json({ ok: false, error: "Name and event are required." });
    return;
  }

  const webhook = process.env.SHEET_WEBHOOK_URL;
  if (!webhook) {
    response.status(503).json({
      ok: false,
      error: "The organiser sheet is not connected yet.",
    });
    return;
  }

  try {
    const sheetResponse = await fetch(webhook, {
      method: "POST",
      redirect: "manual",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(entry),
    });
    const accepted =
      sheetResponse.ok || (sheetResponse.status >= 300 && sheetResponse.status < 400);
    if (!accepted) {
      response.status(502).json({
        ok: false,
        error: "The organiser sheet did not accept this registration.",
      });
      return;
    }
    response.status(200).json({ ok: true, where: "google-sheet" });
  } catch {
    response.status(502).json({
      ok: false,
      error: "Could not reach the organiser sheet.",
    });
  }
}
