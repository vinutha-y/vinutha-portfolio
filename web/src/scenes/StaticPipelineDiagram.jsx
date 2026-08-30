import styles from './StaticPipelineDiagram.module.css';

const LAYERS = ['USER TEST', 'PROTOTYPE', 'WIREFRAME', 'RESEARCH'];

// Flat, static rendition of the process diagram — used as the Suspense
// fallback while the 3D chunk loads, and as the permanent fallback when
// WebGL isn't available. No motion either way.
export function StaticPipelineDiagram() {
  return (
    <div className={styles.diagram} role="img" aria-label="Design process diagram: research, wireframe, prototype, usability test">
      {LAYERS.map((label) => (
        <div key={label} className={styles.layer}>
          <span className={styles.label}>{label}</span>
          <span className={styles.bar} />
        </div>
      ))}
    </div>
  );
}
