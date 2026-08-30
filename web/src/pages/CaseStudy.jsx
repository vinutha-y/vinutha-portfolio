import { Link, useParams } from 'react-router-dom';
import { PageShell } from '../layouts/PageShell';
import { Section } from '../components/Section';
import { SheetMeta } from '../components/SheetMeta';
import { InkRule } from '../components/InkRule';
import { Button } from '../components/Button';
import { Tag } from '../components/Tag';
import { projects } from '../data/projects';
import styles from './CaseStudy.module.css';

const pad = (n) => String(n).padStart(2, '0');

// A real screenshot, captioned like a drawing-sheet figure
// (fig. 2 — checkout screen with payment timer).
function Figure({ index, src, alt, caption }) {
  return (
    <figure className={styles.figure}>
      <img className={styles.figureBox} src={src} alt={alt} />
      <figcaption className={`mono ${styles.figureCaption}`}>
        fig. {index} — {caption}
      </figcaption>
    </figure>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index !== -1 ? projects[index] : null;

  if (!project) {
    return (
      <PageShell>
        <Section number="—" label="Case study" title="Case study not found">
          <p className={styles.body}>No project matches "{slug}". It may have moved or the link is stale.</p>
          <Link to="/work"><Button>Back to work</Button></Link>
        </Section>
      </PageShell>
    );
  }

  const { title, oneLiner, tags, problem, approach, outcome, screens } = project;

  return (
    <PageShell>
      <div className={styles.intro}>
        <SheetMeta
          cells={[
            ['Sheet', `${pad(index + 1)} of ${pad(projects.length)} — ${slug}`],
            ['Title', title],
            ['Scale', 'n.t.s.'],
            ['Rev', 'B'],
          ]}
        />

        <h1 className={styles.headline}>{title}</h1>
        {oneLiner && <p className={styles.dek}>{oneLiner}</p>}

        <div className={styles.partsList}>
          <p className={`mono ${styles.partsLabel}`}>Parts list — stack</p>
          {tags.map((tag, i) => (
            <div key={tag} className={styles.partsRow}>
              <span className={`mono ${styles.partsIndex}`}>{pad(i + 1)}</span>
              <Tag>{tag}</Tag>
            </div>
          ))}
        </div>
      </div>

      <InkRule />

      <Section number="01" label="Problem">
        <p className={styles.body}>{problem}</p>
      </Section>

      <Section number="02" label="Approach">
        <p className={styles.body}>{approach}</p>
      </Section>

      <Section number="03" label="Outcome">
        <p className={styles.body}>{outcome}</p>
      </Section>

      <Section number="04" label="Screens">
        {screens.map((screen, i) => (
          <Figure key={screen.file} index={i + 1} src={screen.file} alt={screen.alt} caption={screen.alt} />
        ))}
      </Section>

      <div className={styles.footerNav}>
        <Link to="/work"><Button>Back to work</Button></Link>
      </div>
    </PageShell>
  );
}
