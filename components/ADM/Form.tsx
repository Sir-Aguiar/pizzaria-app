import axios from "axios";
import React, { useContext } from "react";
import { LoginContext } from "../../contexts/Loggin/LogginContext";
import styles from "../../styles/adm.module.css";

const Formulary: React.FC<AdmFormularyProps> = () => {
  const { logIn } = useContext(LoginContext);
  const HandleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = document.getElementById("name") as HTMLInputElement;
    const id = document.getElementById("id") as HTMLInputElement;
    axios
      .get(`https://pizzariabackend.herokuapp.com/funcionario/${id.value}/${name.value.replaceAll(" ", "%20")}`, {
        headers: {
          store: "TestePizzariaMenu",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) logIn();
      })
      .catch((e) => {
        alert("Acesso não autorizado");
      });
  };

  return (
    <form className={styles.form} onSubmit={HandleForm}>
      <h1>Insira seu código</h1>
      <input type="text" id="name" placeholder="Nome do funcionário" required />
      <input type="text" id="id" placeholder="Código identificador" required />
      <button type="submit" className={styles.submiter}>
        Entrar
      </button>
    </form>
  );
};
export default Formulary;
