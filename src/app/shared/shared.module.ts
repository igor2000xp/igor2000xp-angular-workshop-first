import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeGreetingPipe } from './pipes/time-greeting.pipe';
import { TaskCompletedDirective } from './directives/task-completed.directive';



@NgModule({
  declarations: [
    TimeGreetingPipe,
    TaskCompletedDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeGreetingPipe,
    TaskCompletedDirective,
  ]
})
export class SharedModule { }
