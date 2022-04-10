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
        },
        deleteToDo: (state, action) => {
            const newState = [...state];
            newState.splice(action.payload.i, 1);
            return newState;
        }
    }
});

export const { addToDo, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;
