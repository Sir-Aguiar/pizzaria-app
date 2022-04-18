/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./FoodCard.module.css";
import { PossibleFoods } from "../../../scripts/FoodPicker";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
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
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className={`${styles.foodCard}`}>
      <div className={styles.infoSide}>
        <p>{food.Sabor}</p>
        <AiOutlineInfoCircle className={styles.infoButton} onClick={()=>{setModalOpen(true)}}/>
        <p className={styles.price}>R$ {food.Price}</p>
      </div>
      <div className={styles.picSide}>
        <picture>
          <img src={food.Image.regular} alt=""/>
        </picture>
      </div>
      {
        modalOpen && <Modal onClose={setModalOpen} food={food}/>
      }
    </div>
  );
};
export type { MenuItem };
export { FoodCard };
