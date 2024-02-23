import React, { useState, useEffect } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load todos from local storage when the component mounts
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // Add new todo
      addTodo(value);

      // Update todos state and save to local storage
      const newTodo = { id: todos.length + 1, task: value, completed: false, isEditing: false };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      // Clear input value
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <div className="input-group">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="What would you like to do?"
        />
        <button type="submit" className="todo-btn">
          +
        </button>
      </div>
    </form>
  );
};
