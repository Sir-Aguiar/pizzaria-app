import React, { useEffect } from "react";
import { IoIosMore, IoMdHome } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import styles from "./Card.module.css";

const Card: React.FC = () => {
  const Handler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const sections = document.querySelectorAll<HTMLDivElement>(`div.${styles.section}`);
    sections.forEach((sec) => {
      const myCase = document.querySelector<HTMLDivElement>(
        `.${sec.className.replaceAll(" ", ".")} > .${styles.case}`
      )!;

      sec.classList.toggle(styles.padron);

      if (sec == e.currentTarget) {
        sec.classList.toggle(styles.active);
        myCase.classList.toggle(styles.caseActive);
        return;
      }
      myCase.classList.remove(styles.caseActive);
      sec.classList.toggle(styles.inactive);
    });
  };
  return (
    <div className={styles.orderCard}>
      <h1 className={styles.clientName}>Felipe Aguiar</h1>
      <div className={styles.sections}>
        <div className={`${styles.menu} ${styles.section} ${styles.padron}`} onClick={Handler}>
          <div className={styles.case}>
            <MdOutlineMenuBook />
          </div>
        </div>
        <div className={`${styles.address} ${styles.section} ${styles.padron}`} onClick={Handler}>
          <div className={styles.case}>
            <IoMdHome />
          </div>
          <div className={styles.content}></div>
        </div>
        <div className={`${styles.more} ${styles.section} ${styles.padron}`} onClick={Handler}>
          <div className={styles.case}>
            <IoIosMore />
          </div>
        </div>
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
