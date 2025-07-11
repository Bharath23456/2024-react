import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./api/todoSlice";
import productsReducer from "./api/Products";
const store=configureStore({
    reducer:{
        list:todoReducer,
        data : productsReducer
    }
})
export default store;