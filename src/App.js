import "./App.css";
import Form from "./components/Form";
import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);



  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>MY TODO LISTS </h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setstatus={setstatus}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
