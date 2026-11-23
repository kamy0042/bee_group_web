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
import { CtaButton } from "../../components/CtaButton";
import {
  SCALP_INK_CASES,
  SCALP_INK_FEATURES,
  SCALP_INK_FLOW,
  SCALP_INK_MERITS,
  SCALP_INK_PRICE_TABLE,
  SCALP_INK_TRIAL_TABLE,
} from "../../data/scalpink.data";
import { SCALP_INK_PAGE_FAQ } from "../../data/faq.data";
import { RESERVE_URL } from "../../public/static";
import { SALON_NAME } from "../../constants";
import pageStyles from "../../styles/Page.module.scss";
import styles from "../../styles/ScalpInk.module.scss";

const ABOUT_TEXT = [
  "スカルプインク（SMP／Scalp Micropigmentation）は、頭皮に微細なドット（点）で陰影をつくり、薄毛を視覚的にカモフラージュする頭皮タトゥー技法です。",
  "髪そのものを増やすのではなく、地肌の透け感を目立ちにくくし、生え際や頭頂部の印象を自然に整えます。麻酔を使用せず、比較的痛みが少ないことも特徴です。",
];

const STAFF_TEXT = [
  "美容師として、これまで多くの男性の髪や頭皮のお悩みに向き合ってきました。薄毛の見え方に対して、ヘアスタイル（カットやセット）によるカバーだけでなく、頭皮そのものの見た目を整えるスカルプインクに着目しました。",
  "2026年3月、THE SCALP INKの講習を修了。美容師として培ってきたヘアスタイルと顔立ちのバランスを見極める経験を活かし、自然になじむ仕上がりを大切に施術しています。",
];

const splitLabel = (text: string) => {
  const index = text.indexOf("：");
  return index === -1 ? ["", text] : [text.slice(0, index + 1), text.slice(index + 1)];
};

