import { createSlice } from '@reduxjs/toolkit';

const initialState = { cart: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtolike: (state, action) => {
      state.cart = state.cart.push(action.payload);
    },
    addtoCart: (state, action) => {
      const itempresent = state.cart.find(item => item.id == action.payload.id);
      if (itempresent) {
        itempresent.qty++;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    incearse: (state, action) => {
      const itempresent = state.cart.find(item => item.id == action.payload.id);
      itempresent.qty++;
    },
    DecreamentQuantity: (state, action) => {
      const itempresent = state.cart.find(item => item.id == action.payload.id);
      if (itempresent === 1) {
        itempresent.qty == 0;
        const removeitems = state.cart.filter(
          items => items.id !== action.payload.id,
        );
        state.cart = removeitems;
      } else {
        itempresent.qty--;
      }
    },
    RemoveFromCart: (state, action) => {
      const removeitems = state.cart.filter(
        items => items.id !== action.payload.id,
      );
      state.cart = removeitems;
    },
  },
});

export const {
  addtolike,
  addtoCart,
  incearse,
  DecreamentQuantity,
  RemoveFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
