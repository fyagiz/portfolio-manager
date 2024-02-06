import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootStateType } from "../../store";
import { AppStateType } from "./appSlice.type";

const initialState: AppStateType = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = appSlice.actions;
export const selectApp = (state: RootStateType) => state.appState;
export const appReducer = appSlice.reducer;
