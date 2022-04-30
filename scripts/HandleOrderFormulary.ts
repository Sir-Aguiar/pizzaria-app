import axios from "axios";
import { FormEventHandler } from "react";
import styles from "../components/Pedir/Step_1/Step1.module.css";
import { ProductsResponse } from "./GetterMenu";
const CEPAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
const OrderAPI = axios.create({
  baseURL: "",
});

const HandleCEP = async (cep: string) => {
  const bairro = document.getElementById("bairro") as HTMLInputElement;
  const rua = document.getElementById("rua") as HTMLInputElement;
  CEPAPI.get(`${cep}/json`)
    .then((res) => {
      if (res.data.erro) {
        return;
      }
      bairro.value = res.data.bairro;
      rua.value = res.data.logradouro;
    })
    .catch((e) => {
      console.log(e);
    });
};
export { OrderAPI, HandleCEP };
