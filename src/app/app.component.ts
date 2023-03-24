import { Component } from '@angular/core';
// import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workshop-first';
  // currentName = '';
  // userNameSubmitted = false;
  // currentDate = new Date();
  // deleteInterval?: NodeJS.Timer;
  // private readonly localStorageKey = 'momentumUserName';

  // constructor(private userService: UserService) {
  // }

  // ngOnInit() {
  //   this.currentName = this.userService.getSavedUser();
  // }
  // submitUserName(enteredName: string): void {
  //   this.currentName = enteredName;
  //   this.userService.submitUserName(enteredName);
  // }

}
