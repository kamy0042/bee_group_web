'use client'

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import ReserveButton from "../ReserveButton";
import styles from "../../styles/Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={close}>
          <img src="/img/bee_logo_white.svg" width="235" height="36" alt="Bee dandy" />
        </Link>
        <Navigation isOpen={isOpen} onNavigate={close} />
        <div className={styles.actions}>
          <ReserveButton className={styles.reserve} />
          <button
            type="button"
            className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
            aria-controls="global-nav"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
