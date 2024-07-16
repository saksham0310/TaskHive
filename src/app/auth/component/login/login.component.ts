import { Component } from '@angular/core';
import { SecurityService } from '../../service/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string='';
  password:string='';
  constructor(private authService:SecurityService){}

  onSubmit(){
    if(!this.authService.loginCheck(this.username,this.password))
      {
        alert("Invaild");
      }
  }
}
