import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SneakersType} from '../../../types';

type CartState = {
  items: SneakersType[];
  selectedSize: number;
};

const initialState: CartState = {
  items: [],
  selectedSize: 41,
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
    changeFavoriteShoeSize: (state, action: PayloadAction<{id: string; selectedSize: number}>) => {
      const {selectedSize, id} = action.payload;
      state.items = state.items.map(sneaker => (sneaker.id === id ? {...sneaker, selectedSize} : sneaker));
    },
    changeSneakerSize: (state, action: PayloadAction<{selectedSize: number}>) => {
      state.selectedSize = action.payload.selectedSize;
    },
  },
});

export const {changeSneakerSize, setItemToCart, changeFavoriteShoeSize, removeItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;
