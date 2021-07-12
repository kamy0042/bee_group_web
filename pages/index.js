import Head from "next/head";
import Link from "next/link";
import MainLayout from "../components/template/MainLayout";
import useIsSafari from "../libs/useIsSafari";
import styles from "../styles/Top.module.scss";

const Merit = ({ num, title, text, img, link }) => (
    <section className={`${img ? styles["merit_" + img] : null} ${styles.merit}`}>
        <div className={styles.merit_textArea}>
            <h3>
                <span className={styles.merit_num}>{num}</span>
                <span className={styles.merit_title}>{title}</span>
            </h3>
            <p>{text}</p>
            {link && (
                <div className={styles.merit_link}>
                    <Link href={link}>
                        <a>詳しく見る</a>
                    </Link>
                </div>
            )}
        </div>
    </section>
);

const LinkBox = ({ className, link, title, sub, description }) => (
    <div className={`${styles.linkBox} ${styles["linkBox_" + className]}`}>
        <dl className={styles.linkBox_text}>
            <dt>
                <span className={styles.linkBox_title}>{title}</span>
                <span className={styles.linkBox_sub}>{sub}</span>
            </dt>
            <dd className={styles.linkBox_subText}>{description}</dd>
        </dl>
        <div className={styles.linkBox_link}>
            <Link href={link}>
                <a>Read More</a>
            </Link>
        </div>
    </div>
);

