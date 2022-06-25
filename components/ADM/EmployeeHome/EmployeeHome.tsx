import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../contexts/Loggin/LogginContext";
import OrderCard from "../AdmHome/OrderCard/OrderCard";
import styles from "./EmployeeHome.module.css";

const EmployeeHome: React.FC = () => {
  const { employee } = useContext(LoginContext);
  const [currentMenu, setMenu] = useState<number>(1);
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    axios
      .get("https://pizzariabackend.herokuapp.com/get-orders", {
        headers: {
          id: employee.id,
          name: employee.name,
          store: employee.store,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          setOrders(res.data.orders);
        }
      });
  }, [currentMenu]);
  return (
    <div className={styles.employeeHome}>
      <header className={styles.menuType}>
        Exibir pedidos
        <select
          onChange={(e) => {
            setMenu(Number(e.target.value));
          }}
        >
          <option value="1">Pendentes</option>
          <option value="0">Aprovados</option>
          <option value="2">Em entrega</option>
        </select>
      </header>
      <section className={styles.ordersSection}>
        {orders
          .filter((order) => order.status === currentMenu)
          .map((order, index) => (
            <OrderCard key={index} info={order} />
          ))}
      </section>
    </div>
  );
};

export default EmployeeHome;
