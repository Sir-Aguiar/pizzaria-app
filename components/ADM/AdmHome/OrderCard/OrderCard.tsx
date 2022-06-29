import React from "react";
import styles from "./OrderCard.module.css";
import { Status } from "./Status";

const OrderCard: React.FC<OrderCardProps> = ({ info }) => {
  const statusColor = info.status == 1 ? "#E02D2D" : info.status == 0 ? "#33D169" : "#EC9D26";
  return (
    <div className={styles.orderCard}>
      <header className={styles.cardHeader}>
        <span className={styles.date}>29/06 - 12:12</span>
        <Status status={statusColor} className={styles.status} />
        <span className={styles.name}>{info.client}</span>
      </header>
      <footer className={styles.cardFooter}>
        <span>{info.payment}</span>
        <span className={styles.price}>R$ {String(info.price.toFixed(2)).replace(`.`, `,`)}</span>
      </footer>
    </div>
  );
};

export default OrderCard;
