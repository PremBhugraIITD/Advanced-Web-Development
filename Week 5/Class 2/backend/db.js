const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://PremBhugra:Character+%40123@cluster0.afqla.mongodb.net/ToDoApp"
  )
  .then(() => {
    console.log("Database connected..");
  })
  .catch((err) => {
    console.log("Connection to database failed");
  });

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todos = mongoose.model("todos", todoSchema);

module.exports = {
  todos,
};
