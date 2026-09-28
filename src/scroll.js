export function navOffset() {
  const nav = document.querySelector(".nav");
  return nav?.getBoundingClientRect().height ?? 84;
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

export function openHash(hash) {
  const next = hash.startsWith("#") ? hash : `#${hash}`;
  const changed = (window.location.hash || "#top") !== next;
  if (changed) {
    history.pushState(null, "", next);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }
  const scroll = () => {
    if (next === "#top") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    scrollBelowNav(next.slice(1));
  };
  // Wait until a closing phone menu has released body overflow.
  window.setTimeout(scroll, 0);
}
