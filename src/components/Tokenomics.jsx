import { tokenomics } from '../data/token';
import Reveal from './Reveal';
import './Tokenomics.css';

function DonutChart({ segments }) {
  const radius = 70;
  const stroke = 22;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg
      className="tokenomics__chart"
      viewBox="0 0 200 200"
      role="img"
      aria-label="Placeholder token allocation chart"
    >
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="rgba(0,26,84,0.25)"
        strokeWidth={stroke}
      />
      {segments.map((seg) => {
        const length = (seg.percent / 100) * circumference;
        const dasharray = `${length} ${circumference - length}`;
        const dashoffset = -offset;
        offset += length;

        return (
          <circle
            key={seg.id}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={dasharray}
            strokeDashoffset={dashoffset}
            strokeLinecap="butt"
            transform="rotate(-90 100 100)"
          />
        );
      })}
      <text
        x="100"
        y="96"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="700"
        fontFamily="Manrope, sans-serif"
      >
        RFS
      </text>
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fill="#a0a0a0"
        fontSize="9"
        fontFamily="Manrope, sans-serif"
      >
        Allocation
      </text>
    </svg>
  );
}

export default function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="tokenomics section"
      aria-labelledby="tokenomics-heading"
    >
      <div className="container">
        <Reveal>
          <p className="section-label">Tokenomics</p>
          <h2 id="tokenomics-heading" className="section-title">
            Allocation Overview
          </h2>
          <p className="section-lead">
            Illustrative categories for planning. Figures below are placeholders
            only.
          </p>
        </Reveal>

        <div className="tokenomics__layout">
          <Reveal delay={1}>
            <div className="tokenomics__chart-wrap card">
              <DonutChart segments={tokenomics.segments} />
            </div>
          </Reveal>

          <Reveal delay={2}>
            <ul className="tokenomics__legend">
              {tokenomics.segments.map((seg) => (
                <li key={seg.id} className="tokenomics__item">
                  <span
                    className="tokenomics__swatch"
                    style={{ background: seg.color }}
                    aria-hidden="true"
                  />
                  <span className="tokenomics__name">{seg.label}</span>
                  {/* Placeholder percent — replace with official allocation */}
                  <span className="tokenomics__pct">{seg.percent}%</span>
                </li>
              ))}
            </ul>
            <p className="placeholder-note">{tokenomics.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
