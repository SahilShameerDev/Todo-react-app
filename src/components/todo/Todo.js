import React, { useState } from "react";
import "./Todo.css";

function Todo() {
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
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...todos, { id: Date.now(), text: todo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      {todos.map((value) => {
        return (
          <div className="todos">
            <div className="todo">
              <div className="left">
                <input
                  onChange={(event) => {
                    console.log(event.target.checked);
                    console.log(value);
                    setTodos(
                      todos.filter((obj) => {
                        if (obj.id === value.id) {
                          obj.status = event.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  value={value.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p
                  style={
                    value.status
                      ? {
                          textDecorationLine: "line-through",
                          textDecorationStyle: "solid",
                        }
                      : { textDecoration: "" }
                  }
                >
                  {value.text}
                </p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
