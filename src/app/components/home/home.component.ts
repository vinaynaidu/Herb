import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  statusData: any = [];

  constructor() { }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.statusData = [
      {
        "name": "Germany",
        "value": 40632
      },
      {
        "name": "United States",
        "value": 49737
      },
      {
        "name": "France",
        "value": 36745
      },
      {
        "name": "United Kingdom",
        "value": 36240
      },
      {
        "name": "Spain",
        "value": 33000
      }
    ]
  }

}
