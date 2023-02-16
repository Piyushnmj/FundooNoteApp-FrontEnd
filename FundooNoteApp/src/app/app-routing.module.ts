import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './Component/forget/forget.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetComponent } from './Component/reset/reset.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgetPassword', component:ForgetComponent},
  {path:'resetPassword/:token', component:ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
