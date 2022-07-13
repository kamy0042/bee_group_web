import { AppProps } from "next/app";
import usePageView from "../libs/usePageView";
import "../styles/common.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  return <Component {...pageProps} />;
}

export default MyApp;
