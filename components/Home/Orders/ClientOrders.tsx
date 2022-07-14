import axios from "axios";
import React, { useState } from "react";
import styles from "./ClientOrders.module.css";
import { IoMdSearch } from "react-icons/io";
import Card from "./Card/Card";
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
      <div className={styles.inputContainer}>
        <label htmlFor="orderCode">
          <IoMdSearch className={styles.search} />
        </label>
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
      {clientOrder && <Card info={clientOrder} />}
    </div>
  );
};

export default ClientOrders;
