import { Injectable } from '@angular/core';

// import { CoreModule } from '../core.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly localStorageKey = "localStorageKey";
  // userNameSubmitted = false;
  currentName = '';

  getSavedUser() {
    this.currentName = localStorage.getItem(this.localStorageKey) || '';

    // if (savedName) {
    //   this.currentName = savedName;
      // this.userNameSubmitted = true;
    // }
    return this.currentName;
  }

  submitUserName(enteredName: string): void {
    // this.userNameSubmitted = true;
    this.currentName = enteredName;
    localStorage.setItem(this.localStorageKey, this.currentName);
  }

}
