import { host_url_api } from "../../config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataProductHome: false,
  dataProducts: false,
  dataProductCategory: false,
  dataProductById: false,
  data: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getAllProduct = createAsyncThunk(
  "products/getAllProduct",
  async (query) => {
    const response = await axios.get(`${host_url_api}product?query=${query}`);
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
export const createNewProduct = createAsyncThunk(
  "products/createNewProduct",
  async (data) => {
    const response = await axios.post(`${host_url_api}product`, data);
    return response.data;
  }
);
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (data) => {
    const response = await axios.put(
      `${host_url_api}product/${data.id}`,
      data.data
    );
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const response = await axios.delete(`${host_url_api}product/${id}`);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDefaultIsSuccess: (state) => {
      state.isSuccess = false;
    },
    setDefaultData: (state) => {
      state.data = false;
    },
  },
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
    builder.addCase(createNewProduct.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.data = false;
    });
    builder.addCase(createNewProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(editProduct.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.data = false;
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.data = false;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
  },
});

export const { setDefaultIsSuccess, setDefaultData } = productSlice.actions;
export default productSlice.reducer;
