import { Eye, Layers, Sparkles, Users } from 'lucide-react';
import { whyRfs } from '../data/token';
import Reveal from './Reveal';
import './WhyRfs.css';

const icons = {
  simple: Sparkles,
  transparent: Eye,
  community: Users,
  open: Layers,
};

export default function WhyRfs() {
  return (
    <section id="why" className="why section" aria-labelledby="why-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">Principles</p>
          <h2 id="why-heading" className="section-title">
            Why RFS?
          </h2>
          <p className="section-lead">
            Guiding ideas behind the project — not financial claims.
          </p>
        </Reveal>

        <div className="why__grid">
          {whyRfs.map((item, i) => {
            const Icon = icons[item.id] || Sparkles;
            return (
              <Reveal key={item.id} delay={Math.min(i + 1, 4)}>
                <article className="why__card card">
                  <div className="why__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
