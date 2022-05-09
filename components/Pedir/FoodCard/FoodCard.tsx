/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./FoodCard.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
import { PicSide } from "./picSide";

const FoodCard: React.FC<FoodCardProps> = ({ food, addToCart, cart }) => {
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
      <PicSide
        imageLink={food.images.medium}
        onClick={(e) => {
          addToCart((oldCart) => [
            ...oldCart,
            { _id: food._id, description: food.description, images: food.images, name: food.name, price: food.price },
          ]);
        }}
      />
      {modalOpen && <Modal onClose={setModalOpen} food={food} />}
    </div>
  );
};
export { FoodCard };
