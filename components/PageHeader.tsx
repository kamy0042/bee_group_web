import { ReactNode } from "react";
import Photo, { PhotoAsset } from "./Photo";
import SmpVisual from "./SmpVisual";
import styles from "../styles/components/PageHeader.module.scss";

type Props = {
  en: string;
  ja: string;
  image?: PhotoAsset;
  children?: ReactNode;
};

const PageHeader = ({ en, ja, image, children }: Props) => (
  <div className={`${styles.header} ${children ? styles.withLead : ""}`}>
    <div className={styles.bg} aria-hidden="true">
      {image ? <Photo {...image} alt="" className={styles.image} priority /> : <SmpVisual className={styles.visual} />}
    </div>
    <div className={styles.inner}>
      <h1 className={styles.title}>
        <span className={styles.en}>{en}</span>
        <span className={styles.ja}>{ja}</span>
      </h1>
      {children && <div className={styles.lead}>{children}</div>}
    </div>
  </div>
);

export default PageHeader;
