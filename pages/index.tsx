/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/HomePage.module.css";
const HomePage: NextPage = () => {
  return (
    <main className={`${styles.mainContainer}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" crossOrigin="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Noto+Sans&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet" />
      </Head>
      <div className={`${styles.mainShowCase}`}>
        <div className={`${styles.imgShowCase}`}></div>
        <div className={`${styles.txtShowCase}`}>
          <h1>
            Não perca esta oferta!<br/>
            Peça pelo site, por apenas
          </h1>
          <span>
            R$ 24,90
          </span>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
