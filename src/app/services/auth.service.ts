import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

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
  private minutesToExpire: number;

  constructor() {
    this.authKey = btoa('isUserAuthenticated').replace(/=/g, '');
    this.minutesToExpire = 120; // 2 hours

    this.userCreds = {
      //          kay     kaylynan        lynakaya
      username: ['a2F5', 'a2F5bHluYW4=', 'bHluYWtheWE='],
      // mercury border collie
      password: 'bWVyY3VyeSBib3JkZXIgY29sbGll'
    };

  }

  public isUserAuthenticated(): boolean {
    let auth = localStorage.getItem(this.authKey);

    if (_.isEmpty(auth)) {
      // Not logged in
      return false;
    }

    let decoded = JSON.parse(atob(auth));

    if (!this.isValidTime(_.get(decoded, 'timestamp', null))) {
      // Session is too old. expire it
      localStorage.clear();
      return false;
    }

    // Finally check the session is authenticated
    return _.get(decoded, 'isAuthenticated', false);
  }

  // Sets local storage details if creds are valid
  public authenticateUser(username: string, password: string): boolean {
    let isValid = _.includes(this.userCreds.username, btoa(username)) && this.userCreds.password === btoa(password);

    if (isValid) {
      // Store details in local storage
      localStorage.setItem(this.authKey, btoa(JSON.stringify({ username, password, isAuthenticated: true, timestamp: `${new Date().toISOString()}` })));
    }

    return isValid;

  }

  private isValidTime(timeframe: string): boolean {
    let ma = moment(timeframe);
    let mb = moment(new Date());
    return mb.diff(ma, 'minutes') < this.minutesToExpire;
  }
}
