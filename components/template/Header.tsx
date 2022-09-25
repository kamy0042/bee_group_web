import React from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";

const Header = () => (
  <header className={styles.wrap}>
    <h1 className={styles.logo}>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <img src="/img/bee_logo_white.svg" width="235px" height="36px" alt="bee_dandy" />
        </a>
      </Link>
    </h1>
  </header>
);

export default Header;
