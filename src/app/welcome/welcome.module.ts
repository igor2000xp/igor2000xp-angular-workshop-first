import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomePageComponent } from './pages/welcome/welcome-page.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    WelcomePageComponent,
    UserInputComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ]
})
export class WelcomeModule { }
