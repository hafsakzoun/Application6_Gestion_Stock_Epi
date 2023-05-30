import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    if (this.tokenService.loggedIn() && this.tokenService.isAdmin()) {
      return true;
    }

    return false;
  }
}
