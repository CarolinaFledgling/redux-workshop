import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  completedTask,
  removeTask,
  startEditTask,
  updateEditTask,
  setSearchQuery,
} from "./todoSlice";
import EditTask from "../../components/EditTask/EditTask";
import DisplayTask from "../../components/DisplayTask/DisplayTask";

const ToDoView = () => {
  const [valueInput, setValueInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // useSelector hook get the value from Redux store
  const todos = useSelector((state) => state.todo.toDos);
  const searchQuery = useSelector((state) => state.todo.searchQuery);
  const dispatch = useDispatch();

  // Event handlers
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    dispatch(setSearchQuery(searchValue));
  };

  const handleUpdatedTask = (id, text) => {
    dispatch(updateEditTask({ id: id, taskName: text }));
  };

  const handleDeleteTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleCompletedTask = (id) => {
    dispatch(completedTask(id));
  };

  const handleEditTask = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setValueInput(findTodo.taskName);
    dispatch(startEditTask(id));
  };

  // Filtered list of todos in the search bar
  const filteredTodos = todos.filter((todo) => {
    return todo.taskName
      .toLowerCase()
      .includes(searchQuery.toLocaleLowerCase());
  });
  return (
    <div className="todo-container">
      <label className="label">Find task </label>
      <input
        className="input"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
      />
      {filteredTodos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.isEdit ? (
              <EditTask
                todo={todo}
                valueInput={valueInput}
                handleUpdatedTask={handleUpdatedTask}
                setValueInput={setValueInput}
              />
            ) : (
              <DisplayTask
                todo={todo}
                handleCompletedTask={handleCompletedTask}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ToDoView;
