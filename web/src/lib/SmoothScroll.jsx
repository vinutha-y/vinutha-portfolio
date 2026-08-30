import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from './useReducedMotion';

// Wraps the app in Lenis smooth scroll. Skipped entirely under
// prefers-reduced-motion — native scroll takes over instead, per the
// accessibility requirement that scroll-jacking must not run for those users.
export function SmoothScroll({ children }) {
  const reduced = useReducedMotion();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (reduced) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  return children;
}
