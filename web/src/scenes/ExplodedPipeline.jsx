import { useLayoutEffect, useRef } from 'react';
import { Edges, Html } from '@react-three/drei';
import { gsap } from '../lib/gsap';
import { colors, motion as motionTokens } from '../tokens';
import { useReducedMotion } from '../lib/useReducedMotion';

// The signature element: her real design process (research → wireframe →
// prototype → usability testing) drawn as four flat, unlit sheets —
// ink-edged, blueprint-tinted. No lighting rig on purpose: MeshBasicMaterial
// is unlit, which is what keeps this "flat ink-lined material," never an
// atmospheric glowing scene.
const LAYERS = [
  { label: 'RESEARCH', y: -1.05 },
  { label: 'WIREFRAME', y: -0.35 },
  { label: 'PROTOTYPE', y: 0.35 },
  { label: 'USER TEST', y: 1.05 },
];

export function ExplodedPipeline() {
  const groupRefs = useRef([]);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const nodes = groupRefs.current.filter(Boolean);

    if (reduced) {
      // Reduced motion: jump straight to the assembled diagram, no stagger.
      nodes.forEach((node, i) => {
        node.position.y = LAYERS[i].y;
        node.scale.setScalar(1);
      });
      return undefined;
    }

    nodes.forEach((node) => {
      node.position.y = 0;
      node.scale.setScalar(0.001);
    });

    const tl = gsap.timeline({ delay: 0.2 });
    nodes.forEach((node, i) => {
      const at = i * motionTokens.staggerStep;
      tl.to(node.scale, { x: 1, y: 1, z: 1, duration: motionTokens.explodeDuration, ease: 'back.out(1.7)' }, at);
      tl.to(node.position, { y: LAYERS[i].y, duration: motionTokens.explodeDuration, ease: motionTokens.explodeEase }, at);
    });

    return () => tl.kill();
  }, [reduced]);

  return (
    <group rotation={[0, Math.PI / 8, 0]}>
      {LAYERS.map((layer, i) => (
        <group key={layer.label} ref={(el) => { groupRefs.current[i] = el; }}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.7, 1.7]} />
            <meshBasicMaterial color={colors.blueprint} transparent opacity={0.16} side={2} />
            <Edges color={colors.ink} />
          </mesh>
          <Html position={[1.15, 0, 0]} style={{ pointerEvents: 'none' }} occlude={false}>
            <span
              style={{
                fontFamily: 'var(--font-field)',
                fontSize: 11,
                letterSpacing: '0.08em',
                color: 'var(--color-ink-soft)',
                whiteSpace: 'nowrap',
              }}
            >
              {layer.label}
            </span>
          </Html>
        </group>
      ))}
    </group>
  );
}
