const INTEREST_KEY = "mib-interest";

function read(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(key, rows) {
  localStorage.setItem(key, JSON.stringify(rows.slice(0, 40)));
  window.dispatchEvent(new Event("mib-saved"));
}

export function loadInterest() {
  return read(INTEREST_KEY);
}

export function saveInterest(entry) {
  const next = [{ ...entry, id: crypto.randomUUID(), savedAt: new Date().toISOString() }, ...read(INTEREST_KEY)];
  write(INTEREST_KEY, next);
  return next;
}

export function removeInterest(id) {
  write(INTEREST_KEY, read(INTEREST_KEY).filter((row) => row.id !== id));
}
