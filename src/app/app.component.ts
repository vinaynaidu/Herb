import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMenuOpen: boolean;
  disableAutomaticClose: boolean;
  menuMode: string;

  constructor(private _stateService: StateService) {
  }

  ngOnInit(): void {
    this.isMenuOpen = true;
    this.disableAutomaticClose = true;
    this.menuMode = 'side';
    this._stateService.currentMenuState.subscribe(this.onToggleMenu.bind(this));
  }

  onToggleMenu(newState: boolean) {
    this.isMenuOpen = newState;
  }

}
