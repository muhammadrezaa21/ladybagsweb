import { host_url_api } from "../../config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: false,
  dataResponse: false,
  dataAuthUser: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const login = createAsyncThunk("user/login", async (data) => {
  const response = await axios.post(`${host_url_api}auth/login`, data);
  return response.data;
});
export const register = createAsyncThunk("user/register", async (data) => {
  const response = await axios.post(`${host_url_api}auth/register`, data);
  return response.data;
});
export const getAllUser = createAsyncThunk("user/getAllUSer", async () => {
  const response = await axios.get(`${host_url_api}user`);
  return response.data;
});
export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (data) => {
    const response = await axios.put(
      `${host_url_api}user/${data.id}`,
      data.data
    );
    return response.data;
  }
);
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  const response = await axios.delete(`${host_url_api}user/${id}`);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDefaultIsSuccess: (state) => {
      state.isSuccess = false;
    },
    setDefaultDataResponse: (state) => {
      state.dataResponse = false;
    },
    setDefaultDataAuthUser: (state) => {
      state.dataAuthUser = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataAuthUser = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataAuthUser = action.payload;
    });
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
    builder.addCase(changePassword.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
    builder.addCase(getAllUser.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.data = false;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.dataResponse = false;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataResponse = action.payload;
    });
  },
});
export const {
  setDefaultIsSuccess,
  setDefaultDataResponse,
  setDefaultDataAuthUser,
} = userSlice.actions;
export default userSlice.reducer;
