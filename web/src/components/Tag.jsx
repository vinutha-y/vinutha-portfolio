import styles from './Tag.module.css';

export function Tag({ children, interactive = false, active = false, disabled = false, ...props }) {
  const Element = interactive ? 'button' : 'span';
  return (
    <Element
      className={styles.tag}
      data-interactive={interactive}
      data-active={active}
      data-disabled={disabled}
      disabled={interactive ? disabled : undefined}
      {...props}
    >
      {children}
    </Element>
  );
}
