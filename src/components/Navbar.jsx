import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = ['about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>ST.</div>

      {/* Desktop links */}
      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={`${styles.link} ${active === id ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {id}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className={styles.burger}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span className={menuOpen ? styles.burgerLineOpen1 : styles.burgerLine} />
        <span className={menuOpen ? styles.burgerLineOpen2 : styles.burgerLine} />
        <span className={menuOpen ? styles.burgerLineOpen3 : styles.burgerLine} />
      </button>
    </nav>
  );
}
