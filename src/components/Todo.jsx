import React from "react";

function Todo({ text, id}) {
  return (
    <div className="todo">
      <button className="complete-btn">
        <i className="fas fa-check-circle"></i>
      </button>
      <li className="todo-item">{text}</li>
      <button className="trash-btn">
        <i className="fa fa-minus-circle"></i>
      </button>
    </div>
  );
}

export default Todo;
