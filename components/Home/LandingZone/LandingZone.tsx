import React from "react";
import styles from "./LandingZone.module.css";

const LandingZone: React.FC = () => {
  return (
    <div className={styles.landingZone}>
      <div className={styles.iconSec}>
        <img src="./In no time-bro.svg" alt="Mulher recebendo confirmação de sua encomenda" />
      </div>
      <div className={styles.txtSec}>
        <h1>
          Agende a entrega de seu pedido
          <br /> E acompanhe de onde tiver{" "}
        </h1>
        <p>
          Aproveite nossas promoções, e monte seu pedido e acompanhe de forma virtual, quando e de onde quiser.
          Solicite sua refeição de forma virtual, espere seu pedido e pague de forma presencial. Trabalhamos para que seu único esforço seja o de aproveitar uma maravilhosa refeição!
        </p>
      </div>
    </div>
  );
};

export default LandingZone;
