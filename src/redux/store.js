import { configureStore } from '@reduxjs/toolkit'
import cartReducer  from "./features/cartSlice";
import wishListReducer  from './features/wishListSlicer';
import productReducer  from './features/productSlice';

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    wishlist:wishListReducer,
    products:productReducer
  },
})