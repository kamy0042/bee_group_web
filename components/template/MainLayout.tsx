'use client'

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../../styles/MainLayout.module.scss";

type Props = {
  children: React.ReactNode;
  isLight?: boolean;
  contained?: boolean;
};

const MainLayout = ({ children, isLight, contained }: Props) => {
  const mainClassName = [styles.main, isLight && styles.light, contained && styles.contained]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.wrap}>
      <Header />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
