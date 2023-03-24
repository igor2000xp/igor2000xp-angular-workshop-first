import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.scss']
})
export class GreetingPageComponent implements OnInit {
  currentName = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.currentName = this.userService.getSavedUser() || '';
    // this.submitUserName(this.currentName);
  }

  // submitUserName(enteredName: string): void {
  //   this.currentName = enteredName;
  //   this.userService.submitUserName(enteredName);
  // }
}
