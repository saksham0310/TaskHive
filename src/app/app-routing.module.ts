import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { ChangepasswordComponent } from './auth/component/changepassword/changepassword.component';
import { TaskListComponent } from './task/component/task-list/task-list.component';
import { TaskDetailsComponent } from './task/component/task-details/task-details.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'change-password',component:ChangepasswordComponent},
  {path:'task-list',component:TaskListComponent},
  {path:'task/:id',component:TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
