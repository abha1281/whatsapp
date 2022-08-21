import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainTemplate from "../components/layout/templates/MainTemplate";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainTemplate>
      <Component {...pageProps} />
    </MainTemplate>
  );
}

export default MyApp;
