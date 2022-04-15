import axios from "axios";

const ProductsAPI = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

const HandleProducts = async () => {
  const apiResponse = await ProductsAPI.get("?limit=20");
  return {
    status: apiResponse.status,
    data: apiResponse.data,
  };
};

export { HandleProducts, ProductsAPI };
