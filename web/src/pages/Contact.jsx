import { PageShell } from '../layouts/PageShell';
import { SheetMeta } from '../components/SheetMeta';
import { Section } from '../components/Section';
import styles from './Contact.module.css';

const EMAIL = 'vinutha090705@gmail.com';

// Real profile links, ported from index.html's contact section.
const ELSEWHERE = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinutha-y-3b0095381/' },
  { label: 'Resume', href: '/resume/Vinutha_Resume.pdf', download: true },
];

export default function Contact() {
  return (
    <PageShell>
      <section className={styles.intro}>
        <span className={`mono ${styles.eyebrow}`}>Issued to</span>
        <a href={`mailto:${EMAIL}`} className={`serif ${styles.email}`}>
          {EMAIL}
        </a>

        <div className={styles.sigBlock}>
          <div className={styles.sigLine} aria-hidden="true" />
          <div className={`mono ${styles.sigLabels}`}>
            <span>Signature</span>
            <span>Date</span>
          </div>
        </div>
      </section>

      <div className={styles.metaWrap}>
        <SheetMeta
          cells={[
            ['Sheet', '05 of 05 — Contact'],
            ['Title', 'Vinutha'],
            ['Scale', 'n.t.s.'],
            ['Rev', 'B'],
          ]}
        />
      </div>

      <Section number="01" label="Elsewhere">
        <ul className={styles.elsewhere}>
          {ELSEWHERE.map(({ label, href, download }) => (
            <li key={label} className={`mono ${styles.elsewhereItem}`}>
              <a href={href} target="_blank" rel="noopener" download={download}>{label}</a>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
