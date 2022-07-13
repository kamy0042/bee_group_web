import { SHOP_INFO } from "../../public/static";
import styles from "../../styles/Footer.module.scss";
import ReserveButton from "../ReserveButton";

const Footer = () => (
  <footer>
    <div className={styles.map}>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4107.720197159576!2d139.75339804655573!3d35.66415338221034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bea7b86f78b%3A0xfe1d72e1a0f09c7!2z44CSMTA1LTAwMDQg5p2x5Lqs6YO95riv5Yy65paw5qmL77yV5LiB55uu77yY4oiS77yTIOS7o-W4guODk-ODqw!5e0!3m2!1sja!2sjp!4v1616523372773!5m2!1sja!2sjp"
        width="1300"
        height="370"
        allowFullScreen={false}
        loading="lazy"
      />
    </div>
    <div className={styles.info}>
      <h1>
        <img src="/img/bee_logo_white.svg" width="235px" height="36px" alt="bee_dandy" />
      </h1>
      <dl className={styles.openInfo}>
        <div>
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
              ※（）はカットの最終受付時間 <br className={styles.pcNone} />
              <span className={styles.spNone}>/</span>※平日{SHOP_INFO.OPEN} - {SHOP_INFO.RESERVE_ONLY_TIME}
              は前日までの完全予約制です
            </p>
            <p className={styles.holiday}>定休日：{SHOP_INFO.HOLIDAY}</p>
          </dd>
        </div>
      </dl>
      <p className={styles.address}>{SHOP_INFO.ADDRESS}</p>
      {/* <div className={styles.link}>
                <a href={`tel:${SHOP_INFO.TEL}`}>TEL:{SHOP_INFO.TEL}</a>
            </div> */}
      <div className={styles.sns}>
        <a href="https://www.facebook.com/Beedandy.01/" target="_blank" rel="noreferrer">
          <img src="/img/icon_fb.png" alt="bee_dandy facebook" width="40px" height="40px" />
        </a>
      </div>
      <div className={styles.btn}>
        <ReserveButton />
      </div>
    </div>

    <p className={styles.btm}>Copyright 2021 ©︎Bee dandy All Rights Reserved</p>
  </footer>
);

export default Footer;
