import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIceCream: 5,
};

const iceCreamSlice = createSlice({
  name: "iceCram",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIceCream--;
  //   },
  // },

  // extraReducers: (builder) => {
  //   builder.addCase(cakeOrdered, (state) => {
  //     state.numOfIceCream--;
  //   });
  // },
});
export default iceCreamSlice.reducer;

export const { ordered, restocked } = iceCreamSlice.actions;
