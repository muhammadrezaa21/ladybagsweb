import { host_url_api } from "../../config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: false,
  dataResponse: false,
  dataCategoryById: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const createNewCategory = createAsyncThunk(
  "category/createNewCategory",
  async (data) => {
    const response = await axios.post(`${host_url_api}category`, data);
    return response.data;
  }
);

export const editCategory = createAsyncThunk(
  "category/editCategory",
  async (data) => {
    const response = await axios.put(
      `${host_url_api}category/${data.id}`,
      data.data
    );
    return response.data;
  }
);

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const response = await axios.get(`${host_url_api}category`);
    return response.data;
  }
);

export const getCategoryById = createAsyncThunk(
  "category/getCategoryById",
  async (id) => {
    const response = await axios.get(`${host_url_api}category/${id}`);
    return response.data;
  }
);
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id) => {
    const response = await axios.delete(`${host_url_api}category/${id}`);
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setDefaultIsSuccess: (state) => {
      state.isSuccess = false;
    },
    setDefaultDataResponse: (state) => {
      state.dataResponse = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.data = false;
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(getCategoryById.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataCategoryById = false;
    });
    builder.addCase(getCategoryById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataCategoryById = action.payload;
    });
    builder.addCase(createNewCategory.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(createNewCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
    builder.addCase(editCategory.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(editCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
    builder.addCase(deleteCategory.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
  },
});

export const { setDefaultIsSuccess, setDefaultDataResponse } =
  categorySlice.actions;
export default categorySlice.reducer;
