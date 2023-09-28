import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './Slices';

export const store = configureStore({
  reducer: {
    app: expenseReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        serializableCheck: false,
        // Ignore these action types
        // ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.expense.date'],
        // Ignore these paths in the state
        ignoredPaths: ['app.expense'],
      },
    }),
});
