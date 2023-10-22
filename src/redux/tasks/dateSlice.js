import { createSlice } from '@reduxjs/toolkit';

const dateInitialState = { date: '2023-10-24' };

const dateSlice = createSlice({
  name: 'date',
  initialState: dateInitialState,
  reducers: {
    changeDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const { changeDate } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
