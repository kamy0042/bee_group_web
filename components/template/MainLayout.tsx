'use client'

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../../styles/MainLayout.module.scss";

type Props = {
  children: React.ReactNode;
  contained?: boolean;
};

const MainLayout = ({ children, contained }: Props) => {
  const mainClassName = [styles.main, contained && styles.contained]
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
