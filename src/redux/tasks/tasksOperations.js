import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL =
  'https://goose-track-backend-deployment-q70i.onrender.com/api/';
const defaultFilter = '?filteredFrom=1980-01-01&filteredTo=3000-01-04';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/${defaultFilter}`);
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
      const update = Object.keys(data)
        .filter((key) => key !== 'taskId')
        .reduce((res, key) => {
          res[key] = data[key];
          return res;
        }, {});
      const response = await axios.put(`/tasks/${data.taskId}`, update);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
