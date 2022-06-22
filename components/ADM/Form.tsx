import React from "react";
import styles from "../../styles/adm.module.css";

const Formulary: React.FC<AdmFormularyProps> = ({setLogged}) => {
  
  return (
    <form className={styles.form}>
      <h1>Insira seu código</h1>
      <input type="text" id="id" placeholder="Código identificador" />
      <button type="submit" className={styles.submiter}>
        Entrar
      </button>
    </form>
  );
};
export default Formulary;
