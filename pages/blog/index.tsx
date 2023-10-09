import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import MainLayout from "../../components/template/MainLayout";
import { getList } from "../../libs/microcms";
import ArticleList from "../../components/blog/ArticleList/ArticleList";
import styles from "../../styles/Waxing.module.scss";


export const getServerSideProps = (async () => {
  const list = await getList();
  return { props: { list } }
});

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Blog = ({list}:Props) => (
  <>
    <Head>
      <title>Blog | 男性専門美容室 Bee dandy</title>
      <meta
        name="description"
        content="新橋の男性専門美容室 Bee dandyのブログです"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout>
      <div>
        <h2 className={styles.heading}>Blog</h2>
        <ArticleList articles={list.contents} />
      </div>
    </MainLayout>
  </>
);


export default Blog;
