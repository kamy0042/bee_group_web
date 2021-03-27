import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageImage from "../../components/PageImage";
import styles from "../../styles/Faq.module.scss";

const Faq = () => (
    <>
        <Head>
            <title>よくある質問 | 男性専門美容室 Bee dandy</title>
            <meta
                name="description"
                content="新橋の男性専門美容室 Bee dandyのよくある質問をまとめました。コースやお支払い方法の詳細など、あなたの疑問にお答えします"
            ></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainLayout>
            <PageImage page="faq" />
            <div className={styles.contents}>
                <section>
                    <h1 className={styles.heading}>FAQ</h1>
                    <dl className={styles.faq}>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>〈美容室〉と〈理容室〉の違いって何ですか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                簡単に言うと〈美容室〉はデザインによって容姿を美しくするところ、〈理容室〉は散髪によって容姿を整えるところです。
                                厳密には「美容師法」と「理容師法」により定められています。
                            </p>
                            <p>
                                「美容」・・・美容とは、パーマネントウエーブ、結髪、化粧等の方法により、容姿を美しくすることをいう。
                                <br />
                                「理容」・・・ 理容とは、頭髪の刈込、顔そり等の方法により、容姿を整えることをいう。
                                <br />
                                ※シェービング（顔そり、髭剃り）は理容師にしか認められていません。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>予約はしたほうがいいですか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                完全予約制ではございませんが、予約のお客様を優先させていただきます。
                                <br />
                                来店30分前までアプリから予約が可能ですが、ご予約で埋まってしまう場合もありますので、お早目のご予約をおすすめいたします。
                                <br />
                                アプリをご使用いただけない場合には、お電話にて空き状況をご確認ください。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>指名はできますか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                指名制ではございませんが、ご希望のスタイリストを指名していただくことができます（指名料をいただいております）。誰を選んでよいかわからない場合は、フリーでご予約ください。
                                <br />
                                尚、カット以外の施術は状況に応じて、別のスタイリストがお手伝いさせていただく場合もございますので、予めご了承ください。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>初めてなのでコースがよくわからないのですが</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                初めてのご利用で、カット＋シャンプーをご希望の方は、ベーシックコース（オートシャンプーのコース）をご予約ください。お悩みやご希望をお伺いしながら次回施術のご提案をさせていただきます。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>シェービング（顔剃り・髭剃り）はしてもらえますか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                申し訳ございませんが、美容師法にて露出したかみそりを直接肌にあてることができないため対応することができません。{" "}
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>クレジットカードは使えますか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                はい、VISA / MASTER / JCB / AMEX / Dinersが使えます。
                                <br />
                                そのほか、タッチ決済、デビットカード、スマホ・QRコード決済、交通系電子マネーをご利用いただけます。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>男性専門とのことですが、女性や子どもも受け付けてもらえるのですか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>
                                申し訳ございませんが、女性、小学生以下のお子様連れや同伴はご遠慮いただいております。また、子ども料金や学割は設けておりませんのでご了承ください。
                            </p>
                        </dd>
                        <dt className={styles.faq_title}>
                            <span className={styles.faq_icon}>Q</span>
                            <span>タバコは吸えますか？</span>
                        </dt>
                        <dd className={styles.faq_body}>
                            <p>店内は禁煙です。予めご了承ください。 </p>
                        </dd>
                    </dl>
                </section>
            </div>
        </MainLayout>
    </>
);

export default Faq;
