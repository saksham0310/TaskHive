import { Component } from '@angular/core';
import { SecurityService } from '../../service/security.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  username:string='';
  password:string='';
  constructor(private auth:SecurityService){}
  

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
