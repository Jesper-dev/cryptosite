import { configureStore } from "@reduxjs/toolkit";
import newsapiReducer from "./api/newsapiSlice";

export const store = configureStore({
  reducer: {
    newsApi: newsapiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
