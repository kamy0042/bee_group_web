import styles from "../../../styles/Waxing.module.scss";
import { getList } from "../../../libs/microcms";
import ArticleList from "../../../components/blog/ArticleList/ArticleList";
import Pagination from "../../../components/blog/Pagination";
import { LIMIT } from "../../../constants";


export const revalidate = 60;

export async function generateMetadata(): Promise<any> {
  return {
    title: 'Blog | 男性専門美容室 Bee dandy',
    description: '新橋の男性専門美容室 Bee dandyのブログです',
  };
}

type Props = {
  params: {
    current: string;
  };
};

export default async function Page ({ params }: Props){
  const current = parseInt(params.current as string, 10);
  const list = await getList({limit:LIMIT,offset: LIMIT * (current - 1),});
  
  return (
    <div>
      <h2 className={styles.heading}>Blog</h2>
      <ArticleList articles={list.contents} />
      <Pagination totalCount={list.totalCount} current={current} />
    </div>
  );
} 
