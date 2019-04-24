import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {

  @Input() dataSource: any[];
  @Input() allowCustomValue: boolean;

  msUniqId: string;

  constructor() { }

  ngOnInit() {
    this.setDefaults();
  }

  setDefaults() {

    this.msUniqId = _.uniqueId('multiselect');

    if (!!this.allowCustomValue) {
      this.allowCustomValue = false;
    }
  }

}
