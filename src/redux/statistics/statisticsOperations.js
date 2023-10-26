import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://goose-track-backend-deployment-q70i.onrender.com/api/';


export const fetchStatisticsDataThunk = createAsyncThunk(
  'statistics/fetchAll',
  async (dateFetchData, thunkAPI) => {

    try {
      const response = await axios.get(`/statistics/${dateFetchData}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
