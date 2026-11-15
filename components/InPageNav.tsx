import styles from "../styles/components/InPageNav.module.scss";

type Props = {
  items: { id: string; label: string }[];
};

const InPageNav = ({ items }: Props) => (
  <nav className={styles.nav} aria-label="ページ内ナビゲーション">
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>{item.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default InPageNav;
