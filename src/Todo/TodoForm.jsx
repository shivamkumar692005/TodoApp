import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({ content: "", checked: false });

  const handleInputChange = (value) => {
    setInputValue((prev) => ({ ...prev, content: value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputValue.content.trim()) {
      onAddTodo({ id: Math.random().toString(36).substr(2, 9), ...inputValue });
      setInputValue({ content: "", checked: false });
    }
  };

  return (
    <section className="form">
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-button">
            Add task
          </button>
        </div>
      </form>
    </section>
  );
};
