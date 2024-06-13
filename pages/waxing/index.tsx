import Head from "next/head";
import PageImage from "../../components/PageImage";
import MainLayout from "../../components/template/MainLayout";
import styles from "../../styles/Waxing.module.scss";
import { waxingCollection } from "../../data/waxing.data";
import WebpImage from "../../components/WebpImage";
import { CtaButton } from "../../components/CtaButton";
import { RESERVE_URL } from "../../public/static";
import utilStyles from "../../styles/Util.module.scss";
import { SALON_NAME } from "../../constants";

const renderTable = (title, data, subtitle) => (
  <section key={title} className={styles.table}>
    <div className={styles.table_head}>
      <h4>{title}</h4>
    </div>
    <p className={styles.table_subtitle}>{subtitle}</p>
    <ul className={styles.table_category}>
      <li className={styles.table_category_detail}>コース内容</li>
      <li className={styles.table_category_pay1}>通常料金（税込）</li>
      <li className={styles.table_category_pay2}>会員優待（税込）</li>
    </ul>
    <dl className={styles.table_item}>
      {data.map((item) => (
        <div key={item.category} className={styles.menuItem}>
          <dt>{item.category}</dt>
          <dd className={styles.menuItem_pay}>
            <span>通常料金（税込）</span>¥{item.price}
          </dd>
          <dd className={styles.menuItem_pay}>
            <span>会員優待（税込）</span>¥{item.discount}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

function Waxing() {
  return (
    <>
      <Head>
        <title>メンズ脱毛 | {SALON_NAME}</title>
        <meta name="description" content="大人ビジネスマンのためのメンズ脱毛サロン。男性専門美容室に併設。男のおしゃれ・身だしなみに必須のヒゲ脱毛・全身脱毛・VIO脱毛。初めての脱毛デビューならBee dandy（ビーダンディー）が安心。痛みの少ない国産の光脱毛マシンで安心。" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <MainLayout>
        <PageImage page="waxing" />
        <div className={styles.contents}>
          <section className={`${styles.section}`}>
            <h2 className={styles.heading}>Concept</h2>
            <p className={styles.lead}>
              青ひげ卒業 ＆ 清潔感アップ！
              <br />
              ビジネスマンの脱毛デビューは、<br className={styles.pcNone} />Bee dandyが安心です。
            </p>
            <div className={styles.concept_textArea}>
              <p>「毎日のひげ剃りを楽にしたい」「手や足の毛を嫌がられない程度に薄くしたい」「でも脱毛サロンへ通うのはハードルが高いし、そもそも脱毛について聞くこと自体が恥ずかしい」こんなお悩みを抱えていませんか？</p>
              <p>そこで、ビジネスマン比率90％以上、口コミ評価★4.9以上*の男性専門美容室に、メンズ脱毛サロンを併設しました。もう、毎朝のひげ剃り、髪のスタイリングに悩まなくていいんです！メンズは頭皮も髪の毛も、そしてお肌も繊細。だから、ヘアスタイル、白髪や毛量、眉毛の手入れ、そしてムダ毛処理まで、一人ひとりの個性に合わせて、あなたのお悩みをカッコよく解決します。</p>
              <div>
                <div className={utilStyles.linkButton}>
                  <a href='https://instagram.com/beedandy_epilation_official?igshid=NTc4MTIwNjQ2YQ==' target='_blank' rel="noreferrer">Instagramを見る</a>
                </div>
              </div>
              <p className={styles.sub}>＊ Googleビジネスプロフィール、HotPepper Beautyのクチコミ評価</p>
            </div>
          </section>
          <section className={`${styles.section}`}>
            <h2 className={styles.heading}>Our Salon</h2>
            <p className={styles.lead}>
              Bee dandy（ビーダンディー）メンズ専門脱毛サロンが
              <br className={styles.spNone} />
              お届けする４つの安心
            </p>
            <dl className={styles.salesPoint_wrap}>
              <div className={styles.salesPoint}>
                <dt className={styles.salesPoint_head}>
                  <span className={styles.salesPoint_num}>01</span> 隠れ家的サロン
                </dt>
                <dd className={styles.salesPoint_img}>
                  <WebpImage alt="個室で安心施術" src="bee_room_image-min" />
                </dd>
                <dd className={styles.salesPoint_text}>
                  男の身だしなみ、さりげないオシャレに必須となったメンズ脱毛。ビジネスマンが通うメンズ美容室の脱毛サロンだから、お店に入る時も恥ずかしくない！高級感漂う落ち着きの個室空間、人目を気にせず相談や施術が受けられます。
                </dd>
              </div>
              <div className={styles.salesPoint}>
                <dt className={styles.salesPoint_head}>
                  <span className={styles.salesPoint_num}>02</span> 確かな技術
                </dt>
                <dd className={styles.salesPoint_img}>
                  <img alt="認定脱毛士資格を持つ女性スタッフ" src="/img/waxing/waxing_specialist.jpg" />
                </dd>
                <dd className={styles.salesPoint_text}>
                  脱毛施術を行うのは、認定脱毛士資格を持つ、プロの脱毛専任の女性スタッフが担当します。的確なカウンセリングと確かな技術で、心も身体もキレイに！デリケートゾーンの脱毛もご安心ください。（状況により、男性スタッフの場合もございます）
                </dd>
              </div>
                <div className={styles.salesPoint}>
                  <dt className={styles.salesPoint_head}>
                    <span className={styles.salesPoint_num}>03</span> 安全の国産マシン
                  </dt>
                  <dd className={styles.salesPoint_img}>
                    <WebpImage alt="脱毛には国産器具を利用" src="bee_waxing" />
                  </dd>
                  <dd className={styles.salesPoint_text}>
                    日本エステティック振興協議会の認定機種で、男性のヒゲ、ワキ、VIOのような太くて濃い毛を得意とする機種でありながら、痛みが少ないと評判です。施術時にジェルが必要ないので時間が短縮できるうえ、光の作用と瞬間的冷却美容で毛穴が引き締まり、美肌効果も得られます。
                  </dd>
                </div>
                <div className={styles.salesPoint}>
                  <dt className={styles.salesPoint_head}>
                    <span className={styles.salesPoint_num}>04</span> 明朗会計
                  </dt>
                  <dd className={styles.salesPoint_img}>
                    <img alt="1回ごとのお支払い" src="/img/waxing/payment.jpg" />
                  </dd>
                  <dd className={styles.salesPoint_text}>
                    その日に受けた施術分の料金をお支払いいただくシステムです。1回ごとのお支払いなので、止めたい時も、また始めたい時も、タイミングは自分で決められます。ローンや分割払いのコースはありません。ご希望の方には、前払い制で回数制限のない、年間フリーパスポートもご用意しています。
                  </dd>
                </div>
              </dl>
            <div className={styles.ctaBox}>
              <p>まずは、無料カウンセリングで、なりたいあなたの希望をお伝えください！ツルツルだけでなく、エチケット程度に毛量を減らしたり、 毛の生え方をデザインすることもできます。<br />あなたに合わせた施術方法、通うペースやアフターケアなどアドバイスいたします。</p>
              <CtaButton text='無料カウンセリングを予約する' link={RESERVE_URL} />
              <p>※過去に脱毛施術を受けたことがある方は、初回カウンセリングと施術を同日に行うことも可能です。</p>
            </div>
          </section>
          <section className={`${styles.section}`}>
            <h3 className={styles.subHeading}>ご利用の流れ</h3>
            <ol className={styles.flow}>
              <li>
                <img src='/img/waxing/tel.jpg' alt='電話予約のイメージ' />
                <div>
                  <h4><span>01</span>無料カウンセリング予約</h4>
                  <p>電話・Webから、ご希望の日時をご予約ください。所用時間は約30分です。当日ご持参いただくものは特にありません。</p>
                </div>
              </li>
              <li>
                <img src='/img/waxing/counseling_2.jpg' alt='カウンセリング中の様子' />
                <div>
                  <h4><span>02</span>カウンセリング来店・ご相談</h4>
                  <p>お悩みやご希望をお伺いしながら、施術方針や通う頻度などのアドバイスをいたします。不安なことがあれば気軽にご相談ください。納得できたら初回施術日を予約して終了です。</p>
                </div>
              </li>
              <li>
                <img src='/img/waxing/in_waxing.jpg' alt='安心の国産マシンによる施術' />
                <div>
                  <h4><span>03</span>施術開始</h4>
                  <p>前日（ヒゲは当日）に電気シェーバーなどで処理してご来店ください。照射スタート！照射後もお肌を優しくケアいたします。</p>
                </div>
              </li>
              <li>
                <img src='/img/waxing/next_booking.jpg' alt='次回の予約' />
                <div>
                  <h4><span>04</span>施術終了</h4>
                  <p>施術後の状態を確認し、アフターケアのアドバイスをいたします。ご要望・疑問点は何なりとお伝えください。次回のご予約をして終了です。</p>
                  <p>※ヘアカットと同日に脱毛カウンセリングや施術を受けることもできます。ヘアカットと脱毛は別々に、時間をずらしてご予約ください。</p>
                </div>
              </li>
            </ol>
          </section>
          
          <section className={styles.section}>
            <h3 className={styles.subHeading}>Menu</h3>
            <div className={styles.menu_textArea}>
              <p>ツルツルだけでなく、エチケット程度に毛量を減らしたり、毛の生え方をデザインすることもできます。<br/>各部位、1回の施術ごとのお支払いだから安心。自分が脱毛を止めたい時に止められ、始めたい時に始められます。</p>
              <p>年会費をお支払いいただくことで、一般料金よりお得な会員料金で施術を受けられます。</p>
            </div>
            
            {waxingCollection.map((item) => renderTable(item.title, item.data, item.subtitle))}
            
            <section className={styles.table}>
              <div className={styles.table_head}>
                <h4>その他</h4>
              </div>
              <dl className={styles.table_item}>
                <div className={styles.menuItem}>
                  <dt className={styles.menuItem_title_etc}>【オプション】剃毛</dt>
                  <dd className={styles.menuItem_pay_etc}>￥2,200～3,300（部位による）</dd>
                </div>
                <div className={styles.menuItem}>
                  <dt className={styles.menuItem_title_etc}>会員費（有効期限：1年間）</dt>
                  <dd className={styles.menuItem_pay_etc}>￥1,650</dd>
                </div>
                <div className={styles.menuItem}>
                  <dt className={styles.menuItem_title_etc}>指名料</dt>
                  <dd className={styles.menuItem_pay_etc}>￥1,100～（スタイリスト・スタッフにより異なります）</dd>
                </div>
              </dl>
            </section>
          </section>
          
          <section className={`${styles.menu} ${styles.section}`}>
            <h3 className={styles.subHeading}>Q & A</h3>
            <p className={styles.subLead}>よくある質問</p>
            
            <div className={styles.faq_wrapper}>
              <h4 className={styles.categoryHeading}>脱毛について</h4>
              <dl className={styles.faq}>
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>〈美容脱毛〉と〈医療脱毛〉の違いって何ですか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    「施術者」と「脱毛機械」に違いがあります。<br/>
                    〈医療脱毛〉は、レーザーで発毛細胞を破壊するので、医療従事者が施術を行います。
                    〈美容脱毛〉は、光照射により毛が抜け落ち、生えにくくなる効果をもたらします。光脱毛機を使用するので、サロンで施術が受けられます。
                  </p>
                  <p>
                    当店では研修をクリアしたスタッフが、安全性の高い国産の光脱毛機で施術にあたります。美肌効果も得たい、毛の量を減らしたい、刺激の少ない方法であまり痛くない脱毛をしたい方には、美容脱毛がおすすめです。
                  </p>
                </dd>
              </dl>
  
              <h4 className={styles.categoryHeading}>ご来店・ご予約について</h4>
              <dl>
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>初めてなのでよくわからないのですが</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    脱毛が初めての方は、無料カウンセリングをご予約ください。<br/>
                    所要時間は３０分程度です。お悩みやご希望をお伺いしながら、施術ペースのご提案やアフターケアなどのアドバイスをさせていただきます。不安なことがあれば気軽にご相談ください。
                    <br />
                    ※ヘアカットと同日に脱毛カウンセリングを受けることもできます。Web予約からは〈カット〉と〈脱毛 無料カウンセリング〉を別々に時間をずらしてご予約ください。
                  </p>
                </dd>
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>予約した方がいいですか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    完全予約制の一部時間帯を除き、予約なしでもご利用いただけます。但し、予約のお客様を優先させていただきます。予約はホームページや会員アプリからご来店30分前まで可能です。お急ぎの場合には、お電話にて空き状況をご確認ください。
                  </p>
                </dd>
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>クレジットカードは使えますか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    はい、VISA / MASTER / JCB / AMEX / Dinersが使えます。そのほか、タッチ決済、デビットカード、スマホ・QRコード決済、交通系電子マネーをご利用いただけます。
                  </p>
                </dd>
              </dl>
  
              <h4 className={styles.categoryHeading}>施術について</h4>
              <dl>
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>痛いですか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    毛の濃さや部位、個人によっても差があります。瞬間冷却機能を備えた、痛みが少ない機種を採用していますが、まったく何も感じないということはありません。一方で、照射の強度を調整できるため、痛くて我慢ができないということもありません。
                  </p>
                </dd>
                
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>一回で脱毛できませんか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    一回では完了せず、間隔を空けて施術を繰り返す必要があります。目に見えている毛は全体の20～30％で、皮膚の中で眠っている毛が多くあります。光脱毛の施術を一番脱毛効果が高い成長期の期間に受けられるよう、カウンセリングでアドバイスいたします。
                  </p>
                </dd>
                
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>ムダ毛を目立たせないようにできますか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    生えてくる毛の量を調節することができるので、ヒゲ・太もも・スネなどは、ツルツルの脱毛ではなく、減毛することも可能です。
                  </p>
                </dd>
                
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>期間・回数はどのくらいかかりますか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    必要な回数はお一人おひとり、かなり個人差があり、毛量・密度、部位、目的などによって大きく変わります。ヒゲの場合は一般的に5〜6回目の施術で効果を実感される方が多いようです。初回カウンセリング時に効果の出てくる時期と回数の目安が見えてきますので、ぜひご相談ください。
                  </p>
                </dd>
                
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>施術時間はどのくらいですか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    パーツにより所要時間が異なりますが、小さな部位は30分、全身脱毛は120分程度が目安です。
                  </p>
                </dd>
                
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>脱毛を受ける前に準備することはありますか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    はい、注意点とお願いがございます。<br/>
                    ①日焼けなど肌がダメージを受けること、飲酒、スポーツなど体温が上昇することは避けてください。<br/>
                    ②脱毛する部位の毛を（できれば電気シェーバーがおすすめ）ご自身で処理してお越しください。毛抜きは施術効果が発揮できなくなりますので避けてください。<br/>
                    背中などご自身で処理しにくい箇所は、当日スタッフがお手伝いいたします（有料）。30分程度追加時間が必要です。ご予約時に「剃毛希望」とお伝えください。
                  </p>
                </dd>
              </dl>
  
              <h4 className={styles.categoryHeading}>スタッフについて</h4>
              <dl>
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>スタッフは男性ですか？女性ですか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    女性の脱毛専門スタッフがおります。認定脱毛士資格を持っており、男性の生理現象は起こり得るものであると医学的に理解していますので、特に取り乱すようなことはございません。デリケートゾーンの脱毛もご安心ください。状況により、男性スタッフも担当させていただく場合がございます。
                  </p>
                </dd>
  
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>指名はできますか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    確かな技術を持つ、プロの脱毛専門スタッフが優先的に担当させていただきます。スタッフのご指名や男性スタッフをご希望の場合は、お手数ですが、お電話にてご相談ください。
                  </p>
                </dd>
              </dl>
  
              <h4 className={styles.categoryHeading}>注意事項について</h4>
              <dl>
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>日焼けをしていますが、脱毛できますか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    日焼け後から2週間以上期間を開けてください。肌トラブルを引き起こす原因となりますので、お肌の状態によっては、施術をお断りする場合もございます。予めご了承ください。
                  </p>
                </dd>
  
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>タトゥーがありますが、脱毛できますか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    タトゥーの色抜けや火傷の危険を伴う可能性があるため、タトゥー部分とタトゥーから5センチほどの範囲は避けて施術いたします。
                  </p>
                </dd>
  
                <dt className={styles.faq_title}>
                  <span className={styles.faq_icon}>Q</span>
                  <span>注意することはありますか？</span>
                </dt>
                <dd className={styles.faq_body}>
                  <p>
                    施術後には、激しい運動や飲酒など体温が上昇する行為、入浴時にゴシゴシ擦るなど肌に負担がかかってしまう行為は、炎症や傷が生じる恐れがありますので避けてください。
                  s</p>
                </dd>
              </dl>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
}

export default Waxing;