const ScalpInk = () => (
  <>
    <Head>
      <title>{`スカルプインク | ${SALON_NAME}`}</title>
      <meta
        name="description"
        content="新橋の男性専門美容室 Bee dandyのスカルプインク（SMP）。薄毛や生え際が気になる方へ、スカルプインクという新しい選択肢。頭皮に細かな陰影を加え、気になる地肌の目立ちを抑える美容施術です。"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout>
      <PageHeader
        en="SCALP INK"
        ja="スカルプインク"
        image={{ src: "/img/scalp/scalp-img-1.png", width: 1672, height: 941, position: "60% 40%" }}
      >
        <p className={styles.heroLead}>
          薄毛・生え際に、
          <br className={styles.spOnly} />
          スカルプインクという<wbr />新しい選択肢。
        </p>
        <div className={styles.heroText}>
          <p>髪を増やすのではなく、頭皮に細かな陰影を加え、気になる地肌の目立ちを抑える美容施術です。</p>
          <p>生え際の後退も、頭頂部の薄毛も、それぞれの状態に合わせて自然な印象へ整えます。</p>
        </div>
      </PageHeader>
      <InPageNav
        items={[
          { id: "about", label: "WHAT IS SMP?" },
          { id: "before-after", label: "BEFORE ＆ AFTER" },
          { id: "staff", label: "STAFF" },
          { id: "flow", label: "FLOW" },
          { id: "faq", label: "FAQ" },
          { id: "price", label: "MENU & PRICE" },
        ]}
      />

      <section id="about" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="WHAT IS SMP?" lead="スカルプインク（SMP）とは？" />
          <div className={styles.about}>
            <div className={styles.aboutVisual}>
              <Photo
                src="/img/scalp/scalp-image-2.png"
                width={1448}
                height={1086}
                alt="頭皮の施術を受ける男性"
                className={styles.aboutImage}
              />
            </div>
            <div className={pageStyles.text}>
              {ABOUT_TEXT.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={pageStyles.subHeading}>スカルプインクの特徴</h3>
            <div className={styles.features}>
              {SCALP_INK_FEATURES.map((feature, i) => (
                <div key={feature.title} className={styles.feature}>
                  <span className={styles.featureNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureText}>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={pageStyles.subHeading}>スカルプインクのメリット</h3>
            <div className={styles.merits}>
              {SCALP_INK_MERITS.map((merit) => (
                <div key={merit.title} className={styles.merit}>
                  <h4>{merit.title}</h4>
                  <p>{merit.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.notice}>
              <h3 className={styles.noticeTitle}>知っておいて<wbr />いただきたいこと</h3>
              <p className={styles.noticeText}>
                スカルプインクは、髪そのものを生やしたり増やしたりする施術ではありません。また、色素は永久ではなく、時間とともに薄くなるため、仕上がりを保つためにリタッチが必要になる場合があります。
              </p>
              <div className={styles.noticeNotes}>
                <p>※スカルプインクは、発毛・育毛・治療を目的とするものではありません。</p>
                <p>※仕上がりや持続期間には個人差があります。また、頭皮の状態や体質によっては施術できない場合もあります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="before-after" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="BEFORE ＆ AFTER" lead="お悩み別｜スカルプインクでどう変わる？" />
          <div className={styles.casesIntro}>
            <p>薄毛の状態によって、スカルプインクの役割は異なります。気になる部分に合わせて、見え方を自然に整えていきます。</p>
            <p className={styles.casesNote}>
              ※完成までに必要なショット数や施術回数は、お一人おひとりの頭皮の状態や施術範囲によって異なります。
            </p>
          </div>
          <div className={styles.cases}>
            {SCALP_INK_CASES.map((item) => (
              <article key={item.title} className={styles.case}>
                <div className={styles.caseVisual}>
                  <Photo {...item.photo} alt={item.alt} className={styles.caseImage} />
                </div>
                <div>
                  <h3 className={styles.caseTitle}>{item.title}</h3>
                  <div className={styles.caseText}>
                    {item.description.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                  <dl className={styles.estimate}>
                    <dt>完成までの目安</dt>
                    {item.estimates.map((estimate) => {
                      const [label, value] = splitLabel(estimate);
                      return (
                        <dd key={estimate}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </dd>
                      );
                    })}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="staff" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="STAFF" />
          <StaffProfile
            photo={{ src: "/img/staff/staff_matsui_skalp_202611.jpg", width: 1400, height: 2100, position: "50% 15%" }}
            squarePhoto
            alt="スカルプインク認定アーティスト 松井 祐太"
            position="スカルプインク認定アーティスト"
            name="松井 祐太"
          >
            {STAFF_TEXT.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </StaffProfile>
        </div>
      </section>

      <section id="flow" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="FLOW" lead="施術の流れ" />
          <ol className={styles.flow}>
            {SCALP_INK_FLOW.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>{" "}
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className={pageStyles.section}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="FAQ" />
          <FaqList items={SCALP_INK_PAGE_FAQ} />
          <p className={pageStyles.more}>
            <LinkButton href="/faq#scalp-ink" variant="text">
              その他のよくある質問はこちら →
            </LinkButton>
          </p>
        </div>
      </section>

      <section id="price" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="MENU & PRICE" />
          <div className={pageStyles.stack}>
            <PriceTable {...SCALP_INK_TRIAL_TABLE} />
            <PriceTable {...SCALP_INK_PRICE_TABLE} />
          </div>
          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>まずはカウンセリング＆初回体験から</h3>
            <p className={styles.ctaText}>
              「自分の場合はどうなる？」「どのくらいで完成する？」そんな疑問にお答えしながら、頭皮の状態やご希望に合わせた施術プランをご提案します。
            </p>
            <div className={styles.ctaButton}>
              <CtaButton text={<>カウンセリング＆<wbr />初回体験を<wbr />予約する</>} link={RESERVE_URL} />
            </div>
            <p className={styles.ctaNote}>※無料カウンセリングのみのご利用も可能です。</p>
          </div>
        </div>
      </section>
    </MainLayout>
  </>
);

export default ScalpInk;
