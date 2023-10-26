import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { reviewReducer, reviewsReducer } from './reviews/reviewsSlice';
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
import { themeReducer } from './theme/themeSlice.js';
import { StatisticsReducer } from './statistics/statisticsSlice.js';
import { dateCalendarReducer } from './tasks/dateCalendarSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'email'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
    reviews: reviewsReducer,
    theme: themeReducer,
    statistics: StatisticsReducer,
    dateCalendar: dateCalendarReducer,
    review: reviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        ignoredPaths: [`dateCalendar.dateCalendar`],
      },
    }),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
