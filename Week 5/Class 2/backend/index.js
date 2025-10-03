const express = require("express");
const cors = require("cors");
const { todos } = require("./db.js");
const { newTodo, existingTodo } = require("./types.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const payLoad = req.body;
  const result = newTodo.safeParse(payLoad);
  if (result.success) {
    await todos.create({
      title: payLoad.title,
      description: payLoad.description,
      completed: false,
    });
    return res.json({
      message: "New ToDo added",
    });
  } else {
    return res.status(411).json({
      message: "You sent the wrong input",
    });
  }
});

app.get("/todos", async (req, res) => {
  const response = await todos.find({});
  return res.json({
    message: response,
  });
});

app.put("/completed", async (req, res) => {
  const payLoad = req.body;
  const result = existingTodo.safeParse(payLoad);
  if (result.success) {
    await todos.updateOne(
      {
        _id: payLoad.id,
      },
      {
        completed: true,
      }
    );
    return res.json({
        message: "ToDo updated successfully",
    })
  } else {
    return res.status(411).json({
      message: "You sent the wrong input",
    });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
