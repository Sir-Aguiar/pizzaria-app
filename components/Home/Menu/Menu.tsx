import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import * as fa from "react-icons/fa";
import * as menu from "../../../menu.json";

type FoodType = "Lanches" | "Pizzas";

type MenuTypes = {};
const Menu: React.FC<MenuTypes> = () => {
  const [menuSection, setMenuSection] = useState<"Lanches" | "Pizzas">("Lanches");
  useEffect(() => {
    console.log(menuSection);
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
        {menu[menuSection].map((food, index) => (
          <div
            key={index}
            className={`${styles.food}`}
            onClick={(e) => {
              e.currentTarget.classList.toggle(styles.active);
              console.log(e.currentTarget.classList);
            }}
          >
            <div className={`${styles.apresentation}`}>
              <h2>{food.Sabor}</h2>
              <fa.FaArrowDown />
            </div>
            <div className={styles.foodCard}>
              <h1>{}</h1>
              <p>{food.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
