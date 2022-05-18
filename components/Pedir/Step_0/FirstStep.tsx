import React, { useEffect, useState } from "react";
import { HandleFoodTypes } from "../../../scripts/FoodPicker";
import { handleProducts } from "../../../scripts/GetterMenu";
import NextStep from "../../NextStep";
import styles from "./Step0.module.css";
import { FoodCard } from "../FoodCard/FoodCard";
import CartChild from "../CartChild";

const foodTypes: Menu[] = ["Bebidas", "Lanches", "Pizzas", "Ofertas"];
const FirstStep: React.FC<OrderFirstStepProps> = ({ myCart, setCart, setStep }) => {
  const [foodMenu, setFoodMenu] = useState<MenuItem[]>([]);
  const [foodType, setFoodType] = useState<Menu>("Lanches");
  const RemoveFromFoodMenu = (food: MenuItem) => {
    setCart((oldCart) => oldCart.filter((item) => item != food));
  };
  useEffect(() => {
    HandleFoodTypes(foodType, setFoodType);
    handleProducts(foodType).then((res) => {
      setFoodMenu(res);
    });
  }, [foodType]);
  return (
    <div className={`${styles.foodContainer}`}>
      <div className={`${styles.foodPicker}`}>
        {foodTypes.map((type, index) => (
          <span
            key={index}
            className={`${styles.foodType}`}
            onClick={() => {
              setFoodType(type);
            }}
            id={type}
          >
            {type}
          </span>
        ))}
      </div>
      <div className={styles.avaibleMenu}>
        {foodMenu.map((food, index) => (
          <FoodCard key={index} food={food} addToCart={setCart} cart={myCart} />
        ))}
      </div>
      <div className={styles.foodCart}>
        <h1 className={styles.cartTitle}>{myCart.length < 1 ? "Seu carrinho está vazio" : "Seu carrinho"}</h1>
        {myCart.map((food, index) => (
          <CartChild key={index} food={food} remove={RemoveFromFoodMenu} />
        ))}
      </div>
      <NextStep
        isDisabled={myCart.length == 0}
        onClick={() => {
          if (myCart.length > 0) setStep(1);
        }}
      />
    </div>
  );
};

export default FirstStep;
