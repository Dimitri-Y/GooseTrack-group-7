import { createSelector } from '@reduxjs/toolkit';
import { format } from 'date-fns';

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectDateCalendar = (state) => state.dateCalendar.dateCalendar;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectDateCalendar],
  (tasks, date) => {
    const data = format(date, 'yyyy-MM-dd');
    return tasks?.filter((task) => task.date === data);
  },
);
