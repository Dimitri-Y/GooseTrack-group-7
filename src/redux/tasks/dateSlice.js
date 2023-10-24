import { createSlice } from '@reduxjs/toolkit';

const currentDate = new Date().toISOString().slice(0, 10);

const dateInitialState = { date: currentDate };

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
