import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import { STATS } from '../data/portfolio';
import styles from './About.module.css';

function StatCard({ stat, active }) {
  const value = useCounter(stat.target, stat.suffix, active);
  return (
    <div className={styles.statCard}>
      <div className={styles.statNum} style={{ color: stat.color }}>{value}</div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  );
}

export default function About() {
  const [leftRef, leftIn] = useInView();
  const [rightRef, rightIn] = useInView();

  return (
    <section className={styles.about} id="about">
      {/* LEFT */}
      <div ref={leftRef} className={`${styles.left} reveal ${leftIn ? 'visible' : ''}`}>
        <div className="section-label">About Me</div>
        <h2 className={styles.title}>Security-Driven<br />Developer.</h2>
        <p className={styles.text}>
          I'm a developer who sees security not as an afterthought, but as a foundation.
          I build digital experiences where elegant design meets robust protection —
          where every interface element is intuitive and every line of code is defensible.
        </p>
        <p className={styles.text}>
          From frontend polish to backend resilience, I create solutions that users
          trust and systems that last.
        </p>
        <p className={styles.text} style={{ borderLeft: '4px solid #000', paddingLeft: '1rem' }}>
          Beyond the keyboard, I'm drawn to the intersection of creativity and logic.
          I explore new frameworks, dissect security patterns, and find inspiration in
          unexpected places — whether that's a clever API design or a perfectly
          structured argument. Every curiosity feeds into building something better.
        </p>

        {/* Fun fact ticker */}
        <div className={styles.funFact}>
          <span className={styles.funFactLabel}>Fun Fact</span>
          <span>I debug with console.log like a professional 🔥</span>
        </div>
      </div>

      {/* RIGHT — stat cards */}
      <div ref={rightRef} className={styles.right}>
        {STATS.map((stat, i) => (
          <div
            key={stat.id}
            className={`reveal ${rightIn ? 'visible' : ''}`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <StatCard stat={stat} active={rightIn} />
          </div>
        ))}
      </div>
    </section>
  );
}
