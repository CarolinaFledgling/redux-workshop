import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  completedTask,
  removeTask,
  startEditTask,
  updateEditTask,
} from "./todoSlice";

const ToDoView = () => {
  const [valueInput, setValueInput] = useState("");

  const handleUpdatedTask = (id, text) => {
    dispatch(updateEditTask({ id: id, taskName: text }));
  };
  //where state.todo refers to the todo slice of the Redux store and
  //toDos is the name of the toDos array in the initial state of that slice.
  const todos = useSelector((state) => state.todo.toDos);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleCompletedTask = (id) => {
    dispatch(completedTask(id));
  };

  const handleEditTask = (id) => {
    dispatch(startEditTask(id));
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="container-task" key={todo.id}>
            {todo.isEdit ? (
              <>
                <input
                  id="taskInput"
                  type="text"
                  value={valueInput}
                  onChange={(e) => setValueInput(e.target.value)}
                  placeholder="name of task"
                />
                <button onClick={() => handleUpdatedTask(todo.id, valueInput)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <p
                  className={`task-text ${todo.isCompleted ? "completed" : ""}`}
                >
                  {todo.taskName}
                </p>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleCompletedTask(todo.id)}
                />
                <button onClick={() => handleDeleteTask(todo.id)}>
                  Delete
                </button>
                <button onClick={() => handleEditTask(todo.id)}>Edit</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ToDoView;
