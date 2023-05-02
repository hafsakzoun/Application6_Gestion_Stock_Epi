import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {TokenService} from 'src/app/services/token.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  public userName !: string;
  public loggedIn:boolean = false;
  ngOnInit() {
    const userId = this.Token.getUser();
    this.backend.getUserName(userId).subscribe(
      (data) => {
        this.userName = data.name; 
      },
      (error) => {
        console.log(error);
      }
  
  );
   } 
  constructor(private Auth:AuthService,private router:Router,private Token:TokenService,private backend:BackendService){}
  logout(event:MouseEvent)
  {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  
  }
}