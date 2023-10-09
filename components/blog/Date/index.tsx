import Image from "next/legacy/image";
import styles from './index.module.scss';
import { formatDate } from "../../../libs/utils";

type Props = {
  date: string;
};

// eslint-disable-next-line import/prefer-default-export
export const PublishedDate = ({ date }: Props) => (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  )