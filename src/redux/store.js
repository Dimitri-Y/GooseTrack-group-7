import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { reviewsReducer } from './reviews/reviewsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { dateReducer } from './tasks/dateSlice';
import { parameterUrlReducer } from './tasks/parameterUrlSlice';
import { themeReducer } from './theme/themeSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'email'],
};

const parameterPersistConfig = {
  key: 'parameter',
  storage,
  whitelist: ['parameter'],
};

const datePersistConfig = {
  key: 'date',
  storage,
  whitelist: ['date'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
    reviews: reviewsReducer,
    date: persistReducer(datePersistConfig, dateReducer),
    parameter: persistReducer(parameterPersistConfig, parameterUrlReducer),
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
