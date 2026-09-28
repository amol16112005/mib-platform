import { highlights } from "../data";

export default function Highlights() {
  return (
    <section className="highlights" id="highlights">
      <div className="section-head light">
        <p className="index">02</p>
        <div>
          <h2>What the campus already did</h2>
          <p>
            A short record of results and nights. Open a card for the full
            edition, or stay here and scroll the row.
          </p>
        </div>
      </div>
      <div className="reel">
        {highlights.map((item) => (
          <a
            className="highlight"
            key={item.id}
            href={item.href}
            {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <img src={item.image} alt={item.alt} />
            <div>
              <p>{item.when}</p>
              <h3>{item.title}</h3>
              <strong>{item.result}</strong>
              <span>{item.detail}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
