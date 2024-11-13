import { MdCheck, MdDelete } from "react-icons/md";

export const TodoList = ({ todoKey, data, checked, onHandleDeleteTodo, onHandleToggleCheck }) => {
  return (
    <li className={`todo-item ${checked ? "checkList" : ""}`}>
      <span>{data}</span>
      <button
        className={`check-btn ${checked ? "checked" : ""}`}
        onClick={() => onHandleToggleCheck(todoKey)}
      >
        <MdCheck />
      </button>
      <button
        className="delete-btn"
        onClick={() => onHandleDeleteTodo(todoKey)}
      >
        <MdDelete />
      </button>
    </li>
  );
};
