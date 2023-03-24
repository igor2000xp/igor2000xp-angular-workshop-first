import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/guarde/user.guard';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: 'greeting',
    loadChildren: () => import('./greeting/greeting.module').then(m => m.GreetingModule),
    canActivate: [UserGuard],
    canLoad: [UserGuard],
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', redirectTo: 'welcome', pathMatch: 'full' }, // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
