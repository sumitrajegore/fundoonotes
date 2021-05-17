import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './componant/archive/archive.component';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { DisplayComponent } from './componant/display/display.component';
import { EditLabelsComponent } from './componant/edit-labels/edit-labels.component';
import { ForgotpasswordComponent } from './componant/forgotpassword/forgotpassword.component';
import { LoginComponent } from './componant/login/login.component';
import { NotesComponent } from './componant/notes/notes.component';
import { RagisterComponent } from './componant/ragister/ragister.component';
import { RemindersComponent } from './componant/reminders/reminders.component';
import { ResetpasswordComponent } from './componant/resetpassward/resetpassward.component';
import { TrashComponent } from './componant/trash/trash.component';

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
    path:'dashboard', component: DashboardComponent,
      children :[
        { path : 'notes', component: NotesComponent},
        { path : 'reminders', component: RemindersComponent},
        { path : 'edit-labels', component: EditLabelsComponent},
        { path : 'archive', component: ArchiveComponent},
        { path : 'trash', component: TrashComponent},
        { path : "", redirectTo: "notes", pathMatch: "full" }
      ]
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