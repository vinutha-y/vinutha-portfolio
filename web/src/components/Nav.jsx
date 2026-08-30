import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  return (
    <header className={styles.nav}>
      <NavLink to="/" className={styles.mark}>
        Vinutha<span>.</span>
      </NavLink>
      <nav className={styles.links}>
        {LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
