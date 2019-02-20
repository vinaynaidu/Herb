import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private _authService: AuthService, private router: Router) {
    this.username = 'kay';
    this.password = 'mercury border collie';
  }

  ngOnInit() {
  }

  onInputValueChange() {
    this.errorMessage = null;
  }

  onLoginClick() {
    this.errorMessage = null;
    let isUserCredValid = this._authService.authenticateUser(this.username, this.password);

    if (isUserCredValid) {
      this.router.navigateByUrl('');

    } else {
      this.username = '';
      this.password = '';
      this.errorMessage = ['No cookie for you', 'Nope, that doesn\'t work', 'I don\'t like that one', 'You almost got it right'][_.random(0, 3)];
    }
  }

}
