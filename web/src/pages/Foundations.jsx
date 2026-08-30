import { Button } from '../components/Button';
import { Tag } from '../components/Tag';
import { colors, space } from '../tokens';
import styles from './Foundations.module.css';

// Dev-only reference page (route: /foundations) — not part of the public
// site nav. Mirrors the validated Figma Foundations page so tokens stay
// checkable in-browser as the rest of the site gets built.
const swatches = [
  ['vellum', colors.vellum, 'Base surface'],
  ['vellum-line', colors.vellumLine, 'Ruled grid / dividers'],
  ['ink', colors.ink, 'Linework, primary text'],
  ['ink-soft', colors.inkSoft, 'Secondary text, labels'],
  ['blueprint', colors.blueprint, 'Structural fill'],
  ['redline', colors.redline, 'The one accent'],
];

const typeRows = [
  ['display-hero', 'var(--text-display-hero)', 'serif', 'italic', 'Renders reality.'],
  ['display-section', 'var(--text-display-section)', 'serif', 'italic', 'Sheet 02 — Work'],
  ['display-body', 'var(--text-display-body)', 'serif', 'normal', 'Drawn before it is built.'],
  ['field-lg', 'var(--text-field-lg)', 'mono', 'normal', 'position.x = 0.184'],
  ['field-md', 'var(--text-field-md)', 'mono', 'normal', 'fig. 3 — shader pipeline'],
  ['field-sm', 'var(--text-field-sm)', 'mono', 'normal', 'REV. B · 2026'],
];

export default function Foundations() {
  return (
    <main className={styles.foundationsPreview}>
      <p className={`mono ${styles.eyebrow}`}>DEV REFERENCE — NOT A PUBLIC PAGE</p>
      <h1 className="serif" style={{ fontStyle: 'italic', fontSize: 'var(--text-display-hero)' }}>
        Foundations
      </h1>

      <section>
        <p className={`mono ${styles.sectionLabel}`}>01 — COLOR</p>
        <div className={styles.swatchRow}>
          {swatches.map(([name, hex, desc]) => (
            <div key={name} className={styles.swatch}>
              <div className={styles.chip} style={{ background: hex }} />
              <p className="serif" style={{ fontStyle: 'italic' }}>{name}</p>
              <p className={`mono ${styles.dim}`}>{hex}</p>
              <p className={`${styles.dim} ${styles.desc}`}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={`mono ${styles.sectionLabel}`}>02 — TYPE</p>
        <div className={styles.typeTable}>
          {typeRows.map(([label, size, family, style, sample]) => (
            <div key={label} className={styles.typeRow}>
              <span className={`mono ${styles.dim} ${styles.label}`}>{label}</span>
              <span
                style={{
                  fontFamily: family === 'serif' ? 'var(--font-display)' : 'var(--font-field)',
                  fontStyle: style,
                  fontSize: size,
                }}
              >
                {sample}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={`mono ${styles.sectionLabel}`}>03 — SPACING</p>
        <div className={styles.spacingRows}>
          {Object.entries(space).map(([key, val]) => (
            <div key={key} className={styles.spacingRow}>
              <span className="mono">spacing/{key} ({val})</span>
              <span className={styles.bar} style={{ width: val * 4 }} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={`mono ${styles.sectionLabel}`}>04 — COMPONENTS · try hover / focus / disabled</p>
        <div className={styles.componentRow}>
          <Button>View project</Button>
          <Button disabled>View project</Button>
        </div>
        <div className={styles.componentRow}>
          <Tag>WEBGL</Tag>
          <Tag interactive>THREE.JS</Tag>
          <Tag interactive active>GSAP</Tag>
          <Tag disabled>DISABLED</Tag>
        </div>
      </section>
    </main>
  );
}
