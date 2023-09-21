import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './Slices';

export const store = configureStore({
  reducer: {
    app: expenseReducer,
  },
});
