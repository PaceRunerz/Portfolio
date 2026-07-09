import { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { TYPEWRITER_PHRASES, SOCIALS } from '../data/portfolio';
import styles from './Hero.module.css';

function LetterGlitch({ containerId }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const glitchColors = ['#2b4539', '#61dca3', '#61b3dc', '#FFD93D'];
    const glitchSpeed = 50;
    const chars = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789');
    const fontSize = 16, charW = 10, charH = 20;
    const ctx = canvas.getContext('2d');
    let animId, resizeT, lastT = Date.now();
    let grid = { columns: 0, rows: 0 }, letters = [];

    const randChar  = () => chars[Math.floor(Math.random() * chars.length)];
    const randColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)];
    const hexRgb = h => { const e = h.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(_,r,g,b)=>r+r+g+g+b+b); const m=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); return m?{r:parseInt(m[1],16),g:parseInt(m[2],16),b:parseInt(m[3],16)}:null; };
    const lerp = (s,e,f) => `rgb(${Math.round(s.r+(e.r-s.r)*f)},${Math.round(s.g+(e.g-s.g)*f)},${Math.round(s.b+(e.b-s.b)*f)})`;

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px'; canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(rect.width / charW), rows = Math.ceil(rect.height / charH);
      grid = { columns: cols, rows };
      letters = Array.from({ length: cols * rows }, () => ({ char: randChar(), color: randColor(), targetColor: randColor(), progress: 1 }));
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.font = `${fontSize}px monospace`; ctx.textBaseline = 'top';
      letters.forEach((l, i) => { ctx.fillStyle = l.color; ctx.fillText(l.char, (i % grid.columns) * charW, Math.floor(i / grid.columns) * charH); });
    };

    const update = () => {
      const n = Math.max(1, Math.floor(letters.length * .05));
      for (let i = 0; i < n; i++) {
        const l = letters[Math.floor(Math.random() * letters.length)];
        if (!l) continue;
        l.char = randChar(); l.targetColor = randColor(); l.progress = 0;
      }
    };

    const smooth = () => {
      let need = false;
      letters.forEach(l => {
        if (l.progress < 1) {
          l.progress = Math.min(1, l.progress + .05);
          const s = hexRgb(l.color), e = hexRgb(l.targetColor);
          if (s && e) { l.color = lerp(s, e, l.progress); need = true; }
        }
      });
      if (need) draw();
    };

    const animate = () => {
      const now = Date.now();
      if (now - lastT >= glitchSpeed) { update(); draw(); lastT = now; }
      smooth();
      animId = requestAnimationFrame(animate);
    };

    init(); animate();
    window.addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(() => { cancelAnimationFrame(animId); init(); animate(); }, 120); }, { passive: true });
    return () => { cancelAnimationFrame(animId); clearTimeout(resizeT); };
  }, [containerId]);

  return <canvas ref={canvasRef} className={styles.glitchCanvas} />;
}

export default function Hero() {
  const text = useTypewriter(TYPEWRITER_PHRASES);

  return (
    <section className={styles.hero}>
      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.badge}>⚡ Available for Opportunities</div>

        <h1 className={styles.name}>
          <span className={styles.stroke}>SHREYANSH</span><br />
          <span>TRIPATHI</span>
        </h1>

        <div className={styles.role}>
          {text}<span className={styles.cursor}>|</span>
        </div>

        <p className={styles.desc}>
          Building intelligent, security-driven web products — from UI to APIs to
          encrypted systems — that actually ship and matter.
        </p>

        <div className={styles.btns}>
          <a href="#projects" className="btn btn-red">View Projects →</a>
          <a href="#contact"  className="btn btn-white">Let's Talk</a>
          <a href="Resume.pdf" download className="btn btn-yellow">Grab My CV</a>
        </div>

        {/* Social quick links under buttons */}
        <div className={styles.quickSocials}>
          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className={styles.socialChip}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.84a9.56 9.56 0 012.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/></svg>
            PaceRunerz
          </a>
          <a href={`mailto:${SOCIALS.email}`} className={styles.socialChip}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Email Me
          </a>
        </div>
      </div>

      {/* RIGHT — glitch canvas */}
      <div className={styles.right} id="hero-glitch-container">
        <LetterGlitch containerId="hero-glitch-container" />
        <div className={styles.vignOuter} />
        <div className={styles.vignCenter} />

        {/* Spinning star decorations */}
        <span className={styles.star} style={{ top:'15%', left:'10%', fontSize:'2rem', color:'#FFD93D' }}>✦</span>
        <span className={styles.star} style={{ top:'70%', right:'8%', fontSize:'1.5rem', color:'#FF6B6B', animationDuration:'14s', animationDirection:'reverse' }}>★</span>
        <span className={styles.star} style={{ bottom:'12%', left:'22%', fontSize:'2.5rem', color:'#C4B5FD', animationDuration:'8s' }}>✦</span>

        <div className={styles.rightContent}>
          <div className={styles.floatingCard}><span>Full Stack + Security</span></div>
          <span className={styles.bigNumber}>01</span>
          <div className={styles.badgeRow}>
            <div className={styles.dotBadge}>9 Projects Shipped</div>
            <div className={styles.sticker}>Integrated MTech Student</div>
          </div>
        </div>
      </div>
    </section>
  );
}
