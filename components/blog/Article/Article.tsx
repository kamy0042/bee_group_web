// @ts-ignore
import { Article as ArticleType } from "../../../libs/microcms";
import styles from './index.module.scss'
import { PublishedDate } from "../Date";
import { formatRichText } from "../../../libs/utils";

type Props = {
  data: ArticleType;
};

// eslint-disable-next-line import/prefer-default-export
export const Article = ({ data }: Props) => (
    <main className={styles.main}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.meta}>
        {data.writer && (
          <div className={styles.writer}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <img
                src={data.writer?.image?.url}
                alt=""
                className={styles.writerIcon}
                width={data.writer?.image?.width}
                height={data.writer?.image?.height}
              />
            </picture>
            <span className={styles.writerName}>{data.writer?.name}</span>
          </div>
        )}
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      {data.thumbnail?.url ? 
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type="image/webp"
              srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
            />
            <img
              src={data.thumbnail?.url || '/img/bee_image_1-min.jpg'}
              alt=""
              className={styles.thumbnail}
              width={data.thumbnail?.width}
              height={data.thumbnail?.height}
            />
        </picture>  : 
        <img
          src='/img/bee_business-min.jpg'
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  )