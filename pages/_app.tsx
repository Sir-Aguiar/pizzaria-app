import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

