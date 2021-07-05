import Head from "next/head";
import PageImage from "../../components/PageImage";
import MainLayout from "../../components/template/MainLayout";
import styles from "../../styles/Waxing.module.scss";
import { waxingCollection } from "../../data/waxing.data";
import ReserveButton from "../../components/ReserveButton";
import WebpImage from "../../components/WebpImage";

const renderTable = (title, data) => (
    <section className={styles.table}>
        <div className={styles.table_head}>
            <h4>{title}</h4>
        </div>
        <ul className={styles.table_category}>
            <li className={styles.table_category_detail}>コース内容</li>
            <li className={styles.table_category_pay1}>通常料金（税込）</li>
            <li className={styles.table_category_pay2}>会員優待（税込）</li>
        </ul>
        <dl className={styles.table_item}>
            {data.map((item) => (
                <div className={styles.menuItem}>
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

const Menu = () => (
    <>
        <Head>
            <title>メンズ脱毛| 男性専門美容室 Bee dandy</title>
            <meta name="description" content="新橋の男性専門美容室 Bee dandyのメンズ脱毛のご紹介です"></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainLayout>
            <PageImage page="waxing" />
            <div className={styles.contents}>
                <section className={`${styles.menu} ${styles.section}`}>
                    <h2 className={styles.heading}>メンズ脱毛</h2>
                    <p className={styles.lead}>
                        ヘアカットのついでに脱毛も可能
                        <br />
                        とことんツルツルにしたり、毛の量を減らしたり、毛の生える範囲をデザインすることができます。
                        <br />
                        カウンセリング時にご希望をお伝えください。
                    </p>

                    <dl className={styles.salesPoint_wrap}>
                        <div className={styles.salesPoint}>
                            <dt className={styles.salesPoint_head}>
                                男性専門の美容室で完全個室のメンズ脱毛、だから恥ずかしくない。
                            </dt>
                            <dd className={styles.salesPoint_img}>
                                <WebpImage alt="個室で安心施術" src="bee_room_image-min" />
                            </dd>
                            <dd className={styles.salesPoint_text}>
                                Bee
                                dandyは地下1階にあり、通行人から見られることがありません。また、脱毛施術エリアは完全個室の設計だから、ほかのお客様を気にすることなく、ご希望やお悩みをご相談いただけます。ツルツルだけでなく、エチケット程度に毛量を減らしたり、毛の生え方をデザインすることもできるので、ぜひご希望をお伝えください。
                            </dd>
                        </div>
                        <div className={styles.salesPoint}>
                            <dt className={styles.salesPoint_head}>国産マシーンで安全、安心の脱毛。</dt>
                            <dd className={styles.salesPoint_img}>
                                <WebpImage alt="脱毛には国産器具を利用" src="bee_waxing" />
                            </dd>
                            <dd className={styles.salesPoint_text}>
                                医学博士監修のもとに臨床検査をクリアした安全性の高い、機能性、効果に優れた最先端の日本国産の脱毛マシーンを使用しています。メーカーにより臨床実験が行われ開発されており、従来の脱毛機に比べても痛みを感じにくくなっています。
                            </dd>
                        </div>
                    </dl>

                    <section className={styles.subSection}>
                        <h3 className={styles.subHeading}>主な脱毛エリア</h3>
                        <div>
                            <WebpImage src="img_removal_illust-min" alt="各部位ごとのの脱毛可能エリア" isPng />
                        </div>
                    </section>

                    <section className={styles.subSection}>
                        <h3 className={styles.subHeading}>メニュー</h3>
                        <p className={styles.subLead}>
                            各部位、1回の施術ごとのお支払いだから安心。
                            <br />
                            自分が脱毛を止めたい時に止められ、始めたい時に始められます。
                        </p>

                        {waxingCollection.map((item) => renderTable(item.title, item.data))}

                        <dl className={styles.plan}>
                            <dt className={styles.plan_head}>年間プラン</dt>
                            <dd>
                                1年間回数の制限なく脱毛することができるプラン。契約回数のプランではないので、脱毛効果に納得いかなくても終了となることはありません。納得いくまで脱毛を続けることができます。
                            </dd>
                        </dl>

                        <section className={styles.table}>
                            <div className={styles.table_head}>
                                <h4>その他</h4>
                            </div>
                            <dl className={styles.table_item}>
                                <div className={styles.menuItem}>
                                    <dt className={styles.menuItem_title_etc}>会員費（有効期限：1年間）</dt>
                                    <dd className={styles.menuItem_pay}>￥1,100</dd>
                                </div>
                                <div className={styles.menuItem}>
                                    <dt className={styles.menuItem_title_etc}>指名料</dt>
                                    <dd className={styles.menuItem_pay}>￥1,100</dd>
                                </div>
                            </dl>
                        </section>
                    </section>

                    <div className={styles.btnArea}>
                        <ReserveButton />
                        <p>
                            ご予約の際は、「その他」カテゴリーから
                            <br />
                            脱毛メニューを選択してください
                        </p>
                    </div>
                </section>

                <section className={`${styles.removal} ${styles.section}`}>
                    <h3 className={styles.subHeading}>脱毛Q & A</h3>
                    <dl className={styles.faq}>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>クリニック（病院）と美容室の脱毛との違いは何ですか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                「施術者」と「脱毛機械」に違いがあります。クリニックは医療従事者が医療用レーザー治療器を使用します（但し、多毛症等の診断時以外、保険は適用されません）。美容室では研修をクリアしたスタッフが施術にあたります。医療用レーザー治療器の使用が認められていないので、当店では臨床検査をクリアした安全性の高い国産の光脱毛機を使用しています。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>脱毛は痛いですか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                部位や個人差により痛みがある場合もあります。
                                <br />
                                「くすぐったい」という感想の方が多いのですが、ヒゲなどの毛根が深い部分は痛みを感じる方もいらっしゃいます。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>一回で脱毛できませんか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                一回では完了せず、間隔を空けて施術を繰り返す必要があります。
                                <br />
                                目に見えている毛は全体の20～30％で、皮膚の中で眠っている毛が多くあります。光脱毛は「休止期」「退行期」の毛に対しては効果を発揮しないため、「成長期」になるのを待って再び施術が必要です。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>どのくらいの回数がかかりますか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                必要な回数はお一人おひとり、かなり個人差があります。
                                <br />
                                ヒゲの場合は一般的に8～15回程度と言われていますが、毛量・密度、部位、目的などによって大きく変わります。初回カウンセリング時に効果の出てくる時期と回数の目安が見えてきますので、ぜひご相談ください。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>施術の所要時間は？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                初めての方はカウンセリングと施術、クールダウンを含めて1時間程度かかります。
                                <br />
                                2回目以降の場合、施術部分によって30分～40分程度です。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>注意することはありますか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                【施術前の注意点】　日焼け、毛抜きでの自己処理など肌がダメージを受けること、飲酒、スポーツなど体温が上昇することは避けてください。
                            </p>
                            <p>
                                【施術前のお願い】　脱毛する部位の毛を（できれば電気シェーバーがおすすめ）ご自身で短く処理してお越しください。毛抜きは施術効果が発揮できなくなりますので避けてください。背中などご自身で処理しにくい箇所は、当日スタッフがお手伝いいたします。
                            </p>
                            <p>
                                【施術後の注意点】　激しい運動や飲酒など体温が上昇する行為、入浴時にゴシゴシ擦るなど肌に負担がかかってしまう行為は、炎症や傷が生じる恐れがありますので避けてください。
                            </p>
                        </dd>
                    </dl>
                </section>
            </div>
        </MainLayout>
    </>
);

export default Menu;
