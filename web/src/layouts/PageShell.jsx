import { Nav } from '../components/Nav';
import styles from './PageShell.module.css';

export function PageShell({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.wrap}>{children}</div>
      <footer className={`mono ${styles.footer}`}>
        <span>© {new Date().getFullYear()} Vinutha Y</span>
        <span>n.t.s. — Rev. B</span>
      </footer>
    </>
  );
}
