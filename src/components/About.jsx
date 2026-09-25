import Reveal from './Reveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container about__grid">
        <Reveal>
          <div className="about__copy">
            <p className="section-label">About</p>
            <h2 id="about-heading" className="section-title">
              What is RFS Coin?
            </h2>
            <p className="section-lead about__lead">
              RFS Coin is a cryptocurrency project currently under development.
              The goal is to establish a digital asset that prioritizes clarity,
              simplicity, and a community-oriented approach.
            </p>
            <p className="about__text">
              Rather than overpromising features, RFS Coin focuses on building
              foundations carefully — branding, documentation, and technical
              planning — so the project can grow in a measured and transparent
              way.
            </p>
            <p className="about__text">
              As development progresses, official details such as network choice,
              token parameters, and distribution will be published here.
            </p>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="about__visual card" aria-hidden="true">
            <svg
              className="about__network"
              viewBox="0 0 400 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#001A54" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#001A54" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Connections */}
              <g stroke="#001A54" strokeWidth="1" opacity="0.55">
                <line x1="80" y1="80" x2="200" y2="160" />
                <line x1="200" y1="160" x2="320" y2="70" />
                <line x1="200" y1="160" x2="120" y2="250" />
                <line x1="200" y1="160" x2="300" y2="240" />
                <line x1="80" y1="80" x2="120" y2="250" />
                <line x1="320" y1="70" x2="300" y2="240" />
                <line x1="80" y1="80" x2="160" y2="40" />
                <line x1="320" y1="70" x2="360" y2="140" />
                <line x1="120" y1="250" x2="200" y2="290" />
                <line x1="300" y1="240" x2="220" y2="290" />
              </g>
              {/* Node glows */}
              <circle cx="200" cy="160" r="36" fill="url(#nodeGlow)" />
              <circle cx="80" cy="80" r="22" fill="url(#nodeGlow)" />
              <circle cx="320" cy="70" r="22" fill="url(#nodeGlow)" />
              {/* Nodes */}
              <circle cx="200" cy="160" r="10" fill="#000" stroke="#001A54" strokeWidth="2" />
              <circle cx="80" cy="80" r="7" fill="#000" stroke="#001A54" strokeWidth="1.5" />
              <circle cx="320" cy="70" r="7" fill="#000" stroke="#001A54" strokeWidth="1.5" />
              <circle cx="120" cy="250" r="6" fill="#000" stroke="#001A54" strokeWidth="1.5" />
              <circle cx="300" cy="240" r="6" fill="#000" stroke="#001A54" strokeWidth="1.5" />
              <circle cx="160" cy="40" r="5" fill="#000" stroke="#2A4A8A" strokeWidth="1" />
              <circle cx="360" cy="140" r="5" fill="#000" stroke="#2A4A8A" strokeWidth="1" />
              <circle cx="200" cy="290" r="5" fill="#000" stroke="#2A4A8A" strokeWidth="1" />
              <circle cx="220" cy="290" r="4" fill="#000" stroke="#2A4A8A" strokeWidth="1" />
              <text
                x="200"
                y="164"
                textAnchor="middle"
                fill="#fff"
                fontSize="7"
                fontFamily="Manrope, sans-serif"
                fontWeight="700"
              >
                RFS
              </text>
            </svg>
            <p className="about__visual-caption">Network abstraction</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
