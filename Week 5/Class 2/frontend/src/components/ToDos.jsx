const ToDos = ({ todos, refresh }) => {
  const mark = async (id) => {
    await fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });

    refresh(); // Refresh ToDos after marking as done
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <button onClick={() => mark(todo._id)} disabled={todo.completed}>
            {todo.completed ? "Completed" : "Mark As Done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDos;
