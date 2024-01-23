import axios from "axios";
import { StockType } from "../../assetTypes";

const BIST_STOCKS_API = process.env.EXPO_PUBLIC_BIST_STOCKS_API;

export const getBistStocks = async () => {
  const bistStocks = (await axios.get(BIST_STOCKS_API!)).data as Array<StockType>;

  return bistStocks;
};
