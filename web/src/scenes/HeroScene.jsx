import { Canvas } from '@react-three/fiber';
import { ExplodedPipeline } from './ExplodedPipeline';
import { isLowEndDevice } from '../lib/webgl';

// Loaded via React.lazy from Home.jsx so the three.js/@react-three/fiber
// chunk never blocks first paint. Degrades on mobile/low-end GPUs by
// capping DPR and dropping antialiasing rather than rendering the same
// scene at full cost everywhere.
export function HeroScene() {
  const lowEnd = isLowEndDevice();

  return (
    <Canvas
      orthographic
      camera={{ position: [6, 5, 6], zoom: 95, near: 0.1, far: 50 }}
      dpr={lowEnd ? 1 : [1, 2]}
      gl={{ antialias: !lowEnd, alpha: true, powerPreference: 'low-power' }}
      style={{ width: '100%', height: '100%' }}
    >
      <ExplodedPipeline />
    </Canvas>
  );
}
