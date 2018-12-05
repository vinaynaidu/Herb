import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class HeroPanelComponent implements OnInit {

  currentIndex: number;

  private maxImages = 3;

  ngOnInit() {
    this.currentIndex = 0;
    this.setupSlideshow();
  }

  onNextClick() {
    this.changeSlide(true);
  }

  onPreviousClick() {
    this.changeSlide(false);
  }

  private setupSlideshow() {
    interval(3000)
      .subscribe(i => {
        this.changeSlide(true);
      });
  }

  private changeSlide(toNext: boolean) {
    let tmp = toNext
      ? (this.currentIndex + 1) % this.maxImages
      : this.currentIndex - 1 < 0
        ? this.maxImages
        : this.currentIndex - 1;

    this.currentIndex = tmp;
  }

}
