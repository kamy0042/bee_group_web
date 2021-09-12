import React from "react";
import { SHOP_INFO } from "../../public/static";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";

const Header = () => (
    <header className={styles.wrap}>
        <h1 className={styles.logo}>
            <Link href="/">
                <a>
                    <img src="/img/bee_logo_white.svg" width="235px" height="36px" alt="bee_dandy" />
                </a>
            </Link>
        </h1>
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
                <dt>お急ぎのご予約、お問合せ</dt>
                <dd>{SHOP_INFO.TEL}</dd>
            </div>
        </dl>
    </header>
);

export default Header;
