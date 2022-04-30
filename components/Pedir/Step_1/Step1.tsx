import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { ProductsResponse } from "../../../scripts/GetterMenu";
import { HandleCEP, HandleFormulary, HandleFormularySubmit } from "../../../scripts/HandleOrderFormulary";
import styles from "./Step1.module.css";
import { NextStep, NextStepCTA } from "../../NextStep";
type SecondStepProps = {
  myCart: ProductsResponse[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
const SecondStep: React.FC<SecondStepProps> = ({ myCart, setStep }) => {
  const [cartCost, setCartCost] = useState<number>(0);
  const [transportCost, setTransportCost] = useState<number>(0);
  useEffect(() => {
    let cartCostVariable = 0;
    myCart.forEach((product) => {
      cartCostVariable += Number(product.price.replace(",", "."));
    });
    setCartCost(Number(cartCostVariable.toFixed(2)));
  }, [myCart]);
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.welcomeText}>Estamos quase lá!</h1>
      <form
        className={styles.formulary}
        onSubmit={(e) => {
          HandleFormularySubmit(e);
        }}
      >
        <div className={styles.input_group1}>
          <input type="text" name="name" id="name" placeholder="Nome" />
          <input type="number" name="cep" id="cep" placeholder="CEP" onBlur={(e) => HandleCEP(e.target.value)} />
        </div>
        <div className={styles.input_group2}>
          <div className={styles.subgroup_1}>
            <input type="text" name="bairro" id="bairro" placeholder="Bairro" required />
          </div>
          <div className={styles.subgroup_2}>
            <input type="text" name="rua" id="rua" placeholder="Rua" required />
            <input type="number" name="casa" id="casa" placeholder="Casa" required />
          </div>
          <div className={styles.subgroup_3}>
            <textarea
              name="reference"
              id="reference"
              placeholder="Ponto de referência ou informações adicionais sobre o local"
              required
            ></textarea>
            <label htmlFor="tel">Telefone</label>
            <input type="tel" name="tel" id="tel" placeholder="Ex: 9XXXXXXXX" required />
          </div>
          <div className={styles.subgroup_4}>
            <label htmlFor="change">Troco para R$</label>
            <input type="number" name="change" id="change" required />
          </div>
        </div>
      </form>
      <h1 className={styles.userCartTitle}>Seu carrinho</h1>
      <div className={styles.userCart}>
        {myCart.map((product, index) => (
          <div className={styles.product} key={index}>
            <p> {product.name}</p>
            <BsArrowRight />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div className={styles.fullPrice}>
        <h1>Preço dos produtos: R${cartCost}</h1>
        <h1>Frete: R${transportCost}</h1>
        <h1>Total a pagar: R${cartCost + transportCost}</h1>
      </div>
      <NextStep>
        <NextStepCTA
          onClick={() => {
            HandleFormulary();
          }}
        >
          Prosseguir
        </NextStepCTA>
      </NextStep>
    </div>
  );
};

export default SecondStep;
