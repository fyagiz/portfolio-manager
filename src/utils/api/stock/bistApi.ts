import axios from "axios";

const BIST_STOCKS_API = "http://localhost:3000/bistAllStocks";

export const getBist = () => {
  axios.get(BIST_STOCKS_API).then(response => {
    console.log(response.data);
  });
};
