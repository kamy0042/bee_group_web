import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { Article } from "../../../libs/microcms";
import styles from "./index.module.scss"

type Props = {
  articles?: Article[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={styles.list}>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
}