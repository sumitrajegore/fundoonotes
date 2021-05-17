import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { RagisterComponent } from './componant/ragister/ragister.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componant/login/login.component';
import { ResetpasswordComponent } from './componant/resetpassward/resetpassward.component';
import { ForgotpasswordComponent } from './componant/forgotpassword/forgotpassword.component';
import { FundooheaderComponent } from './componant/fundooheader/fundooheader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { DisplayComponent } from './componant/display/display.component';
import { CreateNoteComponent } from './componant/create-note/create-note.component';
import { TrashComponent } from './componant/trash/trash.component';
import { RemindersComponent } from './componant/reminders/reminders.component';
import { NotesComponent } from './componant/notes/notes.component';
import { EditLabelsComponent } from './componant/edit-labels/edit-labels.component';
import { ArchiveComponent } from './componant/archive/archive.component';
import { HeadebarComponent } from './componant/headebar/headebar.component';
import { SidebarComponent } from './componant/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    RagisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    FundooheaderComponent,
    DashboardComponent,
    DisplayComponent,
    CreateNoteComponent,
    TrashComponent,
    RemindersComponent,
    NotesComponent,
    EditLabelsComponent,
    ArchiveComponent,
    HeadebarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }