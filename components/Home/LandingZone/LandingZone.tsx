/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./LandingZone.module.css";
import { OrderButton } from "../../OrderCTA/GoToOrder";

const LandingZone: React.FC = () => {
  return (
    <div className={styles.landingZone}>
      <img src="./Take Away-amico.svg" alt="Mulher recebendo confirmação de sua encomenda" className={styles.iconSec} />
      <div className={styles.txtSec}>
        <h1>
          Agende a entrega de seu pedido
          <br /> E acompanhe de onde estiver{" "}
        </h1>
        <p>
          Aproveite nossas promoções, monte e acompanhe seu pedido, quando e de onde quiser. Solicite sua refeição de
          forma virtual, espere seu pedido e pague de forma presencial. Trabalhamos para que seu único esforço seja
          aproveitar uma maravilhosa refeição!
        </p>
        <OrderButton />
      </div>
    </div>
  );
};

export default LandingZone;
