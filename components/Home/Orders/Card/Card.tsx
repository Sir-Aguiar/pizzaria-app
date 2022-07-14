import React, { useEffect } from "react";
import { IoIosMore, IoMdHome } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import styles from "./Card.module.css";

const Card: React.FC<ClientOrderCardProps> = ({ info }) => {
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
      <h1 className={styles.clientName}>{info.client}</h1>
      <div className={styles.sections}>
        <div className={`${styles.menu} ${styles.section} ${styles.padron}`} onClick={Handler}>
          <div className={styles.case}>
            <MdOutlineMenuBook />
          </div>
          <div className={`${styles.content} ${styles.orderItemsContent}`}>
            {info.items.map((item, index) => (
              <p key={index} className={styles.orderItem}>
                {item.name}-{item.price}
              </p>
            ))}
          </div>
        </div>
        <div className={`${styles.address} ${styles.section} ${styles.padron}`} onClick={Handler}>
          <div className={styles.case}>
            <IoMdHome />
          </div>
          <div className={`${styles.content} ${styles.addressContent}`}>
            <h1 className={styles.bairro}>{info.location.bairro}</h1>
            <h2 className={styles.homeAddress}>{info.location.address}</h2>
            <span className={styles.number}>Nº{info.location.casa}</span>
          </div>
        </div>
        <div className={`${styles.more} ${styles.section} ${styles.padron}`} onClick={Handler}>
          <div className={styles.case}>
            <IoIosMore />
          </div>
          <div className={`${styles.moreContent} ${styles.content}`}>
            <p className={styles.createdAt}>
              Pedido realizado às {new Date(info.createdAt.seconds * 1000).getHours()}:
              {new Date(info.createdAt.seconds * 1000).getMinutes()}
            </p>
            <h1 className={styles.status}>
              Estado do pedido:{"   "}
              <span className={styles.state}>
                {info.status == 1 ? "Pendente" : info.status == 0 ? "Aprovado" : "Saiu para entrega"}
              </span>
            </h1>
            <p className={styles.phone}>(65) {info.phone}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className={styles.price}>
          R$ {String(info.price).split(".")[0]}
          <span className={styles.subPrice}>,{String(info.price).split(".")[1].padEnd(2, "0")}</span>
        </h2>
        <h3 className={styles.method}>{info.payment}</h3>
      </div>
    </div>
  );
};

export default Card;
