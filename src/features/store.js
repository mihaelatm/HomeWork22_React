import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quote/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
