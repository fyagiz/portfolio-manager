import { BistStockPriceType } from "../api/stock/stock.type";
import AssetHistoryType from "./assetHistoryType";

type StockType = {
  stockCode: string;
  stockName?: string;
  amount?: number;
  totalCost?: number;
  price?: BistStockPriceType;
  history: Array<AssetHistoryType>;
};

export default StockType;
