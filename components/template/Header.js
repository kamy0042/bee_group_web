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
                    <p>
                        平日：{SHOP_INFO.OPEN} - {SHOP_INFO.CLOSE}（{SHOP_INFO.RESERVE_LIMIT}）
                    </p>
                    <p>
                        土祝：{SHOP_INFO.HOLIDAY_OPEN} - {SHOP_INFO.HOLIDAY_CLOSE}（{SHOP_INFO.HOLIDAY_RESERVE_LIMIT}）/ 日曜：{SHOP_INFO.SUNDAY_OPEN} - {SHOP_INFO.SUNDAY_CLOSE}（
                        {SHOP_INFO.SUNDAY_RESERVE_LIMIT}）
                    </p>
                    <p className={styles.comment}>
                        ※（）はカットの最終受付時間 / ※平日{SHOP_INFO.OPEN} - {SHOP_INFO.RESERVE_ONLY_TIME}は前日までの完全予約制です
                    </p>
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
