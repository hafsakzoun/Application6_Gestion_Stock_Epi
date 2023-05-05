import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import{Router} from '@angular/router';
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
  constructor(private backend:BackendService,private router:Router){}
  public error:any =[];
  ngOnInit():void{}

  submitSignup() {
    return this.backend.signup(this.form).subscribe({
      next: data => {
        console.log(data);
        this.router.navigateByUrl('login');
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

}
