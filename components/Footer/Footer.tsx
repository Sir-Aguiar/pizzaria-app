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
        <p>DiskEntrega e Venda Online</p>
        <p className={`${styles.funcionamento}`}>
          Funcionamos de Terça a Domingo <br/> 18:00 às 23:30
        </p>
        <p>
          Tel. de contato: (65) 9-99292-8600
        </p>
        <p>
        </p>
      </div>
      <p className={`${styles.by}`}>
        Desenvolvido por Felipe Aguiar
      </p>
    </footer>
  );
};
export default Footer;
