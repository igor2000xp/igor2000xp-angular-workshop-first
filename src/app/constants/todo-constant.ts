import { TodoModel } from '../shared/model/todo-model';

export const mockTodoList: TodoModel[] = [
  { id: 1, title: 'Conduct the webinar', status: 'todo', completed: false },
  { id: 2, title: 'Prepare for the demo', status: 'completed', completed: true },
  { id: 3, title: 'Feed the cat', status: 'inProgress', completed: false },
];
