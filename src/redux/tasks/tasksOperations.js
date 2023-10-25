import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'http://localhost:3000/api/';
axios.defaults.baseURL =
  'https://goose-track-backend-deployment-q70i.onrender.com/api/';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', task);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${data.taskId}`, data.update);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
