'use client'

import { useEffect, useRef, useState } from "react";
import Photo, { PhotoAsset } from "./Photo";
import styles from "../styles/components/ZoomableImage.module.scss";

type Props = PhotoAsset & {
  alt: string;
};

const ZoomableImage = ({ alt, ...photo }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    dialog.showModal();

    return () => {
      document.body.style.overflow = overflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" className={styles.trigger} aria-haspopup="dialog" onClick={() => setIsOpen(true)}>
        <Photo {...photo} alt={alt} className={styles.image} />
        <span className={styles.zoomLabel}>
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
            <path
              d="M15.5 15.5 21 21M10.5 7.5v6M7.5 10.5h6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          タップで拡大
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="拡大表示"
        onClose={() => setIsOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        <button type="button" className={styles.close} aria-label="閉じる" onClick={() => setIsOpen(false)} />
        <Photo src={photo.src} width={photo.width} height={photo.height} alt={alt} className={styles.dialogImage} />
        <p className={styles.dialogHint}>横向き表示やピンチ操作で拡大できます</p>
      </dialog>
    </>
  );
};

export default ZoomableImage;
