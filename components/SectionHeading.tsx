import { ReactNode } from "react";
import styles from "../styles/components/SectionHeading.module.scss";

type Props = {
  en: string;
  lead?: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
};

const SectionHeading = ({ en, lead, sub, align = "center" }: Props) => (
  <div className={`${styles.heading} ${align === "left" ? styles.left : ""}`}>
    <h2 className={styles.en}>{en}</h2>
    {lead && <p className={styles.lead}>{lead}</p>}
    {sub && <p className={styles.sub}>{sub}</p>}
  </div>
);

export default SectionHeading;
