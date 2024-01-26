import { BistStockPriceType } from "../api/stock/stock.type";

type StockType = {
  stockCode: string;
  stockName?: string;
  amount?: number;
  totalCost?: number;
  price?: BistStockPriceType;
};

export default StockType;
