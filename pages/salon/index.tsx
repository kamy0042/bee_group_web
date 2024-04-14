import Head from "next/head";
import Link from "next/link";
import MainLayout from "../../components/template/MainLayout";
import PageImage from "../../components/PageImage";
import { SHOP_INFO } from "../../public/static";
import styles from "../../styles/Salon.module.scss";
import WebpImage from "../../components/WebpImage";
import utilStyles from "../../styles/Util.module.scss";

const Salon = () => (
  <>
    <Head>
      <title>店舗情報 | 男性専門美容室 Bee dandy</title>
      <meta
        name="description"
        content="新橋の男性専門美容室 Bee dandyの店舗情報です。営業時間や私たちの思いをご紹介します"
      />
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
              <WebpImage src="bee_room_image-min" alt="お悩みを相談できるプライベートな空間" />
              <div className={styles.shopInfo_textArea}>
                <div className={styles.shopInfo_address}>
                  <p>
                    <span>東京都港区新橋5－8－3 代市ビル B１F</span>
                    <span>タバコ（煙草）売り場のあるビルの地下１階です。新橋駅、汐留駅、御成門駅から</span>
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
                      <p>
                        <span>平日：{SHOP_INFO.OPEN} - {SHOP_INFO.CLOSE}</span>
                        <span>（最終受付:{SHOP_INFO.RESERVE_LIMIT}）</span>
                      </p>
                      <p>
                        <span>土祝：{SHOP_INFO.HOLIDAY_OPEN} - {SHOP_INFO.HOLIDAY_CLOSE}</span>
                        <span>（最終受付:{SHOP_INFO.HOLIDAY_RESERVE_LIMIT}）</span>
                      </p>
                      <p>
                        <span>日曜：{SHOP_INFO.SUNDAY_OPEN} - {SHOP_INFO.SUNDAY_CLOSE}</span>
                        <span>（最終受付:{SHOP_INFO.SUNDAY_RESERVE_LIMIT}）</span>
                      </p>
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
              “bee”とはよく知られている「蜂」という意味のほかに、「働く人、隣人や友人の寄り合い」という意味もあります。私たちは、忙しく働く男性お一人おひとりに「魅力と自信」に満ち溢れ、こころ豊かな日常を送っていただくことをコンセプトに、『今までで、１番』のサービスを、友人や隣人のような身近な存在として、お届けしてまいります。さらに、あなたの家族、友人、恋人にも「今までで１番、いいね」と認めてもらい、あなただけでなくあなたに関わるすべての方々のこころも豊かにするご提案をさせて頂きます。
            </p>
            <p className={styles.message_name}>オーナー 松井祐太</p>

            <div className={styles.linkWrapper}>
              <div className={utilStyles.linkButton}>
                <Link href='/voice/'>お客様の声を見る</Link>
              </div>
              <div className={utilStyles.linkButton}>
                <a href='https://www.adjustbook.com/doc/us/11750/bk/17160' target='_blank' rel="noreferrer">Bee dandy スタイルブックを見る</a>
              </div>
              <div className={utilStyles.linkButton}>
                <Link href='/blog/'>ブログを見る</Link>
              </div>
            </div>

          </section>

        </section>
      </div>
    </MainLayout>
  </>
);

export default Salon;
