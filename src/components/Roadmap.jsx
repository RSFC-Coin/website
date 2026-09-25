import { roadmap } from '../data/token';
import Reveal from './Reveal';
import './Roadmap.css';

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="roadmap section"
      aria-labelledby="roadmap-heading"
    >
      <div className="container">
        <Reveal>
          <p className="section-label">Roadmap</p>
          <h2 id="roadmap-heading" className="section-title">
            Development Path
          </h2>
          <p className="section-lead">
            Planned phases for the RFS Coin project. Status badges reflect
            current progress — nothing is marked complete until it is.
          </p>
        </Reveal>

        <ol className="roadmap__timeline">
          {roadmap.map((phase, i) => (
            <li key={phase.phase} className="roadmap__phase">
              <Reveal delay={Math.min(i + 1, 4)}>
                <article className="roadmap__card card">
                  <div className="roadmap__meta">
                    <span className="roadmap__phase-num">Phase {phase.phase}</span>
                    <span className="roadmap__badge">Planned</span>
                  </div>
                  <h3 className="roadmap__title">{phase.title}</h3>
                  <ul className="roadmap__items">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
