import { useEffect, useRef } from 'react';

const COLORS = ['#FF6B6B', '#FFD93D', '#C4B5FD', '#000'];

export default function Particles() {
  const cvs = useRef(null);

  useEffect(() => {
    const canvas = cvs.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, animId;

    const particles = Array.from({ length: 38 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 3 + Math.random() * 4,
      vx: (Math.random() - .5) * .4,
      vy: (Math.random() - .5) * .4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: .2 + Math.random() * .3,
    }));

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle   = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.globalAlpha = 1;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={cvs}
      id="particles-canvas"
      style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: .35,
      }}
    />
  );
}
