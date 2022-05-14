import React from "react";
import styles from "./CartChild.module.css";
const CartChild: React.FC<CartChildProps> = ({ food }) => {
  return (
    <div className={styles.cartChild}>
      <p className={styles.name}>{food.name}</p>
      <p className={styles.price}>{food.price}</p>
    </div>
  );
};

export default CartChild;