const Index = () => {
    const isSafari = useIsSafari();

    return (
        <>
            <Head>
                <title>男性専門美容室 Bee dandy</title>
                <meta
                    name="description"
                    content="新橋、汐留、御成門のメンズ美容室Bee dandy（ビーダンディー）のWebサイトです。お一人おひとりの顔立ちと髪質を活かし、カッコいいをプロデュースします！"
                ></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainLayout>
                <div className={`${styles.mv} ${isSafari ? styles.mv_noWebp : styles.mv_webp}`}>
                    <p className={styles.mv_text}>
                        髪も眉もヒゲも、そしてボディも。
                        <br />
                        メンズグルーミングなら
                    </p>
                    <p className={styles.mv_logo_text}>男性専門美容室</p>
                    <img src="/img/bee_logo_white.svg" className={styles.mv_logo} alt="bee_dandy" />
                    <p className={styles.mv_logo_sub}>ビーダンディー</p>
                </div>
                <div className={styles.contents}>
                    <dl className={styles.news}>
                        <dt>News</dt>
                        <dd>
                            <ul>
                                <li>
                                    <span>2021.7.12</span>
                                    <a href="/news/news_210712.pdf" target="_blank">
                                        緊急事態宣言期間の営業について
                                    </a>
                                </li>
                                <li>
                                    <span>2021.6.6</span>
                                    <a href="/news/news_210606.pdf" target="_blank">
                                        【夏期間限定】毎日ジェット水流で頭皮の汚れを落とす「シャンプー放題
                                        」キャンペーン
                                    </a>
                                </li>
                                {/* <li>
                                    <span>2021.5.4</span>
                                    <a href="/news/news_210504.pdf" target="_blank">
                                        弊社Instagramアカウントについてのお詫びとご報告
                                    </a>
                                </li> */}
                                {/* <li>
                                    <span>2021.4.3</span>
                                    オープン記念！初めてのご利用でコース料金10%OFF！2021年6月30日まで
                                </li> */}
                            </ul>
                        </dd>
                    </dl>
                    <section className={`${styles.concept} ${styles.section}`}>
                        <h2 className={styles.heading}>Concept</h2>
                        <p className={styles.lead}>
                            お一人おひとりのお顔立ちと
                            <br />
                            髪質を最大限に活かした
                            <br />
                            カッコいいをプロデュースします！
                        </p>
                        <p className={styles.concept_text}>
                            「どういう髪型が自分に合っているのか分からない」「白髪や薄毛が気になってきたが相談するのは恥ずかしい」「濃いヒゲの処理が毎日面倒なんだけど楽にならないだろうか」　こんなお悩みを抱えていませんか？誰一人として同じ容姿を持つ方はいらっしゃいません。だからお一人おひとりお悩みと解決策が違って当然なんです。
                        </p>
                        <p className={styles.concept_text}>
                            Bee
                            dandy（ビーダンディー）はお一人おひとりに合わせたベストな解決策と施術をご提供し、「魅力と自信」に満ち溢れたあなたの実現をサポートする男性専門の美容室です。「オシャレをしたいけど、どうしたら良いのか分からない方」も、「より洗練されたオシャレを楽しみたい方」も、男の美容やグルーミングに興味がある、気になっている、そんな大人の男性が安心して通える隠れ家サロンです。
                        </p>
                    </section>
                    <section className={`${styles.salon} ${styles.section}`}>
                        <h2 className={styles.heading}>Our Salon</h2>
                        <p className={styles.lead}>
                            Bee dandy（ビーダンディー）がお届けする
                            <br />
                            ５つのメリット
                        </p>
                        <Merit
                            img={isSafari ? "01_noWebp" : "01"}
                            num="01"
                            title={`お悩みを相談できる\nプライベートな空間`}
                            text="美容室は恥ずかしくて落ち着かない、隣の人が気になる、相談したいことがあるけど他の人に聞かれたくない…という不安は一切必要ありません。Bee dandyは地下1階にあり、通行人から見られることがありません。また、室内は他のお客様の目線が気にならない半個室の設計だから、ほかのお客様を気にすることなく、ご希望やお悩みをご相談いただけます。"
                        />
                        <Merit
                            img={isSafari ? "02_noWebp" : "02"}
                            num="02"
                            title={`オンもオフもどちらもOKな\nヘアスタイル`}
                            text="人はお顔に一番近いヘアスタイルを整えることで一番印象が変わると言われています。こだわりが特に無い、毎回オーダーは同じ…という方も、今よりカッコ良くなりたいはず。あなたのライフスタイルに合わせて、ビジネスもカジュアルも楽しめる２wayメンズスタイルをご提供します。もちろん、ご自身でセットできるようスタイリングのアドバイスもいたします。"
                        />
                        <Merit
                            img={isSafari ? "03_noWebp" : "03"}
                            num="03"
                            title={`髪のボリュームアップや\n白髪をダンディーに演出`}
                            text="髪をボリュームアップしたい、毛先を少しだけ曲げカールさせてセットしやすくしたい、白髪を目立たなくしたいなど、あなたのお悩みを解決するためのパーマやカラーを未経験の方も多いはず。お悩みが解決することで毎朝のスタイリングが楽しくなり、時間短縮にもつながります。フェードを利かせたバーバースタイルなどもお任せください。"
                        />
                        <Merit
                            img={isSafari ? "04_noWebp" : "04"}
                            num="04"
                            title={`頭皮環境と発毛促進を\nリラクゼーションとともに`}
                            text="良質な食物は良い土からできるように、良い頭皮環境からは良質で元気な髪が生えてきます。髪のダメージや、抜け毛や薄毛が気になる方には定期的なヘッドスパとスカルプケアをおすすめします。筋肉をほぐしたり、頭皮の汚れや毛穴の詰まりを解消し毛細血管を再生するので気持ちいいのは間違いなし。リフレッシュや発毛促進、さらにはリフトアップなど良いこと尽くしのリラクゼーションです。"
                        />
                        <Merit
                            img={isSafari ? "05_noWebp" : "05"}
                            num="05"
                            title={`ヘアカットのついでに\n脱毛も可能`}
                            text="毎日のひげ剃りを楽にしたい、手や脚の毛を嫌がられない程度に薄くしたい・・・でも脱毛サロンへ通うのはハードルが高い、そもそも脱毛について聞くこと自体が恥ずかしいというのが本音ではないでしょうか。男の身だしなみ、さりげないオシャレに必須となったメンズのグルーミング。ツルツルだけでなく、エチケット程度に毛量を減らしたり、毛の生え方をデザインすることもできるので、ぜひご希望をお伝えください。"
                            // link="/menu/removal/"
                        />
                    </section>
                    <section className={`${styles.section} ${styles.information}`}>
                        <h2 className={styles.heading}>Information</h2>
                        <p className={styles.lead}>
                            <span className={styles.br}>私たちのお店</span>
                            <span className={styles.br}>Bee dandy（ビーダンディー）について</span>
                        </p>
                        <ul className={styles.info}>
                            <li>
                                <LinkBox
                                    title="Menu"
                                    sub="メニュー一覧"
                                    link="/menu/"
                                    className={isSafari ? "menu_noWebp" : "menu"}
                                    description="メンズカット、ヘッドスパ、パーマ、カラーなど詳細と料金"
                                />
                            </li>
                            <li>
                                <LinkBox
                                    title="Salon"
                                    sub="店舗情報"
                                    link="/salon/"
                                    className={isSafari ? "salon_noWebp" : "salon"}
                                    description="新橋駅、汐留駅、御成門駅からいずれも徒歩６分とアクセスも便利"
                                />
                            </li>
                            <li>
                                <LinkBox
                                    title="Staff"
                                    sub="スタッフ一覧"
                                    link="/staff/"
                                    className={isSafari ? "staff_noWebp" : "staff"}
                                    description="経験豊富なスタイリストが、あなたのカッコいいをプロデュース"
                                />
                            </li>
                            <li>
                                <LinkBox
                                    title="FAQ"
                                    sub="よくある質問"
                                    link="/faq/"
                                    className={isSafari ? "faq_noWebp" : "faq"}
                                    description="〈美容室〉と〈理容室〉の違いって何でしょうか？"
                                />
                            </li>
                        </ul>
                    </section>
                </div>
            </MainLayout>
        </>
    );
};

export default Index;
