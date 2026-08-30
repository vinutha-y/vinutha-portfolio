import { useEffect, useState } from 'react';

// Single source of truth for prefers-reduced-motion. Any component driving
// continuous rotation, ambient motion, or scroll-jacking must gate on this
// and fall back to an instant/minimal state instead.
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
