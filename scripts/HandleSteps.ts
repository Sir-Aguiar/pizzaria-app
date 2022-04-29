import { ProductsResponse } from "./GetterMenu";

const HandleSteps = (setStep: React.Dispatch<React.SetStateAction<number>>, myCart: ProductsResponse[]) => {
  if (myCart.length > 0) {
    setStep((oldValue) => (oldValue + 1 < 3 ? (oldValue += 1) : 0));
    return true;
  }
  alert("Seu carrinho está vazio");
  return false;
};
export { HandleSteps };
