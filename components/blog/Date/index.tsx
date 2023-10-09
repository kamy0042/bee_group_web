import styles from './index.module.scss';
import { formatDate } from "../../../libs/utils";

type Props = {
  date: string;
};

// eslint-disable-next-line import/prefer-default-export
export const PublishedDate = ({ date }: Props) => (
    <span className={styles.date}>
      {formatDate(date)}
    </span>
  )