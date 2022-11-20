import { host_url_api } from "../../config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: false,
  dataResponse: false,
  dataCatalogById: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const createNewCatalog = createAsyncThunk(
  "category/createNewCatalog",
  async (data) => {
    const response = await axios.post(`${host_url_api}catalog`, data);
    return response.data;
  }
);

export const editCatalog = createAsyncThunk(
  "catalog/editCatalog",
  async (data) => {
    const response = await axios.put(
      `${host_url_api}catalog/${data.id}`,
      data.data
    );
    return response.data;
  }
);

export const getAllCatalog = createAsyncThunk(
  "catalog/getAllCatalog",
  async () => {
    const response = await axios.get(`${host_url_api}catalog`);
    return response.data;
  }
);

export const getCatalogById = createAsyncThunk(
  "catalog/getCatalogById",
  async (id) => {
    const response = await axios.get(`${host_url_api}catalog/${id}`);
    return response.data;
  }
);
export const deleteCatalog = createAsyncThunk(
  "catalog/deleteCatalog",
  async (id) => {
    const response = await axios.delete(`${host_url_api}catalog/${id}`);
    return response.data;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
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
    builder.addCase(getAllCatalog.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.data = false;
    });
    builder.addCase(getAllCatalog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(getCatalogById.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataCatalogById = false;
    });
    builder.addCase(getCatalogById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataCatalogById = action.payload;
    });
    builder.addCase(createNewCatalog.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(createNewCatalog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
    builder.addCase(editCatalog.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(editCatalog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
    builder.addCase(deleteCatalog.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(deleteCatalog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
  },
});

export const { setDefaultIsSuccess, setDefaultDataResponse } =
  catalogSlice.actions;
export default catalogSlice.reducer;
