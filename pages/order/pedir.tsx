import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Pedir.module.css";
import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { setOrderStepStyle } from "../../scripts/OrderSteps";
import { foodTypes, HandleFoodTypes, PossibleFoods } from "../../scripts/FoodPicker";
import { FoodCard } from "../../components/Pedir/FoodCard/FoodCard";
import { handleProducts, ProductsResponse } from "../../scripts/GetterMenu";
import FirstStep from "../../components/Pedir/Step_0/Step0";

const Pedir: NextPage = () => {
  const [orderStep, setOrderStep] = useState(0);
  const [myCart, setCart] = useState<ProductsResponse[]>([]);
  useEffect(() => {
    setOrderStepStyle(orderStep);
    
  }, [orderStep, foodTypes]);
  return (
    <main className={`${styles.mainOrderContainer}`}>
      <header className={styles.orderHeader}>
        <span className={`${styles.orderProgress}`}>Escolha</span>
        <IoIosArrowForward className={styles.orderPr} />
        <span className={`${styles.orderProgress}`}>Informações</span>
        <IoIosArrowForward className={styles.orderPr} />
        <span className={`${styles.orderProgress}`}>Finalizar</span>
      </header>
      <FirstStep myCart={myCart} setCart={setCart} />
      <div className={styles.nextStep}>
        <button
          onClick={() => {
            setOrderStep(1);
          }}
        >
          Prosseguir <IoIosArrowForward size={21} />
        </button>
      </div>
    </main>
  );
};

export default Pedir;
