import React, { useEffect } from "react";
import styles from "./Card.module.css";

const Card: React.FC = () => {
  const Handler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const sections = document.querySelectorAll<HTMLDivElement>(`div.${styles.section}`);
    sections.forEach((sec) => {
      if (sec.classList.contains(styles.active)){
        // fadeout animation
      }
      if (sec === e.currentTarget) {
        e.currentTarget.classList.toggle(styles.active);
        return;
      }
      sec.classList.toggle(styles.inactive);
    });
  };
  return (
    <div className={styles.orderCard}>
      <h1 className={styles.clientName}>Felipe Aguiar</h1>
      <div className={styles.sections}>
        <div className={`${styles.menu} ${styles.section}`} onClick={Handler}></div>
        <div className={`${styles.address} ${styles.section}`} onClick={Handler}></div>
        <div className={`${styles.more} ${styles.section}`} onClick={Handler}></div>
      </div>
      <div className="flex flex-col">
        <h2 className={styles.price}>
          R$ 18<span className={styles.subPrice}>,90</span>
        </h2>
        <h3 className={styles.method}>Cartão débito/crédito</h3>
      </div>
    </div>
  );
};

export default Card;
