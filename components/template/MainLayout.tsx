import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import styles from "../../styles/MainLayout.module.scss";

// eslint-disable-next-line no-undef
const MainLayout = ({ children, noHeaderImg }: { children: React.ReactNode; noHeaderImg?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.wrap} ${isOpen && styles.isOpen}`}>
      <div className={`${noHeaderImg ? styles.innerNoImg : styles.inner}`}>
        <div className={styles.headerArea}>
          <Header />
          <Navigation isOpen={isOpen} onClick={handleClick} />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
