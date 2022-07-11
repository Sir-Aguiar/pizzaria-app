import React from "react";
import styles from "./ClientOrders.module.css";

const ClientOrders: React.FC = () => {
  return (
    <div className={styles.clientOrders}>
      <h1 className={styles.mainTitle}>Acompanhe seu pedido</h1>
      <input type="number" id="orderCode" className={styles.codeInput} placeholder="Insira aqui o código do pedido" />
    </div>
  );
};

export default ClientOrders;
