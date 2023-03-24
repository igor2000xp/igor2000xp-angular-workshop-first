import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent{
  // currentName = '';

  constructor(private userService: UserService, private router: Router) {
  }

  submitUserName(enteredName: string): void {
    // this.currentName = enteredName;
    this.userService.submitUserName(enteredName);
    this.router.navigateByUrl('/greeting');
  }

}
