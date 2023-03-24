import { Component } from '@angular/core';
import { TodoModel } from '../../../shared/model/todo-model';
import { mockTodoList } from '../../constants/todo-constant';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoItems: TodoModel[] = mockTodoList;
  newTodoItem = '';

  submitTodo() {
    this.todoItems = [... this.todoItems, {
      id: this.todoItems.length,
      status: 'todo',
      title: this.newTodoItem,
      completed: false,
    }];
    this.newTodoItem = '';
  }
}
