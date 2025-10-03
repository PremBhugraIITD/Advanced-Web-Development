import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "Learn DSA",
      description: "Learn Data Structures and Algorithms",
      completed: false,
    },
    {
      title: "Learn Web Development",
      description: "Learn React and build projects",
      completed: true,
    },
  ]);

  return (
    <div>
      {JSON.stringify(todos)}
      <br />
      <br />
      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              title: "New ToDo",
              description: "New Description",
              completed: false,
            },
          ]);
        }}
      >
        Add ToDo
      </button>
      <ToDo title={todos[0].title} description={todos[0].description} />
      <ToDo title={todos[1].title} description={todos[1].description} />
      {todos.map((todo, index) => {
        return (
          <ToDo title={todo.title} description={todo.description} key={index} /> //Provide a key prop to each child in a list
        );
      })}
    </div>
  );
};

const ToDo = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default App;
