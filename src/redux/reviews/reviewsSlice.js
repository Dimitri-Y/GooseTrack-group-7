import { createSlice } from '@reduxjs/toolkit';

import {
  fetchReviews,
  fetchReviewsOwn,
  addReview,
  deleteReview,
  updateReview,
} from './reviewsOperations';
const reviewInitialState = {
  items: [{ rating: 5, comment: '' }],
  isLoading: false,
  error: null,
};
const reviewsInitialState = {
  items: [],
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
      });
  },
});
const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsOwn.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchReviewsOwn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload) {
          state.items = action.payload;
        } else {
          state.items[0] = {
            rating: 5,
            comment: '',
          };
        }
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
      .addCase(deleteReview.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;

        state.items.splice(0, 1);
        state.items.push({ comment: '', rating: 5 });
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

        state.items[0] = action.payload;
      })
      .addCase(updateReview.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});
export const reviewsReducer = reviewsSlice.reducer;
export const reviewReducer = reviewSlice.reducer;

// export const { changeRating } = reviewSlice.actions;
