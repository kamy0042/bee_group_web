import Link from 'next/link';
import { Article } from "../../../libs/microcms";
import styles from './index.module.scss';
import { PublishedDate } from "../Date";

type Props = {
  article: Article;
};

// eslint-disable-next-line import/prefer-default-export
export const ArticleListItem = ({ article }: Props) => (
    <li className={styles.list}>
      <Link href={`/articles/${article.id}`} className={styles.link}>
        <button className={styles.button} type='button'>
          {article.thumbnail ? (
            <picture>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
              />
              <source
                type="image/webp"
                srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
              />
              <img
                src={article.thumbnail?.url}
                alt=""
                className={styles.image}
                width={380}
                height={180}
              />
            </picture>
          ) : (
              <img
                className={styles.image}
                src="/img/bee_business-min.jpg?fit=crop&w=240&h=126"
                alt="画像が設定されていません"
                width={380}
                height={180} 
              />
          )}
          <dl className={styles.content}>
            <dt className={styles.title}>{article.title}</dt>
            <dd className={styles.date}>
              <PublishedDate date={article.publishedAt || article.createdAt} />
            </dd>
          </dl>
        </button>
      </Link>
    </li>
  )