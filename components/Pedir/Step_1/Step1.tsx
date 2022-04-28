import React from "react";
import styles from "./Step1.module.css";

const SecondStep: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.welcomeText}>Estamos quase lá!</h1>
      <form className={styles.formulary}>
        <div className={styles.input_group1}>
          <input type="text" name="name" id="name" placeholder="Nome" />
          <input type="number" name="cep" id="cep" placeholder="CEP" />
        </div>
        <div className={styles.input_group2}>
          <div className={styles.subgroup_1}>
            <input type="text" name="bairro" id="bairro" placeholder="Bairro" />
          </div>
          <div className={styles.subgroup_2}>
            <input type="text" name="rua" id="rua" placeholder="Rua" />
            <input type="number" name="casa" id="casa" placeholder="Casa" />
          </div>
          <div className={styles.subgroup_3}>
            <textarea
              name="reference"
              id="reference"
              placeholder="Ponto de referência ou informações adicionais sobre o local"
            ></textarea>
            <input type="tel" name="tel" id="tel" placeholder="Telefone" />
          </div>
          <div className={styles.subgroup_4}>
            <label htmlFor="change">Troco para R$</label>
            <input type="number" name="change" id="change" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;
