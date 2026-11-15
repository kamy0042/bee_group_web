import { getList } from "../../libs/microcms";
import ArticleList from "../../components/blog/ArticleList/ArticleList";
import styles from "../../styles/Blog.module.scss";
import Pagination from "../../components/blog/Pagination";
import LinkButton from "../../components/LinkButton";
import { LIMIT, SALON_NAME } from "../../constants";


export const revalidate = 60;

export async function generateMetadata(): Promise<any> {
  return {
    title: `Blog | ${SALON_NAME}`,
    description: '新橋の男性専門美容室 Bee dandyのブログです',
  };
}

export default async function Page (){
  const list = await getList({limit:LIMIT});

  return (
      <div>
        <h1 className={styles.heading}>Blog</h1>
        <ArticleList articles={list.contents} />
        <Pagination totalCount={list.totalCount}  />
        <div className={styles.voiceLink}>
          <LinkButton href="/voice">お客様の声を見る</LinkButton>
        </div>
      </div>
  );
} 
