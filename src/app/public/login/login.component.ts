import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { TokenService } from 'src/app/services/token.service';
import{Router} from '@angular/router';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;
  public form={
    TEID:null,
    password:null
  }
  constructor(private backend:BackendService,private token:TokenService,private router:Router,private auth:AuthService){}
  ngOnInit():void{}
  public error =null;
  submitlogin(){
    //console.log(this.form);
    return this.backend.login(this.form).subscribe({
      next: data => {
        this.handleResponse(data);
      },
      error: error => {
        this.handleError(error);
      }
    });
  }
  
  handleError(error:any){
    if (error && error.error && error.error.error) {
      this.error = error.error.error;
    }
  }
  handleResponse(data:any){
    console.log(data.access_token);
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('user');
  }
}
