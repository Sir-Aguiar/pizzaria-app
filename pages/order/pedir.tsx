import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Pedir.module.css";
import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { setOrderStepStyle } from "../../scripts/OrderSteps";
import { HandleProducts } from "../../scripts/HandleProducts";
import { foodTypes, HandleFoodTypes, PossibleFoods } from "../../scripts/FoodPicker";
import * as foodMenu from "../../menu.json";
import { FoodCard } from "../../components/Pedir/FoodCard/FoodCard";
const Pedir: NextPage = () => {
  const [orderStep, setOrderStep] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");
  const [foodType, setFoodType] = useState<PossibleFoods>("Lanches");

  useEffect(() => {
    setOrderStepStyle(orderStep);
    HandleFoodTypes(foodType, setFoodType);
    HandleProducts().then((res) => {
      res.data.results.forEach((item: any) => {
        console.log({
          regular: item.urls.regular,
          small: item.urls.small,
        });
      });
    });
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
        <div className={styles.avaibleMenu}>
          {foodMenu[foodType].map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pedir;
