import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import styles from "./CartChild.module.css";
const CartChild: React.FC<CartChildProps> = ({ food, remove }) => {
  return (
    <div className={styles.cartChild}>
      <p className={styles.name}>{food.name}</p>
      <p className={styles.price}>{food.price}</p>
      <IoIosRemoveCircleOutline className={styles.remove} onClick={() => remove(food)} />
    </div>
  );
};

export default CartChild;
