import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent{

  constructor(private userService: UserService, private router: Router) {}

  async submitUserName(enteredName: string) {
    this.userService.submitUserName(enteredName);
    await this.router.navigateByUrl('/greeting');
  }

}
