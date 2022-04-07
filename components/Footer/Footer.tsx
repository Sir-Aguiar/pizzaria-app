import styles from "./styles/Footer.module.css";
import React from "react";
import { BsFillShareFill, BsGoogle, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.social}`}>
        <span>
          <BsInstagram />
        </span>
        <span>
          <BsGoogle />
        </span>
        <span>
          <BsFillShareFill />
        </span>
      </div>
      <div className={`${styles.infos}`}>
        
      </div>
      <p className={`${styles.by}`}>
        Desenvolvido por Felipe Aguiar
      </p>
    </footer>
  );
};
export default Footer;
