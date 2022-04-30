import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { foodTypes, HandleFoodTypes, PossibleFoods } from "../../../scripts/FoodPicker";
import { handleProducts, ProductsResponse } from "../../../scripts/GetterMenu";
import NextStep from "../../NextStep";

import { FoodCard } from "../FoodCard/FoodCard";
import styles from "./Step0.module.css";
type FirstStepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCart: React.Dispatch<React.SetStateAction<ProductsResponse[]>>;
  myCart: ProductsResponse[];
};
const FirstStep: React.FC<FirstStepProps> = ({ myCart, setCart, setStep }) => {
  const [foodMenu, setFoodMenu] = useState<ProductsResponse[]>([]);
  const [foodType, setFoodType] = useState<PossibleFoods>("Lanches");

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
