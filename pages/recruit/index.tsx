import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import styles from "../../styles/Recruit.module.scss";
import { CtaButton } from "../../components/CtaButton";
import { SHOP_INFO } from "../../public/static";
import { SALON_NAME } from "../../constants";

const jobPageURL = 'https://work.beauty.hotpepper.jp/WC00004323/WS0000011338/'

const CtaBox = ({isExtend}:{isExtend?:boolean}) => (
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
      <CtaButton text="応募する・見学する・問い合わせする" link={jobPageURL} />
    </dd>
    {isExtend ?
      <dd className={styles.tel}>
      <p>お急ぎの方、事情がある方はお電話でも対応しております</p>
      <p>
        <a className={styles.lightLink}  href={`tel:${SHOP_INFO.TEL_NO_HYPHEN}`}>{SHOP_INFO.TEL}</a>（Bee dandy）
        <br className={styles.pcNone} />
        担当：松井 までご連絡ください。
      </p>
    </dd> : null}
  </dl>
);

const description = `<p>東京・新橋のメンズ専門美容室「Bee dandy」。
指名料は100％還元、お客様満足がアナタの稼ぎに！</p>

<p>●雇用形態は不問、まずはご相談ください。</p>
正社員／契約社員／パート・アルバイト／業務委託／Wワーク／フリーランス

<p>●あなたのファンをたくさん作ってください。</p>
Bee dandyは高単価な顧客をがっちりつかんでいくサロンです。原則として、1人のお客様を最初から最後まで担当していただきます。

<p>●安定した新規集客、月40人から80人</p>
入社してもカットする機会がないとか、集客や営業のノルマを押し付けるようなことはありません。

<p>●完全シフト、完全歩合で好きな日数と好きな休日 Wワークも可 </p>
 ・日当10000円保証(実働８H)  ・指名料は100％還元

＜給与の一例＞ 雇用形態は不問です。まずはご相談ください。
スタイリスト＜日給月給＞の場合）
・日給10,000円×25日勤務の場合＝250,000円（勤務時間応相談）
＋歩合（指名料1,000円×80名の場合）＝80,000円
＋技売：50万～10％ 100万～20％
＋店販：10％

<p>【当店のおすすめポイント】</p>
★働く時間は実質1日8時間程度。休憩時間をちゃんと確保します。
★月1回、日曜定休日があります。連休取得も可能です。プライベートも充実させてください。
★ビジネススキルも身につけたい方には、集客・経営ノウハウやマーケティングも学べます。
★いつかお店を持ちたい！一緒に店を大きくしてみたい！という方にも満足いただける環境です。

<p>【こんな方を募集しています！】</p>
●自分のやる仕事に誇りをもってる、それを共感してくれるお客様を相手にしたい
●質の高いサービスをするサロンで働きたい、自分の技術の単価をあげたい
●指名客をもっとつくりたい
●将来自分のお店を持ちたい
●しっかり働きながら自分のライフスタイルも大事にしたい
●地方から東京のサロンへ挑戦したい`


const scheme = {
  "@context" : "https://schema.org/",
  "@type" : "JobPosting",
  "datePosted" : "2023-01-17",
  "validThrough" : "2033-12-31",
  "title" : "美容師、スタイリスト、アシスタント",
  "employmentType" : "PART_TIME",
  "description" : `${description}`,
  "jobLocation" : {
    "@type" : "Place",
    "address" : {
      "@type" : "PostalAddress",
      "addressCountry" : "JP",
      "postalCode" : "105-0004",
      "addressRegion" : "東京都",
      "addressLocality" : "港区",
      "streetAddress" : "新橋５丁目８−３ 代市ビル B1"
    }
  },
  "baseSalary" : {
    "@type" : "MonetaryAmount",
    "currency" : "JPY",
    "value" : {
      "@type" : "QuantitativeValue",
      "value" : "10000",
      "unitText" : "DAY"
    }
  },
  "hiringOrganization" : {
    "@type" : "Organization",
    "name" : "Bee Group",
    "sameAs" : "https://beegroup.tokyo/",
    "logo": "https://beegroup.tokyo/img/logo.jpg"
  },
  "identifier" : {
    "@type" : "PropertyValue",
    "name" : "Bee Group",
    "value" : "0001"
  }
}


