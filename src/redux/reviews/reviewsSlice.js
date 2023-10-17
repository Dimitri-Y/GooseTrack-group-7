import { createSlice } from '@reduxjs/toolkit';

import {
  fetchReviews,
  fetchReviewsOwn,
  addReview,
  deleteReview,
  updateReview,
} from './reviewsOperations';

const reviewsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: reviewsInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchReviewsOwn.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchReviewsOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchReviewsOwn.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addReview.pending, (state) => {
        handlePending(state);
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addReview.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteReview.pending, (state) => {
        handlePending(state);
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (review) => review.id === action.payload.id,
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteReview.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(updateReview.pending, (state) => {
        handlePending(state);
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (review) => review.id === action.payload.id,
        );
        state.items[index] = action.payload;
      })
      .addCase(updateReview.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
