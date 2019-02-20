import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this._authService.isUserAuthenticated()) {
      this.router.navigateByUrl('login');
      return false;
    }

    return true;
  }

}
