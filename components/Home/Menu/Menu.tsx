import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
type FoodType = "Lanches" | "Pizzas";

type MenuTypes = {
};
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
        
      </div>
    </div>
  );
};

export default Menu;
