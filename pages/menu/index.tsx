import Head from "next/head";
import Link from "next/link";
import PageImage from "../../components/PageImage";
import MainLayout from "../../components/template/MainLayout";
import styles from "../../styles/Menu.module.scss";
import utilStyles from "../../styles/Util.module.scss"
import { SALON_NAME } from "../../constants";

const Menu = () => (
  <>
    <Head>
      <title>メニュー一覧 | {SALON_NAME}</title>
      <meta name="description" content="新橋の男性専門美容室 Bee dandyのメニュー一覧です" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout>
      <PageImage page="menu" />
      <div className={styles.contents}>
        <section className={`${styles.menu} ${styles.section}`}>
          <h2 className={styles.heading}>Menu</h2>
          <p className={styles.lead}>
            ご希望に合うコースをお選びください。
            <br />
            またオプションより必要なメニューを追加する事ができます。
          </p>
          <p className={styles.attention}>
            ※時間は目安です。長さやスタイル、パーマのかかり具合、カラーの染まり具合によっても施術時間が変化しますので、多少お時間に余裕を持ってご来店ください。
          </p>

          <section className={styles.table}>
            <div className={styles.table_head}>
              <h3>メンズカットコース</h3>
              <p>メンズヘアカット・眉毛カット＋シャンプー・ スタイリングのセット</p>
            </div>
            <p>
              お客様一人ひとりの髪質や骨格、ライフスタイルに合わせてカットいたします。なりたいイメージや挑戦してみたいスタイルもお気軽にご相談ください。
            </p>
            <ul className={styles.table_category}>
              <li className={styles.table_category_detail}>コース内容</li>
              <li className={styles.table_category_pay1}>通常料金（税込）</li>
              <li className={styles.table_category_pay2}>会員優待（税込）</li>
              <li className={styles.table_category_time}>時間の目安</li>
            </ul>
            <dl className={styles.table_item}>
              <div className={styles.menuItem}>
                <dt>ベーシックコース</dt>
                <dd className={styles.menuItem_detail}>
                  <p>・カット</p>
                  <p>・オートシャンプー</p>
                  <p>・眉毛カット</p>
                  <p>・スタイリング</p>
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥7,150
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥6,050
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>30～45分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt>プレミアムコース</dt>
                <dd className={styles.menuItem_detail}>
                  <p>・カット</p>
                  <p>・ハンドシャンプー</p>
                  <p>・ヘッドスパ</p>
                  <p>・眉毛カット</p>
                  <p>・スタイリング</p>
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥8,250
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥7,150
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>60～90分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt>ラグジュアリーコース</dt>
                <dd className={styles.menuItem_detail}>
                  <p>・カット</p>
                  <p>・ハンドシャンプー</p>
                  <p>・ヘッドスパ</p>
                  <p>・スカルプケア</p>
                  <p>・眉毛カット</p>
                  <p>・スタイリング</p>
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥11,000
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥9,900
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>60～110分
                </dd>
              </div>
            </dl>
            <dl className={styles.keyword}>
              <div>
                <dt>オートシャンプー</dt>
                <dd>ジェット水流で毛穴の汚れを落とします。水圧によるマッサージ効果も得られます。</dd>
              </div>
              <div>
                <dt>ハンドシャンプー</dt>
                <dd>頭の丸みを捉えて、リズムよく、気持ち良いシャンプー技術をご堪能いただけます。</dd>
              </div>
              <div>
                <dt>ヘッドスパ</dt>
                <dd>
                  普段のシャンプーではなかなか落ちない頭皮の皮脂汚れを浮かせて除去し、マッサージ効果による
                  リフレッシュや髪質改善、さらにはリフトアップなど良いこと尽くしのリラクゼーションです。
                </dd>
              </div>
              <div>
                <dt>スカルプケア</dt>
                <dd>
                  髪のダメージや、抜け毛や薄毛が気になる方には定期的なスカルプケアをおすすめします。ヘッドスパで頭皮の汚れを除去し、頭皮の環境改善、育毛剤による発毛促進を行います。
                </dd>
              </div>
            </dl>
          </section>

          <section className={styles.table}>
            <div className={styles.table_head}>
              <h3 className={styles.table_heading}>メンテナンスコース</h3>
              <p>メンズヘアカット・眉毛カット＋シャンプー・ スタイリングのセット</p>
            </div>
            <p>前回の施術から2～3週間以内にご利用される方のための特別料金。スキンフェードやバーバースタイルのメンテナンスもお任せください。</p>
            <ul className={styles.table_category}>
              <li className={styles.table_category_detail}>コース内容</li>
              <li className={styles.table_category_pay1}>通常料金（税込）</li>
              <li className={styles.table_category_pay2}>会員優待（税込）</li>
              <li className={styles.table_category_week}>ご利用可能なお客様</li>
            </ul>
            <dl className={styles.table_item_2}>
              <div className={styles.menuItem}>
                <dt>メンテナンス<br/>ベーシックコース</dt>
                <dd className={styles.menuItem_detail}>
                  <p>・カット</p>
                  <p>・オートシャンプー</p>
                  <p>・眉毛カット</p>
                  <p>・スタイリング</p>
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥6,050
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥4,950
                </dd>
                <dd className={styles.menuItem_week}>
                  <span>対象</span>２週間以内に再来店されたお客様
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt>メンテナンス<br/>プレミアムコース</dt>
                <dd className={styles.menuItem_detail}>
                  <p>・カット</p>
                  <p>・ハンドシャンプー</p>
                  <p>・ヘッドスパ</p>
                  <p>・眉毛カット</p>
                  <p>・スタイリング</p>
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥7,150
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥5,500
                </dd>
                <dd className={styles.menuItem_week}>
                  <span>対象</span>3週間以内に再来店されたお客様✳︎
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt>メンテナンス<br/>ラグジュアリーコース</dt>
                <dd className={styles.menuItem_detail}>
                  <p>・カット</p>
                  <p>・ハンドシャンプー</p>
                  <p>・ヘッドスパ</p>
                  <p>・スカルプケア</p>
                  <p>・眉毛カット</p>
                  <p>・スタイリング</p>
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥9,350
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥7,700
                </dd>
                <dd className={styles.menuItem_week}>
                  <span>対象</span>3週間以内に再来店されたお客様✳︎
                </dd>
              </div>
            </dl>
          </section>

          <section className={styles.table}>
            <div className={styles.table_head}>
              <h3>メンズパーマ・縮毛矯正</h3>
              <p>スタイリング込み、カット料金別途</p>
            </div>
            <p className={styles.table_lead}>
              トレンド感のあるスタイルからボリュームアップ・ダウン、パーマ落としまで、幅広いヘアデザインやお悩みに対応。毎日のスタイリングも楽になります。
              ヘアカットとの同時施術は、コースメニュー（ベーシック・プレミアム・ラグジュアリー）と組み合わせることができます。
            </p>
            <ul className={styles.table_category}>
              <li className={styles.table_category_detail}>メニュー内容</li>
              <li className={styles.table_category_pay1}>通常料金（税込）</li>
              <li className={styles.table_category_pay2}>会員優待（税込）</li>
              <li className={styles.table_category_time}>時間の目安</li>
            </ul>
            <dl className={styles.table_item}>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ポイントパーマ</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥6,050~
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥5,500
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>90~120分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ニュアンスパーマ／デザインパーマ</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥8,250
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥7,700
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>90~120分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ストレートパーマ／ダウンパーマ</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥12,100
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥11,000
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>90~120分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>曲がるストレート／曲がる縮毛矯正</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥13,200
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥12,100
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>90~120分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>縮毛矯正</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥15,400
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥13,750
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>90~120分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>スパイラル／ツイスト／スペインカール</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥15,400
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥13,750
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>180分前後
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ツイストスパイラル／波巻きスパイラル</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥20,350
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥18,700
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>180分前後
                </dd>
              </div>
            </dl>
          </section>

          <section className={styles.table}>
            <div className={styles.table_head}>
              <h3>カラー</h3>
              <p>スタイリング込み、カット料金別途</p>
            </div>
            <p>
              ビビッドカラー、アッシュカラー、部分染め、白髪を活かすグレーカラーなど、あなたのご要望をお聞かせください。ヘアカットとの同時施術は、コースメニュー（ベーシック・プレミアム・ラグジュアリー）と組み合わせることができます。
            </p>
            <ul className={styles.table_category}>
              <li className={styles.table_category_detail}>メニュー内容</li>
              <li className={styles.table_category_pay1}>通常料金（税込）</li>
              <li className={styles.table_category_pay2}>会員優待（税込）</li>
              <li className={styles.table_category_time}>時間の目安</li>
            </ul>
            <dl className={styles.table_item}>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ポイントカラー</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥4,950
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥4,400
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>60分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>単色カラー／ブリーチ</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥8,250
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥7,700
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>60分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>白髪染め／白髪ぼかし</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥8,250
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥7,700
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>60分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ハイライト</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥9,350
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥8,800
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>60分
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ダブルカラー（ブリーチ＆カラー）</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥14,300
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥13,200
                </dd>
                <dd className={styles.menuItem_time}>
                  <span>所要時間</span>90分
                </dd>
              </div>
            </dl>
          </section>

          <section className={styles.table}>
            <div className={styles.table_head_2}>
              <h3>ヘアケア・頭皮ケア・リラクゼーション</h3>
            </div>
            <p>
              パーティーや結婚式にスタイリングだけでもご利用いただけます。アイロンでカールをつけると、1日だけパーマ風にイメージチェンジしたり、雰囲気を変えることができます。
            </p>
            <ul className={styles.table_category}>
              <li className={styles.table_category_detail}>メニュー内容</li>
              <li className={styles.table_category_pay1}>通常料金（税込）</li>
              <li className={styles.table_category_pay2}>会員優待（税込）</li>
            </ul>
            <dl className={styles.table_item}>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ヘッドスパ</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥5,500
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥4,400
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ヘッドスパ＋スカルプケア</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥7,700
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥6,600
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>トリートメント</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥4,950
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥3,850
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>スタイリング</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥3,300
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥2,750
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>アイロンスタイリング</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥4,950
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥4,400
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>眉毛デザインカット</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥1,100
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥550
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>オートシャンプー</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥1,650
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥1,100
                </dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_long}>ハンドシャンプー</dt>
                <dd className={styles.menuItem_pay}>
                  <span>通常料金（税込）</span>¥3,850
                </dd>
                <dd className={styles.menuItem_pay}>
                  <span>会員優待（税込）</span>¥2,750
                </dd>
              </div>
            </dl>
          </section>

          <section className={styles.table}>
            <div className={styles.table_head_2}>
              <h3>その他</h3>
            </div>
            <dl className={styles.table_item_2}>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_etc}>会員費（有効期限：1年間）</dt>
                <dd className={styles.menuItem_pay}>￥1,650</dd>
              </div>
              <div className={styles.menuItem}>
                <dt className={styles.menuItem_title_etc}>指名料</dt>
                <dd className={`${styles.menuItem_pay} ${styles.full}`}>￥1,100〜（スタイリストにより異なります）</dd>
              </div>
            </dl>
          </section>
        </section>

        <section className={`${styles.removal} ${styles.section}`}>
          <h2 className={styles.subHeading}>メンズ脱毛</h2>
          <p>
            とことんツルツルにしたり、毛の量を減らしたり、毛の生える範囲をデザインすることができます。<br/>カウンセリング時にご希望をお伝えください。
          </p>
          <div className={utilStyles.linkButton}>
            <Link href='/waxing/'>Read More</Link>
          </div>
        </section>
      </div>
    </MainLayout>
  </>
);

export default Menu;
