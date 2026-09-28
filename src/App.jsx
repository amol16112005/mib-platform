import { useEffect, useState } from "react";
import { accounts, getEvent } from "./data";
import About from "./components/About";
import Contact from "./components/Contact";
import EventDetail from "./components/EventDetail";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import Stories from "./components/Stories";
import StoryViewer from "./components/StoryViewer";
import { scrollBelowNav } from "./scroll";

function Missing() {
  return (
    <section className="missing">
      <p className="kicker">Missing card</p>
      <h1>That event isn’t on the board.</h1>
      <a className="button" href="#events">
        Back to events
      </a>
    </section>
  );
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash || "#top");
  const [storyId, setStoryId] = useState(null);

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "#top");
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  useEffect(() => {
    setStoryId(null);
  }, [hash]);

  const eventId = hash.startsWith("#event/") ? decodeURIComponent(hash.slice("#event/".length)) : "";
  const event = eventId ? getEvent(eventId) : null;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (eventId || !hash || hash === "#top") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }
      scrollBelowNav(hash.slice(1));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash, eventId]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        {event ? (
          <EventDetail event={event} onOpenStory={setStoryId} />
        ) : eventId ? (
          <Missing />
        ) : (
          <>
            <Hero />
            <Stories onOpen={setStoryId} />
            <Events />
            <Highlights />
            <About />
            <Contact />
          </>
        )}
      </main>
      <footer className="footer">
        <p>Make in BVB · KLE Technological University, Hubballi</p>
        <p>
          A season window is not a locked date. Confirm it on{" "}
          <a href={accounts.mib.url} target="_blank" rel="noreferrer">
            {accounts.mib.handle}
          </a>
          .
        </p>
      </footer>
      {storyId && (
        <StoryViewer key={storyId} storyId={storyId} onClose={() => setStoryId(null)} />
      )}
    </>
  );
}
