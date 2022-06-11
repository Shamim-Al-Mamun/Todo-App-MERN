const express = require("express");
const router = express.Router();

const {
  postTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");

//post a todo
router.post("/", postTodo);

//get all todos
router.get("/", getTodo);

//update a todo
router.put("/:id", updateTodo);

//delete a todo
router.delete("/:id", deleteTodo);

module.exports = router;
