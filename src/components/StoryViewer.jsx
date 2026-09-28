import { useEffect, useRef, useState } from "react";
import { getStory } from "../data";

const FRAME_MS = 4600;

export default function StoryViewer({ storyId, onClose }) {
  const story = getStory(storyId);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const closeRef = useRef(null);
  const previous = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!story) return undefined;
    previous.current = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add("story-open");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPaused(reduce);

    const onKey = (event) => {
      if (event.key === "Escape") onCloseRef.current();
      if (event.key === "ArrowRight") {
        setIndex((value) => Math.min(story.frames.length - 1, value + 1));
      }
      if (event.key === "ArrowLeft") setIndex((value) => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("story-open");
      window.removeEventListener("keydown", onKey);
      previous.current?.focus?.();
    };
  }, [story]);

  useEffect(() => {
    if (!story || paused) return undefined;
    const timer = window.setTimeout(() => {
      setIndex((value) => (value + 1) % story.frames.length);
    }, FRAME_MS);
    return () => window.clearTimeout(timer);
  }, [story, index, paused]);

  if (!story) return null;
  const frame = story.frames[index];

  const step = (direction) => {
    setIndex((value) => {
      const next = value + direction;
      if (next < 0) return 0;
      if (next >= story.frames.length) return story.frames.length - 1;
      return next;
    });
  };

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={`${story.label} frames`}>
      <div className="viewer-card">
        <div className="progress" aria-hidden="true">
          {story.frames.map((item, itemIndex) => (
            <span key={item.src} className={itemIndex <= index ? "done" : ""}>
              {itemIndex === index && !paused && <i style={{ animationDuration: `${FRAME_MS}ms` }} />}
              {itemIndex < index && <i className="full" />}
            </span>
          ))}
        </div>
        <div className="viewer-top">
          <p>
            {story.label}
            <span>{story.account.handle}</span>
          </p>
          <div className="viewer-actions">
            <button type="button" onClick={() => setPaused((value) => !value)}>
              {paused ? "Play" : "Pause"}
            </button>
            <button ref={closeRef} type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        <img className={frame.kind === "poster" ? "is-poster" : ""} src={frame.src} alt={frame.alt} />
        <button className="zone left" type="button" aria-label="Previous frame" onClick={() => step(-1)} />
        <button className="zone right" type="button" aria-label="Next frame" onClick={() => step(1)} />
        <div className="viewer-copy">
          <p>{frame.caption}</p>
          <small>{frame.credit}</small>
          <div className="viewer-links">
            {story.eventId && (
              <a className="button" href={`#event/${story.eventId}`} onClick={onClose}>
                Open the event
              </a>
            )}
            <a className="button ghost light" href={story.account.url} target="_blank" rel="noreferrer">
              {story.account.handle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
