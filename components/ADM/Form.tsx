import axios from "axios";
import React from "react";
import styles from "../../styles/adm.module.css";

const Formulary: React.FC<AdmFormularyProps> = ({ setLogged }) => {
  const HandleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = document.getElementById("name") as HTMLInputElement;
    const id = document.getElementById("id") as HTMLInputElement;
    axios
      .get(`http://localhost:3333/funcionario/${id.value}/${name.value}`, {
        headers: {
          store: "TestePizzariaMenu",
        },
      })
      .catch((e) => {
        alert("Acesso não autorizado");
      })
      .then((res) => {
        setLogged(true);
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
