/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./FoodCard.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
import { ProductsResponse } from "../../../scripts/GetterMenu";
import { PicSide } from "./picSide";

type FoodCardProps = {
  food: ProductsResponse;
};
const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={`${styles.foodCard}`}>
      <div className={styles.infoSide}>
        <p>{food.name}</p>
        <AiOutlineInfoCircle
          className={styles.infoButton}
          onClick={() => {
            setModalOpen(true);
          }}
        />
        <p className={styles.price}>R$ {food.price}</p>
      </div>
      <PicSide imageLink={food.images.medium}/>
      {modalOpen && <Modal onClose={setModalOpen} food={food} />}
    </div>
  );
};
export { FoodCard };
