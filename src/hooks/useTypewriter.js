import { useState, useEffect } from 'react';

export function useTypewriter(phrases, typingSpeed = 80, deletingSpeed = 50, pauseMs = 1400) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let timeout;

    if (!deleting && charIndex <= phrase.length) {
      timeout = setTimeout(() => {
        setText(phrase.slice(0, charIndex));
        setCharIndex(i => i + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex > phrase.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(phrase.slice(0, charIndex));
        setCharIndex(i => i - 1);
      }, deletingSpeed);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setPhraseIndex(i => (i + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
