import {
  Blocks,
  Code2,
  Globe2,
  KeyRound,
  Server,
  Shield,
} from 'lucide-react';
import { technologies } from '../data/token';
import Reveal from './Reveal';
import './Technology.css';

const icons = {
  blockchain: Blocks,
  'smart-contract': Code2,
  web3: Globe2,
  wallet: KeyRound,
  api: Server,
  security: Shield,
};

export default function Technology() {
  return (
    <section
      id="technology"
      className="technology section"
      aria-labelledby="tech-heading"
    >
      <div className="container">
        <Reveal>
          <p className="section-label">Technology</p>
          <h2 id="tech-heading" className="section-title">
            Built with Technology
          </h2>
          <p className="section-lead">
            Core technology areas under consideration for RFS Coin. The stack
            may evolve as development continues.
          </p>
        </Reveal>

        <div className="technology__grid">
          {technologies.map((tech, i) => {
            const Icon = icons[tech.id] || Blocks;
            return (
              <Reveal key={tech.id} delay={Math.min((i % 3) + 1, 3)}>
                <article className="technology__card card">
                  <div className="technology__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3>{tech.title}</h3>
                  <p>{tech.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="placeholder-note">
            Technologies listed here are directional and may change during the
            development process.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
