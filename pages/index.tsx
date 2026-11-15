import Head from "next/head";
import Link from "next/link";
import MainLayout from "../components/template/MainLayout";
import Photo, { PhotoAsset } from "../components/Photo";
import SectionHeading from "../components/SectionHeading";
import SmpVisual from "../components/SmpVisual";
import LinkButton from "../components/LinkButton";
import ReserveButton from "../components/ReserveButton";
import { GOOGLE_MAP_URL, SALON_NAME } from "../constants";
import { SHOP_INFO } from "../public/static";
import pageStyles from "../styles/Page.module.scss";
import styles from "../styles/Top.module.scss";

const CONCEPT_TEXT = [
  "男性の髪や頭皮は、実はとても繊細です。髪質や生え方、顔立ち、頭の形、年齢による変化まで、一人ひとり違います。だからBee dandyでは、しっかりお話を伺いながら、その方に合ったヘアスタイルやケアをご提案します。",
  "「自分に似合う髪型が分からない」「最近、髪のボリュームや薄毛が気になってきた」「ヒゲや体毛の手入れをもっと楽にしたい」。男性の美容や身だしなみに関する悩みは、人それぞれです。",
  "ヘアカットやパーマ、カラーはもちろん、薄毛や生え際が気になる方にはスカルプインクという選択肢を。ヒゲや体毛のお悩みにはメンズ脱毛という選択肢もあります。",
  "Bee dandyは、髪型だけでなく、男性が感じるさまざまなお悩みに向き合いながら、その人らしい「カッコいい」を一緒につくる男性専門サロンです。",
];

type Merit = {
  title: string;
  text: string[];
  photo?: PhotoAsset;
  alt?: string;
  link?: string;
};

const MERITS: Merit[] = [
  {
    title: "お悩みを相談できるプライベートな空間",
    text: [
      "「美容室はなんとなく落ち着かない」「隣の人が気になる」「相談したいことがあるけれど他の人には聞かれたくない」。そんな不安はもう必要ありません。Bee dandyは地下1階にあり、通行人から店内を見られることがありません。店内も、ほかのお客様の目線が気になりにくい半個室設計。髪型や白髪、薄毛など、人には少し相談しづらい悩みも、周囲を気にせず相談できます。",
    ],
    photo: {
      src: "/img/bee_room_image-min.jpg",
      width: 1280,
      height: 960,
      position: "62% 60%",
    },
    alt: "半個室のセット面",
  },
  {
    title: "ビジネスも休日も楽しめるメンズヘア",
    text: [
      "「特にこだわりはない」「毎回オーダーは同じ」。そんな方も、今よりカッコよくなりたいはず。Bee dandyでは、髪質やクセ、骨格、顔立ち、ライフスタイルに合わせて、カッコいいだけでなく、毎日のセットのしやすさまで考えたヘアスタイルを提案。ビジネスでは端正な印象に、休日には少し遊び心を加えるなど、オン・オフそれぞれを楽しめるスタイルも可能です。メンズパーマやバーバースタイルなど、イメージチェンジもお任せください。",
    ],
    photo: {
      src: "/img/bee_style-min.jpg",
      width: 1280,
      height: 853,
      position: "66% 30%",
    },
    alt: "ビジネスシーンに映えるヘアスタイルの男性",
    link: "/hairstyle",
  },
  {
    title: "髪のボリュームアップや白髪をダンディーに演出",
    text: [
      "「髪をボリュームアップしたい」「白髪を自然に見せたい」。そうしたお悩みを解決するパーマやカラーを、未経験の方も多いはず。派手になりそうと敬遠されがちですが、実は悩みを解消し毎日のセットを楽にする手段でもあります。Bee dandyでは髪質を見極め自然なスタイルをご提案。さらにヘッドスパやスカルプケアで健やかな頭皮環境づくりもサポートします。",
    ],
    photo: {
      src: "/img/bee_man-min.jpg",
      width: 1280,
      height: 853,
      position: "40% 30%",
    },
    alt: "落ち着いたヘアスタイルの男性",
    link: "/hairstyle",
  },
  {
    title: "薄毛や生え際に、スカルプインクという新しい選択肢",
    text: [
      "「最近、生え際が気になってきた」「つむじの透け感が目立つようになった」。そんな薄毛のお悩みに、スカルプインク（SMP）という新しい選択肢があります。頭皮に毛根のような細かな陰影を描くことで、髪があるように自然に見せる施術です。今の髪型や頭皮の状態を活かしながら、気になる部分を目立ちにくくします。一人ひとりの髪型や頭皮の状態に合わせて、自然に見えるよう丁寧に施術します。",
    ],
    link: "/scalp-ink",
  },
  {
    title: "ヘアカットと一緒に脱毛も可能",
    text: [
      "髪型が整うと、次に気になってくるのがヒゲや体毛。「毎日のひげ剃りを楽にしたい」「手や脚の毛を自然に薄くしたい」「脱毛の相談をするのが恥ずかしい」そんな男性も多いはずです。",
      "Bee dandyのメンズ脱毛はツルツルにするだけでなく、毛量を減らしたり生え方を整えるなど、希望に合わせた仕上がりも可能。ヘアカットとあわせて相談・施術できるため、初めての方にも始めやすい環境です。",
    ],
    photo: { src: "/img/img_man_02.JPG", width: 1500, height: 1124, position: "62% 35%" },
    alt: "ヒゲを整えたビジネスマン",
    link: "/waxing",
  },
];

