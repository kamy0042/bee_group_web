import { useEffect, useState } from "react";

const useIsSafari = () => {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("chrome") != -1) {
            setIsSafari(false);
        } else if (userAgent.indexOf("safari") != -1) {
            setIsSafari(true);
        } else {
            setIsSafari(false);
        }
    }, []);

    return isSafari;
};

export default useIsSafari;
