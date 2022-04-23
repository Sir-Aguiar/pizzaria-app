import axios from "axios";
import { PossibleFoods } from "./FoodPicker";
interface ProductsResponse {
  name: string;
  description: string;
  images: {
    medium: string;
    small: string;
  };
  price: string;
  _id: number;
}
interface Produtos {
  Lanches: ProductsResponse[];
  Pizzas: ProductsResponse[];
  Bebidas: ProductsResponse[];
  Ofertas:ProductsResponse[];
}
const handleProducts = async (product:PossibleFoods) => {
  const products = await axios.get<Produtos>("https://pizzariabackend.herokuapp.com/get-products/TestePizzariaMenu");

  return products.data[product];
};
export type { ProductsResponse };
export { handleProducts };
