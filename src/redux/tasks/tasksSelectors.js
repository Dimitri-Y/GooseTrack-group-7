import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectDate = (state) => state.date.date;

export const selectDateCalendar = (state) => state.dateCalendar.dateCalendar;

export const selectParameter = (state) => state.parameter.parameter;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectDate],
  (tasks, date) => {
    tasks?.filter((task) => task.date === date);
  },
);
