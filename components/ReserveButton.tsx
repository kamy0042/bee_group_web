import { RESERVE_URL } from "../public/static";
import styles from "../styles/components/ReserveButton.module.scss";

const ReserveButton = ({ className }: { className?: string }) => (
  <a className={`${styles.btn} ${className ?? ""}`} target="_blank" href={RESERVE_URL} rel="noreferrer">
    予約する
  </a>
);

export default ReserveButton;
