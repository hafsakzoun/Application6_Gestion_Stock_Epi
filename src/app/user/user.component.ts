import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {TokenService} from 'src/app/services/token.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
public loggedIn:boolean = false;
constructor(private Auth:AuthService,private router:Router,private Token:TokenService){}
logout(event:MouseEvent)
{
  event.preventDefault();
  this.Token.remove();
  this.Auth.changeAuthStatus(false);
  this.router.navigateByUrl('/login');

}
}

