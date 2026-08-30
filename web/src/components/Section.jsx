import styles from './Section.module.css';

// Numbered section wrapper used across every page — matches the
// "01 — LABEL" heading convention from the Drafting Table Foundations.
export function Section({ number, label, title, children, className = '', ...props }) {
  return (
    <section className={`${styles.section} ${className}`} {...props}>
      {(number || label) && (
        <p className={`mono ${styles.label}`}>
          {number ? `${number} — ${label}` : label}
        </p>
      )}
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}
