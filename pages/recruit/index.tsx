import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import styles from "../../styles/Recruit.module.scss";
import ReserveButton from "../../components/ReserveButton";
import { CtaButton } from "../../components/CtaButton";

const Recruit = () => (
  <>
    <Head>
      <title>スタッフ募集 | 男性専門美容室 Bee dandy</title>
      <meta name="description" content="新橋の男性専門美容室 Bee dandyでは共に働いてくれるスタッフを募集しています" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout noHeaderImg>
      <div className={styles.contents}>
        <section>
          <h1 className={styles.heading}>スタッフ募集</h1>
          <div className={styles.headerCopy}>
            <p>開店 1 周年のメンズ特化美容室</p>
            <p className={styles.headerCopyItem}>ナンバー2 として、一緒に店を大きくしてくれるスタイリスト</p>
            <p className={styles.headerCopyItem}>髪型に悩めるメンズの救世主となってくれるスタイリスト</p>
          </div>
        </section>
        <div className={styles.message}>
          <p>
            <img src="/img/bee_recruit.jpg" alt="松井オーナー" />
            オーナーの松井です。Bee dandy はオープンから1年たち、おかげさまで多くのお客様にご利用いただいております。
            一方で、予約がとりにくい状況となってしまい、お客様にご不便をおかけしている状況になっています。そこで、
            <span>Bee dandy のナンバー2 として、一緒に店を大きくしてくれるスタイリストさん</span>
            <span>髪型に悩めるメンズの救世主となってくれるスタイリストさん</span>
            を大至急、募集しております！
          </p>
        </div>
        <section className={styles.section}>
          <h2 className={styles.subHeading}>詳細</h2>
          <dl className={styles.detail}>
            <dt>Bee dandyのナンバー2として、一緒に店を大きくしてくれるスタイリストさん</dt>
            <dd>
              お客様の施術はもちろん、集客やマーケティング、経営のことにも携わっていただきます。
              お店の運営のため、日々の受付業務、予約管理、薬剤や店販の在庫管理なども手伝っていただきます。
              いま詳しくなくても大丈夫です。私と一緒にやりながら、スキルやノウハウを身につけていきましょう。
            </dd>
            <dt>悩めるメンズの＜救世主＞となってくれるスタイリストさん</dt>
            <dd>
              Bee dandy のお客様は９割がビジネスマンです。
              「どういう髪型が自分に合っているのか分からない」「白髪や薄毛が気になってきたが、相談するのは恥ずかしい」
              お客様の悩みを解決して、「かっこよくしてあげたい」と思える方、ぜひ仲間になってください！
            </dd>
          </dl>
          <div className={styles.description}>
            <h3>Bee dandy があなたにできること</h3>
            <dl className={styles.descriptionInner}>
              <dt>・ あなたのファンをたくさん作ってください</dt>
              <dd>原則として、1 人のお客様を最初から最後まで担当していただきます。</dd>
              <dt>・ 雇用形態は不問、まずはご相談ください</dt>
              <dd>正社員／契約社員／パート・アルバイト／業務委託／W ワーク／フリーランス</dd>
              <dt>・ 月 1 回の日曜定休日を活用して、プライベートも充実させてください</dt>
              <dd>連休取得も可能です。休憩時間もちゃんととっていただきます。</dd>
            </dl>
          </div>
          <div className={styles.description}>
            <h3>Bee dandy が目指すこと</h3>
            <p>
              これから 10 年間で 10 店舗を展開したい会社です。 いま勢いのあるメンズ美容から展開を始め、
              順調に顧客数を伸ばしています。 今後は、メンズだけでなく、レディースの展開も視野に入れています。
              流行の最先端である東京と、私の故郷でもある福岡から、美容と健康、そしてトレンドを発信できる会社にしたい。
              そんな私と一緒に、お店を、そして会社を大きくしてくれる方を募集しています！
            </p>
            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link="https://work.salonboard.com/slnH000530403/input/"
              />
            </div>
          </div>
          <div className={styles.description}>
            <h3>アナタに合わせた集客プラン、アナタのスキル次第でしっかり稼げる</h3>
            <img />
            <p>
              頑張った分はきちんと評価し、お客様満足が アナタの稼ぎに。 すでにキャパフルのため、新規顧客を優先して
              対応していただきます。 完全シフト希望、シェアサロンとの W ワーク、 安心の保障制度など相談しながら
              ご自身に合った契約内容で働けます。
            </p>
            <p>例えば</p>
            <ul className={styles.checkedList}>
              <li>完全シフト、完全歩合で好きな日数と好きな休日 W ワークも可</li>
              <li>日当 10,000 円保証(実働８H)</li>
              <li>指名料は 100％還元</li>
            </ul>
            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link="https://work.salonboard.com/slnH000530403/input/"
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  </>
);

export default Recruit;
