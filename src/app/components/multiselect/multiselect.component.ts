import { Component, OnInit, Input } from '@angular/core';
import { TaggingEventArgs } from '@syncfusion/ej2-dropdowns';
import * as _ from 'lodash';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {

  @Input() dataSource: any[];
  @Input() allowCustomValue: boolean;
  @Input() fields: any;
  @Input() tagging: Function;

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

  onTagging = (e: TaggingEventArgs) => {
    // set the current selected item text as class to chip element.
    e.setClass((e.itemData as any)['colour'].replace('#', 'c-'));

    // TODO: Move this logic to component that uses multiselect
    // if (this.tagging) {
    //   this.tagging(e);
    // }
  }

}
