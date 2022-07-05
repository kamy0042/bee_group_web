import { useEffect, useState } from "react";
import useIsSafari from "../libs/useIsSafari";
import styles from "../styles/components/PageImage.module.scss";

const PageImage = ({ page }) => {
    const isSafari = useIsSafari();

    return <div className={`${styles.mv} ${isSafari ? styles[page + "_noWebp"] : styles[page]}`}></div>;
};

export default PageImage;
