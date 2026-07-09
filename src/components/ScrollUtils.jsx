import { useEffect, useState } from 'react';

export default function ScrollUtils() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const pct = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(pct, 100));
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      {/* Back to top */}
      <button
        id="back-to-top"
        className={showTop ? 'visible' : ''}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}
