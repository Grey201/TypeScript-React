import { useState } from "react";
import { Task } from "../Task/Task";
import { NewTaskInput } from "../NewTaskInput/NewTaskInput";
import { TTasks, TTask } from "../../types.js";
import { data } from "../mocks/data";
import { uniqueID } from "../../utils";

export function App() {
  const [tasks, setTasks] = useState<TTasks>(data);

  const addTask = (text: string) => {
    const newTask: TTask = { id: uniqueID(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="container">
      <h1 className="text-center m-4">ToDo List</h1>
      <NewTaskInput addTask={addTask} />
      <ul className="list-group">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
