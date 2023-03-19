import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TimeGreetingPipe } from './pipes/time-greeting.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserInputComponent } from './components/user-input/user-input.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskCompletedDirective } from './directives/task-completed.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimeGreetingPipe,
    UserInputComponent,
    GreetingComponent,
    TodoListComponent,
    TaskCompletedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
