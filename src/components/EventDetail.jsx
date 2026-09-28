import { useEffect, useState } from "react";
import InterestForm from "./InterestForm";
import { scrollBelowNav } from "../scroll";

export default function EventDetail({ event, onOpenStory }) {
  const [shot, setShot] = useState(0);
  const [copied, setCopied] = useState(false);
  const image = event.images[shot] || event.images[0];

  useEffect(() => {
    setShot(0);
    setCopied(false);
  }, [event.id]);

  const copyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(false);
      window.prompt("Copy this link", url);
    }
  };

  return (
    <article className="detail">
      <p className="detail-back">
        <a href="#events">Back to the board</a>
      </p>
      <div className="detail-grid">
        <div className="detail-gallery">
          <img className={image.kind === "poster" ? "is-poster" : ""} src={image.src} alt={image.alt} />
          <p className="caption">
            {image.caption}
            {image.credit ? <span> {image.credit}</span> : null}
          </p>
          {event.images.length > 1 && (
            <div className="thumbs">
              {event.images.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Photo ${index + 1}`}
                  aria-pressed={index === shot}
                  onClick={() => setShot(index)}
                >
                  <img src={item.src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="detail-copy">
          <p className="card-meta">
            <span className={`pill ${event.status}`}>{event.status}</span>
            <span>{event.category}</span>
            <span>{event.edition}</span>
          </p>
          <h1>{event.name}</h1>
          <p className="deck">{event.summary}</p>
          <dl className="meta">
            <div>
              <dt>When</dt>
              <dd>
                {event.dateLabel}
                <span>{event.dateDetail}</span>
                <span>{event.time}</span>
              </dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>{event.venue}</dd>
            </div>
          </dl>
          <div className="detail-actions">
            <button
              type="button"
              className="button"
              onClick={() => scrollBelowNav("register")}
            >
              {event.status === "upcoming" ? "Go to registration" : "Go to the form"}
            </button>
            {event.storyId && (
              <button type="button" className="button ghost" onClick={() => onOpenStory(event.storyId)}>
                Play the frames
              </button>
            )}
            <button type="button" className="text-button" onClick={copyLink}>
              {copied ? "Link copied" : "Copy link"}
            </button>
          </div>
        </div>
      </div>

      <div className="detail-body">
        <div>
          <h2>What it is</h2>
          <p>{event.description}</p>
          <h2>Who it’s for</h2>
          <ul>
            {event.eligibility.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="source-line">
            <a href={event.source.url} target="_blank" rel="noreferrer">
              {event.source.label}
            </a>
            {event.instagram !== event.source.url && (
              <a href={event.instagram} target="_blank" rel="noreferrer">
                Post on Instagram
              </a>
            )}
          </p>
        </div>
        <div id="register" className="register">
          <h2>{event.status === "upcoming" ? "Registration" : "Next edition"}</h2>
          <p>{event.registerNote}</p>
          <InterestForm event={event} intent={event.status === "upcoming" ? "interest" : "next"} />
        </div>
      </div>
    </article>
  );
}
