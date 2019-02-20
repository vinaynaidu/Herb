import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** Dummy authentication
   * IMPORTANT: DO NOT USE IN PRODUCTION; PROTOTYPE ONLY
   * This service uses a local storage api to authenticate and validate user.
   * This is for demonstration purposes only and should never be used in prod
   */

  private userCreds: any;
  private authKey: string;

  constructor() {
    this.authKey = btoa('isUserAuthenticated');
    this.userCreds = {
      //          kay     kaylynan        lynakaya
      username: ['a2F5', 'a2F5bHluYW4=', 'bHluYWtheWE='],
      // mercury border collie
      password: 'bWVyY3VyeSBib3JkZXIgY29sbGll'
    };

  }

  public isUserAuthenticated(): boolean {
    let auth = localStorage.getItem(this.authKey);

    if (!!auth) {
      return _.get(JSON.parse(atob(auth)), 'isAuthenticated', false);
    }

    return false;
  }

  // Sets local storage details if creds are valid
  public authenticateUser(username: string, password: string): boolean {
    let isValid = _.includes(this.userCreds.username, btoa(username)) && this.userCreds.password === btoa(password);

    if (isValid) {
      // Store details in local storage
      localStorage.setItem(this.authKey, btoa(JSON.stringify({ username, password, isAuthenticated: true })));
    }

    return isValid;

  }
}
