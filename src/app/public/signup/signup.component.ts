import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import{Router} from '@angular/router';
import { CoreService } from 'src/app/core/core.service';

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
  constructor(private backend:BackendService,private router:Router,private _coreService: CoreService){}
  public error =null;

  ngOnInit():void{}

  submitSignup() {
    return this.backend.signup(this.form).subscribe({
      next: data => {
        console.log(data);
        this.router.navigateByUrl('login');
      },
      error: error => {
        this.handleError(error);
        this._coreService.openSnackBar('FAILED! TEID or email already in use');
        
      }
    });
  }
  passwordMatch() {
    return this.form.password === this.form.password_confirmation;
}

  handleError(error:any){
    if (error && error.error && error.error.error) {
      this.error = error.error.error;
    }
  }

}
