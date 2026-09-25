import { stats } from '../data/token';
import Reveal from './Reveal';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats section" aria-label="Project statistics">
      <div className="container">
        <div className="stats__grid">
          {stats.map((item, i) => (
            <Reveal key={item.label} delay={Math.min(i + 1, 4)}>
              <article className="stats__card">
                {/* TODO: Replace placeholder values with official RFS Coin data */}
                <p className="stats__value">{item.value}</p>
                <p className="stats__label">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
