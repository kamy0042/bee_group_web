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
                    <li className={styles.nav_link}>
                        <Link href="/menu">Menu</Link>
                    </li>
                    {/* <li className={styles.nav_link}>
                        <Link href="/menu">Salon</Link>
                    </li> */}
                    {/* <li className={styles.nav_link}>
                        <Link href="/menu">Staff</Link>
                    </li> */}
                    {/* <li className={styles.nav_link}>
                        <Link href="/menu">FAQ</Link>
                    </li> */}
                    <li className="btn">{/* <ReserveButton /> */}</li>
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
                </dl>
            </nav>
        </>
    );
};

export default Navigation;
