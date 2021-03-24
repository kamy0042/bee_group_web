import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import styles from "../../styles/MainLayout.module.scss";
import { useState } from "react";

const MainLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <div className={`${styles.wrap} ${isOpen && styles.isOpen}`}>
            <div className={styles.inner}>
                <div className={styles.headerArea}>
                    <Header />
                    {/* <Navigation isOpen={isOpen} onClick={handleClick} /> */}
                </div>
                <main className={styles.main}>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
