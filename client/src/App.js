import AllTodos from "./components/AllTodos";
import { Paper } from "@material-ui/core";
import NewTodo from "./components/NewTodo";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>To-do App</h1>
        <NewTodo />
        <Paper className="container light">
          <AllTodos />
        </Paper>
      </div>
    </>
  );
}

export default App;
