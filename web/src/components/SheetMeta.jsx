import styles from './SheetMeta.module.css';

// The drafting title-block strip — Sheet/Title/Scale/Rev style metadata.
// cells: [[label, value], ...]
export function SheetMeta({ cells }) {
  return (
    <div className={styles.block} style={{ '--cols': cells.length }}>
      {cells.map(([k, v]) => (
        <div key={k} className={styles.cell}>
          <span className={styles.k}>{k}</span>
          <span className={styles.v}>{v}</span>
        </div>
      ))}
    </div>
  );
}
