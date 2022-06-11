const Todo = require("../models/todos");

//post a todo
exports.postTodo = async (req, res) => {
  try {
    const todo = await new Todo(req.body).save();
    res.status(200).json({
      Message: "Todo was inserted successfully!",
      New_Todo: todo,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};

//get todos
exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      Message: "Todos were fetched successfully!",
      All_Todos: todos,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};

//update a todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json({
      Message: "Todos was updated successfully!",
      Updated_Todo: todo,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};

//delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({
      Message: "Todos was deleted successfully!",
      Deleted_Todo: todo,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};
