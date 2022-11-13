import { host_url_api } from "../../config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getAllBanner = createAsyncThunk(
  "banners/getAllBanner",
  async () => {
    const response = await axios.get(`${host_url_api}banner`);
    console.log(response);
    return response.data;
  }
);

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBanner.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBanner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
  },
});

export default bannerSlice.reducer;
