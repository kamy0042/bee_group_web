import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageHeader from "../../components/PageHeader";
import InPageNav from "../../components/InPageNav";
import SectionHeading from "../../components/SectionHeading";
import Photo, { PhotoAsset } from "../../components/Photo";
import StaffProfile from "../../components/StaffProfile";
import FaqList from "../../components/FaqList";
import PriceTable from "../../components/PriceTable";
import LinkButton from "../../components/LinkButton";
import { CtaButton } from "../../components/CtaButton";
import { waxingCollection } from "../../data/waxing.data";
import { WAXING_PAGE_FAQ } from "../../data/faq.data";
import { RESERVE_URL } from "../../public/static";
import { SALON_NAME } from "../../constants";
import pageStyles from "../../styles/Page.module.scss";
import styles from "../../styles/Waxing.module.scss";

type SalesPoint = {
  title: string;
  text: string;
  photo: PhotoAsset;
  alt: string;
};

const SALES_POINTS: SalesPoint[] = [
  {
    title: "隠れ家的サロン",
    text: "男の身だしなみ、さりげないオシャレに必須となったメンズ脱毛。ビジネスマンが通うメンズ美容室の脱毛サロンだから、お店に入る時も恥ずかしくない！高級感漂う落ち着きの個室空間、人目を気にせず相談や施術が受けられます。",
    photo: { src: "/img/bee_room_image-min.jpg", width: 1280, height: 960 },
    alt: "個室で安心施術",
  },
  {
    title: "確かな技術",
    text: "脱毛施術を行うのは美容師免許も持つプロの女性スタッフ。髪と肌のトータルケアを実現し、的確なカウンセリングと確かな技術で、心も身体もキレイに！デリケートゾーンの脱毛もご安心ください。（状況により、男性スタッフの場合もございます）",
    photo: { src: "/img/waxing/waxing_specialist.jpg", width: 525, height: 393, position: "50% 30%" },
    alt: "認定脱毛士資格を持つ女性スタッフ",
  },
  {
    title: "安全の国産マシン",
    text: "日本エステティック振興協議会の認定機種で、男性のヒゲ、ワキ、VIOのような太くて濃い毛を得意とする機種でありながら、痛みが少ないと評判です。施術時にジェルが必要ないので時間が短縮できるうえ、光の作用と瞬間的冷却美容で毛穴が引き締まり、美肌効果も得られます。",
    photo: { src: "/img/bee_waxing.jpg", width: 640, height: 480 },
    alt: "脱毛には国産器具を利用",
  },
  {
    title: "明朗会計",
    text: "その日に受けた施術分の料金をお支払いいただくシステムです。1回ごとのお支払いなので、止めたい時も、また始めたい時も、タイミングは自分で決められます。ローンや分割払いのコースはありません。ご希望の方には、前払い制で回数制限のない、年間フリーパスポートもご用意しています。",
    photo: { src: "/img/waxing/payment.jpg", width: 1500, height: 1001 },
    alt: "1回ごとのお支払い",
  },
];

type FlowStep = {
  title: string;
  text: string[];
  photo: PhotoAsset;
  alt: string;
};

const FLOW_STEPS: FlowStep[] = [
  {
    title: "無料カウンセリング予約",
    text: ["電話・Webから、ご希望の日時をご予約ください。所用時間は約30分です。当日ご持参いただくものは特にありません。"],
    photo: { src: "/img/waxing/tel.jpg", width: 640, height: 480 },
    alt: "電話予約のイメージ",
  },
  {
    title: "カウンセリング来店・ご相談",
    text: [
      "お悩みやご希望をお伺いしながら、施術方針や通う頻度などのアドバイスをいたします。不安なことがあれば気軽にご相談ください。納得できたら初回施術日を予約して終了です。",
    ],
    photo: { src: "/img/waxing/counseling_2.jpg", width: 640, height: 480 },
    alt: "カウンセリング中の様子",
  },
  {
    title: "施術開始",
    text: [
      "前日（ヒゲは当日）に電気シェーバーなどで処理してご来店ください。照射スタート！照射後もお肌を優しくケアいたします。",
    ],
    photo: { src: "/img/waxing/in_waxing.jpg", width: 640, height: 480 },
    alt: "安心の国産マシンによる施術",
  },
  {
    title: "施術終了",
    text: [
      "施術後の状態を確認し、アフターケアのアドバイスをいたします。ご要望・疑問点は何なりとお伝えください。次回のご予約をして終了です。",
      "※ヘアカットと同日に脱毛カウンセリングや施術を受けることもできます。ヘアカットと脱毛は別々に、時間をずらしてご予約ください。",
    ],
    photo: { src: "/img/waxing/next_booking.jpg", width: 569, height: 427 },
    alt: "次回の予約",
  },
];

