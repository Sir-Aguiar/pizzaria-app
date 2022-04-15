import styles from "../styles/Pedir.module.css";
const foodTypes = ["Lanches", "Pizzas", "Bebidas"];
const HandleFoodTypes = (foodType: string, setFoodType: React.Dispatch<React.SetStateAction<string>>) => {
  const foodTypeSpans = document.querySelectorAll(`span.${styles.foodType}`);
  foodTypeSpans.forEach((span) => {
    if (!foodTypes.includes(foodType)) {
      setFoodType("Lanches");
    }
    if (foodType === span.id) {
      span.classList.toggle(styles.active);
      return;
    }
    span.classList.remove(styles.active);
    return;
  });
};
export { HandleFoodTypes, foodTypes };
