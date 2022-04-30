import axios from "axios";
import { FormEventHandler } from "react";
import styles from "../components/Pedir/Step_1/Step1.module.css";
import { ProductsResponse } from "./GetterMenu";
const CEPAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
const OrderAPI = axios.create({
  baseURL:""
})
const HandleFormulary = (products:ProductsResponse[]) => {
  const UserData = {
    name: document.getElementById("name") as HTMLInputElement ,
    phone: document.getElementById("tel") as HTMLInputElement ,
    reference: document.getElementById("reference") as HTMLInputElement ,
    change: document.getElementById("change") as HTMLInputElement ,
    location: {
      bairro: document.getElementById("bairro") as HTMLInputElement ,
      rua: document.getElementById("rua") as HTMLInputElement ,
      casa: document.getElementById("casa") as HTMLInputElement ,
    },
  };
};

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
export { HandleFormulary, HandleCEP };
