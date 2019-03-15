import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentMenuState: any;
  isSubmitterInboxSelected: boolean;

  private source: any;
  private isDeviceScreenSmall: boolean;

  constructor(private deviceDetectorService: DeviceDetectorService) {

    // Uncomment next line to automatically open menu on larger screens
    // this.isDeviceScreenSmall = this.deviceDetectorService.isMobile() || this.deviceDetectorService.isTablet() || true;
    this.isDeviceScreenSmall = false;
    this.isSubmitterInboxSelected = false;

    this.source = new BehaviorSubject<boolean>(this.isDeviceScreenSmall);
    this.currentMenuState = this.source.asObservable();
  }

  toggleMenu(state: boolean) {
    this.source.next(state);
  }

  isMenuClosedOnStart(): boolean {
    return this.isDeviceScreenSmall;
  }

  enableSubmitterInboxSelected() {
    this.isSubmitterInboxSelected = true;
  }

  getIsSubmitterInboxSelected() {
    // Resetting to make it one time use
    let oldVal = this.isSubmitterInboxSelected;
    this.isSubmitterInboxSelected = false;
    return oldVal;
  }

}
