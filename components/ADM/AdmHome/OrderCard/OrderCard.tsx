import React from "react";
import styles from "./OrderCard.module.css";
import { Status } from "./Status";
import { MdArrowDropDown } from "react-icons/md";
const OrderCard: React.FC<OrderCardProps> = ({ info }) => {
  const ToggleCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const activator = document.getElementsByClassName(`${e.currentTarget.className}`);
    const targetIndex = Array.from(activator).indexOf(e.currentTarget);
    const bodies = document.querySelectorAll(`.${styles.orderCard}`);
    bodies[targetIndex].classList.toggle(styles.active);
  };
  return (
    <div className={styles.orderCard}>
      <header className={styles.cardHeader}>
        <span className={styles.date}>29/06 - 12:12</span>
        <div className={styles.cardStatus}>
          <Status status={info.status} className={styles.status} />
          <div onClick={(e) => ToggleCard(e)} className={styles.narrow}>
            <MdArrowDropDown size={20}/>
          </div>
        </div>
        <span className={styles.name}>{info.client}</span>
      </header>
      <main className={styles.cardBody}>
        <div className={styles.itens}>
          {info.items.map((item, index) => (
            <p className={styles.item} key={index}>
              {item.name} - R$ {item.price}
            </p>
          ))}
        </div>
        <h1 className={styles.cep}>{info.location.cep}</h1>
        <h2 className={styles.bairro}>{info.location.bairro}</h2>
        <h2 className={styles.rua}>{info.location.address}</h2>
        <h3 className={styles.casa}>N. {info.location.casa}</h3>
        <p className={styles.reference}>{info.location.reference}</p>
        <p className={styles.phone}> (65) {info.phone}</p>
      </main>
      <footer className={styles.cardFooter}>
        <span>{info.payment}</span>
        <span className={styles.price}>R$ {String(info.price.toFixed(2)).replace(`.`, `,`)}</span>
      </footer>
    </div>
  );
};

export default OrderCard;
