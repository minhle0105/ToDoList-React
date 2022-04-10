import {createSlice} from "@reduxjs/toolkit";
import {ascendingComparator, descendingComparator} from "../SortingComparator";

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
        },
        updateToDo: (state, action) => {
            const updatedTask = {
                taskName: action.payload.newName,
                taskDeadline: action.payload.newDate,
            }
            const newState = [...state];
            const index = action.payload.i;
            newState[index] = updatedTask;
            return newState;
        },
        sortToDo: (state, action) => {
            const sortType = action.payload.type;
            const newState = [...state];
            if (sortType === 'ascending') {
                newState.sort(ascendingComparator);
                return newState;
            }
            else {
                newState.sort(descendingComparator);
                return newState;
            }
        }
    }
});

export const { addToDo, deleteToDo, updateToDo, sortToDo } = todoSlice.actions;

export default todoSlice.reducer;
