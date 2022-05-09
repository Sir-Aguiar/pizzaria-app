import styles from "../components/Pedir/Step_0/Step0.module.css";
const foodTypes: Menu[] = ["Lanches", "Pizzas", "Bebidas", "Ofertas"];
let inicializer = 0;
const HandleFoodTypes = (foodType: Menu, setFoodType: React.Dispatch<React.SetStateAction<Menu>>) => {
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
export { HandleFoodTypes };
