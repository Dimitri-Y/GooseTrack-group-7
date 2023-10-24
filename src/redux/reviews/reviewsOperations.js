import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectToken } from '../auth/authSelectors';
// axios.defaults.baseURL = 'http://localhost:3000/api/';
axios.defaults.baseURL =
  'https://goose-track-backend-deployment-q70i.onrender.com/api/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchReviewsOwn = createAsyncThunk(
  'reviews/fetchReviewsOwn',
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      const persistedToken = selectToken();
      console.log(selectToken());
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setAuthHeader(persistedToken);
      const response = await axios.get('/reviews/own');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, thunkAPI) => {
    try {
      const response = await axios.post('/reviews/own', review);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteReview = createAsyncThunk(
  'reviews /deleteReview ',
  async (reviewId, thunkAPI) => {
    try {
      const response = await axios.delete(`/reviews/own/${reviewId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/reviews/own/${data.reviewId}`,
        data.update,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
