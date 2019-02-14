import { Component, OnInit } from '@angular/core';

import * as data from './inbox-data';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  inboxData: any[];
  displayedColumns: string[];

  constructor() { }

  ngOnInit() {
    this.getInboxData();
  }

  getInboxData() {
    this.displayedColumns = ['caseNumber', 'owner', 'identifiedBy', 'caseStatus', 'taskId', 'criticality'];
    this.inboxData =  data.inboxData;
  }

}
