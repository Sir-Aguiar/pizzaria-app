import React from "react";
import Slider from "../../Slider/Slider";
import styles from "./OrderTutorial.module.css";
import { Cards } from "../../../tutorial.json";
const OrderTutorial: React.FC<OrderTutorialProps> = () => {
  return (
    <div className={styles.tutorialComponent}>
      <Slider Card={Cards} />
    </div>
  );
};

export default OrderTutorial;
