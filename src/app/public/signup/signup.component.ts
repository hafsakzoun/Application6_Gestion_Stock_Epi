import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public form={
    name:null,
    email:null,
    TEID:null,
    password:null,
    password_confirmation:null
  }
  constructor(private backend:BackendService){}
  public error:any =[];
  ngOnInit():void{}
  submitSignup(){
    console.log(this.form);
    return this.backend.signup(this.form).subscribe(data=>console.log(data),error=>this.handleError(error)); 
  }
  handleError(error:any){
    this.error=error.error.error;
  }

}
