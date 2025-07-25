import Head from "next/head";
import Link from "next/link";
import MainLayout from "../components/template/MainLayout";
import useIsSafari from "../libs/useIsSafari";
import styles from "../styles/Top.module.scss";
import { SALON_NAME } from "../constants";

type MeritProps = {
  num: string;
  title: string;
  text: string;
  img: string;
  link?: string;
  otherPageLink?: string;
  linkTxt?: string;
};

const Merit = ({ num, title, text, img, link, otherPageLink, linkTxt }: MeritProps) => (
  <section className={`${img ? styles[`merit_${img}`] : null} ${styles.merit}`}>
    <div className={styles.merit_textArea}>
      <h3>
        <span className={styles.merit_num}>{num}</span>
        <span className={styles.merit_title}>{title}</span>
      </h3>
      <p>{text}</p>
      {link && (
        <div className={styles.merit_link}>
          <Link href={link} legacyBehavior>{linkTxt || "詳しく見る"}</Link>
        </div>
      )}
      {otherPageLink && (
        <div className={styles.merit_link}>
          <a href={otherPageLink} target="_blank" rel="noreferrer">
            {linkTxt || "詳しく見る"}
          </a>
        </div>
      )}
    </div>
  </section>
);

type LinkBoxProps = {
  className: string;
  link: string;
  title: string;
  sub?: string;
  description: string;
};

const LinkBox = ({ className, link, title, sub, description }: LinkBoxProps) => (
  <div className={`${styles.linkBox} ${styles[`linkBox_${className}`]}`}>
    <dl className={styles.linkBox_text}>
      <dt>
        <span className={sub ? styles.linkBox_title : styles.linkBox_jpTitle}>{title}</span>
        {sub && <span className={styles.linkBox_sub}>{sub}</span>}
      </dt>
      <dd className={styles.linkBox_subText}>{description}</dd>
    </dl>
    <div className={styles.linkBox_link}>
      <Link href={link}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        Read More
      </Link>
    </div>
  </div>
);

