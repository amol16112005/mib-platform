import { useEffect, useState } from "react";
import { shots } from "../data";
import { scrollBelowNav } from "../scroll";

const links = [
  { href: "#events", label: "Events" },
  { href: "#highlights", label: "Highlights" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(() => window.location.hash || "#top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => {
      setHash(window.location.hash || "#top");
      setOpen(false);
    };
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onEvents = hash.startsWith("#event") || hash === "#events";
  const atTop = hash === "#top" || hash === "";
  const ghost = atTop && !scrolled && !open;

  const go = (href) => {
    setOpen(false);
    if ((window.location.hash || "#top") === href) {
      window.requestAnimationFrame(() => scrollBelowNav(href.slice(1)));
    }
  };

  return (
    <header className={`nav ${ghost ? "ghost" : "solid"}`}>
      <a className="brand" href="#top">
        <span className="logo-clip">
          <img src={shots.logo} alt="" />
        </span>
        <span>
          <strong>MIB</strong>
          <small>Make in BVB</small>
        </span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className={open ? "open" : ""}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => go(link.href)}
            aria-current={
              link.href === "#events"
                ? onEvents
                  ? "page"
                  : undefined
                : hash === link.href
                  ? "page"
                  : undefined
            }
          >
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#events" onClick={() => go("#events")}>
          Join an event
        </a>
      </nav>
    </header>
  );
}
