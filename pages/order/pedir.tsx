import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Pedir.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { setOrderStepStyle } from "../../scripts/OrderSteps";
import { HandleProducts } from "../../scripts/HandleProducts";
import { foodTypes, HandleFoodTypes } from "../../scripts/FoodPicker";
const Pedir: NextPage = () => {
  const [orderStep, setOrderStep] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");
  const [foodType, setFoodType] = useState("");
  useEffect(() => {
    setOrderStepStyle(orderStep);
    HandleFoodTypes(foodType, setFoodType);
  }, [orderStep, foodType]);
  return (
    <main className={`${styles.mainOrderContainer}`}>
      <header className={styles.orderHeader}>
        <span className={`${styles.orderProgress}`}>Escolha</span>
        <IoIosArrowForward className={styles.orderPr} />
        <span className={`${styles.orderProgress}`}>Informações</span>
        <IoIosArrowForward className={styles.orderPr} />
        <span className={`${styles.orderProgress}`}>Finalizar</span>
      </header>
      <div className={`${styles.foodContainer}`}>
        <div className={`${styles.foodPicker}`}>
          {foodTypes.map((type, index) => (
            <span
              key={index}
              className={`${styles.foodType}`}
              onClick={() => {
                setFoodType(type);
              }}
              id={type}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pedir;
