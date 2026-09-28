export function navOffset() {
  const nav = document.querySelector(".nav");
  return (nav?.getBoundingClientRect().height ?? 80) + 16;
}

export function scrollBelowNav(id) {
  const target = id ? document.getElementById(id) : null;
  if (!target) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return;
  }
  const top = target.getBoundingClientRect().top + window.scrollY - navOffset();
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
}
