import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authorization/authguard.guard';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetComponent } from './Component/reset/reset.component';
import { TakeNotesComponent } from './Component/take-notes/take-notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPassword', component: ForgetComponent },
  { path: 'resetPassword/:token', component: ResetComponent },
  {
    path: 'home', component: DashboardComponent, canActivate:[AuthguardGuard],
    children: [
      { path: '', redirectTo: "/home/create", pathMatch: 'full' },
      { path: 'create', component: TakeNotesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
