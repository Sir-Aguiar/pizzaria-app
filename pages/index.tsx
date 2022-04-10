/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";
import * as menu from "../menu.json";
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
      <div className={`${styles.mainShowCase}`}>
      </div>
      <div className={`${styles.menu}`}>
        <div className={`${styles.picker}`}>
          <select
            name="foodtype"
            id="foodtype"
            onChange={(e) => {
              if (e.target.value === "Pizzas") setMenuSection("Pizzas");
              if (e.target.value === "Lanches") setMenuSection("Lanches");
            }}
          >
            <option value="Lanches">Lanches</option>
            <option value="Pizzas">Pizzas</option>
          </select>
        </div>
        <div className={`${styles.foods}`}>
          {menu[menuSection].map((info, index) => (
            <div className={`${styles.food} ${styles.active}`} key={index}>
              <h1>{info.Sabor}</h1>
              <p>{info.Description}</p>
              <p className={`${styles.foodPrice}`}>{info.Price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default HomePage;