type InfoCard = {
  href: string;
  en: string;
  ja: string;
  description: string;
  photo?: PhotoAsset;
  alt?: string;
};

const INFO_CARDS: InfoCard[] = [
  {
    href: "/hairstyle",
    en: "Hair Style",
    ja: "ヘアスタイル",
    description: "メンズカット、パーマ、カラー、ヘッドスパなど、Bee dandyのヘアメニューをご紹介",
    photo: { src: "/img/bee_menu-min.jpg", width: 1600, height: 1067 },
    alt: "ハサミとコーム",
  },
  {
    href: "/scalp-ink",
    en: "Scalp Ink",
    ja: "スカルプインク",
    description: "薄毛や生え際が気になる方へ、スカルプインクという新しい選択肢",
  },
  {
    href: "/waxing",
    en: "Hair Removal",
    ja: "メンズ脱毛",
    description: "ヒゲや体毛のお悩みに。大人の男性の身だしなみをサポート",
    photo: {
      src: "/img/bee_removal-min.jpg",
      width: 1280,
      height: 960,
      position: "50% 70%",
    },
    alt: "メンズ脱毛の施術イメージ",
  },
  {
    href: "/faq",
    en: "FAQ",
    ja: "よくある質問",
    description: "ヘアカット、スカルプインク、メンズ脱毛についてよくいただくご質問",
    photo: {
      src: "/img/bee_image_1-min.jpg",
      width: 1066,
      height: 1600,
      position: "50% 70%",
    },
    alt: "グルーミングアイテム",
  },
  {
    href: "/blog",
    en: "Blog & Voice",
    ja: "ブログ・お客様の声",
    description: "Bee dandyの最新情報やヘアスタイル、お客様の声をご紹介",
    photo: {
      src: "/img/bee_business-min.jpg",
      width: 1280,
      height: 853,
      position: "50% 70%",
    },
    alt: "ビジネスバッグとネクタイ",
  },
  {
    href: "/recruit",
    en: "Recruit",
    ja: "スタイリスト募集",
    description: "アシスタント・スタイリストを募集しています",
    photo: { src: "/img/recruit/staffs.jpg", width: 1500, height: 843, position: "50% 30%" },
    alt: "Bee dandyのスタッフ",
  },
];

