import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMenuOpened: boolean;
  menuMode: string;

  ngOnInit(): void {
    this.isMenuOpened = true;
    this.menuMode = 'side';
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

}
