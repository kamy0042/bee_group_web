import Link from "next/link";
import { SHOP_INFO } from "../../public/static";
import styles from "../../styles/Navigation.module.scss";
import ReserveButton from "../ReserveButton";

const Navigation = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <>
    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
    <div className={`${styles.overlay} ${isOpen && styles.openedOverlay}`} onClick={onClick} />
    <nav className={`${styles.wrap} ${isOpen && styles.openedWrap}`}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button className={`${styles.button} ${isOpen && styles.openedBtn}`} onClick={onClick} type="button" />
      <ul className={`${styles.nav}`}>
        <li className={`${styles.nav_link} ${styles.spOnly}`} onClick={onClick}>
          <Link href="/">Top</Link>
        </li>
        <li className={styles.nav_link} onClick={onClick}>
          <Link href="/menu/">Menu</Link>
        </li>
        <li className={styles.nav_link} onClick={onClick}>
          <Link href="/salon/">Salon</Link>
        </li>
        <li className={styles.nav_link}>
          <Link href="/staff/">Staff</Link>
        </li>
        <li className={styles.nav_link}>
          <Link href="/faq/">FAQ</Link>
        </li>
        <li className={styles.nav_link}>
          <Link href="/waxing/">脱毛</Link>
        </li>
        <li className={`${styles.nav_link}`}>
          <Link href="/recruit/">スタッフ募集</Link>
        </li>
        <li className="btn">
          <ReserveButton />
        </li>
      </ul>
      <dl className={styles.info}>
        <div>
          <dt>OPEN</dt>
          <dd>
            <p>
              平日：{SHOP_INFO.OPEN} - {SHOP_INFO.CLOSE}（{SHOP_INFO.RESERVE_LIMIT}）
            </p>
            <p>
              土祝：{SHOP_INFO.HOLIDAY_OPEN} - {SHOP_INFO.HOLIDAY_CLOSE}（{SHOP_INFO.HOLIDAY_RESERVE_LIMIT}）
            </p>
            <p>
              日曜：{SHOP_INFO.SUNDAY_OPEN} - {SHOP_INFO.SUNDAY_CLOSE}（{SHOP_INFO.SUNDAY_RESERVE_LIMIT}）
            </p>
            <p className={styles.comment}>
              ※（）はカットの最終受付時間
            </p>
          </dd>
        </div>
        <div>
          <dt>定休日</dt>
          <dd>{SHOP_INFO.HOLIDAY}</dd>
        </div>

        <div>
          <dt>お急ぎのご予約、お問合せ:</dt>
          <dd className={styles.tel}>
            <a href={`tel:${SHOP_INFO.TEL}`}>TEL:{SHOP_INFO.TEL}</a>
          </dd>
        </div>
      </dl>
    </nav>
  </>
);

export default Navigation;
