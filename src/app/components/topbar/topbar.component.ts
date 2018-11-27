import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  isMenuOpen: boolean;
  isSearchVisible: boolean;
  @ViewChild('txtSearch') txtSearch: ElementRef;

  private _stateService: StateService;
  private deviceInfo: DeviceInfo;

  constructor(stateService: StateService) {
    this._stateService = stateService;
    this.isSearchVisible = false;
  }

  ngOnInit() {
    this.isMenuOpen = this._stateService.isMenuClosedOnStart();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this._stateService.toggleMenu(this.isMenuOpen);
  }

  toggleSearch(newVal: boolean) {
    this.isSearchVisible = newVal;

    if (newVal) {
      this.txtSearch.nativeElement.focus();
    }
  }

}
