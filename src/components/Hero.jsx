import { useEffect, useState } from "react";
import { heroFrames, shots } from "../data";

const FRAME_MS = 5600;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const frame = heroFrames[index];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % heroFrames.length);
    }, FRAME_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="cinema" id="top">
      <div className="cinema-still" key={frame.src}>
        <img
          className={frame.kind === "poster" ? "is-poster" : ""}
          src={frame.src}
          alt={frame.alt}
        />
      </div>
      <div className="cinema-shade" />
      <div className="cinema-copy">
        <div className="title-row">
          <img className="brand-plate" src={shots.logo} alt="Make in BVB" />
          <div>
            <p className="kicker on-dark">KLE Technological University · Hubballi</p>
            <h1>Find an MIB event and join it.</h1>
            <p className="deck deck-long">
              Make in BVB is the student body for building, pitching, and the
              quadrangle nights in between. The stills are the campus. The
              one-sheets are the events.
            </p>
            <p className="deck deck-short">Student events at KLE Tech, Hubballi.</p>
            <div className="hero-actions">
              <a className="button" href="#events">
                See the board
              </a>
              <a className="button ghost light" href="#about">
                What MIB is
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="edge-code">Make in BVB · Hubballi</p>
      <div className="cinema-caption">
        <span>
          {String(index + 1).padStart(2, "0")} / {String(heroFrames.length).padStart(2, "0")}
        </span>
        <strong>{frame.kicker}</strong>
        <p>{frame.caption}</p>
      </div>
      <div className="cinema-strip" role="tablist" aria-label="Campus and poster frames">
        {heroFrames.map((item, itemIndex) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={itemIndex === index}
            aria-label={item.kicker}
            onClick={() => setIndex(itemIndex)}
          >
            <img src={item.src} alt="" />
          </button>
        ))}
      </div>
    </section>
  );
}
