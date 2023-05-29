import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {TokenService} from 'src/app/services/token.service';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
  constructor(private Auth:AuthService,private router:Router,private Token:TokenService,private back:BackendService){
    this.back.name().subscribe(
      (response) => {
        console.log(response); // Print the response to see its contents
        //this.userName = response; // Assuming the name is a property of the response object
      },
      (error) => {
        console.log(error); // Handle any errors that occur during the request
      }
    );
  }
public loggedIn:boolean = false;


public userName = "";

logout(event:MouseEvent)
{
  event.preventDefault();
  this.Token.remove();
  this.Auth.changeAuthStatus(false);
  this.router.navigateByUrl('/login');

}

}

