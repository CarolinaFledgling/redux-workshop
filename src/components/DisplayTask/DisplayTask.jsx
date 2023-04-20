import React from "react";

const DisplayTask = ({
  todo,
  handleCompletedTask,
  handleDeleteTask,
  handleEditTask,
}) => {
  return (
    <div className="container-task" key={todo.id}>
      <p className={`task-text ${todo.isCompleted ? "completed" : ""}`}>
        {todo.taskName}
      </p>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => handleCompletedTask(todo.id)}
      />
      <button className="delete-btn" onClick={() => handleDeleteTask(todo.id)}>Delete</button>
      <button className="edit-btn " onClick={() => handleEditTask(todo.id)}>Edit</button>
    </div>
  );
};

export default DisplayTask;
