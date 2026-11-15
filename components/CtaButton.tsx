import { ReactNode } from "react";
import styles from "../styles/components/ReserveButton.module.scss";

// 日本語のラベルは語の途中で折り返さないため、改行してよい位置に <wbr /> を入れて渡す
// eslint-disable-next-line import/prefer-default-export
export const CtaButton = ({ text, link }: { text: ReactNode; link: string }) => (
  <a className={styles.cta} target="_blank" href={link} rel="noreferrer">
    <span>{text}</span>
  </a>
);
