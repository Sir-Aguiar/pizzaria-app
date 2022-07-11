import axios from "axios";
import React, { useState } from "react";
import styles from "./ClientOrders.module.css";

const ClientOrders: React.FC = () => {
  const [clientOrder, setClientOrder] = useState<Order>();
  const HandleOrderCode = (code: string) => {
    if (code.length === 7) {
      axios
        .get(`https://pizzariabackend.herokuapp.com/find-order/${code}`)
        .then((res) => {
          setClientOrder(res.data.order);
        })
        .catch(() => {
          console.log("Confirme o código que você inseriu, não conseguimos encontrar");
        });
    }
  };
  return (
    <div className={styles.clientOrders}>
      <h1 className={styles.mainTitle}>Acompanhe seu pedido</h1>
      <input
        type="number"
        id="orderCode"
        className={styles.codeInput}
        placeholder="Insira aqui o código do pedido"
        onChange={(e) => {
          HandleOrderCode(e.target.value);
        }}
      />
    </div>
  );
};

export default ClientOrders;
