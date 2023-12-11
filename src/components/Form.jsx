import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandle = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);

    setInputText("");
  };
  

  return (
    <form>
      <div className="search">
        <input
          type="text"
          className="todo-input"
          placeholder="Add..."
          onChange={inputTextHandler}
          value={inputText}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandle}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>

      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={inputTextHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
