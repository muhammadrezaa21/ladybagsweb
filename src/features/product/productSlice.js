import { host_url_api } from "../../config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataProductHome: false,
  dataProducts: false,
  dataProductCategory: false,
  dataProductById: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getAllProduct = createAsyncThunk(
  "products/getAllProduct",
  async () => {
    const response = await axios.get(`${host_url_api}product`);
    return response.data;
  }
);
export const getProductByType = createAsyncThunk(
  "products/getProductByType",
  async () => {
    const response = await axios.get(
      `${host_url_api}product/?type1=best seller&type2=sale`
    );
    return response.data;
  }
);
export const getProductByCategory = createAsyncThunk(
  "products/getProductByCategory",
  async (category) => {
    const response = await axios.get(
      `${host_url_api}product/?category=${category}`
    );
    return response.data;
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const response = await axios.get(`${host_url_api}product/${id}`);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataProducts = false;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataProducts = action.payload;
    });
    builder.addCase(getProductByType.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataProductHome = false;
    });
    builder.addCase(getProductByType.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataProductHome = action.payload;
    });
    builder.addCase(getProductByCategory.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataProductCategory = false;
    });
    builder.addCase(getProductByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataProductCategory = action.payload;
    });
    builder.addCase(getProductById.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataProductById = false;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataProductById = action.payload;
    });
  },
});

export default productSlice.reducer;
