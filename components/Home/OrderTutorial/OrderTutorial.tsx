import React from "react";
import Slider from "./Slider/Slider";
import styles from "./OrderTutorial.module.css";
import * as Cards from "../../../tutorial.json";
const OrderTutorial: React.FC<OrderTutorialProps> = () => {
  return (
    <div className={styles.tutorialComponent}>
      <h1 className={styles.mainTitle}>Precisando de ajuda?</h1>
      <Slider Card={Cards.Cards} />
    </div>
  );
};

export default OrderTutorial;
