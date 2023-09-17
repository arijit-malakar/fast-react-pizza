import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from './cartTypes';

interface CartState {
  cart: Cart[];
}

const initialState: CartState = {
  cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Cart>) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        (item: Cart) => item.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find(
        (item: Cart) => item.pizzaId === action.payload,
      ) as Cart;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find(
        (item: Cart) => item.pizzaId === action.payload,
      ) as Cart;
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
