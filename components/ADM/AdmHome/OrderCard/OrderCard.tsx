import React from "react";
import styles from "./OrderCard.module.css";

const OrderCard: React.FC<OrderCardProps> = ({ info }) => {
  return (
    <div className={styles.orderCard}>
      <h1 className={styles.client}>{info.client}</h1>
      <h2 className={styles.priceTag}>
        R$ {String(info.price).replace(".", ",").padEnd(4, "0")} - {info.payment}
      </h2>
      <label>{info.location.bairro}</label>
    </div>
  );
};

export default OrderCard;
