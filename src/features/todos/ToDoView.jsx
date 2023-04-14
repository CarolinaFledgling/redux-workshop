import React from "react";
import { useSelector } from "react-redux";

const ToDoView = () => {
  //where state.todo refers to the todo slice of the Redux store and
  //toDos is the name of the toDos array in the initial state of that slice.
  const todos = useSelector((state) => state.todo.toDos);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.taskName}</p>
          </div>
        );
      })}
    </div>
  );
};


export default ToDoView;
