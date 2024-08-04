import { TodoItemProps } from "../../types";

export function Task({ task, deleteTask, toggleTask }: TodoItemProps) {
  const { text, completed, id } = task;
  return (
    <li className="list-group-item ">
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={completed}
        onClick={() => toggleTask(id)}
      />
      <label
        className={`${
          completed && "text-decoration-line-through"
        } form-check-label text-break`}
        htmlFor="firstCheckbox"
      >
        {text}
      </label>
      <button
        type="button"
        className="btn btn-primary  button ms-2"
        onClick={() => deleteTask(id)}
      >
        Удалить
      </button>
    </li>
  );
}
