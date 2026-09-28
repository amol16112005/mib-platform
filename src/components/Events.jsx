import { useMemo, useState } from "react";
import { events, filters, season, shots } from "../data";

const sheets = [
  { href: "#event/ticket-to-pupa", src: shots.ticket2026, title: "Ticket to PUPA", meta: "25 Nov 2026" },
  { href: "#event/pupa", src: shots.pupa10, title: "PUPA 10", meta: "14 Mar 2027" },
  { href: "#event/spin-pitch", src: shots.spinPoster, title: "Spin Pitch", meta: "9 May 2026" },
  { href: "#event/venturevibe", src: shots.venturePoster, title: "VentureVibe 2.0", meta: "8 Apr 2025" },
  { href: "#event/pupa-9", src: shots.pupa9, title: "PUPA 9", meta: "14 Mar 2026" },
  { href: "#event/ticket-2025", src: shots.ticket, title: "Ticket 2025", meta: "25 Nov 2025" },
];

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return events
      .filter((event) => {
        const haystack = [event.name, event.venue, event.category, event.summary, event.dateLabel, event.edition]
          .join(" ")
          .toLowerCase();
        if (needle && !haystack.includes(needle)) return false;
        if (filter === "Upcoming" || filter === "Past") return event.status === filter.toLowerCase();
        if (filter !== "All") return event.category === filter;
        return true;
      })
      .sort((a, b) => {
        if (a.status !== b.status) return a.status === "upcoming" ? -1 : 1;
        if (a.status === "upcoming") return a.sort < b.sort ? -1 : 1;
        return a.sort < b.sort ? 1 : -1;
      });
  }, [filter, query]);

  return (
    <section className="section" id="events">
      <div className="section-head">
        <p className="index">01</p>
        <div>
          <h2>The board</h2>
          <p>
            Upcoming nights first. Past editions stay searchable so you can see
            the shape of a season before you put your name down.
          </p>
        </div>
      </div>

      <div className="sheets">
        {sheets.map((sheet) => (
          <a className="sheet" key={sheet.href} href={sheet.href}>
            <img src={sheet.src} alt="" />
            <span>
              <strong>{sheet.title}</strong>
              <em>{sheet.meta}</em>
            </span>
          </a>
        ))}
      </div>

      <ol className="season">
        {season.map((beat) => (
          <li key={beat.name}>
            <a href={beat.href}>
              <span>{beat.when}</span>
              <strong>{beat.name}</strong>
              <em>{beat.note}</em>
            </a>
          </li>
        ))}
      </ol>

      <div className="tools">
        <form role="search" onSubmit={(submitEvent) => submitEvent.preventDefault()}>
          <label>
            Search events
            <input
              type="search"
              value={query}
              onChange={(changeEvent) => setQuery(changeEvent.target.value)}
              placeholder="Try PUPA, quadrangle, pitch"
            />
          </label>
        </form>
        <div className="chips" role="toolbar" aria-label="Filter events">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="count">
        {visible.length} {visible.length === 1 ? "event" : "events"}
        {query ? ` for “${query.trim()}”` : ""}
      </p>

      {visible.length === 0 ? (
        <div className="empty">
          <p>Nothing on the board matches that.</p>
          <button
            type="button"
            className="button ghost"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <div className="cards">
          {visible.map((event) => (
            <a className="card" key={event.id} href={`#event/${event.id}`}>
              <div className={`card-media${event.images[0].kind === "poster" ? " is-poster" : ""}`}>
                <img src={event.images[0].src} alt="" />
                {event.images[1] && <img className="card-alt" src={event.images[1].src} alt="" />}
              </div>
              <div className="card-body">
                <p className="card-meta">
                  <span className={`pill ${event.status}`}>{event.status}</span>
                  <span>{event.category}</span>
                </p>
                <h3>{event.name}</h3>
                <p className="card-when">
                  {event.dateLabel}
                  <span>{event.venue}</span>
                </p>
                <p>{event.summary}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
