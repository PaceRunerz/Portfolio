export default function Marquee({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-wrap ${reverse ? 'rev' : ''}`} aria-hidden="true">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            {i < doubled.length - 1 && <span className="dot"> ★ </span>}
          </span>
        ))}
      </div>
    </div>
  );
}
