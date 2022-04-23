/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";
import { promotions } from "../promotions.json";
import Menu from "../components/Home/Menu/Menu";
import LandingZone from "../components/Home/LandingZone/LandingZone";
import Promotions from "../components/Home/Promotions/Promotions";
import OrderTutorial from "../components/Home/OrderTutorial/OrderTutorial";
const HomePage: NextPage = () => {
  return (
    <main className={`${styles.mainContainer}`}>
      
      <LandingZone />
      <OrderTutorial/>
      <Menu />
      
    </main>
  );
};
export default HomePage;
