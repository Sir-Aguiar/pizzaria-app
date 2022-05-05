import React from "react";
import styles from "./LandingZone.module.css";
import { OrderButton } from "../../OrderCTA/GoToOrder";

const LandingZone: React.FC = () => {
  return (
    <div className={styles.landingZone}>
      <div className={styles.iconSec}>
        <img src="./Delivery-amico.svg" alt="Mulher recebendo confirmação de sua encomenda" />
      </div>
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
      </div>
      <OrderButton />
    </div>
  );
};

export default LandingZone;
