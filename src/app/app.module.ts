import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskMgrComponent } from './UI/add-task-mgr/add-task-mgr.component';


import { TaskService } from './Services/task.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import { ViewTaskMgrComponent } from './UI/view-task-mgr/view-task-mgr.component';
import { ModifyTaskMgrComponent } from './UI/modify-task-mgr/modify-task-mgr.component'

@NgModule({
  declarations: [
    AppComponent,
    AddTaskMgrComponent,
    
    
    
    ViewTaskMgrComponent,
    
    
    
    ModifyTaskMgrComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskService, HttpClientModule,HttpClient,DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
