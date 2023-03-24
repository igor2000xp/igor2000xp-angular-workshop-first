import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  @Output() submitUser = new EventEmitter<string>;
  currentName = '';

  submitUserName() {
    this.submitUser.emit(this.currentName);
    this.currentName = '';
  }

}
