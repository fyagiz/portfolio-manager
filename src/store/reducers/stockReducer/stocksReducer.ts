import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootStateType } from "../../store";
import { StockStateType } from "./stockReducer.type";
import { StockType } from "../../../utils/assetTypes";

const initialState: StockStateType = {
  bistStocks: [],
  stocks: [],
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    loadBistStocks: (state, action: PayloadAction<Array<StockType>>) => {
      state.bistStocks = action.payload;
    },
    addStock: (state, action: PayloadAction<StockType>) => {
      state.stocks.push(action.payload);
    },
    deleteStock: (state, action: PayloadAction<string>) => {
      state.stocks = state.stocks.filter(stock => stock.stockCode !== action.payload);
    },
  },
});

export const { loadBistStocks, addStock, deleteStock } = stocksSlice.actions;
export const selectStocks = (state: RootStateType) => state.stockState;
export const stocksReducer = stocksSlice.reducer;
