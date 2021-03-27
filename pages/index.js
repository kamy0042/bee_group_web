import Head from "next/head";
import Link from "next/link";
import MainLayout from "../components/template/MainLayout";
import styles from "../styles/Top.module.scss";

const Merit = ({ num, title, text, className, link }) => (
    <section className={`${num ? styles["merit-" + num] : null} ${styles.merit}`}>
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

const LinkBox = ({ className, link, title, sub }) => (
    <div className={`${styles.linkBox} ${styles["linkBox-" + className]}`}>
        <p className={styles.linkBox_text}>
            <span className={styles.linkBox_title}>{title}</span>
            <span className={styles.linkBox_sub}>{sub}</span>
        </p>
        <div className={styles.linkBox_link}>
            <Link href={link}>
                <a>Read More</a>
            </Link>
        </div>
    </div>
);

const Test = () => (
    <div>
        <Head>
            <title>男性専門美容室 Bee dandy</title>
            <meta
                name="description"
                content=" 新橋の男性専門美容室 Bee dandyのWebサイトです。お一人おひとりの顔立ちと髪質を活かし、カッコいいをプロデュースします！"
            ></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainLayout>
            <div className={styles.mv}>
                <p className={styles.mv_text}>
                    髪も眉もヒゲも、そしてボディも。
                    <br />
                    メンズグルーミングなら
                </p>
                <p className={styles.mv_logo_text}>男性専門美容室</p>
                <img src="/img/bee_logo_white.svg" className={styles.mv_logo} alt="bee_dandy" />
            </div>
            <div className={styles.contents}>
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
                        dandyはお一人おひとりに合わせたベストな解決策と施術をご提供し、自分自身により愛着がわき、「魅力と自信」に満ち溢れたあなたの実現をサポートさせていただく、男性専門の美容室です。「オシャレをしたいけど、どうしたら良いのか分からない方」も、「より洗練されたオシャレを楽しみたい方」も、男美容に興味がある、気になっている、そんな大人の男性が安心して通える隠れサロンです。
                    </p>
                </section>
                <section className={`${styles.salon} ${styles.section}`}>
                    <h2 className={styles.heading}>Our Salon</h2>
                    <p className={styles.lead}>Bee dandy がお届けする５つのメリット</p>
                    <Merit
                        num="01"
                        title={`お悩みを相談できる\nプライベートな空間`}
                        text="美容室は恥ずかしくて落ち着かない、隣の人が気になる、相談したいことがあるけど他の人に聞かれたくない…という不安は一切必要ありません。Bee dandyは地下1階にあり、通行人から見られることがありません。また、室内は他のお客様の目線が気にならない半個室の設計だから、ほかのお客様を気にすることなく、ご希望やお悩みをご相談いただけます。"
                    />
                    <Merit
                        num="02"
                        title={`オンもオフもどちらもOKな\nヘアスタイル`}
                        text="人はお顔に一番近いヘアスタイルを整えることで一番印象が変わると言われています。こだわりが特に無い、毎回オーダーは同じ…という方も、今よりカッコ良くなりたいはず。あなたのライフスタイルに合わせて、フォーマルもカジュアルも楽しめるヘア２wayスタイルをご提供します。もちろん、ご自身でセットできるようスタイリングのアドバイスもいたします。"
                    />
                    <Merit
                        num="03"
                        title={`髪のボリュームアップや\n白髪をダンディーに演出`}
                        text="髪をボリュームアップしたり、毛先を少しだけ曲げカールさせてセットしやすくするなど、あなたのお悩みを解決するための縁の下の力持ちとなるパーマやカラーを経験したことがない方も多いはず。お悩みが解決することで毎朝のスタイリングが楽しくなり、時間短縮にもつながります。魅力と自信に満ち溢れたより素敵なあなたになるための施術をご提案いたします。"
                    />
                    <Merit
                        num="04"
                        title={`頭皮環境と発毛促進を\nリラクゼーションとともに`}
                        text="頭皮環境を良くしましょう！良質な食物は良い土からできるように、良い頭皮環境からは良質で元気な髪が生えてきます。髪のダメージや、抜け毛や薄毛が気になる方には定期的なスカルプケアをおすすめします。筋肉をほぐしたり、頭皮の汚れや毛穴の詰まりを解消し毛細血管を再生するので気持ちいいのは間違いなし。リフレッシュや発毛促進、さらにはリフトアップなど良いこと尽くしのリラクゼーションです。"
                    />
                    <Merit
                        num="05"
                        title={`ヘアカットのついでに\n脱毛も可能`}
                        text="毎日のひげ剃りを楽にしたい、手や脚の毛を嫌がられない程度に薄くしたい・・・でも脱毛サロンへ通うのはハードルが高い、そもそも脱毛について聞くこと自体が恥ずかしいというのが本音ではないでしょうか。実はツルツルだけでなく、エチケット程度に毛量を減らしたり、毛の生え方をデザインすることもできるんです。Bee dandyでは「ヘアカットのついで」に脱毛もできますので、ぜひご希望をお伝えください。"
                        // link="/menu/removal/"
                    />
                </section>
                <section className={`${styles.section} ${styles.information}`}>
                    <h2 className={styles.heading}>Infomation</h2>
                    <p className={styles.lead}>私たちのお店について</p>
                    <ul className={styles.info}>
                        <li>
                            <LinkBox title="Menu" sub="メニュー一覧" link="/menu/" className="menu" />
                        </li>
                        <li>
                            <LinkBox title="Salon" sub="店舗情報" link="/salon/" className="salon" />
                        </li>
                        {/*
                        <li>
                            <LinkBox title="Staff" sub="スタッフ一覧" link="/staff/" className="staff" />
                        </li>
                        <li>
                            <LinkBox title="FAQ" sub="よくある質問" link="/faq/" className="faq" />
                        </li> */}
                    </ul>
                </section>
            </div>
        </MainLayout>
    </div>
);

export default Test;
