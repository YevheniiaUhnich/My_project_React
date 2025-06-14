import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import contactApi from "../../api/contactApi";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  console.log("Setting auth header:", token);
  contactApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token available");
    }

    setAuthHeader(token);

    try {
      const response = await contactApi.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token available");
    }

    setAuthHeader(token);

    try {
      const response = await contactApi.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactsId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token available");
    }

    setAuthHeader(token);
    try {
      const response = await contactApi.delete(`/contacts/${contactsId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const response = await contactApi.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
