import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private _authService: AuthService) {
    this.username = 'kay';
    this.password = 'mercury border collie';
  }

  ngOnInit() {
  }

  onLoginClick() {
    let isUserCredValid = this._authService.authenticateUser(this.username, this.password);
    console.log('%c lg: isUserCredValid: ', 'background: #222; color: #bada55', isUserCredValid);
  }

}
