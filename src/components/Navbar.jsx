import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../data/token';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={close}>
          <span className="navbar__logo" aria-hidden="true">
            RFS
          </span>
          <span className="navbar__name">{siteConfig.name}</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#cta" className="btn btn-primary navbar__cta">
          Explore RFS
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`navbar__drawer ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul className="navbar__drawer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#cta" className="btn btn-primary" onClick={close}>
            Explore RFS
          </a>
        </nav>
      </div>
    </header>
  );
}
