import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMenuOpen: boolean;
  menuMode: string;

  private _stateService: StateService;

  constructor(stateService: StateService) {
    this._stateService = stateService;
  }

  ngOnInit(): void {
    this.isMenuOpen = true;
    this.menuMode = 'side';
    this._stateService.currentMenuState.subscribe(this.onToggleMenu);
  }

  onToggleMenu(newState: boolean) {
    this.isMenuOpen = newState;
  }

}
