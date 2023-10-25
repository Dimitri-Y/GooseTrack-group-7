import { createSlice } from '@reduxjs/toolkit';

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const index = new Date().getDay();

const parameterUrlInitialState = { parameter: days[index] };

const parameterUrlSlice = createSlice({
  name: 'parameter',
  initialState: parameterUrlInitialState,
  reducers: {
    changeParameterUrl(state, action) {
      state.parameter = action.payload;
    },
  },
});

export const { changeParameterUrl } = parameterUrlSlice.actions;
export const parameterUrlReducer = parameterUrlSlice.reducer;
