import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  statusData: any[] = [];
  currentYear: string;

  constructor() { }

  ngOnInit() {
    this.statusData.push(this.getData());
    this.statusData.push(this.getData());
    this.statusData.push(this.getData());
    this.statusData.push(this.getData());

    this.currentYear = new Date().getFullYear().toString();
  }

  private getData(): any[] {
    return [
      {
        name: "Germany",
        value: this.getRandomNumber()
      },
      {
        name: "United States",
        value: this.getRandomNumber()
      },
      {
        name: "France",
        value: this.getRandomNumber()
      },
      {
        name: "United Kingdom",
        value: 36240
      },
      {
        name: "Spain",
        value: this.getRandomNumber()
      }
    ];
  }

  private getRandomNumber() {
    let min = 0;
    let max = 50000;
    let rnd = Math.random() * (max - min) + min;
    return Math.round(rnd);
  }

}
