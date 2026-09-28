import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as XLSXNS from "xlsx";

const XLSX = XLSXNS.default ?? XLSXNS;

const root = path.dirname(fileURLToPath(import.meta.url));
const sheetPath = path.join(root, "organizer", "MIB-registrations.xlsx");
const headers = [
  "Saved at",
  "Event",
  "Intent",
  "Name",
  "Email",
  "USN",
  "Branch",
  "Year",
  "Team size",
  "Note",
];

function ensureSheet() {
  fs.mkdirSync(path.dirname(sheetPath), { recursive: true });
  if (fs.existsSync(sheetPath)) return;
  const book = XLSX.utils.book_new();
  const sheet = XLSX.utils.aoa_to_sheet([headers]);
  sheet["!cols"] = headers.map((header) => ({ wch: Math.max(header.length + 2, 18) }));
  XLSX.utils.book_append_sheet(book, sheet, "Registrations");
  XLSX.writeFile(book, sheetPath);
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

let queue = Promise.resolve();

function appendRegistration(entry) {
  const run = queue.then(() => {
    ensureSheet();
    const book = XLSX.readFile(sheetPath);
    const sheet = book.Sheets[book.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    if (!rows.length) rows.push(headers);
    const savedAt = new Date().toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    rows.push([
      savedAt,
      entry.eventName || "",
      entry.intent === "next" ? "Next edition" : "This edition",
      entry.name || "",
      entry.email || "",
      entry.usn || "",
      entry.branch || "",
      entry.year || "",
      entry.team || "",
      entry.note || "",
    ]);
    const nextBook = XLSX.utils.book_new();
    const nextSheet = XLSX.utils.aoa_to_sheet(rows);
    nextSheet["!cols"] = headers.map((header) => ({ wch: Math.max(header.length + 2, 18) }));
    XLSX.utils.book_append_sheet(nextBook, nextSheet, "Registrations");
    XLSX.writeFile(nextBook, sheetPath);
  });
  queue = run.then(
    () => {},
    () => {}
  );
  return run;
}

function registrationApi() {
  ensureSheet();
  return {
    name: "registration-sheet",
    configureServer(server) {
      server.middlewares.use(handleRegistration);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleRegistration);
    },
  };
}

async function handleRegistration(request, response, next) {
  const url = request.url?.split("?")[0];
  if (url !== "/api/register") return next();
  if (request.method !== "POST") {
    response.statusCode = 405;
    response.end("Method not allowed");
    return;
  }
  try {
    const entry = JSON.parse(await readBody(request));
    if (!entry.name || !entry.eventName) {
      response.statusCode = 400;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ ok: false, error: "Name and event are required." }));
      return;
    }
    await appendRegistration(entry);
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ ok: true }));
  } catch (error) {
    console.error(error);
    const locked = error?.code === "EBUSY" || error?.code === "EPERM";
    response.statusCode = locked ? 423 : 500;
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({
        ok: false,
        error: locked
          ? "The organiser sheet is open in Excel. Close it, then submit again."
          : "Could not write the organiser sheet.",
      })
    );
  }
}

export default defineConfig({
  plugins: [react(), registrationApi()],
  server: { port: 5173, host: "127.0.0.1" },
});
