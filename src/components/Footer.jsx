import { SOCIALS } from '../data/portfolio';
import styles from './Footer.module.css';

const EmailIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
const GhIcon   = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84a9.56 9.56 0 012.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/></svg>;
const LiIcon   = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>;

const SOCIAL_LINKS = [
  { href: `mailto:${SOCIALS.email}`,    Icon: EmailIcon, label: 'Email'    },
  { href: SOCIALS.github,               Icon: GhIcon,    label: 'GitHub'   },
  { href: SOCIALS.linkedin,             Icon: LiIcon,    label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <div className={styles.logo}>Shreyansh Tripathi</div>
        <span className={styles.signature}>$PaceRunerz$</span>
      </div>

      <div className={styles.socials}>
        {SOCIAL_LINKS.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            className={styles.socBtn}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            <Icon />
          </a>
        ))}
      </div>

      <p className={styles.text}>Built bold ★  Full Stack Developer ★  Made with ❤️ by PaceRunerz </p>
      <p className={styles.copy}>&copy; 2026</p>
    </footer>
  );
}
