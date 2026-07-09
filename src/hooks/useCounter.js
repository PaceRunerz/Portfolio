import { useState, useEffect } from 'react';

export function useCounter(target, suffix, active, duration = 1400) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      setDisplay(Math.floor(eased * target) + suffix);
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, suffix, duration]);

  return display;
}
