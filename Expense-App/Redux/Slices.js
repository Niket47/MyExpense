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
    name: 'hello',
    amount: '59.9922',
    category: '1',
    description: 'A pair of assqww',
  },
];
const initialState = {
  expense: [
    {
      id: '11',
      name: 'hello',
      amount: '59.99',
      date: 'Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)',
      category: '1',
      description: 'A pair of shoes',
    },
    {
      id: '22',
      name: 'A pair of asxzxs',
      amount: '89.2911',
      date: '2022-02-14',
      category: '2',
      description: 'A pair of shoes',
    },
    {
      id: '13',
      name: 'A pair',
      amount: '59.9922',
      category: '1',
      // date: new Date('2022-01-18'),
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
