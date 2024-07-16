import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  IsValid:boolean=false;
  currUsername:String='saksham';
  currPassword:String='123';
  user:{username:String,password:String}| null=null;
  constructor(private router:Router) { }

  loginCheck(username:String,password:String):boolean{
    if(username==this.currUsername && password==this.currPassword)
      {
        this.IsValid=true;
        this.user={username,password};
        this.router.navigate(['/task-list']);
        return true;
      }
      return false;
  }

  userVaild(username:string):boolean{
    if(username==this.currUsername)
      {
        return true;
      }
      return false;
  }

  Signup(password:string)
  {
    this.currPassword=password;
    this.router.navigate(['/login']);
  }
}
