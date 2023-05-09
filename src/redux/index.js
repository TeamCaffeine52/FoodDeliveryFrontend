import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import categorySlice from './categorySlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        category: categorySlice.reducer,
        product: productSlice.reducer,
        cart: cartSlice.reducer
    },
})