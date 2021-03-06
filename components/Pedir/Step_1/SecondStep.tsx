import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HandleCEP } from "../../../scripts/HandleOrderFormulary";
import StepButton from "../../StepButton";
import styles from "./Step1.module.css";
const SecondStep: React.FC<OrderSecondStepProps> = ({ myCart, setStep }) => {
  const [cartCost, setCartCost] = useState<number>(0);
  const [transportCost, setTransportCost] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("Cartão");
  const HandleFormulary = async (products: MenuItem[]) => {
    const UserData = {
      client: document.getElementById("name") as HTMLInputElement,
      phone: document.getElementById("tel") as HTMLInputElement,
      change: document.getElementById("change") as HTMLInputElement,
      location: {
        reference: document.getElementById("reference") as HTMLInputElement,
        bairro: document.getElementById("bairro") as HTMLInputElement,
        address: document.getElementById("address") as HTMLInputElement,
        casa: document.getElementById("casa") as HTMLInputElement,
        cep: document.getElementById("cep") as HTMLInputElement,
      },
      items: products,
    };
    try {
      console.log(UserData);
      const response = await axios.post("https://pizzariabackend.herokuapp.com/new-order", {
        client: UserData.client.value,
        items: UserData.items,
        location: {
          bairro: UserData.location.bairro.value,
          casa: UserData.location.casa.value,
          reference: UserData.location.reference.value,
          address: UserData.location.address.value,
          cep: UserData.location.cep.value,
        },
        phone: UserData.phone.value,
        payment: `${paymentMethod === "Cartão" ? paymentMethod : `Troco para R$ ${UserData.change.value}`}`,
      });
      setStep(2);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  };

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
        id="userForm"
        onSubmit={(e) => {
          e.preventDefault();
          HandleFormulary(myCart);
        }}
      >
        <div className={styles.input_group1}>
          <input type="text" name="name" id="name" placeholder="Nome" required />
          <input
            type="number"
            name="cep"
            id="cep"
            placeholder="CEP"
            maxLength={9}
            onBlur={(e) => HandleCEP(e.target.value)}
          />
        </div>
        <div className={styles.input_group2}>
          <div className={styles.subgroup_1}>
            <input type="text" name="bairro" id="bairro" placeholder="Bairro" required />
          </div>
          <div className={styles.subgroup_2}>
            <input type="text" name="address" id="address" placeholder="Endereço: Quadra 30 ou Rua XX" required />
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
            <input type="tel" name="tel" id="tel" placeholder="Ex: 9XXXXXXXX" required maxLength={9} />
          </div>
          <div className={styles.subgroup_4}>
            <h1>Método de pagamento</h1>
            <select onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="Cartão">Cartão de débito/crédito</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
            {paymentMethod == "Dinheiro" && (
              <div className={styles.change}>
                <label htmlFor="change">Troco para R$</label>
                <input type="number" name="change" id="change" required />
              </div>
            )}
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
      <div className={styles.ctaContainer}>
        <StepButton
          onClick={() => {
            setStep(0);
          }}
          secondary
        >
          Retornar
        </StepButton>
        <StepButton type="submit" form={{ form: "userForm" }} onClick={() => {}}>
          Continuar
        </StepButton>
      </div>
    </div>
  );
};

export default SecondStep;
