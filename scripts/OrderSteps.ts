import styles from "../styles/Pedir.module.css";
export const setOrderStepStyle = (orderStep: number) => {
  const orderProgress = document.querySelectorAll(`span.${styles.orderProgress}`); // length:3
  for (let index = 0; index < orderProgress.length; index++) {
    if (index === orderStep) {
      orderProgress[index].classList.remove(styles.done);
      orderProgress[index].classList.remove(styles.togo);
      orderProgress[index].classList.add(styles.going);
    }
    if (index < orderStep) {
      orderProgress[index].classList.remove(styles.togo);
      orderProgress[index].classList.remove(styles.going);
      orderProgress[index].classList.add(styles.done);
    }
    if (index > orderStep) {
      orderProgress[index].classList.remove(styles.going);
      orderProgress[index].classList.remove(styles.done);
      orderProgress[index].classList.add(styles.togo);
    }
  }
};
