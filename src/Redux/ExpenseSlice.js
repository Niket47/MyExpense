import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  expense: [
    {
      id: '1',
      name: 'shoes',
      amount: 59.99,
      date: '2021-12-19',
    },
    {
      id: '2',
      name: 'trousers',
      amount: 89.29,
      date: '2022-01-05',
    },
    {
      id: '3',
      name: 'trousers',
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
  },
});

export const {addExpense, deleteExpense} = expenseSlice.actions;
export default expenseSlice.reducer;
