import Head from "next/head";
import MainLayout from "../../components/template/MainLayout";
import PageHeader from "../../components/PageHeader";
import FaqList from "../../components/FaqList";
import { FAQ_CATEGORIES } from "../../data/faq.data";
import { SALON_NAME } from "../../constants";
import pageStyles from "../../styles/Page.module.scss";
import styles from "../../styles/Faq.module.scss";

const Faq = () => (
  <>
    <Head>
      <title>{`よくある質問 | ${SALON_NAME}`}</title>
      <meta
        name="description"
        content="新橋の男性専門美容室 Bee dandyのよくある質問をまとめました。ヘアカット、スカルプインク、メンズ脱毛、予約・お支払いなど、あなたの疑問にお答えします"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout>
      <PageHeader
        en="FAQ"
        ja="よくある質問"
        image={{
          src: "/img/bee_image_1-min.jpg",
          webp: "/img/webp/bee_image_1-min.webp",
          width: 1066,
          height: 1600,
          position: "50% 70%",
        }}
      />
      <div className={pageStyles.section}>
        <div className={pageStyles.narrow}>
          <nav className={styles.categoryNav} aria-label="質問のカテゴリ">
            <ul>
              {FAQ_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <a href={`#${category.id}`}>{category.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          {FAQ_CATEGORIES.map((category) => (
            <section key={category.id} id={category.id} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <FaqList items={category.items} />
            </section>
          ))}
        </div>
      </div>
    </MainLayout>
  </>
);

export default Faq;
