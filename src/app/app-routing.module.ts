import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTaskMgrComponent} from './UI/add-task-mgr/add-task-mgr.component';
import {ViewTaskMgrComponent} from './UI/view-task-mgr/view-task-mgr.component';
import {ModifyTaskMgrComponent} from './UI/modify-task-mgr/modify-task-mgr.component';
const routes: Routes = [
  {path:'', redirectTo:'/view-task-mgr' , pathMatch:'full'},
{path:'add-task-mgr',component:AddTaskMgrComponent},
{path:'view-task-mgr',component:ViewTaskMgrComponent},
{path:'modify-task-mgr/:taskID',component:ModifyTaskMgrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
