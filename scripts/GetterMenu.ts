import axios from "axios";

const handleProducts = async (product: Menu) => {
  const products = await axios.get<TGetProducts>(
    "https://pizzariabackend.herokuapp.com/get-products/TestePizzariaMenu"
  );

  return products.data[product];
};
export { handleProducts };
