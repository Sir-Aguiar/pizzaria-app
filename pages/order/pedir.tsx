import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Pedir.module.css";
import { IoIosArrowForward, IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { setOrderStepStyle } from "../../scripts/OrderSteps";
import { foodTypes, HandleFoodTypes, PossibleFoods } from "../../scripts/FoodPicker";
import { FoodCard } from "../../components/Pedir/FoodCard/FoodCard";
import { handleProducts, ProductsResponse } from "../../scripts/GetterMenu";

const Pedir: NextPage = () => {
  const [orderStep, setOrderStep] = useState(0);
  const [foodType, setFoodType] = useState<PossibleFoods>("Lanches");
  const [foodMenu, setFoodMenu] = useState<ProductsResponse[]>([]);
  const [myCart, setCart] = useState<ProductsResponse[]>([]);
  useEffect(() => {
    setOrderStepStyle(orderStep);
    HandleFoodTypes(foodType, setFoodType);
    handleProducts(foodType).then((res) => {
      setFoodMenu(res);
    });
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
          {foodMenu.map((food, index) => (
            <FoodCard key={index} food={food} addToCart={setCart} cart={myCart} />
          ))}
        </div>
        <div className={styles.nextStep}>
          <button
            onClick={() => {
              setOrderStep(1);
            }}
          >
            Prosseguir <IoIosArrowForward size={21} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Pedir;
