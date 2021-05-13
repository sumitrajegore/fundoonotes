import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { ForgetpasswardComponent } from './componant/forgetpassward/forgetpassward.component';
import { LoginComponent } from './componant/login/login.component';
import { RagisterComponent } from './componant/ragister/ragister.component';
import { ResetpasswardComponent } from './componant/resetpassward/resetpassward.component';


const routes: Routes = [
  {
    path : "",  
    redirectTo: "login",
    pathMatch: "full"
  },
  { 
    path: 'ragister',
    component: RagisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetpasswardComponent
  },
  {
    path: 'forget',
    component: ForgetpasswardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: "**",
    redirectTo: "reset",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})

export class AppRoutingModule { } 

