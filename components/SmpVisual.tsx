import styles from "../styles/components/SmpVisual.module.scss";

type Props = {
  className?: string;
  label?: string;
};

const SmpVisual = ({ className, label }: Props) => (
  <div className={`${styles.visual} ${className ?? ""}`}>{label && <span className={styles.label}>{label}</span>}</div>
);

export default SmpVisual;
