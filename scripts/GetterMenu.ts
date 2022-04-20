import axios from "axios"

const handleProducts = async () => {
  const products = await axios.get("https://maitre-app.herokuapp.com/get-products/TestePizzariaMenu")
  return products
}

export {handleProducts}