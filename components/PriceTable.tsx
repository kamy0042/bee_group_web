import { ReactNode } from "react";
import styles from "../styles/components/PriceTable.module.scss";

export type PriceColumn = {
  label: string;
  // スマホ表示で各値の前に出すラベル（未指定なら label）
  spLabel?: string;
  type?: "price" | "member" | "text";
};

// name・details 内の改行は "\n" で表す
export type PriceRow = {
  name: string;
  details?: string[];
  values: string[];
};

export type PriceTableData = {
  title?: string;
  subtitle?: string;
  description?: string[];
  notes?: string[];
  nameLabel?: string;
  columns: PriceColumn[];
  rows: PriceRow[];
};

type Props = PriceTableData & {
  hideHead?: boolean;
  children?: ReactNode;
};

const PriceTable = ({
  title,
  subtitle,
  description,
  notes,
  nameLabel = "",
  columns,
  rows,
  hideHead,
  children,
}: Props) => (
  <section className={styles.block}>
    {title && (
      <div className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    )}
    {description && (
      <div className={styles.description}>
        {description.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    )}
    {notes && (
      <div className={styles.notes}>
        {notes.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    )}
    <table className={`${styles.table} ${hideHead ? styles.noHead : ""}`}>
      {!hideHead && (
        <thead>
          <tr>
            <th scope="col">{nameLabel}</th>
            {columns.map((column) => (
              <th key={column.label} scope="col" className={styles[column.type ?? "text"]}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <th scope="row" className={styles.nameCell}>
              <span className={styles.name}>{row.name}</span>
              {row.details && (
                <ul className={styles.details}>
                  {row.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </th>
            {row.values.map((value, i) => {
              const column = columns[i];
              return (
                // eslint-disable-next-line react/no-array-index-key
                <td key={i} className={styles[column.type ?? "text"]} data-label={column.spLabel ?? column.label}>
                  {value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
    {children}
  </section>
);

export default PriceTable;
