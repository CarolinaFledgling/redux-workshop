import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [
    {
      id: 1,
      taskName: "Kupic mleko",
      isCompleted: false,
      isEdit: false,
    },
  ],
  searchQuery: "",
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
      console.log("toggle");
      const findTask = state.toDos.find((todo) => todo.id === action.payload);
      if (findTask) {
        findTask.isCompleted = !findTask.isCompleted;
      }
    },
    startEditTask: (state, action) => {
      console.log("start edit");
      const findEditTask = state.toDos.find(
        (todo) => todo.id === action.payload
      );
      if (findEditTask) {
        findEditTask.isEdit = true;
      }
    },

    updateEditTask: (state, action) => {
      const { id, taskName } = action.payload;
      console.log("update, action.payload", action.payload);
      const findEditTask = state.toDos.find((todo) => todo.id === id);

      if (findEditTask) {
        (findEditTask.taskName = taskName), (findEditTask.isEdit = false);
      }
    },
    setSearchQuery: (state, action) => {
     
      console.log("search", action.payload, );
      state.searchQuery = action.payload;
    },
  },
});

export default todoSlice.reducer;

export const {
  addTask,
  removeTask,
  completedTask,
  startEditTask,
  updateEditTask,
  setSearchQuery
} = todoSlice.actions;
