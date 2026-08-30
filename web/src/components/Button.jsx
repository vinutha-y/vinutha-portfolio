import styles from './Button.module.css';

export function Button({ children, disabled = false, ...props }) {
  return (
    <button className={styles.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
