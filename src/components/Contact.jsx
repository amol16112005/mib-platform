import { useEffect, useState } from "react";
import { accounts, posts } from "../data";
import { loadInterest, removeInterest } from "../storage";

const whatsapp = "https://chat.whatsapp.com/Hg4XEYoA2dQ1uTGfeY4nzM?mode=ems_share_t";

function formatWhen(iso) {
  try {
    return new Date(iso).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function Contact() {
  const [interest, setInterest] = useState([]);

  const refresh = () => setInterest(loadInterest());

  useEffect(() => {
    refresh();
    window.addEventListener("mib-saved", refresh);
    return () => window.removeEventListener("mib-saved", refresh);
  }, []);

  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <p className="index">04</p>
        <div>
          <h2>Contact and help</h2>
          <p>Questions about a night, a team, or where to stand when you arrive.</p>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Where to find MIB</h3>
          <p>
            Startup Street, R. H. Kulkarni Building
            <br />
            BVB Campus, Vidyanagar
            <br />
            Hubballi 580031
          </p>
          <ul className="contact-links">
            <li>
              <a href={whatsapp} target="_blank" rel="noreferrer">
                MIB WhatsApp group
              </a>
              <span>The live group for updates and questions</span>
            </li>
            <li>
              <a href={accounts.mib.url} target="_blank" rel="noreferrer">
                {accounts.mib.handle}
              </a>
              <span>Event posts</span>
            </li>
            <li>
              <a href={posts.pupaPage} target="_blank" rel="noreferrer">
                PUPA on kletech.ac.in
              </a>
              <span>The university’s write-up of the 9th edition</span>
            </li>
          </ul>
        </div>

        <div className="contact-card">
          <h3>Join the group</h3>
          <p>
            Help and announcements sit in the MIB WhatsApp group. Open it, join,
            and ask there.
          </p>
          <div className="about-links">
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
              Open WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-card contact-wide">
          <h3>Interest saved on this device</h3>
          <p className="quiet">
            On the live site, registrations go to the organiser’s Google Sheet. This list is only what this browser saved.
          </p>
          {interest.length === 0 ? (
            <p className="quiet">Nothing yet. Register from an event and it will land here.</p>
          ) : (
            <ul className="saved-list">
              {interest.map((row) => (
                <li key={row.id}>
                  <div>
                    <strong>{row.name}</strong>
                    <span>
                      {row.eventName} · {row.team} · {row.usn}
                    </span>
                    <span>{formatWhen(row.savedAt)}</span>
                  </div>
                  <button type="button" onClick={() => removeInterest(row.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
