import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import * as fa from "react-icons/fa";
import { handleProducts } from "../../../scripts/GetterMenu";

type MenuTypes = {};
const Menu: React.FC<MenuTypes> = () => {
  const [menuSection, setMenuSection] = useState<Menu>("Lanches");
  const [myMenu, setMenu] = useState<MenuItem[]>([]);
  useEffect(() => {
    handleProducts(menuSection).then((res) => {
      setMenu(res);
    });
  }, [menuSection]);
  return (
    <div className={`${styles.menuShowcase}`}>
      <div className={styles.menuSectionPicker}>
        <h1>
          Cardápio de
          <select
            onChange={(e) => {
              if (e.target.value === "Pizzas") setMenuSection("Pizzas");
              if (e.target.value === "Lanches") setMenuSection("Lanches");
            }}
          >
            <option value="Lanches">Lanches</option>
            <option value="Pizzas">Pizzas</option>
          </select>
        </h1>
      </div>
      <div className={styles.menuSection}>
        {myMenu.map((food, index) => (
          <div
            key={index}
            className={`${styles.food}`}
            onClick={(e) => {
              e.currentTarget.classList.toggle(styles.active);
              console.log(e.currentTarget.classList);
            }}
          >
            <div className={`${styles.apresentation}`}>
              <h2>{food.name}</h2>
              <fa.FaArrowDown />
            </div>
            <div className={styles.foodCard}>
              <p>{food.description}</p>
              <span>R$ {food.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
