import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-workshop-first';
  enterName = '';

  userNameSubmitted = false;

  currentDate = new Date();

  submitUserName(): void {
    this.userNameSubmitted = true;
  }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000)
  }
}
