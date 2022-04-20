/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./FoodCard.module.css";
import { PossibleFoods } from "../../../scripts/FoodPicker";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
import { ProductsResponse } from "../../../scripts/GetterMenu";

type FoodCardProps = {
  food: ProductsResponse;
};
const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className={`${styles.foodCard}`}>
      <div className={styles.infoSide}>
        <p>{food.name}</p>
        <AiOutlineInfoCircle className={styles.infoButton} onClick={()=>{setModalOpen(true)}}/>
        <p className={styles.price}>R$ {food.price}</p>
      </div>
      <div className={styles.picSide} style={{backgroundImage:`url(${food.images.small})`, backgroundPosition:"right",backgroundSize:"80% 95%",backgroundRepeat:"no-repeat"}}>
        
      </div>
      {
        modalOpen && <Modal onClose={setModalOpen} food={food}/>
      }
    </div>
  );
};
export { FoodCard };
