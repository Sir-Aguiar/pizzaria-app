import React, { useEffect, useState } from "react";
import OrderCard from "../AdmHome/OrderCard/OrderCard";
import styles from "./EmployeeHome.module.css";

const EmployeeHome: React.FC = () => {
  const [currentMenu, setMenu] = useState<string>("Pendentes");
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {}, [currentMenu]);
  return (
    <div className={styles.employeeHome}>
      <header className={styles.menuType}>
        Exibir pedidos
        <select
          onChange={(e) => {
            setMenu(e.target.value);
          }}
        >
          <option>Pendentes</option>
          <option>Aprovados</option>
          <option>Em entrega</option>
        </select>
      </header>
      <section className={styles.ordersSection}>
        {orders.map((order, index) => (
          <OrderCard key={index} info={order} />
        ))}
      </section>
    </div>
  );
};

export default EmployeeHome;
