export type TTask = {
  id: string;
  text: string;
  completed: boolean;
};

export type TTasks = TTask[];

export type TodoItemProps = {
  task: TTask;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};
