import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import * as data from './inbox-data';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  inboxData: any[];
  details: string;
  currentlySortedColumn: string;
  currentSortOrder;
  headers: any[];

  ngOnInit() {
    this.getInboxData();
    this.currentlySortedColumn = undefined;
    this.currentSortOrder = undefined;
  }

  getInboxData() {
    // Construct row data
    this.inboxData = data.inboxData
      .slice(1, 25)
      .map(i => ({ ...i, isExpanded: false }));

    // Construct header data
    this.headers = _.keys(this.inboxData[0]).map(i => ({
      column: i,
      sortOrder: undefined
    }));

    this.details = data.details;
  }

  onRowClick(item: any) {
    item.isExpanded = !item.isExpanded;
  }

  resetData() {
    this.getInboxData();
  }

  sortBy(column) {

    // NOTE: Use server to sort data in real application.
    // Client side sorting is not feasible with large scale data and will be slow.
    // This is only for prototype purposes

    // Get current sort order state for this column
    let currentColumnIndex = _.findIndex(this.headers, h => h.column === column);
    let sortOrder = this.headers[currentColumnIndex].sortOrder;
    let newData = _.clone(data.inboxData);

    // Cycle sorting through states Asc -> Desc -> No sort
    switch (sortOrder) {
      case undefined:
        // Sort by asc
        sortOrder = 'asc';
        newData = newData.sort((a,b) => a[column] > b[column] ? 1 : -1);
        break;
      case 'asc':
        // Sort by desc
        sortOrder = 'desc';
        newData = newData.sort((a,b) => a[column] > b[column] ? -1 : 1);
        break;
      case 'desc':
      default:
        // Remove sort
        sortOrder = undefined;
        break;
    }

    // Remove sorting from all columns
    this.headers.forEach(i => i.sortOrder = undefined);

    // Update sortOrder for current column
    this.headers[currentColumnIndex].sortOrder = sortOrder;

    // Update inbox Data
    this.inboxData = newData
      .slice(1,25)
      .map(i => ({ ...i, isExpanded: false }));

  }

}
