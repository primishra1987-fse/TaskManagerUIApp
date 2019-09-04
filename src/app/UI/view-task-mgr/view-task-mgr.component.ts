import { Component, OnInit } from '@angular/core';
  import { TaskMgrEntity } from 'src/app/Modules/task-mgr-entity';
  import { TaskService } from 'src/app/Services/task.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-view-task-mgr',
  templateUrl: './view-task-mgr.component.html',
  styleUrls: ['./view-task-mgr.component.css']
})
export class ViewTaskMgrComponent implements OnInit {

  list:TaskMgrEntity[];
  constructor(private _service:TaskService,public datepipe: DatePipe) {
    this._service.GetAllTask().subscribe(data=>this.list=data);
    
   }

  ngOnInit() {
  }
  DeleteTask(taskId:number):void
  {
    let DeleteResult:any;
    alert("Deleting task with Id - " + taskId);
    this._service.DeleteTask(taskId).subscribe(data=>DeleteResult=data);
    
    this._service.GetAllTask().subscribe(data=>this.list=data);
   
  }

  EndTaskFlagchange(Item:TaskMgrEntity):void
  {
    console.log("end task flag " +Item.isTaskEnded);
    let updateResult: any;
    this._service.EndTaskFlagUpdate(Item).subscribe(data=>updateResult=data);
    this._service.GetAllTask().subscribe(data=>this.list=data);
    alert("Task has been marked as End..!");
  }

  trackTask(index:number, item:any) {
 
    return item ? item.taskID : undefined;
  
  }
  TaskFilter(taskdetail:string):void
  {
    if(taskdetail!=undefined && taskdetail.length!=0)
    {
  this._service.GetAllTask().subscribe(data=>this.list=data.filter(item=>item.task1.toUpperCase().includes(taskdetail.toUpperCase())));
  
    }
    else
    {
      this._service.GetAllTask().subscribe(data=>this.list=data);
    }
     
  }

  
  ParentTaskFilter(Parenttaskdetail:number):void
  {
    if(Parenttaskdetail!=undefined && Parenttaskdetail!=0)
    {
  this._service.GetAllTask().subscribe(data=>this.list=data.filter(item=>item.parentalId==Parenttaskdetail));
    }
    else
    {
      this._service.GetAllTask().subscribe(data=>this.list=data);
    }

  }

  PriorityTaskFilter(taskPriority:number):void
  {
    if(taskPriority!=undefined && taskPriority!=0)
    {
    
  this._service.GetAllTask().subscribe(data=>this.list=data.filter(item=>item.priority==taskPriority));
    }
  else
  {
    this._service.GetAllTask().subscribe(data=>this.list=data);
  }
     
  }
  StartdateTaskFilter(startdate:string):void
  {
    if(startdate!=undefined && startdate.length!=0)
    {
      
  this._service.GetAllTask().subscribe(data=>this.list=data.filter(item=>this.datepipe.transform(item.startDate, 'yyyy-MM-dd')==this.datepipe.transform(startdate, 'yyyy-MM-dd')));
    }
    else
     {
  this._service.GetAllTask().subscribe(data=>this.list=data);
     }
  }
  EnddateTaskFilter(endDate:string):void
  {
    if(endDate!=undefined && endDate.length!=0)
    {
  this._service.GetAllTask().subscribe(data=>this.list=data.filter(item=>this.datepipe.transform(item.endDate, 'yyyy-MM-dd')==this.datepipe.transform(endDate, 'yyyy-MM-dd')));
    }
   else
    {
    this._service.GetAllTask().subscribe(data=>this.list=data);
    }
  } 

  //CombinedDateFilter(startDate:string, endDate:string) : void
 // {
  //  if(endDate!=undefined && endDate.length!=0 && startDate!=undefined && startDate.length!=0)
  //  {
  //    this._service.GetAllTask().subscribe(data=>this.list=data.filter(item=>this.datepipe.transform(item.endDate, 'yyyy-MM-dd') < this.datepipe.transform(endDate, 'yyyy-MM-dd')
   //   && (item=>this.datepipe.transform(item.startDate, 'yyyy-MM-dd') > this.datepipe.transform(startDate, 'yyyy-MM-dd'))));
  //  }
//}
}

