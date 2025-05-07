import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET @ /tasks
export const fetchTask = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/task");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const res = await axios.post("/task", { text });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE @ /tasks/:id

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (tasksId, thunkAPI) => {
    try {
      const res = await axios.delete(`/task/${tasksId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
