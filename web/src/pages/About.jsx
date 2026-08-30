import { PageShell } from '../layouts/PageShell';
import { Section } from '../components/Section';
import { SheetMeta } from '../components/SheetMeta';
import { Tag } from '../components/Tag';
import { InkRule } from '../components/InkRule';
import styles from './About.module.css';

// Skills as a parts list, grouped by category — reuses <Tag> for each part.
// Ported from the real toolkit grid in index.html.
const PARTS = [
  ['Design', ['FIGMA']],
  ['Visuals', ['CANVA']],
  ['Process', ['WIREFRAMING', 'PROTOTYPING']],
  ['Research', ['USER RESEARCH', 'USABILITY TESTING']],
  ['Mindset', ['DESIGN THINKING', 'USER-CENTERED DESIGN']],
];

export default function About() {
  return (
    <PageShell>
      <section className={styles.intro}>
        <span className={`mono ${styles.eyebrow}`}>ABOUT</span>
        <h1 className={styles.headline}>Research first, polish last.</h1>
        <p className={styles.bio}>
          I start by understanding the problem from the user's side — what they're trying to get
          done, and where the friction actually is — before opening Figma. From there I sketch
          low-fidelity flows, test my assumptions, and refine into high-fidelity prototypes.
        </p>
      </section>

      <InkRule />

      <div className={styles.metaWrap}>
        <SheetMeta
          cells={[
            ['Sheet', '04 of 05 — About'],
            ['Title', 'Vinutha Y'],
            ['Scale', 'n.t.s.'],
            ['Rev', 'B'],
          ]}
        />
      </div>

      <Section number="01" label="Parts list" title="Skills, by category">
        <div className={styles.partsList}>
          {PARTS.map(([category, tags]) => (
            <div key={category} className={styles.partsRow}>
              <span className={`mono ${styles.partsLabel}`}>{category}</span>
              <div className={styles.partsTags}>
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
