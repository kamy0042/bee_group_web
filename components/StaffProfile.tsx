import { ReactNode } from "react";
import Photo, { PhotoAsset } from "./Photo";
import styles from "../styles/components/StaffProfile.module.scss";

type Props = {
  photo: PhotoAsset;
  alt: string;
  position: string;
  name: string;
  instagram?: string;
  profile?: string;
  message?: string;
  children?: ReactNode;
};

const StaffProfile = ({ photo, alt, position, name, instagram, profile, message, children }: Props) => (
  <article className={styles.profile}>
    <div className={styles.photo}>
      <Photo {...photo} alt={alt} className={styles.photoImg} />
    </div>
    <div className={styles.body}>
      <div className={styles.nameArea}>
        <p className={styles.position}>{position}</p>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{name}</h3>
          {instagram && (
            <a className={styles.sns} href={instagram} target="_blank" rel="noreferrer">
              <img src="/img/icon_ig.svg" alt="bee_dandy instagram" width="32" height="32" />
            </a>
          )}
        </div>
      </div>
      {profile && <p className={styles.text}>{profile}</p>}
      {children && <div className={styles.content}>{children}</div>}
      {message && (
        <div className={styles.message}>
          <h4 className={styles.messageTitle}>お客様へのメッセージ</h4>
          <p>{message}</p>
        </div>
      )}
    </div>
  </article>
);

export default StaffProfile;
