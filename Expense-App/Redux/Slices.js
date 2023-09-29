import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_EXPENSES } from '../../Common/dummy';
const initialState = {
  expense: [],
  expense: DUMMY_EXPENSES,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const id = Math.random();

      state.expense.push({ ...action.payload, id: id });
    },
    deleteExpense: (state, action) => {
      state.expense = state.expense.filter(
        expense => expense.id !== action.payload,
      );
    },
    filterbycat: (state, action) => {
      state.expense = state.expense.filter(items => {
        items.category == action.payload;
      });
    },
    updateExpense: (state, action) => {
      // console.log(action.payload, 'payload');

      const updatableExpenseIndex = state.expense.findIndex(
        expense => expense.id === action.payload.id,
      );

      // console.log(updatableExpenseIndex, 'updatableExpenseIndex');

      const updatableExpense = state.expense[updatableExpenseIndex];

      // console.log(updatableExpense, 'updatableExpense');

      state.expense[updatableExpenseIndex] = {
        ...updatableExpense,
        ...action.payload,
      };
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
