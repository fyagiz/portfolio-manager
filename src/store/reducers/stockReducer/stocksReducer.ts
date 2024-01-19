import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootStateType } from "../../store";
import { StockStateType } from "./stockReducer.type";
import { StockType } from "../../../utils/assetTypes";

const initialState: StockStateType = {
  stocks: [],
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    addStock: (state, action: PayloadAction<StockType>) => {
      state.stocks.push(action.payload);
    },
    deleteStock: (state, action: PayloadAction<string>) => {
      state.stocks = state.stocks.filter(stock => stock.name !== action.payload);
    },
  },
});

export const { addStock, deleteStock } = stocksSlice.actions;
export const selectStocks = (state: RootStateType) => state.stockState;
export const stocksReducer = stocksSlice.reducer;
