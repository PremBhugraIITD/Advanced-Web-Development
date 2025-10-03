import { useEffect, useState, useMemo, useCallback, memo } from "react";

let globalId = 0;
const url = "https://jsonplaceholder.typicode.com/todos/";

export const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>ToDo App</h1>
      <CreateToDo
        addTodo={(data) => {
          setTodos([...todos, data]);
        }}
      />
      {todos.map((todo) => {
        console.log(globalId);
        return <ToDo key={globalId++} title={todo.title} />;
      })}
    </>
  );
};

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setTodos(data);
      });
  }, []);
  return todos;
};

export const App2 = () => {
  const [selected, setSelected] = useState(null);
  const [choice, setChoice] = useState(null);

  const todos = useTodos();

  useEffect(() => {
    console.log(selected);
    selected &&
      fetch(url + selected)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setChoice(data);
        });
  }, [selected]);

  return (
    <>
      <h1>ToDo App2</h1>
      {todos.map((todo) => {
        return (
          <button
            key={todo.id}
            onClick={() => {
              setSelected(todo.id);
            }}
          >
            {todo.id}
          </button>
        );
      })}
      {selected && <h2>{selected}</h2>}
      {choice && <ToDo title={choice.title} />}
    </>
  );
};

export const App3 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(null);

  let sum = useMemo(() => {
    //Now sum will only be calculated when inputValue changes and not when count changes when we click on the button
    let sum = 0;
    for (let i = 1; i <= inputValue; i++) {
      sum += i;
    }
    console.log("Sum is", sum);
    return sum;
  }, [inputValue]);

  return (
    <div>
      <h1>Counter App</h1>
      <input
        placeholder="Enter the number"
        value={inputValue || ""}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <br />
      {inputValue && (
        <p>
          Sum from 1 to {inputValue} is {sum}
        </p>
      )}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter ({count})
      </button>
    </div>
  );
};

export const App4 = () => {
  const [count, setCount] = useState(0);

  let a = "Variable";

  const b = () => {
    console.log("Function");
  };

  const c = useCallback(() => {
    console.log("Function2");
  }, []);

  return (
    <div>
      <h1>Counter App2</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
      <ToDo title={a} />{" "}
      {/* This will not re-render every time the button is clicked because the value of the title, i.e., a does not change its value*/}
      <ToDo title={b} />{" "}
      {/* This will re-render every time the button is clicked because the value of the title, i.e., b changes its value because the previous defined function is not referentially equal to the new defind function even though the both the previous and the current function hav the same content*/}
      <ToDo title={c} />{" "}
      {/* This will not re-render every time the button is clicked because of the use of useCallback*/}
    </div>
  );
};

const ToDo = memo(({ title }) => {
  console.log("re-rendered " + title);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
});

const CreateToDo = ({ addTodo }) => {
  const [id, setId] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter ToDo Id"
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch(url + id)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(url + id);
              // console.log(data);
              addTodo(data);
              setId("");
            });
        }}
      >
        Add
      </button>
    </div>
  );
};
