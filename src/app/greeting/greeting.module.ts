import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { GreetingRoutingModule } from './greeting-routing.module';
import { GreetingPageComponent } from './pages/greeting/greeting-page.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    GreetingPageComponent,
    GreetingComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    GreetingRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class GreetingModule { }
