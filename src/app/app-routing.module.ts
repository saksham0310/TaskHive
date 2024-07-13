import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { MyTaskComponent } from './component/my-task/my-task.component';
import { ProfileComponent } from './my-profile/profile/profile.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'my-task',component:MyTaskComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
