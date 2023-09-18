import Head from "next/head";
import Link from "next/link";
import MainLayout from "../../components/template/MainLayout";
import PageImage from "../../components/PageImage";
import styles from "../../styles/Staff.module.scss";
import utilStyles from "../../styles/Util.module.scss"
import useIsSafari from "../../libs/useIsSafari";

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
        <title>スタッフ一覧 | 男性専門美容室 Bee dandy</title>
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
