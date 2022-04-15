import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Pedir.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { setOrderStepStyle } from "../../scripts/OrderSteps";

const Pedir: NextPage = () => {
  const [orderStep, setOrderStep] = useState(1);
  const [orderStatus, setOrderStatus] = useState("");
  useEffect(() => {
    setOrderStepStyle(orderStep);
  }, [orderStep]);
  return (
    <main className={`${styles.mainOrderContainer}`}>
      <header className={styles.orderHeader}>
        <span className={`${styles.orderProgress}`}>Escolha</span>
        <IoIosArrowForward className={styles.orderPr} />
        <span className={`${styles.orderProgress}`}>Informações</span>
        <IoIosArrowForward className={styles.orderPr} />
        <span className={`${styles.orderProgress}`}>Finalizar</span>
      </header>
    </main>
  );
};

export default Pedir;
