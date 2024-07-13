import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username:string='';
  password:string='';
  constructor(private auth:AuthService){}
  

  onSubmit()
  {
    if(this.auth.userVaild(this.username))
      {
          this.auth.Signup(this.password);
      }
      else{
        alert("Invaild username");
      }
  }
}
