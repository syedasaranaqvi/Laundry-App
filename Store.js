import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/CartReducer";
import ProductReducer from "./components/ProductReducer";

export default configureStore({
    reducer: {
        cart: cartReducer,
        product:ProductReducer
    }
})