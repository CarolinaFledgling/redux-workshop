import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../features/todos/todoSlice";

const store = configureStore({
  // here we have our slices
  reducer: {
    todo: todoSliceReducer,
  },
});

export default store;
