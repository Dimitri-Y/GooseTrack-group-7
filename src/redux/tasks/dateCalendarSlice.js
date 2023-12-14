import { createSlice } from '@reduxjs/toolkit';

const dateCalendarInitialState = {
  dateCalendar: new Date().toLocaleDateString().split('.').reverse().join('-'),
};

const dateCalendarSlice = createSlice({
  name: 'dateCalendar',
  initialState: dateCalendarInitialState,
  reducers: {
    changeDateCalendar(state, action) {
      state.dateCalendar = action.payload;
    },
  },
});

export const { changeDateCalendar } = dateCalendarSlice.actions;
export const dateCalendarReducer = dateCalendarSlice.reducer;
