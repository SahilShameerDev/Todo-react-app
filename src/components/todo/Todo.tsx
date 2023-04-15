import React from "react";
import "./Todo.css";

function Todo(props) {
  const dragItemsRef = React.useRef<any>(null);
  const dragOverItemsRef = React.useRef<any>(null);

  console.log(props.todoos);
  

  const handleSort = () => {
    let _items = [...props.todoos];

    const draggedItemContent = _items.splice(dragItemsRef.current, 1)[0];

    _items.splice(dragOverItemsRef.current, 0, draggedItemContent);

    dragItemsRef.current = null;
    dragOverItemsRef.current = null;

    props.settodoos(_items);
  };

  return (
    <div className="list">
      {props.todoos.map((value, index) => {
        return (
          <div className="todos">
            <div
              className="todo"
              draggable
              onDragStart={(e) => (dragItemsRef.current = index)}
              onDragEnter={(e) => (dragOverItemsRef.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e)=>e.preventDefault()}
            >
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
                        if (obj.id !== value.id) {
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
