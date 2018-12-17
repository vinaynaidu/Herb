import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentMenuState;

  private source;
  private isDeviceScreenSmall: boolean;

  constructor(private deviceDetectorService: DeviceDetectorService) {

    // Uncomment next line to automatically open menu on larger screens
    // this.isDeviceScreenSmall = this.deviceDetectorService.isMobile() || this.deviceDetectorService.isTablet() || true;
    this.isDeviceScreenSmall = false;

    this.source = new BehaviorSubject<boolean>(this.isDeviceScreenSmall);
    this.currentMenuState = this.source.asObservable();
  }

  toggleMenu(state: boolean) {
    this.source.next(state);
  }

  isMenuClosedOnStart(): boolean {
    return this.isDeviceScreenSmall;
  }

}
