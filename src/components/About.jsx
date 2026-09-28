import { accounts, shots } from "../data";

const points = [
  "Campus innovation and startup ecosystem updates",
  "Flagship journeys such as PUPA, E-Summit, Butterfly, and more",
  "Entrepreneurship, finance, and startup basics, in plain language",
  "Insights from founders, investors, and industry leaders",
  "Podcast episodes with entrepreneurs and founders on how the work actually goes",
  "Short, practical pieces on building, productivity, and maker life",
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-head">
        <p className="index">03</p>
        <div>
          <h2>About MIB</h2>
          <p>Ideas get built, tested, and scaled here.</p>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <img className="about-logo" src={shots.logo} alt="Make in BVB" />
          <p>
            Make in BVB (MIB) is the student-led innovation and entrepreneurship
            hub at KLE Technological University, BVB Campus, Hubballi, operating
            under C-SHINE. Home is Startup Street, R. H. Kulkarni Building,
            Vidyanagar, Hubballi 580031.
          </p>
          <p>
            At MIB, ideas don’t stay on paper. The mission is to shape students
            into problem solvers, makers, and value creators. The line on the
            lion is “Inspiring minds to innovate.”
          </p>
          <ul className="about-points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p>
            Event posts are on {accounts.mib.handle}.
          </p>
          <div className="about-links">
            <a className="button" href={accounts.mib.url} target="_blank" rel="noreferrer">
              {accounts.mib.handle}
            </a>
          </div>
        </div>
        <div className="mosaic">
          <img src="/media/front.jpg" alt="The main block and statue at KLE Tech Hubballi" />
          <img src="/media/gate.jpg" alt="The campus gate and pavilion" />
          <img src="/media/night.jpg" alt="The BVB entrance at night" />
        </div>
      </div>
    </section>
  );
}
