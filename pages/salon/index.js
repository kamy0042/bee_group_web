import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageImage from "../../components/PageImage";
import { SHOP_INFO } from "../../public/static";
import styles from "../../styles/Salon.module.scss";
import WebpImage from "../../components/WebpImage";

const Salon = () => (
    <>
        <Head>
            <title>店舗情報 | 男性専門美容室 Bee dandy</title>
            <meta
                name="description"
                content="新橋の男性専門美容室 Bee dandyの店舗情報です。営業時間や私たちの思いをご紹介します"
            ></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainLayout>
            <PageImage page="salon" />
            <div className={styles.contents}>
                <section>
                    <h1 className={styles.heading}>Salon</h1>
                    <dl className={styles.shopInfo}>
                        <dt className={styles.subHeading}>店舗情報</dt>
                        <dd className={styles.shopInfo_body}>
                            <WebpImage src="bee_room_image-min" alt="店内の様子" />
                            <div className={styles.shopInfo_textArea}>
                                <div className={styles.shopInfo_address}>
                                    <p>
                                        <span>東京都港区新橋5－8－3　代市ビル　B１F</span>
                                        <span>
                                            １F　タバコ屋さんのビルの地下１階です。　新橋駅、汐留駅、御成門駅から
                                        </span>
                                        <span>各いずれも徒歩で約６分</span>
                                    </p>
                                    <p className={styles.shopInfo_attention}>
                                        ※専用駐車場はありませんので近くのコインパーキングをご利用ください。
                                    </p>
                                </div>
                                <dl className={styles.shopInfo_data}>
                                    <div>
                                        <dt>営業時間</dt>
                                        <dd>
                                            {SHOP_INFO.OPEN} - {SHOP_INFO.CLOSE}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt>定休日</dt>
                                        <dd>{SHOP_INFO.HOLIDAY}</dd>
                                    </div>
                                </dl>
                            </div>
                        </dd>
                    </dl>
                    <section className={styles.message}>
                        <h2 className={styles.message_heading}>Bee Groupのお約束</h2>
                        <p className={styles.message_copy}>
                            <em>『今までで、１番』が、こころを豊かにする。</em>
                        </p>
                        <p className={styles.message_text}>
                            “bee”とは　よく知られている「蜂」という意味のほかに、「働く人、隣人や友人の寄り合い」という意味もあります。私たちは、忙しく働く男性お一人おひとりに「魅力と自信」に満ち溢れ、こころ豊かな日常を送っていただくことをコンセプトに、『今までで、１番』　のサービスを、友人や隣人のような身近な存在として、お届けしてまいります。
                            <br />
                            さらに、あなたの家族、友人、恋人にも「今までで１番、いいね」と認めてもらい、あなただけでなくあなたに関わるすべての方々のこころも豊かにするご提案をさせて頂きます。
                        </p>
                        <p className={styles.message_name}>オーナー　松井祐太</p>
                    </section>

                    <section className={styles.info}>
                        <h2 className={styles.subHeading}>新型コロナウィルス感染症の感染拡大の防止について</h2>
                        <dl className={styles.info_contents}>
                            <div>
                                <dt>当社の取り組み</dt>
                                <dd>
                                    <ul className={styles.info_list}>
                                        <li>
                                            スタッフは手洗い、手指消毒を徹底しております。また、マスクを着用して対応させていただきます
                                        </li>
                                        <li>随時、消毒液にて店内の清掃をしております。</li>
                                        <li>定期的に店内の換気をしております。</li>
                                        <li>
                                            スタッフの体温が37.5℃以上で風邪のような症状が出ている場合、出勤停止となりご予約の変更をお願いする場合がございます。
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                            <div>
                                <dt>お客様へのお願い</dt>
                                <dd>
                                    <ul className={styles.info_list}>
                                        <li>
                                            ご来店いただいたお客様全員に、次亜塩素酸水またはアルコールでの手の消毒をお願いしております。
                                        </li>
                                        <li>
                                            以下の場合、ご来店をお断りする場合がございますのでご了承ください。
                                            <br />
                                            体温が37.5℃以上ある・咳が出ている | 1ヶ月以内に海外渡航歴がある |
                                            身近にコロナウイルス感染者がいる
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                        <p className={styles.info_notice}>※皆様のご理解、ご協力をよろしくお願い致します。</p>
                    </section>
                </section>
            </div>
        </MainLayout>
    </>
);

export default Salon;
