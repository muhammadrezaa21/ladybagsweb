import { host_url_api } from "../../config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const response = await axios.get(`${host_url_api}category`);
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
  },
});

export default categorySlice.reducer;
