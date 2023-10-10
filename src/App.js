import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import TodoList from "./features/todolist/todoList";
import { Route, Routes } from "react-router-dom";
import Tododisplay from "./features/todolist/Tododisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />

        <Routes>
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/todoList/:id" element={<Tododisplay />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
