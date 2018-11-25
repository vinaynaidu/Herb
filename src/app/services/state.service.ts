import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private source = new BehaviorSubject<boolean>(true);
  currentMenuState = this.source.asObservable();

  constructor() { }

  toggleMenu(state: boolean) {
    this.source.next(state);
  }

}
