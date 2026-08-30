import { lazy, Suspense, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageShell } from '../layouts/PageShell';
import { Section } from '../components/Section';
import { SheetMeta } from '../components/SheetMeta';
import { Button } from '../components/Button';
import { InkRule } from '../components/InkRule';
import { StaticPipelineDiagram } from '../scenes/StaticPipelineDiagram';
import { hasWebGL } from '../lib/webgl';
import styles from './Home.module.css';

// Dynamic import — the three.js/@react-three/fiber chunk is code-split and
// only fetched after first paint, never blocking it.
const HeroScene = lazy(() =>
  import('../scenes/HeroScene').then((mod) => ({ default: mod.HeroScene }))
);

export default function Home() {
  const webglOk = useMemo(() => hasWebGL(), []);

  return (
    <PageShell>
      <section className={styles.hero}>
        <div>
          <span className={`mono ${styles.eyebrow}`}>UX DESIGN ENTHUSIAST — BENGALURU</span>
          <h1 className={styles.headline}>I design interfaces people don't have to think about.</h1>
          <p className={styles.dek}>
            Passionate UX design enthusiast focused on creating intuitive, user-centered digital
            experiences. Skilled in wireframing, prototyping, user research, and usability
            testing — driven by a deep understanding of user behavior and design thinking.
          </p>
          <div className={styles.ctaRow}>
            <Link to="/work"><Button>View work</Button></Link>
            <Link to="/contact"><Button>Get in touch</Button></Link>
          </div>
        </div>

        <div className={styles.stage}>
          <div className={styles.stageInner}>
            {webglOk ? (
              <Suspense fallback={<StaticPipelineDiagram />}>
                <HeroScene />
              </Suspense>
            ) : (
              <StaticPipelineDiagram />
            )}
          </div>
        </div>
      </section>

      <InkRule />

      <div className={styles.intro}>
        <SheetMeta
          cells={[
            ['Sheet', '01 of 05 — Home'],
            ['Title', 'Vinutha'],
            ['Scale', 'n.t.s.'],
            ['Rev', 'B'],
          ]}
        />
      </div>

      <Section number="02" label="Work, in brief" title="Two projects, two problems solved">
        <p>
          A campus food-ordering app that skips the canteen queue, and an Android appointment
          booking flow for a hospital chain. Click a project to see the flow and screens in
          detail.
        </p>
      </Section>
    </PageShell>
  );
}
