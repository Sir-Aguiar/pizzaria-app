import styles from "../styles/Pedir.module.css";
type PossibleFoods = "Lanches" | "Pizzas" | "Bebidas";
const foodTypes:PossibleFoods[] = ["Lanches", "Pizzas", "Bebidas"];
let inicializer = 0;
const HandleFoodTypes = (foodType: PossibleFoods, setFoodType: React.Dispatch<React.SetStateAction<PossibleFoods>>) => {
  const foodTypeSpans = document.querySelectorAll(`span.${styles.foodType}`);
  foodTypeSpans.forEach((span) => {
    if (inicializer === 0) {
      setFoodType("Lanches");
      inicializer = 1;
    }
    if (foodType === span.id) {
      span.classList.toggle(styles.active);
      return;
    }
    span.classList.remove(styles.active);
    return;
  });
};
export type {PossibleFoods}
export { HandleFoodTypes, foodTypes };
