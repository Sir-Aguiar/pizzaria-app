/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./FoodCard.module.css";
import { PossibleFoods } from "../../../scripts/FoodPicker";
import { AiOutlineInfoCircle } from "react-icons/ai";
interface MenuItem {
  Sabor: string;
  Description: string;
  Price: string;
  Image: {
    regular: string;
    small: string;
  };
}
type FoodCardProps = {
  food: MenuItem;
};
const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div className={`${styles.foodCard}`}>
      <div className={styles.infoSide}>
        <p>{food.Sabor}</p>
        <AiOutlineInfoCircle className={styles.infoButton} />
        <p className={styles.price}>R$ {food.Price}</p>
      </div>
      <div className={styles.picSide}>
        <picture>
          <img src={food.Image.regular} alt=""/>
        </picture>
      </div>
    </div>
  );
};
export type { MenuItem };
export { FoodCard };
