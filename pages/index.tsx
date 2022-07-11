/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from "next";
import React from "react";
import styles from "../styles/HomePage.module.css";
import LandingZone from "../components/Home/LandingZone/LandingZone";
import OrderTutorial from "../components/Home/OrderTutorial/OrderTutorial";
import About from "../components/Home/About/About";
import ClientOrders from "../components/Home/Orders/ClientOrders";
const HomePage: NextPage = () => {
  return (
    <main className={`${styles.mainContainer}`}>
      <LandingZone />
      <OrderTutorial />
      <ClientOrders />
    </main>
  );
};
export default HomePage;
