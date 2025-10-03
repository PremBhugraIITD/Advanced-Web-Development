const zod = require("zod");

const newTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const existingTodo = zod.object({
  id: zod.string(),
});

module.exports = {
    newTodo,
    existingTodo,
};