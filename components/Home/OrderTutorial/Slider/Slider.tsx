/* eslint-disable @next/next/no-img-element */
import styles from "./Slider.module.css";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import TutorialCard from "./Card/Card";

const Slider: React.FC<CarouselProps> = ({ Card }) => {
  const [carouselScroll, setCarouselScroll] = useState<number>();
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setCarouselScroll(((carousel.current?.scrollWidth || 0) - (carousel.current?.offsetWidth || 0) + 20) * -1);
  }, []);

  return (
    <motion.div className={styles.carousel} ref={carousel} whileTap={{ cursor: "grabbing" }}>
      <motion.div className={styles.innerCarousel} drag="x" dragConstraints={{ right: 0, left: carouselScroll }}>
        {Card.map((card, index) => (
          <TutorialCard card={card} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
