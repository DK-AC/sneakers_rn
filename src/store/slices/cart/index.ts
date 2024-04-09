import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SneakersType} from '../../../types';

type CartState = {
  items: any[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemToCart: (state, action: PayloadAction<SneakersType>) => {
      state.items = [...state.items, action.payload];
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(e => e.id !== action.payload);
    },
  },
});

export const {setItemToCart, removeItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;
