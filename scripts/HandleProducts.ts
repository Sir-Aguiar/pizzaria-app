import axios from "axios";

const HandleProducts = async () => {
  const apiResponse = await axios.get(
    "https://api.unsplash.com/search/photos?query=food&client_id=pXBu5L9GAiulxDNq25uHn67BMPYwYiyzQ43cjxFMg5k"
  );
  return {
    status: apiResponse.status,
    data: apiResponse.data,
  };
};

export { HandleProducts };
