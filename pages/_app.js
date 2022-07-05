import usePageView from "../libs/usePageView";
import "../styles/common.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    usePageView();

    return <Component {...pageProps} />;
}

export default MyApp;
