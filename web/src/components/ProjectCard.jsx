import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/gsap';
import { motion as motionTokens } from '../tokens';
import { useReducedMotion } from '../lib/useReducedMotion';
import { Tag } from './Tag';
import styles from './ProjectCard.module.css';

// Hover/focus "explode-and-settle" — the hero's assembly gesture (see
// scenes/ExplodedPipeline.jsx), replayed at card scale: thumbnail, title,
// and tag row separate onto their own depth planes for a beat, then settle
// back to rest. Same motion tokens as the hero (staggerStep between layers,
// explodeEase, settleDuration as the full out-and-back duration) so both
// gestures read as one motion language rather than two different ones.
const OFFSETS = [
  { y: -10 }, // thumbnail lifts
  { y: -4, x: 6 }, // title drifts up and right
  { y: 10 }, // tag row drops
];

export function ProjectCard({ project, featured = false }) {
  const { slug, title, oneLiner, tags, thumb, thumbAlt } = project;
  const nodeRefs = useRef([]);
  const timelineRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return undefined;

    const nodes = nodeRefs.current.filter(Boolean);
    const half = motionTokens.settleDuration / 2;

    const tl = gsap.timeline({ paused: true, defaults: { ease: motionTokens.explodeEase } });
    nodes.forEach((node, i) => {
      const at = i * motionTokens.staggerStep;
      tl.to(node, { ...OFFSETS[i], duration: half, yoyo: true, repeat: 1 }, at);
    });
    timelineRef.current = tl;

    return () => tl.kill();
  }, [reduced]);

  const play = () => {
    if (reduced) return;
    timelineRef.current?.restart();
  };

  return (
    <Link
      to={`/work/${slug}`}
      className={styles.card}
      data-featured={featured}
      onMouseEnter={play}
      onFocus={play}
    >
      <div
        ref={(el) => { nodeRefs.current[0] = el; }}
        className={styles.thumb}
        aria-hidden="true"
      >
        <img className={styles.thumbImg} src={thumb} alt={thumbAlt} />
      </div>

      <div className={styles.meta}>
        <h3 ref={(el) => { nodeRefs.current[1] = el; }} className={styles.title}>
          {title}
        </h3>
        {oneLiner && <p className={styles.oneLiner}>{oneLiner}</p>}
        <div ref={(el) => { nodeRefs.current[2] = el; }} className={styles.tags}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
