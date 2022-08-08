import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageImage from "../../components/PageImage";
import styles from "../../styles/Staff.module.scss";
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
            <section className={styles.voice}>
              <h2 className={styles.voice_title}>お客様VOICE</h2>
              <div className={styles.voice_body}>
                <ul className={styles.voice_list}>
                  <li>
                    <p>
                      少しイメチェンしてみたいと思い松井さんに相談したら、今までやったことのない前髪を上げるアップバングというスタイルを提案してもらった。思い切ってチャレンジしたら、妻から「カッコよくなったね！」と見直してもらった。自分がカッコよくなれたこともうれしいが、妻の機嫌がすこぶる良いという副次効果がありがたいですね（笑）（40代
                      エンジニア）
                    </p>
                  </li>
                  <li>
                    <p>
                      松井さん担当してもらってから職場の女性に話しかけられることが多くなったんです。印象が良くなったのか、営業成績もアップしました！髪質や季節感など計算してくれて、少しアレンジを加えていただくのでいつもカットしてもらうのが楽しみです。（30代
                      サービス業）
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className={styles.staff}>
            <StaffProfile
              className="hukazawa"
              position="スタイリスト"
              staffName="深沢 秀"
              profile="山梨県出身。大学に行きながら美容師を目指し、在学中に美容師国家資格を取得する。原宿・表参道のヘアサロンでスタイリストとして活躍。フリーランスに転身後、2022年からBee dandyに仲間入り。都会的なスタイルと髪のお悩み解消を、同時に実現してしまう技術とセンスの持ち主。"
              message="「モテる男になりたい」永遠のテーマですよね。自分に似合うヘアスタイルを手に入れることで、若々しさや大人の色気を上手にアピールできます。解消したいお悩みや、なりたいイメージがあれば、ぜひご相談ください！最新トレンドをいち早くキャッチし、さりげなく流行を取り入れた、一人ひとりの魅力を最高に引き立てるヘアスタイルをご提供します！"
            />
            <section className={styles.voice}>
              <h2 className={styles.voice_title}>お客様VOICE</h2>
              <div className={styles.voice_body}>
                <ul className={styles.voice_list}>
                  <li>
                    <p>
                      ど直毛すぎて動きのあるヘアスタイルができませんでした。ところが深沢さんに担当してもらったら、今までどこに行っても中途半端だったパーマがしっかりかかって、たまらなくかっこいいウェーブ感に仕上がりました。憧れだったヘアスタイルにすることができて本当に嬉しいです。（20代
                      大学院生）
                    </p>
                  </li>
                  <li>
                    <p>
                      彼女にカッコいいところを見せてやろうと、デート前にスタイリングをしていただきました。初めての美容室で緊張していたのですが、深沢さんの一発ギャグで緊張がほぐれ（笑）、良きアドバイスもいただきました。ヘアスタイルは彼女から大絶賛。実はプロポーズだったんですが大成功でした！結婚式のスタイリングも
                      ぜひお願いします！（20代 自営業）
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Staff;
