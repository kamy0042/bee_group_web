import styles from "../styles/components/PageImage.module.scss";

const PageImage = ({ page }) => <div className={`${styles[page]} ${styles.mv}`}></div>;

export default PageImage;
