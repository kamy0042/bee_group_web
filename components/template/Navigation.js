import Link from "next/link";
import { SHOP_INFO } from "../../public/static";
import styles from "../../styles/Navigation.module.scss";
import ReserveButton from "../ReserveButton";

const Navigation = ({ isOpen, onClick }) => {
    return (
        <>
            <div className={`${styles.overlay} ${isOpen && styles.openedOverlay}`} onClick={onClick}></div>
            <nav className={`${styles.wrap} ${isOpen && styles.openedWrap}`}>
                <button className={`${styles.button} ${isOpen && styles.openedBtn}`} onClick={onClick}></button>
                <ul className={styles.nav}>
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
                    <li className={`${styles.nav_link} ${styles.spOnly}`}>
                        <a href="https://www.adjustbook.com/doc/Index/show/us/11750/bk/15091" target="_blank">
                            Bee dandy スタイルブック
                        </a>
                    </li>
                    <li className="btn">
                        <ReserveButton />
                    </li>
                </ul>
                <dl className={styles.info}>
                    <div>
                        <dt>OPEN</dt>
                        <dd>
                            {SHOP_INFO.OPEN} - {SHOP_INFO.CLOSE}
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
};

export default Navigation;
