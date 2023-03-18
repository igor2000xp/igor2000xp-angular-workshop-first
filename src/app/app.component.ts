import { Component, OnInit } from '@angular/core';
import { TodoModel } from './model/todo-model';
import { mockTodoList } from './constants/todo-constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-workshop-first';
  currentName = '';

  userNameSubmitted = false;

  currentDate = new Date();

  todoItems: TodoModel[] = mockTodoList;

  private readonly localStorageKey = 'momentumUserName';

  submitUserName(enteredName: string): void {
    this.userNameSubmitted = true;
    this.currentName = enteredName;
    localStorage.setItem(this.localStorageKey, this.currentName);
  }

  ngOnInit() {
    // TODO moved to the service
    const savedName = localStorage.getItem(this.localStorageKey);

    if (savedName) {
      this.currentName = savedName;
      this.userNameSubmitted = true;

    }

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000)
  }
}
