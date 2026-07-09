import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      el.style.left = (e.clientX - 10) + 'px';
      el.style.top  = (e.clientY - 10) + 'px';
    };

    const addHover = () => {
      document.querySelectorAll(
        'a, button, .stack-item, [data-hover]'
      ).forEach(node => {
        node.addEventListener('mouseenter', () => el.classList.add('hovered'));
        node.addEventListener('mouseleave', () => el.classList.remove('hovered'));
      });
    };

    document.addEventListener('mousemove', onMove);
    // slight delay so DOM is ready
    const t = setTimeout(addHover, 800);
    return () => {
      document.removeEventListener('mousemove', onMove);
      clearTimeout(t);
    };
  }, []);

  return <div id="cursor" ref={ref} />;
}
