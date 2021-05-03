import { SHOP_INFO } from "../../public/static/index";
import styles from "../../styles/Footer.module.scss";
import ReserveButton from "../../components/ReserveButton";

const Footer = () => (
    <footer>
        <div className={styles.map}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4107.720197159576!2d139.75339804655573!3d35.66415338221034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bea7b86f78b%3A0xfe1d72e1a0f09c7!2z44CSMTA1LTAwMDQg5p2x5Lqs6YO95riv5Yy65paw5qmL77yV5LiB55uu77yY4oiS77yTIOS7o-W4guODk-ODqw!5e0!3m2!1sja!2sjp!4v1616523372773!5m2!1sja!2sjp"
                width="1300"
                height="370"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
        <div className={styles.info}>
            <h1>
                <img src="/img/bee_logo_white.svg" width="235px" height="36px" alt="bee_dandy" />
            </h1>
            <dl className={styles.openInfo}>
                <div>
                    <dt>OPEN：</dt>
                    <dd>
                        {SHOP_INFO.OPEN} - {SHOP_INFO.CLOSE}
                    </dd>
                </div>
                <div>
                    <dt>定休日：</dt>
                    <dd>{SHOP_INFO.HOLIDAY}</dd>
                </div>
            </dl>
            <p className={styles.address}>{SHOP_INFO.ADDRESS}</p>
            {/* <div className={styles.link}>
                <a href={`tel:${SHOP_INFO.TEL}`}>TEL:{SHOP_INFO.TEL}</a>
            </div> */}
            <div className={styles.sns}>
                <a href="https://www.facebook.com/Beedandy.01/" target="_blank">
                    <img src="/img/icon_fb.png" alt="bee_dandy facebook" width="40px" height="40px" />
                </a>
                <a href="https://www.instagram.com/beedandy.01_official/" target="_blank">
                    <img src="/img/icon_ig.svg" alt="bee_dandy instagram" width="40px" height="40px" />
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
