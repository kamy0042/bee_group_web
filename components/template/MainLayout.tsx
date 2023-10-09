'use client'

import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import styles from "../../styles/MainLayout.module.scss";
import { SHOP_INFO } from "../../public/static";

const Info = () => (
  <dl className={styles.info}>
    <div className={styles.infoItem}>
      <dt>OPEN</dt>
      <dd>
        <p>
          平日：{SHOP_INFO.OPEN} - {SHOP_INFO.CLOSE}（{SHOP_INFO.RESERVE_LIMIT}）
        </p>
        <p>
          土祝：{SHOP_INFO.HOLIDAY_OPEN} - {SHOP_INFO.HOLIDAY_CLOSE}（{SHOP_INFO.HOLIDAY_RESERVE_LIMIT}）
        </p>
        <p>
          日曜：
          {SHOP_INFO.SUNDAY_OPEN} - {SHOP_INFO.SUNDAY_CLOSE}（{SHOP_INFO.SUNDAY_RESERVE_LIMIT}）
        </p>
        <p className={styles.comment}>
          ※（）はカットの最終受付時間 ※平日{SHOP_INFO.OPEN} - {SHOP_INFO.RESERVE_ONLY_TIME}
          は前日までの完全予約制です
        </p>
      </dd>
    </div>
    <div className={styles.infoInner}>
      <div className={styles.infoItem}>
        <dt>定休日</dt>
        <dd>{SHOP_INFO.HOLIDAY}</dd>
      </div>
      <div className={styles.infoItem}>
        <dt>お急ぎのご予約、お問合せ</dt>
        <dd>{SHOP_INFO.TEL}</dd>
      </div>
    </div>
  </dl>
);

// eslint-disable-next-line no-undef
const MainLayout = ({ children, noHeaderImg }: { children: React.ReactNode; noHeaderImg?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.wrap} ${isOpen && styles.isOpen}`}>
      <div className={`${noHeaderImg ? styles.innerNoImg : styles.inner}`}>
        <div className={styles.headerArea}>
          <div className={styles.headerAreaInner}>
            <Header />
            <Navigation isOpen={isOpen} onClick={handleClick} />
          </div>
          <Info />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
