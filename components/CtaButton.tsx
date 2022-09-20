import styles from "../styles/components/ReserveButton.module.scss";

// eslint-disable-next-line import/prefer-default-export
export const CtaButton = ({ text, link }: { text: string; link: string }) => (
  <a className={styles.cta} target="_blank" href={link} rel="noreferrer">
    {text}
  </a>
);
