import { useState, useEffect } from "react";
import CreateToDo from "./components/CreateToDo.jsx";
import ToDos from "./components/ToDos.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchToDos = () => {
    fetch("http://localhost:3000/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data.message);
      });
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  return (
    <div>
      <h1>ToDo App</h1>
      <CreateToDo refresh={fetchToDos} />
      <ToDos todos={todos} refresh={fetchToDos} />
    </div>
  );
};

export default App;
