import { QuestionFormComponent } from './question/question-form.component';
import { SignupScreenComponent } from './auth/signup-screen.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { QuestionDetailComponent } from './question/question-detail.component';
import { SigninScreenComponent } from './auth/signin-screen.component';

import { MomentModule } from 'angular2-moment';
import { AnswerFormComponent } from './answer/answer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionListComponent } from './question/question-list.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
