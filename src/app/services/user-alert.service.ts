import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

/** Common service class for user notifications like snackbars, alerts, bottom sheets etc
 * Helps to keep all config in one place.
 */

@Injectable({
  providedIn: 'root'
})
export class UserAlertService {

  constructor(private snackBar: MatSnackBar) { }

  showToasterMessage(message: string, action: string = 'OK', duration: number = 2500) {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: 'custom-snackbar'
    });
  }
}
