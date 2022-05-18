import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Pedir.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { setOrderStepStyle } from "../../scripts/OrderSteps";
import FirstStep from "../../components/Pedir/Step_0/FirstStep";
import SecondStep from "../../components/Pedir/Step_1/SecondStep";

const Pedir: NextPage<RootOrderProps> = () => {
  const [orderStep, setOrderStep] = useState(0);
  const [myCart, setCart] = useState<MenuItem[]>([]);
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
        <span className={`${styles.orderProgress}`}>Validar</span>
      </header>
      {orderStep === 0 && <FirstStep setStep={setOrderStep} myCart={myCart} setCart={setCart} />}
      {orderStep === 1 && <SecondStep setStep={setOrderStep} myCart={myCart} />}
    </main>
  );
};

export default Pedir;
