import { useRef, useEffect } from 'react';
import { SKILLS } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import styles from './Skills.module.css';

function StackCard({ skill, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : ''} ${skill.wide ? styles.wide : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* rainbow top bar */}
      <div className={styles.topBar} />
      {/* shine sweep */}
      <div className={styles.shine} />

      <div className={styles.cardHead}>
        <span className={styles.emoji}>{skill.emoji}</span>
        <h3 className={styles.cardTitle}>{skill.title}</h3>
      </div>
      <div className={styles.tagList}>
        {skill.items.map((item, ii) => (
          <span
            key={item}
            className={styles.tag}
            style={{ transitionDelay: inView ? `${index * 0.07 + ii * 0.04}s` : '0s' }}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  const [hRef, hIn] = useInView();

  return (
    <section className={styles.skills} id="skills">
      <div ref={hRef} className={`${styles.header} reveal ${hIn ? 'visible' : ''}`}>
        <div className="section-label" style={{ background: 'var(--yellow)' }}>Skills</div>
        <h2 className={styles.title}>Tech Stack</h2>
        <p className={styles.subtitle}>What I Build With + Core Fundamentals</p>
      </div>

      <div className={styles.grid}>
        {SKILLS.map((skill, i) => (
          <StackCard key={skill.title} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
