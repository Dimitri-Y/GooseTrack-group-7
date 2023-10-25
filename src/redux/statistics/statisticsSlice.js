import { createSlice } from '@reduxjs/toolkit';

import {fetchStatisticsDataThunk} from './statisticsOperations';

const initialStatisticsState = {
    statistics: {},
   
  isLoading: false,
  error: null,
};



const StatisticsSlice = createSlice({
  name: 'statistics',
  initialState: initialStatisticsState,

  extraReducers: (builder) => {
    builder
       .addCase(fetchStatisticsDataThunk.pending, (state, action) => {
             state.isLoading = true;
             state.error = null;
         })
         .addCase(fetchStatisticsDataThunk.fulfilled, (state, action) => { 
             state.isLoading = false;
             state.statistics = action.payload;         
         })
        .addCase(fetchStatisticsDataThunk.rejected, (state, action) => { 
            state.isLoading = false;
            state.error = action.payload ?? action.error.message;
        })
  }
})


export const StatisticsReducer = StatisticsSlice.reducer;
