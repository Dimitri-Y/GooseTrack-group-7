import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectDate = (state) => state.date.date;

export const selectParameter = (state) => state.parameter.parameter;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectDate],
  (tasks, date) => {
    return Object.entries(tasks).filter((task) => task.date === date);
  },
);

export const selectVisibleMessage = createSelector([selectTasks], (tasks) => {
  const hasUnfinishedTasks = Object.entries(tasks).some(
    (task) => task.category === 'to-do' || task.category === 'in-progress',
  );

  return hasUnfinishedTasks
    ? 'Let go of the past and focus on the present!'
    : '';
});

