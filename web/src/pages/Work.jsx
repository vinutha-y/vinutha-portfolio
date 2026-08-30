import { PageShell } from '../layouts/PageShell';
import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from './Work.module.css';

export default function Work() {
  return (
    <PageShell>
      <Section number="02" label="Work" title="Selected work">
        <p className={styles.intro}>Click a project to see the flow and screens in detail.</p>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} featured={i === 0} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
