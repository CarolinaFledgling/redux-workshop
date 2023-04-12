import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCram: iceCreamReducer,
    user: userReducer,
  },
});

export default store;
