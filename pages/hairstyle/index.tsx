import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageHeader from "../../components/PageHeader";
import InPageNav from "../../components/InPageNav";
import SectionHeading from "../../components/SectionHeading";
import Photo from "../../components/Photo";
import StaffProfile from "../../components/StaffProfile";
import FaqList from "../../components/FaqList";
import PriceTable from "../../components/PriceTable";
import LinkButton from "../../components/LinkButton";
import ReserveButton from "../../components/ReserveButton";
import {
  HAIR_COURSE_KEYWORDS,
  HAIR_COURSE_TABLE,
  HAIR_MENUS,
  HAIR_OTHER_TABLE,
  HAIR_PRICE_TABLES,
  HAIR_STYLISTS,
} from "../../data/hairstyle.data";
import { HAIR_STYLE_PAGE_FAQ } from "../../data/faq.data";
import { SALON_NAME, STYLEBOOK_URL } from "../../constants";
import pageStyles from "../../styles/Page.module.scss";
import styles from "../../styles/HairStyle.module.scss";

const CONCEPT_LINES = [
  "都会的で上品なスタイルの中に、軽い遊び心を取り入れること。",
  "そこから生まれるのが、まわりにも伝わる「大人の余裕と色気」です。",
  "自分に似合うヘアスタイルを手に入れることで、その人の魅力はもっと引き立ちます。",
  "Bee dandyは、来るたびにカッコよくなる場所。",
  "年齢を重ねるごとに、もっとカッコよくなれるスタイルを提案します。",
];

const HairStyle = () => (
  <>
    <Head>
      <title>{`ヘアスタイル | ${SALON_NAME}`}</title>
      <meta
        name="description"
        content="新橋の男性専門美容室 Bee dandyのヘアメニュー。メンズカット、パーマ、カラー、ヘッドスパなど、Bee dandyのヘアメニューをご紹介します。スタイリスト紹介・料金表も掲載しています。"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout>
      <PageHeader
        en="HAIR STYLE"
        ja="ヘアスタイル"
        image={{
          src: "/img/bee_menu-min.jpg",
          width: 1600,
          height: 1067,
          position: "50% 60%",
        }}
      />
      <InPageNav
        items={[
          { id: "concept", label: "CONCEPT" },
          { id: "menu", label: "MENU" },
          { id: "stylist", label: "STYLIST" },
          { id: "faq", label: "FAQ" },
          { id: "price", label: "PRICE" },
        ]}
      />

      <section id="concept" className={pageStyles.section}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="CONCEPT" lead="Bee dandyが提案する「お洒落」とは？" />
          <div className={styles.concept}>
            {CONCEPT_LINES.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="MENU" />
          <ul className={styles.menuIndex}>
            {HAIR_MENUS.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.id}`}>{menu.title}</a>
              </li>
            ))}
          </ul>
          <div className={styles.menus}>
            {HAIR_MENUS.map((menu, i) => (
              <article key={menu.id} id={menu.id} className={styles.menu}>
                <div className={styles.menuPhoto}>
                  <Photo {...menu.photo} alt={menu.alt} className={styles.menuImage} />
                </div>
                <div>
                  <span className={styles.menuNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.menuTitle}>{menu.title}</h3>
                  <div className={styles.menuText}>
                    {menu.description.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                  <div className={styles.menuLists}>
                    <div className={styles.menuList}>
                      <h4>こんな方におすすめ</h4>
                      <ul className={styles.checkList}>
                        {menu.recommends.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {menu.popular && (
                      <div className={styles.menuList}>
                        <h4>{menu.popular.title}</h4>
                        <ul className={styles.tagList}>
                          {menu.popular.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a className={styles.stylebook} href={STYLEBOOK_URL} target="_blank" rel="noreferrer">
            <span className={styles.stylebookPhoto}>
              <Photo
                src="/img/recruit/bee_image.jpg"
                width={1505}
                height={1125}
                alt="Bee dandyのヘアスタイル例"
                className={styles.stylebookImage}
              />
            </span>
            <span className={styles.stylebookLabel}>スタイルブックを見る</span>
          </a>
        </div>
      </section>

      <section id="stylist" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="STYLIST" />
          {HAIR_STYLISTS.map((stylist) => (
            <StaffProfile key={stylist.name} {...stylist} />
          ))}
          <div className={styles.voice}>
            <h3 className={styles.voiceTitle}>お客様の声</h3>
            <p>Bee dandyに寄せられたお客様の声をご紹介します</p>
            <LinkButton href="/voice" className={styles.voiceButton}>
              Read More
            </LinkButton>
          </div>
        </div>
      </section>

      <section id="faq" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="FAQ" />
          <FaqList items={HAIR_STYLE_PAGE_FAQ} />
          <p className={pageStyles.more}>
            <LinkButton href="/faq#hair" variant="text">
              その他のよくある質問はこちら →
            </LinkButton>
          </p>
        </div>
      </section>

      <section id="price" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="PRICE" />
          <div className={styles.priceIntro}>
            <p>
              ご希望に合うコースをお選びください。
              <br />
              またオプションより必要なメニューを追加する事ができます。
            </p>
            <p className={styles.priceNote}>
              ※時間は目安です。長さやスタイル、パーマのかかり具合、カラーの染まり具合によっても施術時間が変化しますので、多少お時間に余裕を持ってご来店ください。
            </p>
          </div>
          <div className={pageStyles.stack}>
            <PriceTable {...HAIR_COURSE_TABLE}>
              <dl className={styles.keywords}>
                {HAIR_COURSE_KEYWORDS.map((keyword) => (
                  <div key={keyword.term}>
                    <dt>{keyword.term}</dt>
                    <dd>{keyword.description}</dd>
                  </div>
                ))}
              </dl>
            </PriceTable>
            {HAIR_PRICE_TABLES.map((table) => (
              <PriceTable key={table.title} {...table} />
            ))}
            <PriceTable {...HAIR_OTHER_TABLE} hideHead />
          </div>
          <div className={pageStyles.actions}>
            <ReserveButton className={styles.reserve} />
          </div>
        </div>
      </section>
    </MainLayout>
  </>
);

export default HairStyle;
