import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(0);
  const numOfIceCream = useSelector((state) => state.iceCram.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams: {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams 
      </button>
    </div>
  );
};

export default IceCreamView;
