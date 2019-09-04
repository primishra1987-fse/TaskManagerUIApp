import { Component, OnInit,NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {FormsModule,NgForm} from '@angular/forms';
import { TaskMgrEntity } from 'src/app/Modules/task-mgr-entity';
import { TaskService } from 'src/app/Services/task.service';
@NgModule({
  imports:[BrowserModule,FormsModule],
  providers:[ActivatedRoute]
})
@Component({
  selector: 'app-modify-task-mgr',
  templateUrl: './modify-task-mgr.component.html',
  styleUrls: ['./modify-task-mgr.component.css']
})
export class ModifyTaskMgrComponent implements OnInit {

  public updateResult: any;
  public taskID :number;
  public task1:string;
  public parentalId :number;
  public startDate :string;
  public endDate: string;
  public priority : number;
  public isTaskEnded : string;
  public isformValid :boolean=true;
  public isUpdatedSuccessFully:boolean=false;
  public isStartDateGreater:boolean=false;
   
  constructor(private _service:TaskService, private route: ActivatedRoute){

    const id = this.route.snapshot.paramMap.get('taskID');
    this._service.GetTask(parseInt(id)).subscribe(data=>{
    this.taskID=data.taskID;
    this.task1=data.task1;
    this.priority=data.priority;
   this.startDate=data.startDate;
    this.endDate=data.endDate;
    this.parentalId=data.parentalId;});
  
    }
  ngOnInit() {
  }
  UpdateTask():void 
  {
    let Taskdetails:TaskMgrEntity=
    {taskID:this.taskID,
      parentalId:this.parentalId,
      task1:this.task1,
      startDate:this.startDate,
      endDate:this.endDate,
      priority:this.priority,
      isTaskEnded:this.isTaskEnded};
  console.log("start date -- "+this.startDate);
  console.log("end date "+this.endDate);
  this.isformValid=true;
  if(Taskdetails.task1== undefined||Taskdetails.startDate==undefined||Taskdetails.endDate==undefined)
  {
    this.isformValid=false;
  }else if(Date.parse(Taskdetails.startDate)>Date.parse(Taskdetails.endDate))
  {
    //this.isUpdatedSuccessFully =false;
    
    this.isStartDateGreater=true;
  }
  else
  {
    this.isformValid=true;
  this._service.UpdateTask(Taskdetails.taskID,Taskdetails).subscribe(data=>this.updateResult=data);
  this.isUpdatedSuccessFully =true;
  
  
  }
  
  }
  }
  
