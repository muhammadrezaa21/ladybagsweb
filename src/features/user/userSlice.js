import { host_url_api } from "../../config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataUsers: false,
  dataUser: false,
  dataAuthUser: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const login = createAsyncThunk("user/login", async (data) => {
  const response = await axios.post(`${host_url_api}auth/login`, data);
  return response.data;
});
export const register = createAsyncThunk("user/register", async () => {
  const response = await axios.post(`${host_url_api}auth/register`);
  return response.data;
});
export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (id) => {
    const response = await axios.put(`${host_url_api}user/${id}`);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataProducts = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataAuthUser = action.payload;
    });
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataUser = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataUser = action.payload;
    });
    builder.addCase(changePassword.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataUser = false;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataUser = action.payload;
    });
  },
});

export default userSlice.reducer;
