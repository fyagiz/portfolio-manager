import { configureStore } from "@reduxjs/toolkit";
import { stocksReducer } from "./reducers";

const store = configureStore({
  reducer: {
    stockState: stocksReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatchType = typeof store.dispatch;
