import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageImage from "../../components/PageImage";
import styles from "../../styles/Staff.module.scss";
import useIsSafari from "../../libs/useIsSafari";

const Staff = () => {
    const isSafari = useIsSafari();
    const StaffProfile = ({ className, position, staffName, profile, message, url }) => (
        <dl className={`${styles.profile} ${isSafari ? styles[className + "_noWebp"] : styles[className]}`}>
            <div className={styles.profile_body}>
                <dt className={styles.profile_nameArea}>
                    <span className={styles.profile_position}>{position}</span>
                    <span className={styles.profile_name}>{staffName}</span>
                    <a href={url} target="_blank">
                        <img src="/img/icon_ig.svg" alt="bee_dandy instagram" width="40px" height="40px" />
                    </a>
                </dt>
                <dd className={styles.profile_text}>
                    <p>{profile}</p>
                </dd>
                <dd className={styles.profile_message}>
                    <h2>お客様へのメッセージ</h2>
                    <p>{message}</p>
                </dd>
            </div>
        </dl>
    );

    return (
        <>
            <Head>
                <title>スタッフ一覧 | 男性専門美容室 Bee dandy</title>
                <meta
                    name="description"
                    content="新橋の男性専門美容室 Bee dandyで働くスタッフ一覧です。スタッフのプロフィールやお客様へのメッセージ、これまで手がけてきた事例をご紹介します。"
                ></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainLayout>
                <PageImage page="staff" />
                <div className={styles.contents}>
                    <h1 className={styles.heading}>Staff</h1>
                    <div className={styles.staff}>
                        <StaffProfile
                            className="matsui"
                            position="オーナー"
                            staffName="松井 祐太"
                            profile={`福岡県出身。30才で上京し、某美容室でマネージャーとして活躍後、2021年にBee Groupを立ち上げる。\n超ポジティブ思考でこの人が登場すると周囲が明るくなるという不思議なパワーの持ち主。抜群のセンスと高い技術で、お客様の様々なニーズに応え続けている。`}
                            message={`お一人おひとりに「今までで一番いいね！」と言っていただけるよう、その人に合ったヘアスタイル、いや、絶対に似合うヘアスタイルを作り出し、家族、恋人、あなたに関わる方々に満足をご提供します！そのため薄毛や白髪のカバー、多少の無理難題（笑）にも解決策をご提示提案しますので、僕のセンスと技術を信じて、あなたの「こうなりたい！」をぜひお気軽にご相談ください！`}
                            url="https://www.instagram.com/beedandy_y.matsui_official/"
                        />
                        <section className={styles.voice}>
                            <h2 className={styles.voice_title}>お客様VOICE</h2>
                            <div className={styles.voice_body}>
                                <ul className={styles.voice_list}>
                                    <li>
                                        <p>
                                            少しイメチェンしてみたいと思い松井さんに相談したら、今までやったことのない前髪を上げるアップバングというスタイルを提案してもらった。思い切ってチャレンジしたら、妻から「カッコよくなったね！」と見直してもらった。自分がカッコよくなれたこともうれしいが、妻の機嫌がすこぶる良いという副次効果がありがたいですね（笑）（40代　エンジニア）
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            松井さん担当してもらってから職場の女性に話しかけられることが多くなったんです。髪質や季節感など計算してくれて、少しアレンジを加えていただくのでいつもカットしてもらうのが楽しみです。（30代
                                            　サービス業）
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className={styles.staff}>
                        <StaffProfile
                            className="sato"
                            position="アートディレクター"
                            staffName="佐藤 まゆ"
                            profile={`神奈川県出身。さりげなく高度なカット技術を駆使し、繊細で感性豊かなヘアスタイルを創り上げるスキルの持ち主。本人に自覚はないが、存在そのものが人に落ち着きや安心感を与えてしまう人柄と、高い提案力、技術力が、多くの男性から支持を得ている。中でも役職のある方や接客業など人前に立つ職業の方からの指名が多いことからも、その実績は裏付けられている。\n美容師歴：20年\n趣味：猫好き、コメディ映画（詳しい方大歓迎、ぜひ教えてください！）`}
                            message={`ダンディーの中にも優しさを織り交ぜた印象はとても魅力的です。あなたがもともと持っている髪質を活かして、動きのあるゆるふわスタイルからショートカットまで、好感度抜群のあなたに似合うヘアスタイルをご提供します。女性の私から見た魅力的な男性にプロデュースいたしますので、ぜひお気軽にご相談ください。`}
                            url="https://www.instagram.com/beedandy_m.sato/"
                        />
                        <section className={styles.voice}>
                            <h2 className={styles.voice_title}>お客様VOICE</h2>
                            <div className={styles.voice_body}>
                                <p className={styles.voice_item}>
                                    とにかくきつい癖毛で、短くカットしてもらっているはずなのに毎朝髪が爆発して、ジェルで押さえつけるのに時間がかかっていました。ところが、佐藤さんに施術してもらったら、朝起きても爆発しないんです。朝のスタイリング時間が半分以下に短縮！おかげでコーヒーをゆっくり飲める時間ができました。カットの技術でこんなにも違うんだと実感するとともに、佐藤さんに感謝しています！（40代　自営業）
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Staff;
