import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchTasks, addTask, deleteTask, updateTask } from './tasksOperations';

const tasksInitialState = {
  items: [],
  avatarURL: '',
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.avatarURL = action.payload.avatarURL;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addTask.pending, (state) => {
        handlePending(state);
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteTask.pending, (state) => {
        handlePending(state);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task._id === action.payload._id,
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(updateTask.pending, (state) => {
        handlePending(state);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id,
        );
        state.items[index] = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

// {
//       id: nanoid(),
//       title: 'Brainstorm ideas for new content or products',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-24',
//       category: 'to-do',
//     },
//     {
//       id: nanoid(),
//       title: 'Brainstorm ideas for new content or products',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-24',
//       category: 'to-do',
//     },
//     {
//       id: nanoid(),
//       title: 'Brainstorm ideas for new content or products',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-25',
//       category: 'to-do',
//     },
//     {
//       id: nanoid(),
//       title: 'Brainstorm ideas for new content or products',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-25',
//       category: 'to-do',
//     },
//     {
//       id: nanoid(),
//       title: 'Brainstorm ideas for new content or products',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-25',
//       category: 'to-do',
//     },
//     {
//       id: nanoid(),
//       title: 'Brainstorm ideas for new content or products',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-25',
//       category: 'to-do',
//     },
//     {
//       id: nanoid(),
//       title: 'Brainstorm ideas for new content or products',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-25',
//       category: 'to-do',
//     },
//     {
//       id: nanoid(),
//       title: 'Review and update my portfolio',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Midium',
//       date: '2023-10-25',
//       category: 'to-do',
//     },
//     {
//       id: nanoid(),
//       title: 'Read and respond to emails and messages',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-25',
//       category: 'in-progress',
//     },
//     {
//       id: nanoid(),
//       title: 'Conducted a successful workshop',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Hight',
//       date: '2023-10-24',
//       category: 'in-progress',
//     },
//     {
//       id: nanoid(),
//       title: 'Building a prototype (mock-up)',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Hight',
//       date: '2023-10-25',
//       category: 'in-progress',
//     },
//     {
//       id: nanoid(),
//       title: 'Refining designs based on feedback',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Midium',
//       date: '2023-10-24',
//       category: 'done',
//     },
//     {
//       id: nanoid(),
//       title: 'Refining designs based on feedback',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Hight',
//       date: '2023-10-27',
//       category: 'done',
//     },
//     {
//       id: nanoid(),
//       title: 'Refining designs based on feedback',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Midium',
//       date: '2023-10-27',
//       category: 'done',
//     },
//     {
//       id: nanoid(),
//       title: 'Refining designs based on feedback',
//       start: '14:30',
//       end: '18:30',
//       priority: 'Low',
//       date: '2023-10-24',
//       category: 'done',
//     },
