export interface TodoModel {
  id: number;
  title: string;
  status: TodoStatus;
  completed: boolean;
}

type TodoStatus = 'completed' | 'inProgress' | 'todo';
