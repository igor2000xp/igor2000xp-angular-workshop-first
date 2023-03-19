import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit, OnDestroy {
  @Input()  currentName = '';

  currentDate = new Date();

  deleteInterval?: NodeJS.Timer;

  ngOnInit() {
    this.deleteInterval = setInterval(() => {
      this.currentDate = new Date();
    }, 1000)
  }

  ngOnDestroy() {
    clearInterval(this.deleteInterval);
  }

}
