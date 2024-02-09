type AssetHistoryType = {
  transactionType: "BUY" | "SELL";
  assetCode: string;
  date: string;
  amount: number;
  price: number;
  totalCost: number;
  commision: number;
};

export default AssetHistoryType;
