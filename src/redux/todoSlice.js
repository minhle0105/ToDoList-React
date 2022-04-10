import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    initialState: JSON.parse(localStorage.getItem("taskList")) ? JSON.parse(localStorage.getItem("taskList")) : [],
    name: 'todos',
    reducers: {
        addToDo: (state, action) => {
            const newToDo = {
                taskName: action.payload.taskName,
                taskDeadline: action.payload.taskDeadline
            }
            state.push(newToDo);
        }
    }
});

export const { addToDo } = todoSlice.actions;

export default todoSlice.reducer;
