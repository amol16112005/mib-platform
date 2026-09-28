import { stories } from "../data";

export default function Stories({ onOpen }) {
  return (
    <section className="stories" aria-label="Event frames">
      <div className="stories-head">
        <h2>Frames</h2>
        <p>Short sequences from the season. Tap one, then open the event.</p>
      </div>
      <div className="rings">
        {stories.map((story) => (
          <button key={story.id} type="button" className="ring" onClick={() => onOpen(story.id)}>
            <span className="ring-photo">
              <img src={story.frames[0].src} alt="" />
            </span>
            <span className="ring-label">{story.label}</span>
            <span className="ring-account">{story.account.handle}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
