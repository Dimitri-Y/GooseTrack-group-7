import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectFilter = (state) => state.filter.filter;

export const selectVisibleMessage = createSelector([selectTasks], (tasks) => {
  const hasUnfinishedTasks = tasks.some(
    ({ category }) => category === 'to-do' || category === 'in-progress',
  );

  return hasUnfinishedTasks
    ? 'Let go of the past and focus on the present!'
    : '';
});
