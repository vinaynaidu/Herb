import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class HeroPanelComponent implements OnInit {

  currentIndex: number;

  ngOnInit() {
    this.currentIndex = 0;
    this.setupSlideshow();
  }

  changeImage() {
  }

  private setupSlideshow() {
    interval(3000)
      .subscribe(i => {
        this.currentIndex = i % 3;
      });
  }

}
