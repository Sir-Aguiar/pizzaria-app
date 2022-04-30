import axios from "axios";
import { FormEventHandler } from "react";
import styles from "../components/Pedir/Step_1/Step1.module.css";
const CEPAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

const HandleFormulary = () => {
  let IsFormValid = true;
  const UserInputs: HTMLInputElement[] = [
    document.getElementById("reference") as HTMLInputElement,
    document.getElementById("tel") as HTMLInputElement,
    document.getElementById("change") as HTMLInputElement,
    document.getElementById("name") as HTMLInputElement,
    document.getElementById("bairro") as HTMLInputElement,
    document.getElementById("rua") as HTMLInputElement,
    document.getElementById("casa") as HTMLInputElement,
  ];
  
};

const HandleCEP = async (cep: string) => {
  const bairro = document.getElementById("bairro") as HTMLInputElement;
  const rua = document.getElementById("rua") as HTMLInputElement;
  const response = await CEPAPI.get(`${cep}/json`);
  const data = response.data;
  bairro.value = data.bairro;
  rua.value = data.logradouro;
};
export { HandleFormulary, HandleCEP };
