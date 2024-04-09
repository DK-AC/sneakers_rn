import {RootState} from '../../types';

export const selectCartItems = (state: RootState) => state.cart.items;
export const nbItemsInCart = (state: RootState) => state.cart.items.length;
export const itemExistInCart = (id: string) => (state: RootState) => state.cart.items.some(i => i.id === id);
