/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";
import * as menu from "../menu.json";
import * as promotions from "../promotions.json";
const HomePage: NextPage = () => {
  const [menuSection, setMenuSection] = useState<"Lanches" | "Pizzas">("Lanches");
  useEffect(() => {
    console.log(menuSection);
  }, [menuSection]);
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
      <div className={styles.promotionShowcase}>
        <h1 className={styles.promotionTitle}>Confira algumas ofertas</h1>
        <div className={styles.promotions}>
          {promotions.map((promotion, index) => (
            <div className={`${styles.promotion} ${styles.active}`} key={index}>
              <picture>
                <source media="(max-width:900px)" srcSet={promotion.banners.md} />
                <source media="(min-width:901px)" srcSet={promotion.banners.lg} />
                <img src={promotion.banners.md} alt={promotion.alt} />
              </picture>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
};
export default HomePage;
