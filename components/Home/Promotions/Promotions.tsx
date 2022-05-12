/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./Promotions.module.css";
const Promotions: React.FC<PromotionsProps> = ({ promotions }) => {
  return (
    <div className={styles.parentPromotion}>
      <div className={styles.promotionShowcase}>
        {promotions.map((promo, index) => (
          <picture key={index}>
            <source media="(max-width:900px)" srcSet={promo.banners.lg} />
            <source media="(min-width:901px)" srcSet={promo.banners.md} />
            <img srcSet={promo.banners.md} alt="" />
          </picture>
        ))}
      </div>
      <div className={styles.controllers}>
        {promotions.map((promo, index) => (
          <label className={styles.controller} key={index}></label>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
