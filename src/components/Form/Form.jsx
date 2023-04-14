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

    setValueInput("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-container">
      <label htmlFor="taskInput">Add task:</label>
      <input
        id="taskInput"
        type="text"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder="name of task"
      />
      <button onClick={handleAddTask}>Add task</button>
    </form>
  );
};

export default Form;
