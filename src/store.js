import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./api/todoSlice";
const store=configureStore({
    reducer:{
        list:todoReducer
    }
})
export default store;