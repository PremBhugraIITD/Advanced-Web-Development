import { useState } from "react";

const CreateToDo = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNew = async () => {
    if (!title || !description) {
      alert("Please fill in both title and description.");
      return;
    }

    await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    setTitle("");
    setDescription("");
    refresh(); // Refresh ToDos after adding a new one
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addNew}>Add New</button>
    </div>
  );
};

export default CreateToDo;
