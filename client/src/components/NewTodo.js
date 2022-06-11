import React, { useState } from "react";
import { Paper, TextField, Button } from "@material-ui/core";

import { addTodo } from "../services/todoServices";

function NewTodo() {
  const [tasks, setTask] = useState({
    task: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(tasks);
    setTask({
      task: "",
    });
  };
  return (
    <>
      <Paper elevation={5} className="container">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <TextField
              autoFocus
              variant="outlined"
              required
              size="small"
              type="text"
              name="task"
              id="task"
              style={{ width: "75%" }}
              placeholder="Add new task"
              value={tasks.task}
              onChange={(event) => {
                setTask({ task: event.target.value });
              }}
            />
            <Button type="submit" variant="outlined" className="add-btn">
              Add
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
}

export default NewTodo;
