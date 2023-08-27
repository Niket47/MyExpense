import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  expense: [
    {
      id: '11',
      name: 'A pair of shoes',
      amount: 59.99,
      date: '2021-12-19',
    },
    {
      id: '22',
      name: 'A pair of trousers',
      amount: 89.29,
      date: '2022-01-05',
    },
  ],
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expense.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expense = state.expense.filter(
        expense => expense.id !== action.payload,
      );
    },
    updateExpense: (state, action) => {
      const updatableExpenseIndex = state.expense.findIndex(
        expense => expense.id === action.payload.id,
      );

      const updatableExpense = state.expense[updatableExpenseIndex];

      state.expense[updatableExpenseIndex] = {
        ...updatableExpense,
        ...action.payload,
      };
    },
  },
});

export const {addExpense, deleteExpense, updateExpense} = expenseSlice.actions;
export default expenseSlice.reducer;
