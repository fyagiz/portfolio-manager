import axios from "axios";
import { StockType } from "../../assetTypes";
import { BistStockPriceType } from "./stock.type";

const BIST_STOCKS_API = process.env.EXPO_PUBLIC_BIST_STOCKS_API;
const BIST_STOCK_API = process.env.EXPO_PUBLIC_BIST_STOCK_API;

export const getBistStocks = async () => {
  const bistStocks = (await axios.get(BIST_STOCKS_API!)).data as Array<StockType>;

  return bistStocks;
};

export const getBistStockPrice = async (stockCode: string) => {
  const stock = (await axios.get(BIST_STOCK_API!, { params: { stockCode } })).data as BistStockPriceType;

  return stock;
};
