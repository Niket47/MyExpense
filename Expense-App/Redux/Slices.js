import { createSlice } from '@reduxjs/toolkit';
const obj = [
  {
    id: '11',
    amount: '59.99',
    category: '',
    description: 'A pair of shoes',
  },
  {
    id: '22',
    name: 'A pair of asxzxs',
    amount: '89.2911',
    date: '2022-01-05',
  },
  {
    id: '13',
    amount: '59.9922',
    category: '',
    description: 'A pair of assqww',
  },
];
const initialState = {
  expense: [
    {
      id: '11',
      amount: '59.99',
      category: 'pair',
      description: 'A pair of shoes',
    },
    {
      id: '22',
      name: 'A pair of asxzxs',
      amount: '89.2911',
      date: '2022-01-05',
      category: 'shoes',
    },
    {
      id: '13',
      amount: '59.9922',
      category: 'assqww',
      description: 'A pair of assqww',
    },
  ],
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

export const { addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
