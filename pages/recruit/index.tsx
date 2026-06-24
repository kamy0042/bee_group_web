import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import styles from "../../styles/Recruit.module.scss";
import { CtaButton } from "../../components/CtaButton";
import { SHOP_INFO } from "../../public/static";
import { SALON_NAME } from "../../constants";

const jobPageURL = "https://work.beauty.hotpepper.jp/WC00004323/WS0000011338/";

const CtaBox = ({ isExtend }: { isExtend?: boolean }) => (
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
        「見学を希望したい」とお伝えください。担当が30分ほどサロン内をご紹介します。
        <br className={styles.spNone} />
        質問などがあれば遠慮なくどうぞ。日時や内容など折り返しご連絡します。
      </p>
    </dd>
    <dd className={styles.btn}>
      <CtaButton text="応募する・見学する・問い合わせする" link={jobPageURL} />
    </dd>
    {isExtend ? (
      <dd className={styles.tel}>
        <p>お急ぎの方、事情がある方はお電話でも対応しております</p>
        <p>
          <a
            className={styles.lightLink}
            href={`tel:${SHOP_INFO.TEL_NO_HYPHEN}`}
          >
            {SHOP_INFO.TEL}
          </a>
          （Bee dandy）
          <br className={styles.pcNone} />
          担当：松井までご連絡ください。
        </p>
      </dd>
    ) : null}
  </dl>
);

const description = `<p>Bee dandyは、新橋・汐留・虎ノ門エリアで働くビジネスマンを中心に支持されているメンズ専門サロンです。
経営者、管理職、医療従事者、士業、メディア関係者など、第一線で活躍するお客様が多く来店されます。</p>

<p>私たちの仕事は、ただ髪を切ることではありません。
お客様の仕事やライフスタイルに合わせてスタイルを提案し、自信を持って毎日を過ごせる状態をつくること。
一人ひとりのお客様と向き合いながら、美容師としても人としても成長できる環境があります。</p>

<p>【募集要項】</p>
・職種：スタイリスト
・雇用形態：正社員
・勤務地：東京都港区新橋5-8-3 代市ビルB1
・応募資格：美容師免許取得者
・勤務時間：実働8時間（シフト制）
・休日：変形労働時間制。日曜日定期は第一、第三日曜日
・試用期間：3〜6ヶ月

<p>【給与システム】</p>
・基本給：23万円〜30万円
・技術歩合：技術売上50万円超過分 × 10％
・指名料還元：50〜100％（社内規定による）
・店販歩合：店販売上 × 10％
・役職手当：最大6万円
・通勤手当：最大1.5万円
・昇給：あり

<p>【給与実績】入社2年目スタイリスト</p>
※月技術売上100万円・指名数85名・店販売上5万円の場合
・基本給：230,000円
・技術＋店販歩合：55,000円
・指名料（100％の場合）：85,000円
・各種手当：55,000円
・総支給額：425,000円

<p>【Bee dandyで働く3つの特徴】</p>
①集客は会社が担当：毎月40名以上の新規と70名以上のフリー顧客が安定来店。SNS投稿やチラシ配り、営業ノルマもありません。
②マンツーマン施術：掛け持ち施術は原則なし。平均客単価は8,600円以上。
③将来の独立や経営も学べる：技術だけでなく、カウンセリング・リピートづくり・マーケティング・集客・店舗運営まで学べます。`;

const scheme = {
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  datePosted: "2026-06-15",
  validThrough: "2033-12-31",
  title: "スタイリスト",
  employmentType: "FULL_TIME",
  description: `${description}`,
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      postalCode: "105-0004",
      addressRegion: "東京都",
      addressLocality: "港区",
      streetAddress: "新橋５丁目８−３ 代市ビル B1",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: {
      "@type": "QuantitativeValue",
      minValue: "230000",
      maxValue: "300000",
      unitText: "MONTH",
    },
  },
  hiringOrganization: {
    "@type": "Organization",
    name: "Bee Group",
    sameAs: "https://beegroup.tokyo/",
    logo: "https://beegroup.tokyo/img/logo.jpg",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "Bee Group",
    value: "0001",
  },
};

