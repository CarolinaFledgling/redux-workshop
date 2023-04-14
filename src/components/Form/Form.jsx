import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/todos/todoSlice";

const Form = () => {
  const [valueInput, setValueInput] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!valueInput) return;

    const newTask = {
      id: Date.now(),
      taskName: valueInput,
      isCompleted: false,
    };
    dispatch(addTask(newTask));

    setValueInput("")
  
  };

  return (
    <div>
      <input
        type="text"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
};

export default Form;
