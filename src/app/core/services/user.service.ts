import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly localStorageKey = "localStorageKey";
  currentName = '';

  getSavedUser() {
    this.currentName = localStorage.getItem(this.localStorageKey) || '';
    return this.currentName;
  }

  submitUserName(enteredName: string): void {
    this.currentName = enteredName;
    localStorage.setItem(this.localStorageKey, this.currentName);
  }

}
