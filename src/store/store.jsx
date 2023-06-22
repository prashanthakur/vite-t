import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import counterReducer from './counterSlice'
import productReducer from './productSlice'
import coursesReducer from "./coursesSlice";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        count:counterReducer,
        product:productReducer,
        courses:coursesReducer
    }
});

export default store;