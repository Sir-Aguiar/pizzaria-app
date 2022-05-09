import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HandleFoodTypes } from "../../../scripts/FoodPicker";
import { handleProducts } from "../../../scripts/GetterMenu";
import NextStep from "../../NextStep";
import styles from "./OrderTutorial.module.css";
import { FoodCard } from "../FoodCard/FoodCard";

const foodTypes: Menu[] = ["Bebidas", "Lanches", "Pizzas", "Ofertas"];
const FirstStep: React.FC<OrderFirstStepProps> = ({ myCart, setCart, setStep }) => {
  const [foodMenu, setFoodMenu] = useState<MenuItem[]>([]);
  const [foodType, setFoodType] = useState<Menu>("Lanches");

  useEffect(() => {
    HandleFoodTypes(foodType, setFoodType);
    handleProducts(foodType).then((res) => {
      setFoodMenu(res);
    });
  }, [foodType]);
  return (
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
      <NextStep
        onClick={() => {
          if (myCart.length > 0) setStep(1);
        }}
      />
    </div>
  );
};

export default FirstStep;
