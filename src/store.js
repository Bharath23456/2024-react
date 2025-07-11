import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./api/todoSlice"
const store=configureStore({
    reducer:{
        list:todoreducer
    }

})
export default store;

