import styles from "../styles/components/FaqList.module.scss";

// 回答は段落ごとの配列。段落内の改行は "\n" で表す
export type FaqItem = {
  q: string;
  a: string[];
};

const FaqList = ({ items }: { items: FaqItem[] }) => (
  <div className={styles.list}>
    {items.map((item) => (
      <details key={item.q} className={styles.item}>
        <summary className={styles.question}>
          <span className={styles.mark} aria-hidden="true">
            Q
          </span>
          <span className={styles.questionText}>{item.q}</span>
          <span className={styles.toggle} aria-hidden="true" />
        </summary>
        <div className={styles.answer}>
          <span className={`${styles.mark} ${styles.markAnswer}`} aria-hidden="true">
            A
          </span>
          <div className={styles.answerBody}>
            {item.a.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </details>
    ))}
  </div>
);

export default FaqList;