const Recruit = () => (
  <>
    <Head>
      <title>スタイリスト募集【2名限定】 | {SALON_NAME}</title>
      <meta
        name="description"
        content="新橋・汐留のビジネスマンに支持されるメンズ専門サロン Bee dandy では、マンツーマン施術 × 高単価で働けるスタイリストを2名限定で募集しています"
      />
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
          <h1 className={styles.heading}>スタイリスト募集<br className={styles.pcNone}/>【2名限定】</h1>
          <div className={styles.headerCopy}>
            <p className={`${styles.headerCopyItem}`}>
              マンツーマン施術 × 高単価
            </p>
            <p className={styles.star}>
              新橋・汐留のビジネスマンに支持される<br className={styles.pcNone}/>メンズ専門サロン
            </p>
          </div>
        </section>
        <div className={styles.message}>
          <img src="/img/recruit/staffs.jpg" alt="スタッフ集合写真" />
          <p>
            Bee dandyは、新橋・汐留・虎ノ門エリアで働くビジネスマンを中心に支持されているメンズ専門サロンです。
          </p>
          <p>
            経営者、管理職、医療従事者、士業、メディア関係者など、第一線で活躍するお客様が多く来店されます。
          </p>
          <p>
            私たちの仕事は、ただ髪を切ることではありません。
          </p>
          <p>
            お客様の仕事やライフスタイルに合わせてスタイルを提案し、自信を持って毎日を過ごせる状態をつくること。
          </p>
            <p>
            一人ひとりのお客様と向き合いながら、美容師としても人としても成長できる環境があります。
          </p>
        </div>
        <div className={styles.section}>
          <section className={styles.description}>
            <h2 className={styles.subHeading}>募集要項</h2>
            <dl
              className={`${styles.descriptionInner}, ${styles.recruitDetail}`}
            >
              <div>
                <dt>職種</dt>
                <dd>スタイリスト</dd>
              </div>
              <div>
                <dt>雇用形態</dt>
                <dd>正社員</dd>
              </div>
              <div>
                <dt>勤務地</dt>
                <dd>東京都港区新橋5-8-3 代市ビルB1</dd>
              </div>
              <div>
                <dt>応募資格</dt>
                <dd>美容師免許取得者</dd>
              </div>
              <div>
                <dt>勤務時間</dt>
                <dd>実働8時間（シフト制）</dd>
              </div>
              <div>
                <dt>休日</dt>
                <dd>変形労働時間制。日曜定休は第一、第三日曜日</dd>
              </div>
              <div>
                <dt>試用期間</dt>
                <dd>3〜6ヶ月</dd>
              </div>
            </dl>
          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>給与システム</h2>
            <dl
              className={`${styles.descriptionInner}, ${styles.recruitDetail}`}
            >
              <div>
                <dt>基本給</dt>
                <dd>23万円〜30万円</dd>
              </div>
              <div>
                <dt>技術歩合</dt>
                <dd>技術売上50万円超過分 × 10％</dd>
              </div>
              <div>
                <dt>指名料還元</dt>
                <dd>50〜100％（社内規定による）</dd>
              </div>
              <div>
                <dt>店販歩合</dt>
                <dd>店販売上 × 10％</dd>
              </div>
              <div>
                <dt>役職手当</dt>
                <dd>最大6万円</dd>
              </div>
              <div>
                <dt>通勤手当</dt>
                <dd>最大1.5万円</dd>
              </div>
              <div>
                <dt>昇給</dt>
                <dd>あり</dd>
              </div>  
            </dl>
          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>給与実績</h2>
              <p>入社2年目スタイリスト</p>
              <p style={{marginBottom:'2rem'}}>※月技術売上100万円・指名数85名・店販売上5万円の場合</p>
              <dl className={`${styles.descriptionInner}, ${styles.recruitDetail} ${styles.large}`}>
                <div>
                  <dt>基本給</dt><dd>230,000円</dd>
                </div>
                <div>
                  <dt>技術＋店販歩合</dt><dd>55,000円</dd></div>
                <div>
                  <dt>指名料(100％の場合)</dt><dd>85,000円</dd></div>
                <div>
                  <dt>各種手当</dt><dd>55,000円</dd></div>
                <div>
                  <dt>総支給額</dt><dd><strong>425,000円</strong></dd>
                </div>
              </dl>
          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>勤務条件</h2>
            <dl
              className={`${styles.descriptionInner}, ${styles.recruitDetail} ${styles.large}`}
            >
              <div>
                <dt>年間休日</dt>
                <dd>106日</dd>
              </div>
              <div>
                <dt>月間休日</dt>
                <dd>月9日（2月・12月は8日）</dd>
              </div>
              <div>
                <dt>日曜定休</dt>
                <dd>毎月2回</dd>
              </div>
              <div>
                <dt>休憩</dt>
                <dd>60分（外出可）</dd>
              </div>
              <div>
                <dt>残業</dt>
                <dd>月平均5時間程度</dd>
              </div>
              <div>
                <dt>副業・Wワーク</dt>
                <dd>可能</dd>
              </div>
            </dl>
            <div className={styles.note}>
              <h3>シフト例</h3>
              <div style={{display:'flex',gap:'2rem'}}>
                <p><span style={{fontWeight:'bold'}}>早番：</span>9:45〜18:45</p>
                <p>/</p>
                <p><span style={{fontWeight:'bold'}}>遅番：</span>12:45〜21:45</p>
              </div>
            </div> 
          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>福利厚生</h2>
            <dl
              className={`${styles.descriptionInner}, ${styles.recruitDetail} ${styles.large}`}
            >
              <div>
                <dt>社会保険</dt>
                <dd>健康保険・厚生年金・雇用保険・労災保険</dd>
              </div>
              <div>
                <dt>健康診断</dt>
                <dd>あり</dd>
              </div>
              <div>
                <dt>引越補助</dt>
                <dd>上限10万円</dd>
              </div>
              <div>
                <dt>結婚祝い金</dt>
                <dd>あり</dd>
              </div>
              <div>
                <dt>出産祝い金</dt>
                <dd>あり</dd>
              </div>
              <div>
                <dt>副業・Wワーク</dt>
                <dd>可能</dd>
              </div>
            </dl>
          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>Bee dandyで働く3つの特徴</h2>
            <div className={styles.feature}>
              <div className={styles.feature_text}>
                <dl className={styles.descriptionInner}>
                  <dt>① 集客は会社が担当</dt>
                  <dd>
                    毎月40名以上の新規と70名以上のフリー顧客が安定して来店しています。現在は予約枠が常に埋まっている状態のため、入社直後からすぐにお客様をお任せできます。また、SNS投稿の強制やチラシ配り、営業ノルマもありません。無駄な業務にストレスを感じることなく、目の前のお客様に集中できる環境です。
                  </dd>
                  <dt>② マンツーマン施術</dt>
                  <dd>
                    掛け持ち施術は原則ありません。一人ひとりのお客様にしっかり向き合いながら施術できます。平均客単価は8,600円以上。安売りや回転数ではなく、技術と提案力で選ばれるサロンです。
                  </dd>
                  <dt>③ 将来の独立や経営も学べる</dt>
                  <dd>
                    技術だけでなく、カウンセリング、リピートづくり、マーケティング、集客、店舗運営まで学ぶことができます。将来自分のお店を持ちたい方にも役立つ環境です。
                  </dd>
                </dl>
              </div>
              <img className={styles.contentImg} src="/img/recruit/staff_1.jpg" alt="施術風景" />
            </div>
          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>Bee dandyのお客様</h2>
            <div className={styles.descriptionContent}>
              <div className={styles.descriptionTextArea}>
                <p>
                  Bee dandyのお客様は、新橋・汐留・虎ノ門エリアで働くビジネスマンが中心です。
                </p>
                <p>そのため、</p>
                <ul className={styles.checkedList}>
                  <li>信頼される印象づくり</li>
                  <li>ビジネスシーンに合わせた提案</li>
                  <li>毎朝のセットが楽になる設計</li>
                </ul>
                <p>など、一歩踏み込んだ提案が求められます。</p>
                <p>
                  流れ作業ではなく、お客様との信頼関係を築いていく。それがBee dandyのスタイルです。
                </p>
                <p>
                  また、多様な業界で活躍するお客様との出会いは、美容師としてだけでなく、一人の人間としての視野も広げてくれます。
                </p>
              </div>
              <img src="/img/recruit/bee_image.jpg" alt="カット例" />
            </div>
          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>教育制度</h2>
            <p style={{marginBottom:'2rem'}}>
              Bee dandyでは技術だけではなく、「選ばれる美容師」になるための力を身につけることができます。
            </p>
            <div>
              <dl className={`${styles.descriptionInner}, ${styles.recruitDetail}`} >
                <div>
                <dt>技術</dt>
                <dd>メンズカット・メンズパーマ・カラー・ヘッドスパ</dd>
                </div>
                <div>
                <dt>接客</dt>
                <dd>カウンセリング・提案力・リピートづくり</dd>
                </div>
                <div>
                <dt>集客</dt>
                <dd>マーケティング・ブランディング</dd>
                </div>
                <div>
                <dt>経営</dt>
                <dd>店舗運営・売上管理・独立支援</dd>
                </div>
              </dl>
              <img className={styles.contentImg} src="/img/recruit/staff_cut_01.jpg" alt="カット風景" />
            </div>

          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>スタッフの声</h2>
            <div className={styles.staffVoice}>
              <div className={styles.staffVoice_text}>
                <dl className={styles.descriptionInner}>
                  <dt>スタイリスト</dt>
                  <dd>
                    以前のサロンより残業時間が大幅に減りました。それでも収入は増え、お客様との時間を大切にできています。美容師としてのやりがいを実感しています。
                  </dd>
                  <dt>脱毛スタッフ</dt>
                  <dd>
                    仕事と子育ての両立にとても理解があります。助け合う文化があり、安心して働ける職場です。
                  </dd>
                </dl>
              </div>
              <img src="/img/recruit/staff_cut_02.jpg" alt="カット中のスタッフ" />
            </div>
          </section>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>オーナーメッセージ</h2>
            <div className={styles.owner}>
              <div className={styles.owner_text}>
                <p>私は美容師という仕事が好きです。</p>
                <p>
                  だからこそ、美容師が長時間労働や人間関係のストレスで疲弊する業界のままであってほしくありません。
                </p>
                <p>
                  Bee dandyでは、お客様に最高のサービスを提供するために、まず働くスタッフが心身ともに健康であることを大切にしています。毎月2回の日曜定休、連続休暇、時間外ミーティングの廃止も、その考えから生まれました。
                </p>
                <p>
                  一方で、働きやすいだけのサロンを目指しているわけではありません。技術を磨き、お客様から信頼され、しっかり評価される美容師になってほしい。そして将来独立したい方には、私が学んできた集客や経営の知識も伝えていきたいと思っています。
                </p>
                <p>
                  地方から東京へ挑戦したい方も歓迎します。まずは見学だけでも構いません。希望者には私が実際にヘアカットを行う「ヘアカット体験」も実施しています。ぜひ一度、サロンの雰囲気を体感してください。
                </p>
                <p style={{ textAlign: "right" }}>
                  株式会社 Bee Group
                  <br />
                  代表 松井祐太
                </p>
              </div>
              <img
                src="/img/recruit/owner_message.jpg"
                alt="笑顔の松井オーナー"
              />
            </div>
          </section>

          <div className={styles.ctaBoxWrapper}>
            <CtaBox isExtend />
          </div>

          <section className={styles.description}>
            <h2 className={styles.subHeading}>会社情報</h2>
            <dl className={`${styles.descriptionInner}, ${styles.recruitDetail}`}>
              <div>
                <dt>会社名</dt>
                <dd>株式会社Bee Group</dd>
              </div>
              <div>
                <dt>会社所在地</dt>
                <dd>〒105-0004 東京都港区新橋 5－8－3 代市ビル B１F</dd>
              </div>
              <div>
                <dt>設立年月日</dt>
                <dd>2021年4月</dd>
              </div>
              <div>
                <dt>店舗数</dt>
                <dd>1店舗</dd>
              </div>
              <div>
                <dt>ホームページ</dt>
                <dd>
                  <a
                    className={styles.lightLink}
                    href="https://beegroup.tokyo/"
                  >
                    https://beegroup.tokyo/
                  </a>
                </dd>
              </div>
            </dl>
          </section>

 

          <p style={{ marginTop: "20px", textAlign: "right" }}>
            ２０２６年６月現在
          </p>
        </div>
      </div>
    </MainLayout>
  </>
);

export default Recruit;