const Index = () => (
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
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <Photo
            src="/img/bee_top_image-min.jpg"
            width={1600}
            height={1200}
            position="28% 40%"
            alt=""
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.heroInner}>
          <p className={styles.heroCopy}>
            あなたはここで
            <br className={styles.spOnly} />
            もっとカッコよくなれる。
          </p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroCategory}>男性専門美容室</span>
            <img src="/img/bee_logo_white.svg" className={styles.heroLogo} width="235" height="36" alt="Bee dandy" />
            <span className={styles.heroKana}>ビーダンディー</span>
          </h1>
        </div>
        <span className={styles.scroll} aria-hidden="true" />
      </section>

      <div className={styles.newsWrap}>
        <dl className={styles.news}>
          <dt>News</dt>
          <dd>
            <ul>
              <li>
                <span className={styles.newsDate}>2026.10.15</span>
                <span>【11月の店休日】11/1(日)、11/15(日)</span>
              </li>
              <li>
                <span className={styles.newsDate}>2026.10.1</span>
                <span>【10月の店休日】10/4(日)、10/18(日)</span>
              </li>
              <li>
                <span className={styles.newsDate}>2026.8.27</span>
                <span>【9月の店休日】9/6(日)、9/20(日)</span>
              </li>
            </ul>
          </dd>
        </dl>
      </div>

      <section id="concept" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading
            en="CONCEPT"
            lead={
              <>
                あなたのお悩みを、
                <br className={styles.spOnly} />
                カッコよく解決する。
              </>
            }
            sub="Bee dandyは、ビジネスマンの味方です。"
          />
          <div className={styles.concept}>
            <div className={styles.conceptPhoto}>
              <Photo
                src="/img/owner_cut_2.jpg"
                width={1700}
                height={1133}
                position="38% 50%"
                alt="鏡越しにお客様と会話するスタイリスト"
                className={styles.conceptImage}
              />
            </div>
            <div className={`${pageStyles.text} ${styles.conceptText}`}>
              {CONCEPT_TEXT.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="our-salon" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="OUR SALON" lead="Bee dandy がお届けする５つのメリット" />
          <ol className={styles.merits}>
            {MERITS.map((merit, i) => (
              <li key={merit.title} className={styles.merit}>
                <div className={styles.meritVisual}>
                  {merit.photo ? (
                    <Photo {...merit.photo} alt={merit.alt ?? ""} className={styles.meritImage} />
                  ) : (
                    <SmpVisual className={styles.meritImage} label="Scalp Micropigmentation" />
                  )}
                </div>
                <div className={styles.meritBody}>
                  <span className={styles.meritNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.meritTitle}>{merit.title}</h3>
                  <div className={styles.meritText}>
                    {merit.text.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                  {merit.link && (
                    <LinkButton href={merit.link} variant="text" className={styles.meritLink}>
                      詳しくはこちら
                    </LinkButton>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="location" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="LOCATION" />
          <div className={styles.location}>
            <div className={styles.locationPhoto}>
              <Photo
                src="/img/recruit/salon_img_4576.jpg"
                width={2000}
                height={1333}
                alt="Bee dandyの店内"
                className={styles.locationImage}
              />
            </div>
            <div>
              <h3 className={styles.locationTitle}>店舗情報</h3>
              <p className={styles.address}>
                東京都港区新橋5－8－3 代市ビル B１F（
                <a href={GOOGLE_MAP_URL} target="_blank" rel="noreferrer">
                  Google MAP
                </a>
                ）
              </p>
              <p className={styles.access}>
                小さな売店のあるビルの地下１階です。新橋駅、汐留駅、御成門駅から各いずれも徒歩で約６分
              </p>
              <p className={styles.parking}>※専用駐車場はありませんので近くのコインパーキングをご利用ください。</p>
              <dl className={styles.hours}>
                <div>
                  <dt>営業時間</dt>
                  <dd>
                    <p>{`平日：${SHOP_INFO.OPEN} - ${SHOP_INFO.CLOSE}（最終受付:${SHOP_INFO.RESERVE_LIMIT}）`}</p>
                    <p>{`土祝：${SHOP_INFO.HOLIDAY_OPEN} - ${SHOP_INFO.HOLIDAY_CLOSE}（最終受付:${SHOP_INFO.HOLIDAY_RESERVE_LIMIT}）`}</p>
                    <p>{`日曜：${SHOP_INFO.SUNDAY_OPEN} - ${SHOP_INFO.SUNDAY_CLOSE}（最終受付:${SHOP_INFO.SUNDAY_RESERVE_LIMIT}）`}</p>
                  </dd>
                </div>
                <div>
                  <dt>定休日</dt>
                  <dd>{SHOP_INFO.HOLIDAY}</dd>
                </div>
              </dl>
              <ReserveButton className={styles.locationReserve} />
            </div>
          </div>
        </div>
      </section>

      <section id="information" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="INFORMATION" />
          <div className={styles.message}>
            <div className={styles.messagePhoto}>
              <Photo
                src="/img/recruit/owner_message.jpg"
                width={980}
                height={653}
                alt="オーナー 松井祐太"
                className={styles.messageImage}
              />
            </div>
            <div className={styles.messageBody}>
              <p>
                “Bee”には「蜂」のほか、「働く人、仲間の集まり」の意味もあります。「オシャレの仕方が分からない方」も「より洗練されたオシャレを楽しみたい方」も。身近な存在として『今までで一番』と思えるサービスをお届けします。
              </p>
              <p>
                さらにご家族や友人、恋人にも「今までで一番いいね」と認められることで、あなたに関わるすべての方の心まで豊かにしてまいります。
              </p>
              <p className={styles.signature}>オーナー 松井祐太</p>
            </div>
          </div>
          <ul className={styles.cards}>
            {INFO_CARDS.map((card) => (
              <li key={card.href}>
                <Link href={card.href} className={styles.card}>
                  <div className={styles.cardVisual}>
                    {card.photo ? (
                      <Photo {...card.photo} alt={card.alt ?? ""} className={styles.cardImage} />
                    ) : (
                      <SmpVisual className={styles.cardImage} label="Scalp Micropigmentation" />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>
                      <span className={styles.cardEn}>{card.en}</span>
                      <span className={styles.cardJa}>{card.ja}</span>
                    </h3>
                    <p className={styles.cardText}>{card.description}</p>
                    <span className={styles.cardMore}>Read More</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MainLayout>
  </>
);

export default Index;
