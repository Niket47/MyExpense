import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddtoCart: (state, action) => {
      const itempresent = state.cart.find(item => item.id == action.payload.id);
      if (itempresent) {
        itempresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveFromCart: (state, action) => {
      const removeitems = state.cart.filter(
        items => items.id !== action.payload.id,
      );
      state.cart = removeitems;
    },
    IncrementQuantity: (state, action) => {
      const itempresent = state.cart.find(item => item.id == action.payload.id);
      itempresent.quantity++;
    },
    DecreamentQuantity: (state, action) => {
      const itempresent = state.cart.find(item => item.id == action.payload.id);
      if (itempresent === 1) {
        itempresent.quantity == 0;
        const removeitems = state.cart.filter(
          items => items.id !== action.payload.id,
        );
        state.cart = removeitems;
      } else {
        itempresent.quantity--;
      }
    },
    CleanCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  AddtoCart,
  RemoveFromCart,
  IncrementQuantity,
  DecreamentQuantity,
  CleanCart,
} = CartSlice.actions;

export default CartSlice.reducer;
