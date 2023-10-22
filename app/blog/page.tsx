import { getList } from "../../libs/microcms";
import ArticleList from "../../components/blog/ArticleList/ArticleList";
import styles from "../../styles/Waxing.module.scss";


export const revalidate = 60;

export async function generateMetadata(): Promise<any> {
  return {
    title: 'Blog | 男性専門美容室 Bee dandy',
    description: '新橋の男性専門美容室 Bee dandyのブログです',
  };
}

export default async function Page (){
  const list = await getList();

  return (
      <div>
        <h2 className={styles.heading}>Blog</h2>
        <ArticleList articles={list.contents} />
      </div>
  );
} 
