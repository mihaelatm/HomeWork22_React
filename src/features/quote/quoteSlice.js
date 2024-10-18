import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await axios.get("http://api.quotable.io/random");
  return response.data;
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    text: "",
    author: "",
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
