import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RagisterComponent } from './componant/ragister/ragister.component';
import { ClarityModule } from '@clr/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './componant/login/login.component';
import { ResetpasswardComponent } from './componant/resetpassward/resetpassward.component';
import { ForgetpasswardComponent } from './componant/forgetpassward/forgetpassward.component';
import {AppRoutingModule} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './componant/dashboard/dashboard.component';


@NgModule({

  declarations: [
    AppComponent,
    RagisterComponent,
    LoginComponent,
    ResetpasswardComponent,
    ForgetpasswardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
