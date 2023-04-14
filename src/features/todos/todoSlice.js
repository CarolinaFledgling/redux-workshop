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
      console.log('hello')
      state.toDos.push(action.payload);
    },
  },
});

export default todoSlice.reducer;

export const { addTask } = todoSlice.actions;
