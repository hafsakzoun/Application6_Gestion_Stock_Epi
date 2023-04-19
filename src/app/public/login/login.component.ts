import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form={
    TEID:null,
    password:null
  }
  constructor(){}
  ngOnInit():void{}
  submitlogin(){
    console.log(this.form);
  }
}
