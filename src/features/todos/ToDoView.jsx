import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "./todoSlice";

const ToDoView = () => {
  //where state.todo refers to the todo slice of the Redux store and
  //toDos is the name of the toDos array in the initial state of that slice.
  const todos = useSelector((state) => state.todo.toDos);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="container-task" key={todo.id}>
            <p className="task-text">{todo.taskName}</p>
            <input type="checkbox"/>
            <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoView;
