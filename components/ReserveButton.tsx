import { RESERVE_URL } from "../public/static";
import styles from "../styles/components/ReserveButton.module.scss";

const ReserveButton = () => (
  <a className={styles.btn} target="_blank" href={RESERVE_URL} rel="noreferrer">
    予約する
  </a>
);

export default ReserveButton;
