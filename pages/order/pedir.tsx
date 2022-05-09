import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Pedir.module.css";
import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { setOrderStepStyle } from "../../scripts/OrderSteps";
import { HandleFoodTypes } from "../../scripts/FoodPicker";
import { handleProducts } from "../../scripts/GetterMenu";
import FirstStep from "../../components/Pedir/Step_0/Step0";
import SecondStep from "../../components/Pedir/Step_1/Step1";

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
        <span className={`${styles.orderProgress}`}>Finalizar</span>
      </header>
      {orderStep === 0 && <FirstStep setStep={setOrderStep} myCart={myCart} setCart={setCart} />}
      {orderStep === 1 && <SecondStep setStep={setOrderStep} myCart={myCart} />}
    </main>
  );
};

export default Pedir;
