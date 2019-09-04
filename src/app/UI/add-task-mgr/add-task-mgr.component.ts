import { Component,NgModule, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';
import { TaskMgrEntity } from 'src/app/Modules/task-mgr-entity';
import {FormsModule,NgForm,ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:[BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [ HttpClientModule],
  exports:[FormsModule]
})
@Component({
  selector: 'app-add-task-mgr',
  templateUrl: './add-task-mgr.component.html',
  styleUrls: ['./add-task-mgr.component.css']
})

export class AddTaskMgrComponent implements OnInit {

  public insertResult: any;
  public task1:string;
  public parentalId :number;
  public startDate :string;
  public endDate: string;
  public priority : number;
  public isTaskEnded : string;
  public IsformValid :boolean=true;
  
  public IsAddedSuccessFully:boolean=false;
  constructor(private _service:TaskService)  { }

  ngOnInit() {
    
  }

AddNewTask(form: NgForm):void 
{
  let Taskdetails:TaskMgrEntity=
  {taskID:0,
    parentalId:this.parentalId,
  task1:this.task1,
  startDate:this.startDate,
  endDate:this.endDate,
  priority:this.priority,
  isTaskEnded:this.isTaskEnded
  
};

if (Taskdetails.priority == undefined)
  Taskdetails.priority = 15;
if(Taskdetails.task1== undefined||Taskdetails.startDate==undefined||Taskdetails.endDate==undefined)
{
  this.IsformValid=false;
}
else
{
  
  this.IsformValid=true;
  console.log("Priority" +Taskdetails.priority);
  console.log("ParentId " +Taskdetails.parentalId);
  console.log("Task1 :: " +Taskdetails.task1);
  console.log("Status :: " +Taskdetails.isTaskEnded);
this._service.AddNewTask(Taskdetails).subscribe(data=>this.insertResult=data);
this.IsAddedSuccessFully =true;
form.reset();
}

}
ResetTaskForm(form: NgForm):void 
{
  form.reset();
}


}
