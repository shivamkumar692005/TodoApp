import { useState, useEffect } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const todoKey = "reactTodo";

export const Todo = () => {
  const [task, setTask] = useState(() => {
    const storedTask = localStorage.getItem(todoKey);
    try {
      return storedTask ? JSON.parse(storedTask) : [];
    } catch (error) {
      console.error("Error parsing localStorage data", error);
      return [];
    }
  });

  // Update localStorage whenever `task` changes
  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(task));
  }, [task]);

  const handleOnSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifTodoContentMatch = task.find((currTask) => currTask.content === content);
    if (ifTodoContentMatch) return;

    setTask((prev) => [...prev, { id, content, checked }]);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTask = task.filter((currTask) => currTask.id !== id);
    setTask(updatedTask);
  };

  const handleToggleCheck = (id) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.id === id) {
        return { ...currTask, checked: !currTask.checked };
      }
      return currTask;
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleOnSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask) => (
            <TodoList
              key={currTask.id}
              todoKey={currTask.id}
              data={currTask.content}
              checked={currTask.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleToggleCheck={handleToggleCheck}
            />
          ))}
        </ul>
      </section>
      {task.length > 0 && (
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      )}
    </section>
  );
};
