import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { DisplayComponent } from './componant/display/display.component';
import { ForgotpasswordComponent } from './componant/forgotpassword/forgotpassword.component';
import { LoginComponent } from './componant/login/login.component';
import { RagisterComponent } from './componant/ragister/ragister.component';
import { ResetpasswordComponent } from './componant/resetpassward/resetpassward.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { 
    path: 'register',
    component: RagisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetpasswordComponent
  },
  {
    path: 'forgot',
    component: ForgotpasswordComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'display',
    component: DisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}