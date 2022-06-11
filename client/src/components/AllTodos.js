import axios from "axios";
import React, { useEffect, useState } from "react";
import { Paper, Checkbox, Button, TextField } from "@material-ui/core";

import { updateTodo, deleteTodo } from "../services/todoServices";

function AllTodos() {
  const [todos, setTodos] = useState(null);
  const [edit, setEdit] = useState(null);
  const [updatedTask, setUpdatedTask] = useState(null);
  const [updatedId, setUpdatedId] = useState(null);

  useEffect(() => {
    axios.get(process.env.React_App_API_URL).then((res) => {
      setTodos(res.data.All_Todos);
    });
  }, [todos]);

  const handleSubmit = (id, completed) => {
    const updateTask = {
      task: updatedTask,
      completed: completed,
    };
    updateTodo(id, updateTask);
    setEdit(null);
  };

  if (todos) {
    var TaskContainer = todos.map((todo) => {
      return (
        <>
          <Paper elevation={10} className="task" key={todo._id}>
            <div className="flex">
              {todo._id === updatedId ? (
                ""
              ) : (
                <Checkbox
                  color="primary"
                  checked={todo.completed}
                  onClick={() => {
                    updateTodo(todo._id, {
                      task: todo.task,
                      completed: !todo.completed,
                    });
                  }}
                />
              )}

              <div className={todo.completed && "line-through"}>
                {todo._id === updatedId
                  ? ""
                  : todo.task.charAt(0).toUpperCase() + todo.task.slice(1)}
              </div>

              {todo._id === updatedId ? (
                ""
              ) : !todo.completed ? (
                <div
                  className="edit"
                  onClick={() => {
                    setEdit(true);
                    setUpdatedId(todo._id);
                  }}
                >
                  {" "}
                  edit
                </div>
              ) : (
                ""
              )}

              {edit && todo._id === updatedId && (
                <>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(todo._id, todo.completed);
                      setUpdatedId("");
                      setUpdatedTask("");
                    }}
                  >
                    <TextField
                      autoFocus
                      required
                      size="small"
                      value={updatedTask}
                      onChange={(e) => {
                        setUpdatedTask(e.target.value);
                      }}
                    />
                    <Button
                      color="secondary"
                      className="btn update-btn"
                      type="submit"
                    >
                      Update
                    </Button>
                  </form>
                </>
              )}
            </div>
            {todo._id === updatedId ? (
              ""
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                className="btn"
                onClick={() => {
                  deleteTodo(todo._id);
                }}
              >
                delete
              </Button>
            )}
          </Paper>
        </>
      );
    });
  }
  return (
    <>
      {todos && todos.length ? (
        <div className="total">
          Total tasks: {todos.length < 10 ? "0" + todos.length : todos.length}
        </div>
      ) : (
        <div className="total">Currently no task</div>
      )}

      {TaskContainer}
    </>
  );
}

export default AllTodos;
