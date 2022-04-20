import axios from "axios";
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
  Produtos: ProductsResponse[];
}
const handleProducts = async () => {
  const products = await axios.get<Produtos>("https://pizzariabackend.herokuapp.com/get-products/TestePizzariaMenu");

  return products.data.Produtos;
};
export type { ProductsResponse };
export { handleProducts };
