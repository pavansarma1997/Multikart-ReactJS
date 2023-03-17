import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productSlice";
import cartSlice from "./cartslice"

const store = configureStore({
    reducer: {
        Products: productsSlice.reducer,
        Cart: cartSlice.reducer
    }
});

export default store;
