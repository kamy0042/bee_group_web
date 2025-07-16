import Head from "next/head";
import Link from "next/link";
import MainLayout from "../../components/template/MainLayout";
import PageImage from "../../components/PageImage";
import styles from "../../styles/Staff.module.scss";
import utilStyles from "../../styles/Util.module.scss"
import useIsSafari from "../../libs/useIsSafari";
import { SALON_NAME } from "../../constants";

type StaffProfileProps = {
  className: string;
  position: string;
  staffName: string;
  profile: string;
  message: string;
  url?: string;
};

function StaffProfile({ className, position, staffName, profile, message, url }: StaffProfileProps) {
  const isSafari = useIsSafari();
  return (
    <dl className={`${styles.profile} ${isSafari ? styles[`${className}_noWebp`] : styles[className]}`}>
      <div className={styles.profile_body}>
        <dt className={styles.profile_nameArea}>
          <span className={styles.profile_position}>{position}</span>
          <span className={styles.profile_name}>{staffName}</span>
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <img src="/img/icon_ig.svg" alt="bee_dandy instagram" width="40px" height="40px" />
            </a>
          )}
        </dt>
        <dd className={styles.profile_text}>
          <p>{profile}</p>
        </dd>
        <dd className={styles.profile_message}>
          <h2>お客様へのメッセージ</h2>
          <p>{message}</p>
        </dd>
      </div>
    </dl>
  );
}

function Staff() {
  return (
    <>
      <Head>
        <title>スタッフ一覧 | {SALON_NAME}</title>
        <meta
          name="description"
          content="新橋の男性専門美容室 Bee dandyで働くスタッフ一覧です。スタッフのプロフィールやお客様へのメッセージ、これまで手がけてきた事例をご紹介します。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <PageImage page="staff" />
        <div className={styles.contents}>
          <section className={`${utilStyles.section}`}>
            <h1 className={styles.heading}>Staff</h1>
            <div className={styles.staff}>
              <StaffProfile
                className="matsui"
                position="オーナー"
                staffName="松井 祐太"
                profile={
                  "福岡県出身。30才で上京し、某美容室でマネージャーとして活躍後、2021年にBee Groupを立ち上げる。\n超ポジティブ思考でこの人が登場すると周囲が明るくなるという不思議なパワーの持ち主。抜群のセンスと高い技術で、お客様の様々なニーズに応え続けている。"
                }
                message="お一人おひとりに「今までで一番いいね！」と言っていただけるよう、その人に合ったヘアスタイル、いや、絶対に似合うヘアスタイルを作り出し、家族、恋人、あなたに関わる方々に満足をご提供します！そのため薄毛や白髪のカバー、多少の無理難題（笑）にも解決策をご提示提案しますので、僕のセンスと技術を信じて、あなたの「こうなりたい！」をぜひお気軽にご相談ください！"
                url="https://www.instagram.com/beedandy_y.matsui_official/"
              />
            </div>
            <div className={styles.staff}>
              <StaffProfile
                className="hukazawa"
                position="スタイリスト"
                staffName="深沢 秀"
                profile="山梨県出身。大学に行きながら美容師を目指し、在学中に美容師国家資格を取得する。原宿・表参道のヘアサロンでスタイリストとして活躍。フリーランスに転身後、2022年からBee dandyに仲間入り。都会的なスタイルと髪のお悩み解消を、同時に実現してしまう技術とセンスの持ち主。"
                message="「モテる男になりたい」永遠のテーマですよね。自分に似合うヘアスタイルを手に入れることで、若々しさや大人の色気を上手にアピールできます。解消したいお悩みや、なりたいイメージがあれば、ぜひご相談ください！最新トレンドをいち早くキャッチし、さりげなく流行を取り入れた、一人ひとりの魅力を最高に引き立てるヘアスタイルをご提供します！"
              />
            </div>
            <div className={styles.staff}>
              <StaffProfile
                className="ikoma"
                position="スタイリスト"
                staffName="生駒 明子"
                profile="神奈川県出身。訪問美容など多様な経験を積み、2025年にBee dandyに加入。幅広い年代のお客様に寄り添う接客と、清潔感・好印象を兼ね備えたカット技術に定評がある。特に、ヘッドスパやシャンプーの心地よさは高く評価されている。持ち前の明るさで、仲間やお客様から親しまれる存在。"
                message="自分に似合う髪型が見つかると、鏡を見るのが楽しくなりますよね。優しい雰囲気のメンズウルフ、ビジネスシーンで決まる洗練スタイル、特別な日のイメージチェンジなど、女性目線で好感度抜群のヘアスタイルをご提案します。カットだけでなく、日々の疲れをリフレッシュできる時間もご提供します。ぜひお気軽にご相談ください！"
              />
            </div>
            <div className={styles.staff}>
              <StaffProfile
                className="uchiyama"
                position="認定脱毛士"
                staffName="内山 絵美"
                profile="安心・安全・丁寧な施術を提供できる「認定脱毛士」の資格を持つ脱毛施術のプロフェッショナル。脱毛専門店で実績を積み、2023年からBee dandyに仲間入り。気さくで面倒見の良い性格は、Bee dandyのムードメーカー的存在。"
                message="ヒゲやVIOの脱毛は完全にツルツルにするだけでなく、毛量を適度に調整することもできます。「女性受けするデザインは？」など、周囲の女性には聞きにくいですよね。そんなお悩みやご希望をぜひご相談ください。施術ペースやアフターケアなどもしっかりアドバイスいたします。"
                url='https://www.instagram.com/beedandy_epilation_official/'
              />
            </div>
            <div className={styles.staff}>
              <StaffProfile
                className="takuma"
                position="アシスタント"
                staffName="宅間 公誠"
                profile="埼玉県出身。メンズの「カッコいい」を創り出すことに情熱を注ぎ、100種類以上のヘアワックスを研究した経験を持つ。スタイリング剤の特性を知り尽くし、髪質に合ったアイテム選びから再現性の高いスタイリングテクニックまで的確に提案することができる。2025年から仲間入りしたBee dandy 期待の星！"
                message="くせ毛や髪質、頭の形などのお悩みがあればぜひご相談ください。お客様一人ひとりの個性を丁寧に見極め、ヘアスタイルのアレンジでコンプレックスを解消し、理想のスタイルと自信を手に入れるお手伝いをいたします。その変化を一緒に楽しみましょう。あなた史上最高のメンズスタイルを全力でサポートします！"
              />
            </div>
          </section>

          <section className={`${utilStyles.section} ${styles.linkSection}`}>
            <h2 className={utilStyles.subHeading}>お客様の声</h2>
            <p>
              Bee dandyに寄せられたお客様の声をご紹介します
            </p>
            <div className={utilStyles.linkButton}>
              <Link href='/voice/'>Read More</Link>
            </div>
          </section>

        </div>
      </MainLayout>
    </>
  );
}

export default Staff;
