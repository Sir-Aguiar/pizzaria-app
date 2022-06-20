import React from "react";
import { motion } from "framer-motion";
import styles from "../Slider.module.css";
const TutorialCard: React.FC<CardProps> = ({ card }) => {
  return (
    <motion.div key={card.title} className={styles.item}>
      <img src={card.image} alt={card.alt} className={styles.cardHeader} />
      <h1 className={styles.cardTitle}>{card.title}</h1>
      <p className={styles.cardBody}>{card.body}</p>
    </motion.div>
  );
};

export default TutorialCard;
