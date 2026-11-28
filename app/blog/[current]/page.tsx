import { notFound } from "next/navigation";
import styles from "../../../styles/Blog.module.scss";
import { getList } from "../../../libs/microcms";
import ArticleList from "../../../components/blog/ArticleList/ArticleList";
import Pagination from "../../../components/blog/Pagination";
import LinkButton from "../../../components/LinkButton";
import { LIMIT, SALON_NAME } from "../../../constants";


export const revalidate = 60;

export async function generateMetadata(): Promise<any> {
  return {
    title: `Blog | ${SALON_NAME}`,
    description: '新橋の男性専門美容室 Bee dandyのブログです',
  };
}

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page ({ params }: Props){
  const { current: currentParam } = await params;
  // 正の整数以外・極端に大きいページ番号で microCMS にリクエストしない
  if (!/^[1-9]\d{0,3}$/.test(currentParam)) notFound();
  const current = Number(currentParam);
  const list = await getList({limit:LIMIT,offset: LIMIT * (current - 1),});
  if (list.contents.length === 0) notFound();
  
  return (
    <div>
      <h1 className={styles.heading}>Blog</h1>
      <ArticleList articles={list.contents} />
      <Pagination totalCount={list.totalCount} current={current} />
      <div className={styles.voiceLink}>
        <LinkButton href="/voice">お客様の声を見る</LinkButton>
      </div>
    </div>
  );
} 
