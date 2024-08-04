import React, { useState } from "react";

interface TodoInputProps {
  addTask: (text: string) => void;
}

export function NewTaskInput({ addTask }: TodoInputProps) {
  const [newTask, setNewTask] = useState("");

  const HandleAddTodo = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };
  const HandleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(evt.target.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Новая Задача"
        aria-describedby="button-addon2"
        onChange={HandleInputChange}
        value={newTask}
      />
      <button
        className="btn btn-outline-primary btn-sm button"
        type="button"
        id="button-addon2"
        onClick={HandleAddTodo}
      >
        Добавить
      </button>
    </div>
  );
}
