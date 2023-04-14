import "./App.css";
import Form from "./components/Form/Form";
import ToDoView from "./features/todos/ToDoView";

function App() {
  return (
    <div className="App">
      <Form/>
      <ToDoView />
    </div>
  );
}

export default App;
