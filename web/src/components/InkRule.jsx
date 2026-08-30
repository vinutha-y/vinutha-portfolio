import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { useReducedMotion } from '../lib/useReducedMotion';

// "Section dividers draw themselves left-to-right, like a ruled line being
// inked" — the plan's scroll-triggered motion, reused as a divider between
// sections on every page. Reduced motion: renders fully drawn, no ScrollTrigger.
export function InkRule({ color = 'var(--color-ink)' }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return undefined;

    const el = ref.current;
    gsap.set(el, { scaleX: 0, transformOrigin: 'left center' });
    const trigger = gsap.to(el, {
      scaleX: 1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      trigger.scrollTrigger?.kill();
      trigger.kill();
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      style={{
        height: 1,
        background: color,
        transform: reduced ? undefined : 'scaleX(0)',
      }}
      aria-hidden="true"
    />
  );
}
