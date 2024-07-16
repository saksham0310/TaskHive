import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { ChangepasswordComponent } from './auth/component/changepassword/changepassword.component';
import { TaskListComponent } from './task/component/task-list/task-list.component';
import { ProfileComponent } from './my-profile/profile/profile.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'change-password',component:ChangepasswordComponent},
  {path:'task-list',component:TaskListComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