const Index = () => {
  const isSafari = useIsSafari();

  return (
    <>
      <Head>
        <title>{SALON_NAME}</title>
        <meta
          name="description"
          content="Bee dandy（ビーダンディー）は大人ビジネスマンのための男性専門の美容室＆メンズ脱毛サロン。お一人おひとりに合わせたベストな解決策と施術をご提供し、「魅力と自信」に満ち溢れたあなたの実現をサポートします。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className={`${styles.mv} ${isSafari ? styles.mv_noWebp : styles.mv_webp}`}>
          <p className={styles.mv_text}>
            あなたはここで
            <br className={styles.pcNone} />
            もっとカッコよくなれる。
          </p>
          <p className={styles.mv_logo_text}>男性専門美容室</p>
          <img src="/img/bee_logo_white.svg" className={styles.mv_logo} alt="bee_dandy" />
          <p className={styles.mv_logo_sub}>ビーダンディー</p>
        </div>

        <dl className={styles.news}>
          <dt>News</dt>
          <dd>
            <ul>
              <li>
                <span>2025.7.16</span>
                <span>【8月の店休日】8/13(水).14(木).15(金)</span>
              </li>
              <li>
                <span>2025.7.9</span>
                <span><Link href="/articles/n8u1ahla2v3">【ブログ】30代必見！大人の余裕感漂うフェザーパーマが人気！</Link></span>
              </li>
              <li>
                <span>2025.7.2</span>
                <span>【7月の店休日】7/13 (日)</span>
              </li>


          


              {/* <li> */}
              {/*   <span>2022.09.21</span> */}
              {/*   <Link href="/recruit/">【求人情報】スタイリスト、アシスタント 大至急募集！</Link> */}
              {/* </li> */}
              {/* <li> */}
              {/*    <span>2022.01.11</span> */}
              {/*    <a href="/news/news_220111.pdf" target="_blank"> */}
              {/*        まん延防止等重点措置実施期間中の営業について */}
              {/*    </a> */}
              {/* </li> */}
            </ul>
          </dd>
        </dl>

        <div className={styles.contents}>
          <section className={`${styles.concept} ${styles.section}`}>
            <h2 className={styles.heading}>Concept</h2>
            <p className={styles.lead}>
              お一人おひとりのお顔立ちと
              <br />
              髪質を最大限に活かした
              <br />
              カッコいいをプロデュースします！
            </p>
            <p className={styles.concept_text}>
              「どういう髪型が自分に合っているのか分からない」「白髪や薄毛が気になってきたが相談するのは恥ずかしい」「濃いヒゲの処理が毎日面倒なんだけど楽にならないだろうか」
              こんなお悩みを抱えていませんか？誰一人として同じ容姿を持つ方はいらっしゃいません。だからお一人おひとりお悩みと解決策が違って当然なんです。
            </p>
            <p className={styles.concept_text}>
              Bee
              dandy（ビーダンディー）はお一人おひとりに合わせたベストな解決策と施術をご提供し、「魅力と自信」に満ち溢れたあなたの実現をサポートする男性専門の美容室です。「オシャレをしたいけど、どうしたら良いのか分からない方」も、「より洗練されたオシャレを楽しみたい方」も、男の美容やグルーミングに興味がある、気になっている、そんな大人の男性が安心して通える隠れ家サロンです。
            </p>
          </section>
          <section className={`${styles.salon} ${styles.section}`}>
            <h2 className={styles.heading}>Our Salon</h2>
            <p className={styles.lead}>
              Bee dandy（ビーダンディー）がお届けする
              <br />
              ５つのメリット
            </p>
            <Merit
              img={isSafari ? "01_noWebp" : "01"}
              num="01"
              title={`お悩みを相談できる\nプライベートな空間`}
              text="美容室は恥ずかしくて落ち着かない、隣の人が気になる、相談したいことがあるけど他の人に聞かれたくない…という不安は一切必要ありません。Bee dandyは地下1階にあり、通行人から見られることがありません。また、室内は他のお客様の目線が気にならない半個室の設計だから、ほかのお客様を気にすることなく、ご希望やお悩みをご相談いただけます。"
            />
            <Merit
              img={isSafari ? "02_noWebp" : "02"}
              num="02"
              title={`オンもオフもどちらもOKな\nヘアスタイル`}
              text="人はお顔に一番近いヘアスタイルを整えることで一番印象が変わると言われています。こだわりが特に無い、毎回オーダーは同じ…という方も、今よりカッコ良くなりたいはず。あなたのライフスタイルに合わせて、ビジネスもカジュアルも楽しめる２wayメンズスタイルをご提供します。もちろん、ご自身でセットできるようスタイリングのアドバイスもいたします。"
              otherPageLink="https://www.adjustbook.com/doc/Index/show/us/11750/bk/15091"
              linkTxt="スタイルブックを見る"
            />
            <Merit
              img={isSafari ? "03_noWebp" : "03"}
              num="03"
              title={`髪のボリュームアップや\n白髪をダンディーに演出`}
              text="髪をボリュームアップしたい、毛先を少しだけ曲げカールさせてセットしやすくしたい、白髪を目立たなくしたいなど、あなたのお悩みを解決するためのパーマやカラーを未経験の方も多いはず。お悩みが解決することで毎朝のスタイリングが楽しくなり、時間短縮にもつながります。フェードを利かせたバーバースタイルなどもお任せください。"
            />
            <Merit
              img={isSafari ? "04_noWebp" : "04"}
              num="04"
              title={`頭皮環境と発毛促進を\nリラクゼーションとともに`}
              text="良質な食物は良い土からできるように、良い頭皮環境からは良質で元気な髪が生えてきます。髪のダメージや、抜け毛や薄毛が気になる方には定期的なヘッドスパとスカルプケアをおすすめします。筋肉をほぐしたり、頭皮の汚れや毛穴の詰まりを解消し毛細血管を再生するので気持ちいいのは間違いなし。リフレッシュや発毛促進、さらにはリフトアップなど良いこと尽くしのリラクゼーションです。"
            />
            <Merit
              img={isSafari ? "05_noWebp" : "05"}
              num="05"
              title={`メンズ脱毛サロン併設\n全身トータルコーディネート`}
              text="男の身だしなみ、さりげないオシャレに必須となった、眉毛ケアやヒゲ・全身のメンズ脱毛。毎日のひげ剃りを楽にしたい、手足の毛を嫌がられない程度に薄くしたい…そのお悩みもBee dandyで解決できます。バレない眉メイクや毛の生え方のデザインまで、プロがアドバイスしますので全てお任せください。"
              link="/waxing/"
              linkTxt='詳しくはこちら'
            />
          </section>

          <section className={`${styles.section} `}>
            <h2 className={styles.heading}>Information</h2>
            <p className={styles.lead}>
              <span className={styles.br}>私たちのお店</span>
              <span className={styles.br}>Bee dandy（ビーダンディー）について</span>
            </p>
            <ul className={styles.info}>
              <li>
                <LinkBox
                  title="Menu"
                  sub="メニュー一覧"
                  link="/menu/"
                  className={isSafari ? "menu_noWebp" : "menu"}
                  description="メンズカット、ヘッドスパ、パーマ、カラーなど詳細と料金"
                />
              </li>
              <li>
                <LinkBox
                  title="Salon"
                  sub="店舗情報"
                  link="/salon/"
                  className={isSafari ? "salon_noWebp" : "salon"}
                  description="新橋駅、汐留駅、御成門駅からいずれも徒歩６分とアクセスも便利"
                />
              </li>
              <li>
                <LinkBox
                  title="Staff"
                  sub="スタッフ一覧"
                  link="/staff/"
                  className={isSafari ? "staff_noWebp" : "staff"}
                  description="経験豊富なスタイリストが、あなたのカッコいいをプロデュース"
                />
              </li>
              <li>
                <LinkBox
                  title="FAQ"
                  sub="よくある質問"
                  link="/faq/"
                  className={isSafari ? "faq_noWebp" : "faq"}
                  description="〈美容室〉と〈理容室〉の違いって何でしょうか？"
                />
              </li>
              <li>
                <LinkBox
                  title="脱毛"
                  link="/waxing/"
                  className={isSafari ? "waxing_noWebp" : "waxing"}
                  description="ビジネスマンの脱毛デビューは、Bee dandyが安心です"
                />
              </li>
              <li>
                <LinkBox
                  title="Blog"
                  sub="ブログ"
                  link="/blog/"
                  className={isSafari ? "blog_noWebp" : "blog"}
                  description="Bee dandyの最新情報をお届けします"
                />
              </li>
            </ul>
          </section>
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
