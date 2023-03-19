import { Component, OnInit } from '@angular/core';

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

  // todoItems: TodoModel[] = mockTodoList;
  //
  // newTodoItem = '';

  deleteInterval?: NodeJS.Timer;

  private readonly localStorageKey = 'momentumUserName';

  submitUserName(enteredName: string): void {
    this.userNameSubmitted = true;
    this.currentName = enteredName;
    localStorage.setItem(this.localStorageKey, this.currentName);
  }

  // submitTodo() {
  //   this.todoItems = [... this.todoItems, {
  //     id: this.todoItems.length,
  //     status: 'todo',
  //     title: this.newTodoItem,
  //     completed: false,
  //   }];
  //   this.newTodoItem = '';
  // }

  ngOnInit() {
    // TODO moved to the service
    const savedName = localStorage.getItem(this.localStorageKey);

    if (savedName) {
      this.currentName = savedName;
      this.userNameSubmitted = true;
    }
    // this.deleteInterval = setInterval(() => {
    //   this.currentDate = new Date();
    // }, 1000)
  }
}
