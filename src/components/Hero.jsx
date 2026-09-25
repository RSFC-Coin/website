import { ArrowRight } from 'lucide-react';
import CoinVisual from './CoinVisual';
import Reveal from './Reveal';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <Reveal>
            <p className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              RFS COIN • DIGITAL ASSET PROJECT
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h1 id="hero-heading" className="hero__title">
              Building a Simple Digital Asset for the{' '}
              <span className="hero__accent">Future</span>.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="hero__sub">
              RFS Coin is a cryptocurrency project focused on building a simple,
              transparent, and community-oriented digital asset ecosystem.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="hero__actions">
              <a href="#cta" className="btn btn-primary">
                Explore RFS
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#token" className="btn btn-secondary">
                View Token Info
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={2}>
          <CoinVisual size={380} />
        </Reveal>
      </div>
    </section>
  );
}