const Waxing = () => (
  <>
    <Head>
      <title>{`メンズ脱毛 | ${SALON_NAME}`}</title>
      <meta
        name="description"
        content="大人ビジネスマンのためのメンズ脱毛サロン。男性専門美容室に併設。男のおしゃれ・身だしなみに必須のヒゲ脱毛・全身脱毛・VIO脱毛。初めての脱毛デビューならBee dandy（ビーダンディー）が安心。痛みの少ない国産の光脱毛マシンで安心。"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout>
      <PageHeader
        en="HAIR REMOVAL"
        ja="メンズ脱毛"
        image={{
          src: "/img/bee_removal-min.jpg",
          width: 1280,
          height: 960,
          position: "50% 58%",
        }}
      />
      <InPageNav
        items={[
          { id: "concept", label: "CONCEPT" },
          { id: "our-salon", label: "OUR SALON" },
          { id: "staff", label: "STAFF" },
          { id: "flow", label: "FLOW" },
          { id: "faq", label: "FAQ" },
          { id: "price", label: "MENU & PRICE" },
        ]}
      />

      <section id="concept" className={pageStyles.section}>
        <div className={pageStyles.narrow}>
          <SectionHeading
            en="CONCEPT"
            lead={
              <>
                青ひげ卒業 ＆ 清潔感アップ！
                <br />
                ビジネスマンの脱毛デビューは、
                <br className={styles.spOnly} />
                Bee dandyが安心です。
              </>
            }
          />
          <div className={pageStyles.text}>
            <p>
              「毎日のひげ剃りを楽にしたい」「手や足の毛を嫌がられない程度に薄くしたい」「でも脱毛サロンへ通うのはハードルが高いし、そもそも脱毛について聞くこと自体が恥ずかしい」こんなお悩みを抱えていませんか？
            </p>
            <p>
              そこで、ビジネスマン比率90％以上の男性専門美容室に、メンズ脱毛サロンを併設しました。もう、毎朝のひげ剃り、髪のスタイリングに悩まなくていいんです！メンズは頭皮も髪の毛も、そしてお肌も繊細。だから、ヘアスタイル、白髪や毛量、眉毛の手入れ、そしてムダ毛処理まで、一人ひとりの個性に合わせて、あなたのお悩みをカッコよく解決します。
            </p>
          </div>
          <div className={pageStyles.actions}>
            <LinkButton href="https://instagram.com/beedandy_epilation_official?igshid=NTc4MTIwNjQ2YQ==" external>
              Instagramを見る
            </LinkButton>
          </div>
        </div>
      </section>

      <section id="our-salon" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading
            en="OUR SALON"
            lead={
              <>
                Bee dandy（ビーダンディー）メンズ専門脱毛サロンが
                <br className={styles.pcOnly} />
                お届けする４つの安心
              </>
            }
          />
          <ol className={styles.points}>
            {SALES_POINTS.map((point, i) => (
              <li key={point.title} className={styles.point}>
                <div className={styles.pointPhoto}>
                  <Photo {...point.photo} alt={point.alt} className={styles.pointImage} />
                </div>
                <h3 className={styles.pointTitle}>
                  <span className={styles.pointNum}>{String(i + 1).padStart(2, "0")}</span> {point.title}
                </h3>
                <p className={styles.pointText}>{point.text}</p>
              </li>
            ))}
          </ol>
          <div className={styles.ctaBox}>
            <p>
              まずは、無料カウンセリングで、なりたいあなたの希望をお伝えください！ツルツルだけでなく、エチケット程度に毛量を減らしたり、 毛の生え方をデザインすることもできます。
              <br />
              あなたに合わせた施術方法、通うペースやアフターケアなどアドバイスいたします。
            </p>
            <div className={styles.ctaButton}>
              <CtaButton text={<>無料カウンセリングを<wbr />予約する</>} link={RESERVE_URL} />
            </div>
            <p className={styles.ctaNote}>
              ※過去に脱毛施術を受けたことがある方は、初回カウンセリングと施術を同日に行うことも可能です。
            </p>
          </div>
        </div>
      </section>

      <section id="staff" className={pageStyles.section}>
        <div className={pageStyles.container}>
          <SectionHeading en="STAFF" />
          <StaffProfile
            photo={{ src: "/img/staff/staff_ikoma.jpg", width: 1500, height: 1125, position: "50% 20%" }}
            alt="認定脱毛士 生駒 明子"
            position="認定脱毛士"
            name="生駒 明子"
          >
            <p>
              2025年よりBee dandyでメンズ脱毛を担当。ヒゲ、もみあげ、うなじから、ワキ、腕、脚、VIO、全身まで幅広く対応しています。ツルツルにするだけでなく、自然に毛量を減らしたい、生える範囲を整えたいなど、一人ひとりの希望に合わせて施術します。
            </p>
            <h4 className={styles.staffLead}>初めての脱毛も、気軽にご相談ください！</h4>
            <p>
              「脱毛に興味はあるけれど、何を選べばいいか分からない」「いきなりツルツルにするのは抵抗がある」そんな方にも、希望や不安を確認しながら分かりやすくご案内します。脱毛が初めての方も、気になることから気軽にご相談ください。
            </p>
          </StaffProfile>
        </div>
      </section>

      <section id="flow" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="FLOW" lead="ご利用の流れ" />
          <ol className={styles.flow}>
            {FLOW_STEPS.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <div className={styles.stepPhoto}>
                  <Photo {...step.photo} alt={step.alt} className={styles.stepImage} />
                </div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>
                    <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                    {step.title}
                  </h3>
                  {step.text.map((text) => (
                    <p key={text} className={styles.stepText}>
                      {text}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className={pageStyles.section}>
        <div className={pageStyles.narrow}>
          <SectionHeading en="FAQ" />
          <FaqList items={WAXING_PAGE_FAQ} />
          <p className={pageStyles.more}>
            <LinkButton href="/faq#waxing" variant="text">
              その他のよくある質問はこちら →
            </LinkButton>
          </p>
        </div>
      </section>

      <section id="price" className={`${pageStyles.section} ${pageStyles.sectionAlt}`}>
        <div className={pageStyles.container}>
          <SectionHeading en="MENU & PRICE" />
          <div className={styles.menuText}>
            <p>
              ツルツルだけでなく、エチケット程度に毛量を減らしたり、毛の生え方をデザインすることもできます。
              <br />
              各部位、1回の施術ごとのお支払いだから安心。自分が脱毛を止めたい時に止められ、始めたい時に始められます。
            </p>
            <p>年会費をお支払いいただくことで、一般料金よりお得な会員料金で施術を受けられます。</p>
          </div>
          <div className={styles.tables}>
            {waxingCollection.map((collection) => (
              <PriceTable
                key={collection.title}
                title={collection.title}
                nameLabel="コース内容 - カテゴリ"
                columns={[
                  { label: "通常料金（税込）", type: "price" },
                  { label: "会員優待（税込）", type: "member" },
                ]}
                rows={collection.data.map((item) => ({
                  name: `${item.category} - ${item.size}`,
                  values: [`¥${item.price}`, `¥${item.discount}`],
                }))}
              />
            ))}
          </div>
          <div className={styles.other}>
            <PriceTable
              title="その他"
              columns={[{ label: "" }]}
              rows={[{ name: "会員費（有効期限：1年間）", values: ["￥2,200(税込)"] }]}
              hideHead
            >
              <p className={styles.shavingNote}>
                <strong>※剃毛割引あり</strong>
                <br />
                事前にご自身で施術箇所を剃毛してご来店いただいた場合、 SS・S・M：500円引き／L：1,000円引き／LL：1,500円引き
              </p>
            </PriceTable>
          </div>
        </div>
      </section>
    </MainLayout>
  </>
);

export default Waxing;
