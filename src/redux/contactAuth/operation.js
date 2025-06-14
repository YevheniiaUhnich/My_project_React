import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import contactApi from "../../api/contactApi";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  console.log("Setting auth header:", token);
  contactApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  contactApi.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const response = await contactApi.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const response = await contactApi.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await contactApi.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const response = await contactApi.get("users/current");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
