import React, { useState } from "react";
import Todo from "../todo/Todo.tsx";
import "./InputBar.css";

function InputBar() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>T O D O</h1>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          placeholder="Add item..."
        />
        <i
          onClick={() =>
            setTodos([...todos, { id: Date.now(), text: todo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <Todo todoo={todo} todoos={todos} settodoos={setTodos} />
    </div>
  );
}

export default InputBar;
