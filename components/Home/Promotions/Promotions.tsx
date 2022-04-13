/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./Promotions.module.css";
import promotions from "../../../promotions.json";
const Promotions: React.FC = () => {
  return (
    <div className={styles.parentPromotion}>
      <div className={styles.promotionShowcase}>
        {promotions.promotions.map((promo, index) => (
          <picture key={index}>
            <source media="(max-width:900px)" srcSet={promo.banners.lg} />
            <source media="(min-width:901px)" srcSet={promo.banners.md} />
            <img srcSet={promo.banners.md} alt="" />
          </picture>
        ))}
      </div>
      <div className={styles.controllers}>
        {promotions.promotions.map((promo, index) => (
          <label className={styles.controller} key={index}>
            
          </label>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
