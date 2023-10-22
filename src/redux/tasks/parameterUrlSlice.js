import { createSlice } from '@reduxjs/toolkit';

const parameterUrlInitialState = { parameter: 'monday' };

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
