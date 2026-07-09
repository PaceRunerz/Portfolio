import { useInView } from '../hooks/useInView';
import { PROJECTS } from '../data/portfolio';
import styles from './Projects.module.css';

const GH_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84a9.56 9.56 0 012.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
);

const LIVE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h7l-1 8 11-12h-7l1-8z"/>
  </svg>
);

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${(index % 4) * 0.12}s` }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.topRow}>
          <div className={styles.linkGroup}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghLink}
              title="View on GitHub"
              aria-label="GitHub repo"
            >
              {GH_ICON}
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveLink}
                title="View Live Demo"
                aria-label="Live demo"
              >
                {LIVE_ICON}
              </a>
            )}
          </div>
          <span className={styles.num}>{project.num}</span>
        </div>

        <div
          className={styles.badge}
          style={{
            background: project.badgeColor,
            color: project.badgeTextColor || '#000',
          }}
        >
          {project.badge}
        </div>
        <div className={styles.name}>{project.name}</div>
      </div>

      <div className={styles.body}>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.techRow}>
          {project.tech.map(t => (
            <span key={t} className={styles.pill}>{t}</span>
          ))}
        </div>
      </div>

      {/* hover glow accent */}
      <div className={styles.glowAccent} />
    </div>
  );
}

export default function Projects() {
  const [hRef, hIn] = useInView();

  return (
    <section className={styles.projects} id="projects">
      <div ref={hRef} className={`${styles.header} reveal ${hIn ? 'visible' : ''}`}>
        <div>
          <div className="section-label">Projects</div>
          <h2 className={styles.title}>What I've<br />Built.</h2>
        </div>
        <p className={styles.headerNote}>
          Four shipped builds — three live web platforms, one Android app. Click 🔗 for source, 🚀 to try it live.
        </p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
