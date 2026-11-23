'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, isActivePath } from "../../constants";
import { SHOP_INFO } from "../../public/static";
import ReserveButton from "../ReserveButton";
import styles from "../../styles/Navigation.module.scss";

type Props = {
  isOpen: boolean;
  onNavigate: () => void;
};

const Navigation = ({ isOpen, onNavigate }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={onNavigate}
        aria-hidden="true"
      />
      <nav id="global-nav" className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.drawerOnly}`}>
            <Link href="/" onClick={onNavigate} aria-current={pathname === "/" ? "page" : undefined}>
              <span className={styles.en}>Top</span>
            </Link>
          </li>
          {NAV_ITEMS.filter((item) => !item.footerOnly).map((item) => (
            <li key={item.href} className={styles.item}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={isActivePath(pathname, item) ? "page" : undefined}
              >
                <span className={styles.en}>{item.en}</span>
                <span className={styles.ja}>{item.ja}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.drawerInfo}>
          <ReserveButton className={styles.drawerReserve} />
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
                <p className={styles.comment}>※（）はカットの最終受付時間</p>
              </dd>
            </div>
            <div>
              <dt>定休日</dt>
              <dd>{SHOP_INFO.HOLIDAY}</dd>
            </div>
            <div>
              <dt>お急ぎのご予約、お問い合わせ</dt>
              <dd>
                <a className={styles.tel} href={`tel:${SHOP_INFO.TEL_NO_HYPHEN}`}>
                  TEL:{SHOP_INFO.TEL}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
