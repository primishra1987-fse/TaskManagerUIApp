import { Injectable } from '@angular/core';
import {Observable} from 'node_modules/rxjs';
import { map } from 'rxjs/operators';
import { TaskMgrEntity } from '../Modules/task-mgr-entity';
import {HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private _ApiUrl ="http://localhost:8095/task";
  constructor(private _http:HttpClient) {

   }

  GetAllTask() : Observable<TaskMgrEntity[]>
  {
    return  this._http.get<TaskMgrEntity[]>(this._ApiUrl+"/getAllTasks").pipe(map(x=>x));

  }
  GetTask(taskId :number) : Observable<TaskMgrEntity>
  {
    console.log("Task id - get :: " +taskId);
    return  this._http.get<TaskMgrEntity>(this._ApiUrl+"/getTask/"+taskId).pipe(map(x=>x));

  }
  AddNewTask(Item:TaskMgrEntity):Observable<any>
  {
    console.log("Service values :: " + Item.priority);
    
    return this._http.post(this._ApiUrl+"/addTask",Item)
    .pipe(map(x=>x));
  }
  UpdateTask(taskId :number, Item: TaskMgrEntity):Observable<any>
  {
    return  this._http.put(this._ApiUrl+"/updateTask/"+taskId,Item).pipe(map(x=>x));
  }
  
  EndTaskFlagUpdate(Item: TaskMgrEntity):Observable<any>
  {
    return  this._http.put(this._ApiUrl+"/endTask",Item).pipe(map(x=>x));
  }
  DeleteTask(taskId:number):Observable<any>
  {
    return  this._http.delete(this._ApiUrl+"/deleteTask/"+taskId).pipe(map(x=>x));
  }
}
