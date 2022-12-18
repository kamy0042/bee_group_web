import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import styles from "../../styles/Recruit.module.scss";
import { CtaButton } from "../../components/CtaButton";
import { SHOP_INFO } from "../../public/static/index";

const CtaBox = () => (
  <dl className={styles.ctaBox}>
    <dt>
      少しでも興味があれば、
      <br className={styles.pcNone} />
      ご連絡ください！
    </dt>
    <dd>
      <p>
        実際のお店を見たい、一度話だけでも聞きたいという方。
        <br className={styles.spNone} />
        「見学を希望したい」とお伝えください。担当が 30 分ほどサロン内をご紹介します。
        <br className={styles.spNone} />
        質問などがあれば遠慮なくどうぞ。日時や内容など折り返しご連絡します。
      </p>
    </dd>
    <dd className={styles.btn}>
      <CtaButton text="応募する・見学する・問い合わせする" link="https://work.salonboard.com/slnH000530403/input/" />
    </dd>
    <dd className={styles.tel}>
      <p>お急ぎの方、事情がある方はお電話でも対応しております</p>
      <p>
        <a href={`tel:${SHOP_INFO.TEL_NO_HYPHEN}`}>{SHOP_INFO.TEL}</a>（Bee dandy）
        <br className={styles.pcNone} />
        担当：松井 までご連絡ください。
      </p>
    </dd>
  </dl>
);

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
            <p className={styles.headerCopyItem}>この求人を見ていただいている「あなた！」のセンスと、 <br />スキルを必要としているお客様が待っています！</p>
            <p>&quot;オシャレしたいけれど、どうしていいか分からない&quot;<br />
              お客様のお悩みを解決する「救世主」となってくれる<br />
              メンズ特化のスタイリスト、美容師を募集しています！</p>
          </div>
        </section>
        <div className={styles.message}>
          <img src="/img/bee_recruit.jpg" alt="松井オーナー" />
          <p>
            オーナーの松井です。<br />2021年にオープンしてから順調に顧客数を伸ばしています。今後はメンズだけでなく、レディースも含めて10店舗の展開を目指しています。地方から東京のサロンへ挑戦したいと思っている方も、ぜひチャレンジしてほしいです！
          </p>
        </div>
        <div className={styles.ctaBoxWrapper}>
          <CtaBox />
        </div>
        <div className={styles.section}>
          <h2 className={styles.subHeading}>詳細</h2>

          <section className={styles.description}>
            <h3>指名料は100％還元、お客様満足がアナタの稼ぎに！</h3>
            <div className={styles.descriptionContent}>
              <div>
                <p>
                  完全シフト希望、シェアサロンとのWワーク、安心の保障制度など相談しながらご自身に合った契約内容で働けます。
                </p>
                <ul className={styles.checkedList}>
                  <li>完全シフト、完全歩合で好きな日数と好きな休日 Wワークも可</li>
                  <li>日当 10,000 円保証(実働８H)</li>
                  <li>指名料は 100％還元</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.description}>
            <h3>給与の一例</h3>
            <dl className={styles.descriptionInner}>
              <dt>スタイリストの場合</dt>
              <dd>日給10,000円×25日勤務の場合＝250,000円（勤務時間応相談）</dd>
              <dd className={styles.withIcon}>
                <span className={styles.icon}>＋歩合</span>（指名料1,000円×80名）の場合＝80,000円
              </dd>
              <dd className={styles.withIcon}>
                <span className={styles.icon}>＋技売</span>：50万～10％ 100万～20％
              </dd>
              <dd className={styles.withIcon}>
                <span className={styles.icon}>＋店販</span>：10％
              </dd>
            </dl>
            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link="https://work.salonboard.com/slnH000530403/input/"
              />
            </div>
          </section>

          <section className={styles.description}>
            <h3>自分のための自由な時間も確保できます！</h3>
            <div className={styles.descriptionContent}>
              <div>
                <p>
                  働く環境をしっかり考えています！ Bee dandy は高単価な顧客をがっちりつかんでいくサロンです。
                </p>
                <p>
                  正社員の場合、働く時間は実質1日8時間程度。休憩時間をちゃんと確保します。 月1回、日曜定休日があります。連休取得も可能です。プライベートも充実させてください。
                </p>
                <p>
                  ビジネススキルも身につけたいという方には、集客ノウハウやマーケティング、経営なども学べます。いつかお店を持ちたい！という方にも満足いただける環境です。
                </p>
                <div className={styles.btn}>
                  <CtaButton
                    text="応募する・見学する・問い合わせする"
                    link="https://work.salonboard.com/slnH000530403/input/"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.description}>
            <h3>Bee dandy があなたにできること</h3>
            <div className={styles.descriptionContent}>
              <img src="/img/owner_cut_2.jpg" alt="お客様と談笑しながらのカット風景" />
              <div className={styles.descriptionTextArea}>
                <dl className={styles.descriptionInner}>
                  <dt>・ あなたのファンをたくさん作ってください</dt>
                  <dd>Bee dandyは高単価な顧客をがっちりつかんでいくサロンです。原則として、1人のお客様を最初から最後まで担当していただきます。</dd>
                  <dt>・ 安定した新規集客、月40人から80人</dt>
                  <dd>入社してもカットする機会がないとか、集客や営業のノルマを押し付けるようなことはありません。</dd>
                  <dt>・ 雇用形態は不問、まずはご相談ください</dt>
                  <dd>正社員／契約社員／パート・アルバイト／業務委託／W ワーク／フリーランス</dd>
                </dl>
              </div>
            </div>
            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link="https://work.salonboard.com/slnH000530403/input/"
              />
            </div>
          </section>

          <section className={styles.description}>
            <h3>Bee dandy が目指すこと</h3>
            <div className={styles.descriptionContent}>
              <img src="/img/owner_cut_1.jpg" alt="真剣な表情でカットを行うオーナー" />
              <div className={styles.descriptionTextArea}>
                <p>
                  これから 10 年間で 10 店舗を展開したい会社です。
                </p>
                <p>いま勢いのあるメンズ美容から展開を始め、順調に顧客数を伸ばしています。今後は、メンズだけでなく、レディースの展開も視野に入れています。</p>
                <p>流行の最先端である東京と、私の故郷でもある福岡から、美容と健康、そしてトレンドを発信できる会社にしたい。そんな私と一緒に、お店を、そして会社を大きくしてくれる方を募集しています！</p>
              </div>
            </div>
            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link="https://work.salonboard.com/slnH000530403/input/"
              />
            </div>
          </section>

          <section className={styles.description}>
            <h3>こんな方にオススメ！</h3>
            <div className={styles.descriptionContent}>
              <img src="/img/bee_top_image-min.jpg" alt="店内の様子" />
              <div className={styles.descriptionTextArea}>
                <ul className={styles.checkedList}>
                  <li>地方から東京のサロンへ挑戦したい方</li>
                  <li>自分のやる仕事に誇りを持てる、それを共感してくれるお客様を相手にしたい</li>
                  <li>質の高いサービスをするサロンで働きたい、自分の技術の単価をあげたい</li>
                  <li>指名客をもっとつくりたい</li>
                  <li>将来自分のお店を持ちたい</li>
                  <li>しっかり働きながら自分のライフスタイルも大事にしたい</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.description}>
            <h3>スタッフの声</h3>
            <p className={styles.voice}>『求められるレベルは高いですが！こんなに楽しく、ストレスなく働けて、稼げる環境がある事を知ってほしいです！！』 （スタイリスト：深沢）</p>
            <div className={styles.descriptionContent}>
              <img src="/img/bee_hukazawa.jpg" alt="笑みを浮かべるスタイリスト深沢" />
              <div className={styles.descriptionTextArea}>
                <p>
                  原宿のお店に入った後、フリーランスになったのですが、経営知識を学びたいのと、オーナーの人柄に魅かれてBee dandyに入社しました。
                </p>
                <p>
                  オーナーは何より人が大好きで、人間味に溢れています。だからこそ、お客様へ提供する「価値」にもこだわりがあるので、サービスや商材がしっかりしています。その分、客単価が高く、客層もちゃんとした方が多いというのはすごく理解できます。
                </p>
                <p>
                  ぶっちゃけ、収入が倍になりました。しかもストレス無し(笑)。美容師ってずっと働いても稼げない・・・と感じている方も多いと思います。しかし、Bee dandyに入社して、そうではない世界がここにあるのを知り、視野がグンと広がりました。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.description}>
            <h3>募集要項</h3>
            <dl className={`${styles.descriptionInner}, ${styles.recruitDetail}`}>
              <dt>勤務地</dt>
              <dd>東京都港区新橋 （新橋、汐留、御成門の各駅からいずれも徒歩６分）</dd>
              <dt>雇用形態</dt>
              <dd>正社員／契約社員／パート・アルバイト／業務委託</dd>
              <dt>職種</dt>
              <dd>Wワーク美容師、フリーランス美容師</dd>
              <dt>給与</dt>
              <dd>
                <p>正社員、スタイリスト、アシスタント</p>
                <h4 className={styles.descriptionInnerHeading}>スタイリスト 日給１００００円</h4>
                <p>★歩合 ★指名料 100％ ★技売 ★５０万～１０％ １００万～２０％ ★店販 ★１０％ 技術、能力によって昇給有</p>
                <h4 className={styles.descriptionInnerHeading}>アシスタント 日給７０００円</h4>
                <p>★歩合 ★指名料１００％ ★店販 ★１０％ 技術、能力によって昇給有</p>
              </dd>
              <dt>勤務時間</dt>
              <dd>
                <p>
                  平日 10:00～22:00、土曜 9:00～21:00、日曜 9:00～17:00、祝日 9：00～21:00 の間で９時間のシフト制（実働
                  8h）
                </p>
                <p>※ 休憩時間あり（自由に外出可能）</p>
                <p>※ 1カ月単位変形労働時間制採用</p>
              </dd>
              <dt>休日</dt>
              <dd>平日は応相談により、自由に決められます。日曜日休みも可（シフト制）</dd>
              <dt>待遇</dt>
              <dd>
                <ul className={styles.itemList}>
                  <li>雇用保険 労災保険</li>
                  <li>交通費：１５０００円まで(一か月)</li>
                  <li>年間業績：ボーナス(年１)有</li>
                  <li>勤務査定により昇給 有</li>
                  <li>各種手当 有</li>
                </ul>
                <p>※ 引越手当支給（上限 100,000 円／入社時のみ／対象者制限あり）</p>
                <p className={styles.comment}>
                  地方から東京のサロンへ挑戦したい方を応援します！ 不安や心配に思う事があれば相談してください。
                </p>
              </dd>
              <dt>教育・研修制度</dt>
              <dd>
                <ul className={styles.itemList}>
                  <li>ご満足いただけるカット、カラー、パーマなどサロンワークの技術</li>
                  <li>自分のファンやリピーター客を増やす接客スキル、カウンセリングスキル</li>
                  <li>将来に役立つ、マーケティングや経営などのビジネススキル</li>
                </ul>
              </dd>
              <dt>求める人材像</dt>
              <dd>
                <ul className={styles.itemList}>
                  <li>自分のアイディアを活かして、稼ぎたい方</li>
                  <li>美容の仕事が好きな方 スキル向上も目指す方</li>
                  <li>協調性のある方</li>
                </ul>
              </dd>
              <dt>応募資格・条件</dt>
              <dd>美容師免許取得者</dd>
            </dl>

            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link="https://work.salonboard.com/slnH000530403/input/"
              />
            </div>
          </section>

          <section className={styles.description}>
            <h3>会社情報</h3>
            <dl className={styles.companyDetail}>
              <div>
                <dt>会社名</dt>
                <dd>Bee Group</dd>
              </div>
              <div>
                <dt>会社所在地</dt>
                <dd>〒105-0004 東京都港区新橋 5－8－3 代市ビル B１F</dd>
              </div>
              <div>
                <dt>設立年月日</dt>
                <dd>2021 年 4 月</dd>
              </div>
              <div>
                <dt>店舗数</dt>
                <dd>1 店舗</dd>
              </div>
              <div>
                <dt>ホームページ</dt>
                <dd>
                  <a href="https://beegroup.tokyo/">https://beegroup.tokyo/</a>
                </dd>
              </div>
            </dl>
          </section>

          <div className={styles.ctaBoxWrapper}>
            <CtaBox />
          </div>
        </div>
      </div>
    </MainLayout>
  </>
);

export default Recruit;
