import React from "react";

const EditTask = ({ todo, valueInput, handleUpdatedTask, setValueInput }) => {
  return (
    <div className="container-task" key={todo.id}>
      <input
        id="taskInput"
        type="text"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder="name of task"
        className="task-input"
      />
      <button onClick={() => handleUpdatedTask(todo.id, valueInput)}>
        Save
      </button>
    </div>
  );
};

export default EditTask;
