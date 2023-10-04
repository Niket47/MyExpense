import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './Slices';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

let rootreducer = combineReducers({
  app: expenseReducer,
});

let persistReducers = persistReducer(persistConfig, rootreducer);

export const store = configureStore({
  reducer: persistReducers,
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

// export const store = configureStore({
//   reducer: {
//     app: expenseReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         serializableCheck: false,
//         // Ignore these action types
//         // ignoredActions: ['your/action/type'],
//         // Ignore these field paths in all actions
//         ignoredActionPaths: ['meta.arg', 'payload.expense.date'],
//         // Ignore these paths in the state
//         ignoredPaths: ['app.expense'],
//       },
//     }),
// });
