import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [
    {
      id: 1,
      taskName: "Kupic mleko",
      isCompleted: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  // reducers have methods to update our initial state here
  // redux pass automatically state to the method
  reducers: {
    addTask: (state, action) => {
      console.log("add");
      state.toDos.push(action.payload);
    },
    removeTask: (state, action) => {
      console.log("remove");
      const filteredToDos = state.toDos.filter(
        (todo) => todo.id !== action.payload
      );
      state.toDos = filteredToDos;
    },

    completedTask: (state, action) => {
      console.log("remove");
    },
  },
});

export default todoSlice.reducer;

export const { addTask, removeTask, completedTask } = todoSlice.actions;
