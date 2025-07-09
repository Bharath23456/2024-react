import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: "todo",
    initialState: {
        data: ["one", "two", "three", "four"]
    },
    reducers: {
        deleteTodo: (state, action) => {
            const index = action.payload;
            state.data.splice(index, 1);
        },
        addTodo: (state, action) => {
            state.data.push(action.payload);
        }
    }
});


export const { deleteTodo, addTodo } = todoReducer.actions;
export default todoReducer.reducer;
