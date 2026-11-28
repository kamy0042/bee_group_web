import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageHeader from "../../components/PageHeader";
import LinkButton from "../../components/LinkButton";
import { SALON_NAME } from "../../constants";
import pageStyles from "../../styles/Page.module.scss";
import styles from "../../styles/Voice.module.scss";

const VOICES = [
  "少しイメチェンしてみたいと思い松井さんに相談したら、今までやったことのない前髪を上げるアップバングというスタイルを提案してもらった。思い切ってチャレンジしたら、妻から「カッコよくなったね！」と見直してもらった。自分がカッコよくなれたこともうれしいが、妻の機嫌がすこぶる良いという副次効果がありがたいですね（笑）（40代 エンジニア）",
  "松井さんに担当してもらってから職場の女性に話しかけられることが多くなったんです。印象が良くなったのか、営業成績もアップしました！髪質や季節感など計算してくれて、少しアレンジを加えていただくのでいつもカットしてもらうのが楽しみです。（30代 サービス業）",
  "ど直毛すぎて動きのあるヘアスタイルができませんでした。ところが深沢さんに担当してもらったら、今までどこに行っても中途半端だったパーマがしっかりかかって、たまらなくかっこいいウェーブ感に仕上がりました。憧れだったヘアスタイルにすることができて本当に嬉しいです。（20代 大学院生）",
  "彼女にカッコいいところを見せてやろうと、デート前にスタイリングをしていただきました。初めての美容室で緊張していたのですが、深沢さんの一発ギャグで緊張がほぐれ（笑）、良きアドバイスもいただきました。ヘアスタイルは彼女から大絶賛。実はプロポーズだったんですが大成功でした！結婚式のスタイリングもぜひお願いします！（20代 自営業）",
];

const Voice = () => (
  <>
    <Head>
      <title>{`お客様の声 | ${SALON_NAME}`}</title>
      <meta name="description" content="新橋の男性専門美容室 Bee dandyに寄せられたお客様の声をご紹介します" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout>
      <PageHeader
        en="Voice"
        ja="お客様の声"
        image={{
          src: "/img/bee_business-min.jpg",
          width: 1280,
          height: 853,
          position: "50% 70%",
        }}
      />
      <div className={pageStyles.section}>
        <div className={pageStyles.narrow}>
          <div className={styles.movie}>
            <iframe
              src="https://www.youtube.com/embed/i07ADpL9rlM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <ul className={styles.list}>
            {VOICES.map((voice) => (
              <li key={voice}>
                <p>{voice}</p>
              </li>
            ))}
          </ul>
          <div className={pageStyles.actions}>
            <LinkButton href="/blog">ブログを見る</LinkButton>
          </div>
        </div>
      </div>
    </MainLayout>
  </>
);

export default Voice;
