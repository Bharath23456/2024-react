import { createSlice } from "@reduxjs/toolkit";
const todoreducer=createSlice({
    name:"todo",
    initialState:{
        data:["one","two","three"]
    },
})
export default todoreducer.reducer;