const Recruit = () => (
  <>
    <Head>
      <title>スタッフ募集 | {SALON_NAME}</title>
      <meta name="description" content="新橋の男性専門美容室 Bee dandyでは共に働いてくれるスタッフを募集しています" />
      <link rel="icon" href="/favicon.ico" />
      <script
        key="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scheme) }}
      />
    </Head>
    <MainLayout noHeaderImg isLight>
      <div className={styles.contents}>
        <section>
          <h1 className={styles.heading}>スタイリスト急募！</h1>
          <div className={styles.headerCopy}>
            <p className={`${styles.headerCopyItem}`}>【２名急募！】 美容師という職業に誇りを持ち、ストレスなく働ける環境です</p>
            <p className={styles.star}>指名料100％バックします</p>
            <p className={styles.star}>毎月1回は日曜店休／1週間の連休取得もOK</p>
          </div>
        </section>
        <div className={styles.message}>
          <img src="/img/recruit/staff_cut_02.jpg" alt="カット中のスタッフ" />
          <h2 className={styles.messageText}>あなたのセンスと、スキルを必要としているお客様が待っています！</h2>
          <p>新橋というとサラリーマンのイメージがありますが、皆さんが想像している顧客イメージとはまったく違います。</p>
          <p>メンズ専門美容室 Bee dandy には、汐留のメディア関係者、虎ノ門の医療従事者、内幸町の大企業で活躍するビジネスマン、そして将来を担う就活生といったお客様が、たくさんいらっしゃいます。</p>
          <p>ふだん会うことがないような方との人脈もでき、自分の知らなかった世界を知ることができます。</p>
          <p>ここには美容師の可能性の広がりがあります。</p>
          <p>&quot;オシャレしたいけれど、どうしていいか分からない&quot; <br />
            お客様のお悩みを解決する「救世主」となってくれるメンズ特化のスタイリスト、美容師を募集しています！</p>
        </div>
        <div className={styles.ctaBoxWrapper}>
          <CtaBox />
        </div>
        <div className={styles.section}>
          <section className={styles.description}>
            <h2 className={styles.subHeading}>私たちの夢・想い</h2>
            <div className={styles.descriptionContent}>
              <div>
                <p style={{fontSize:'1.2em', fontWeight:'bold'}}>「家族や友人、子育て、趣味、休暇、学びといった人生(ライフ)の中の一つに、仕事(ワーク)がある」</p>
                <p>一般企業のように、残業や長時間労働の削減に積極的に取り組んでいます。</p>
                <p>〈日曜の店休日〉〈１週間の有給連続取得〉〈休憩時間の確保〉〈朝礼・終礼・時間外ミーティングの廃止〉といった、働きやすい環境を整えていますから、友人や家族との旅行やお子様の行事参加など、プライベートも充実させてください！</p>
                <p>Bee dandyで働く一人ひとりが心身ともに健全であること、そしてモチベーションを高く持ち続けていられること、それがBee dandyの願いです。</p>
              </div>
            </div>
          </section>

          <section className={styles.description}>
            <h3>Bee dandyのこだわり</h3>
            <div className={styles.descriptionContent}>
              <img src="/img/bee_top_image-min.jpg" alt="店内の様子" />
              <div className={styles.descriptionTextArea}>
                <dl className={styles.descriptionInner}>
                  <dt>・ 無駄な拘束は一切ありません！</dt>
                  <dd>実労働約８時間、研修やミーティングも営業時間内で行います。休憩時間は１時間確保、外出してランチするも、ゆっくり過ごすも良し。ちゃんとリフレッシュができてこそ、お客様に良いサービスが提供できます。</dd>
                  <dt>・ 安定してしっかり稼げます！</dt>
                  <dd>月給に加えて、指名料を100％バックします。新規集客は月４０人以上。入社してもカットする機会がないとか、集客や営業のノルマを押し付けるようなことはありません。</dd>
                  <dt>・ 将来の開業や独立も応援します！</dt>
                  <dd>良い関係で独立してほしいから、成功事例を基にした集客や経営ノウハウをお伝えします。事業計画の相談にのります！マーケティングスキルや商品の提案なども伝授します！</dd>
                </dl>
              </div>
            </div>          
          </section>

          <section className={styles.description}>
            <h3>求める人物像</h3>
            <div className={styles.descriptionContent}>
              <img src="/img/recruit/staff_cut_01.jpg" alt="カット風景" />
              <div className={styles.descriptionTextArea}>
                <p>家庭も仕事も頑張るパパ／ママ美容師さん、自分のアイディアを活かして、どんどん稼ぎたいスタイリストさん、美容の仕事が好きな方、スキル向上を目指す方、分からないことは何回でも聞いてくれる方。<br/>
                  協力できることは何でもします！<br/>
                  スタッフへの報酬還元を大きくしてますので、稼ぎたい方も大歓迎です！<br/>
                  家庭も仕事も頑張るパパ／ママ美容師さんも大歓迎です！
                </p>
              </div>
            </div>
          </section>

          <section className={styles.description}>
            <h3>スタッフの声</h3>
            <div className={styles.descriptionContent}>
              <img style={{objectFit: 'cover', aspectRatio:'3/2', objectPosition:'0 14%'}} src='/img/staff/2405_uchiyama_02.jpg' alt='脱毛スタッフ' />
              <div className={styles.descriptionTextArea}>
                <dl className={styles.descriptionInner}>
                  <dt>・ スタイリスト</dt>
                  <dd>オーナーは何より人が大好きで、人間味にあふれていて、私たち美容師が「自信と誇り」を持って働くことにこだわりがあります。お客様にも恵まれていて、毎日の休憩時間や休日もちゃんと確保されています。以前のサロンより圧倒的に残業時間が減ったのに、収入が倍になりました。大卒で一般企業に内定していたのですが、美容師の道を選んで良かったです！</dd>
                  <dt>・ メンズ脱毛専門スタッフ</dt>
                  <dd>仕事と子育ての両立をとても理解してくれる会社です。時短勤務を利用していますが、助け合うことはお互いさまという社風が何よりもありがたいです！もちろん、助けてもらって当然ということではなく、逆の立場の時には仕事を快く手伝うよう心掛けています。思ったことを自由に発信できたり、感謝を伝え合ったりできる、社員同士のコミュニケーションが良好な職場環境です！</dd>
                </dl>
              </div>
            </div>
            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link={jobPageURL}
              />
            </div>
          </section>

          <section className={styles.description}>
            <h3>こんな方にオススメ！</h3>
            <div className={styles.descriptionContent}>
              <img src="/img/recruit/salon_img_4576.jpg" alt="店内の様子" />
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
            <h3>給与の一例</h3>
            <div className={styles.descriptionContent}>
              <div>
                <dl className={styles.descriptionInner}>
                  <dt>【スタイリスト・正社員 の場合】</dt>
                  <dd>
                    <p>月給 23.0万円〜64.5万円</p>
                    <p>
                      例）入社2年目正社員スタッフ<br />
                      ※月技術売上 100万円、月指名数 85名、月店販売上 5万円 の場合<br/>
                      月給（基本給＋資格手当） 230,000円＋売上歩合 140,000円＋各種手当 60,000円＝支給額 430,000円
                    </p>
                    <p>＜試用期間あり＞ 3ヶ月 〜 6ヶ月 / 月給 230,000円 〜 645,000円</p>
                  </dd>
                </dl>
              </div>
            </div>
          </section>

          <section className={styles.description}>
            <h3>メッセージ：松井祐太（オーナー）</h3>
            <div className={styles.descriptionContent}>
              <img src="/img/recruit/owner_message.jpg" alt="笑顔の松井オーナー" />
              <div className={styles.descriptionTextArea}>
                <p>男性専門美容室 Bee dandyは、2021年にオープンしてから順調に顧客数を伸ばし、2023年にはメンズ脱毛サロンを併設しました。</p>
                <p>「稼げる」「楽しい」「人間関係が良い」「自分の成長を感じる」、そんな働きやすい環境づくりにこだわっています。</p>
                <p>もし、地方から東京のサロンへ挑戦したいと思っている方がいらっしゃったら、できるだけサポートします。私も共感できるところがあるので、ぜひチャレンジしてください。</p>
              </div>
            </div>
            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link={jobPageURL}
              />
            </div>
          </section>
          
          <section className={styles.description}>
            <h3>募集要項</h3>
            <dl className={`${styles.descriptionInner}, ${styles.recruitDetail}`}>
              <dt>勤務地</dt>
              <dd>
                <p>
                  新橋駅、汐留駅、御成門駅 各駅から徒歩６～７分<br />
                  ［JR山手線、京浜東北線、東海道線、東京メトロ銀座線、都営浅草線、三田線、大江戸線、ゆりかもめ］<br />
                </p>
                <p>
                  汐留の高層ビル群と虎ノ門ヒルズを結ぶ、環状二号線（新虎通り）付近にあります。<br/>
                  周辺は落ち着いた雰囲気のレジデンスエリアです。
                </p>
              </dd>
              <dt>雇用形態</dt>
              <dd>正社員（副業可）</dd>
              <dt>職種</dt>
              <dd>スタイリスト<br/>施術を中心としたサロン内業務全般、施術・受付・カウンセリング等のサロン内業務、店販商品管理</dd>
              <dt>給与</dt>
              <dd>
                <p>月給 23.0万円〜64.5万円</p>
                <h4 className={styles.descriptionInnerHeading}>詳細</h4>
                <p>基本給＋資格手当：230,000円～645,000円</p>
                <dl className={styles.descriptionInner}>
                  <dd className={styles.withIcon}>
                    <span className={styles.icon}>＋指名料売上</span>：100%バック
                  </dd>
                  <dd className={styles.withIcon}>
                    <span className={styles.icon}>店販売上</span>：10%バック
                  </dd>
                  <dd className={styles.withIcon}>
                    <span className={styles.icon}>技術売上</span>：50万円を超える売上高（指名＋フリー）から10～20%還元
                  </dd>
                </dl>
                <h4 className={styles.descriptionInnerHeading}>その他手当</h4>
                <ul>
                  <li>通勤手当：0円～15,000円</li>
                  <li>役職手当：10,000円～50,000円</li>
                  <li>家族手当：10,000円</li>
                  <li>皆勤手当：5,000円</li>
                  <li>勤続手当：10,000円/年UP</li>
                </ul>
              </dd>
              <dt>勤務時間</dt>
              <dd>
                <p>
                  平日 10:00～22:00、土曜 9:00～21:00、日曜 9:00～17:00、祝日 9：00～21:00 の間で９時間のシフト制（実働8h）
                </p>
                <p>※ 休憩時間あり（自由に外出可能）</p>
                <p>※ 1カ月単位変形労働時間制採用</p>
                <p>平日は応相談により、自由に決められます。日曜日休みも可（シフト制）</p>
              </dd>
              <dt>休日</dt>
              <dd>
                <p>
                  ４週８日制（年間休日数 105日）<br/>
                  ★毎月１回、日曜日の定休日があります。連休取得も可能です。プライベートライフも充実させてください。
                </p>
                <p>
                  ・年間有給休暇日数 10日<br/>
                  ・年末年始休暇 ・介護休暇 ・産前、産後休暇 ・育児休暇 ・慶弔休暇 あり
                </p>
              </dd>
              <dt>待遇</dt>
              <dd>
                <h4 className={styles.descriptionInnerHeading}>社会保険（法令に従い加入）</h4>
                <ul className={styles.itemList}>
                  <li>健康保険</li>
                  <li>厚生年金</li>
                  <li>雇用保険</li>
                  <li>労災保険</li>
                </ul>
                <h4 className={styles.descriptionInnerHeading}>その他制度・特典</h4>
                <ul className={styles.itemList}>
                  <li>健康診断</li>
                  <li>引越の費用補助（上限100,000円 ※入社時のみ、対象エリア制限あり</li>
                  <li>結婚祝い金</li>
                  <li>出産祝い金</li>
                  <li>美容脱毛施術を受けられます（入社6ヶ月後～）</li>
                </ul>
              </dd>
              <dt>教育・研修制度</dt>
              <dd>
                <ul className={styles.itemList}>
                  <li>ご満足いただけるカット、カラー、パーマなどサロンワークの技術</li>
                  <li>自分のファンやリピーター客を増やす接客スキル、カウンセリングスキル</li>
                  <li>将来に役立つ、マーケティングや経営などのビジネススキル</li>
                </ul>
                <p className={styles.comment}>いつかお店を持ちたい！一緒に店を大きくしてみたい！という方にも満足いただける環境です。</p>
              </dd>
              <dt>応募資格・条件</dt>
              <dd>美容師免許取得者</dd>
              <dt>求める人材像</dt>
              <dd>
                <ul className={styles.itemList}>
                  <li>自分のアイディアを活かして、稼ぎたい方</li>
                  <li>美容の仕事が好きな方</li>
                  <li>スキル向上も目指す方</li>
                  <li>分からないことは何回でも聞いてくれる方！</li>
                </ul>
                <p className={styles.comment}>
                  協力できることは何でもします！<br/>
                  スタッフへの報酬還元を大きくしてますので、稼ぎたい方も大歓迎です！<br/>
                  家庭も仕事も頑張るパパ／ママ美容師さん大歓迎です！<br/>
                </p>
              </dd>
            </dl>

            <div className={styles.btn}>
              <CtaButton
                text="応募する・見学する・問い合わせする"
                link={jobPageURL}
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
                  <a className={styles.lightLink} href="https://beegroup.tokyo/">https://beegroup.tokyo/</a>
                </dd>
              </div>
            </dl>
          </section>

          <div className={styles.ctaBoxWrapper}>
            <CtaBox isExtend />
          </div>
          
          <p style={{marginTop:'20px', textAlign:'right'}}>２０２４年６月現在</p>
          
        </div>
      </div>
    </MainLayout>
  </>
);

export default Recruit;
