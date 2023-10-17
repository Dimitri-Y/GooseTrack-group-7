import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectFilter = (state) => state.filter.filter;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    return tasks.filter(({ category }) =>
      category.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
