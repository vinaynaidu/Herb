import { Component, OnInit } from '@angular/core';

import * as data from './inbox-data';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  inboxData: any[];
  details: string;

  constructor() { }

  ngOnInit() {
    this.getInboxData();
  }

  getInboxData() {
    this.inboxData = data.inboxData
      .slice(1, 25)
      .map(i => ({ ...i, isExpanded: false }));

    this.details = data.details;
  }

  onRowClick(item: any) {
    item.isExpanded = !item.isExpanded;
  }

}
