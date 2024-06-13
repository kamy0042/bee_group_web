import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import styles from "../../styles/Top.module.scss";
import voiceStyle from "../../styles/Staff.module.scss";
import { SALON_NAME } from "../../constants";

const Voice = () => (
  <>
    <Head>
      <title>お客様の声 | {SALON_NAME}</title>
      <meta name="description" content="新橋の男性専門美容室 Bee dandyに寄せられたお客様の声をご紹介します" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout noHeaderImg>
      <div className={styles.contents}>
        <section>
          <h1 className={styles.heading}>Voice</h1>
          <div className={styles.movie}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/i07ADpL9rlM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <section className={voiceStyle.voice}>
            <h2 className={voiceStyle.voice_title}>お客様の声</h2>
            <div className={voiceStyle.voice_body}>
              <ul className={voiceStyle.voice_list}>
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


        </section>
      </div>
    </MainLayout>
  </>
);

export default Voice;
