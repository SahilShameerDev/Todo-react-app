import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="list">
      {props.todoos.map((value) => {
        return (
          <div className="todos">
            <div className="todo">
              <div className="left">
                <label>
                  <input
                    onChange={(event) => {
                      console.log(event.target.checked);
                      console.log(value);
                      props.settodoos(
                        props.todoos.filter((obj) => {
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
                  <span className={value.id}></span>

                  <p
                    style={
                      value.status
                        ? {
                            textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                            opacity: "40%",
                          }
                        : { textDecoration: "" }
                    }
                  >
                    {value.text}
                  </p>
                </label>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={(event) => {
                    props.settodoos(
                      props.todoos.filter((obj) => {
                        if (obj.id != value.id) {
                          return value;
                        }
                      })
                    );
                  }}
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
