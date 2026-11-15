import Link from "next/link";
import { FACEBOOK_URL, INSTAGRAM_URL, NAV_ITEMS } from "../../constants";
import { SHOP_INFO } from "../../public/static";
import ReserveButton from "../ReserveButton";
import styles from "../../styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.map}>
      <iframe
        title="Google マップ"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4107.720197159576!2d139.75339804655573!3d35.66415338221034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bea7b86f78b%3A0xfe1d72e1a0f09c7!2z44CSMTA1LTAwMDQg5p2x5Lqs6YO95riv5Yy65paw5qmL77yV5LiB55uu77yY4oiS77yTIOS7o-W4guODk-ODqw!5e0!3m2!1sja!2sjp!4v1616523372773!5m2!1sja!2sjp"
        width="1300"
        height="370"
        allowFullScreen={false}
        loading="lazy"
      />
    </div>
    <div className={styles.inner}>
      <div className={styles.shop}>
        <Link href="/" className={styles.logo}>
          <img src="/img/bee_logo_white.svg" width="235" height="36" alt="Bee dandy" />
        </Link>
        <p className={styles.address}>{SHOP_INFO.ADDRESS}</p>
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
            <dt>TEL</dt>
            <dd>
              <a href={`tel:${SHOP_INFO.TEL_NO_HYPHEN}`}>{SHOP_INFO.TEL}</a>
            </dd>
          </div>
        </dl>
      </div>
      <div className={styles.side}>
        <ul className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span className={styles.navEn}>{item.en}</span>
                <span className={styles.navJa}>{item.ja}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <div className={styles.sns}>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              <img src="/img/icon_fb.png" alt="bee_dandy facebook" width="36" height="36" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <img src="/img/icon_ig.svg" alt="bee_dandy instagram" width="36" height="36" />
            </a>
          </div>
          <ReserveButton className={styles.reserve} />
        </div>
      </div>
    </div>
    <p className={styles.copyright}>Copyright 2021 ©︎Bee dandy All Rights Reserved</p>
  </footer>
);

export default Footer;
