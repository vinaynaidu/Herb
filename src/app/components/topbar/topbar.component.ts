import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { StateService } from 'src/app/services/state.service';
import { DeviceInfo } from 'ngx-device-detector';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch: ElementRef;
  isMenuOpen: boolean;
  isSearchVisible: boolean;

  private _stateService: StateService;
  private deviceInfo: DeviceInfo;

  constructor(stateService: StateService, private router: Router) {
    this._stateService = stateService;
    this.isSearchVisible = false;
  }

  ngOnInit() {
    this.isMenuOpen = this._stateService.isMenuClosedOnStart();
    this.isSearchVisible = true;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this._stateService.toggleMenu(this.isMenuOpen);
  }

  toggleSearch(newVal: boolean) {
    return;
    // this.isSearchVisible = newVal;

    // if (newVal) {
    //   this.txtSearch.nativeElement.focus();
    // }
  }

  onCreateIssueClick() {
    this.router.navigateByUrl('create-issue');
  }

  onCreateRemediationClick() {
    this.router.navigateByUrl('create-remediation');
  }

  onAdvanceSearchClick() {
    this.router.navigateByUrl('search');
  }

}
