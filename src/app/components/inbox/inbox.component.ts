import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { UserAlertService } from 'src/app/services/user-alert.service';
import * as data from './inbox-data';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {

  inboxData: any[];
  details: string;
  currentlySortedColumn: string;
  currentSortOrder: any;
  headers: any[];
  tableFilter: string;
  isTableConfigurationVisible: boolean;
  isDraftInbox: boolean;

  isOwnedByMeSelected: boolean;
  isSubmitterInboxSelected: boolean;
  isUnclaimedIssuesSelected: boolean;

  @Input() isTableOnly: boolean;

  private routeSub: any;

  // For table header bulk selector
  isBulkSelectSelected: boolean;
  isPartialSelect: boolean;

  constructor(private _userAlertService: UserAlertService,
    private _stateService: StateService,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentlySortedColumn = undefined;
    this.currentSortOrder = undefined;
    this.isTableConfigurationVisible = false;

    this.isSubmitterInboxSelected = this._stateService.getIsSubmitterInboxSelected();

    // Check if inbox is for saved draft. Using inbox for draft for prototype to avoid code repetition
    this.routeSub = this._route
      .data
      .subscribe(value => {
        this.isDraftInbox = _.get(value, 'isDraft', false);
      });

    setTimeout(() => {
      this.getInboxData();
    }, 500);

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getInboxData() {
    this.resetInboxData();
    this.details = data.details;
  }

  onExportDataClick(type: string) {
    this._userAlertService.showToasterMessage(`${type} data exported!`);
  }

  onDeleteDataClick(type: string) {
    this._userAlertService.showToasterMessage(`${type} drafts deleted!`);
  }

  onRowClick(item: any) {
    item.isExpanded = !item.isExpanded;
  }

  onTableFilterKeyup: Function = _.debounce(() => {
    this.filterInboxData();
  }, 300).bind(this);

  onBulkSelectClick() {
    this.inboxData.forEach(i => i.isSelected = this.isBulkSelectSelected);
  }

  onSingleItemSelectClick(e) {
    e.stopPropagation();
  }

  onSingleItemSelectChange() {
    // Check if at least one checkbox to be seleted and one to be unselected
    this.isPartialSelect = !!this.inboxData.find(i => i.isSelected === true) && !!this.inboxData.find(i => i.isSelected === false);
  }

  onCheckboxChange(event: any, type: string) {

    if (!event.checked) {
      return;
    }

    switch (type) {
      case 'ownedByMe':
        this.isUnclaimedIssuesSelected = false;
        this.isSubmitterInboxSelected = false;
        break;

      case 'unclaimedIssues':
        this.isOwnedByMeSelected = false;
        this.isSubmitterInboxSelected = false;
        break;

      case 'submitterInbox':
        this.isOwnedByMeSelected = false;
        this.isUnclaimedIssuesSelected = false;
        break;
    }
  }

  onCustomiseTableHeaderClick() {
    this.isTableConfigurationVisible = !this.isTableConfigurationVisible;
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
        newData = newData.sort((a, b) => a[column] > b[column] ? 1 : -1);
        break;
      case 'asc':
        // Sort by desc
        sortOrder = 'desc';
        newData = newData.sort((a, b) => a[column] > b[column] ? -1 : 1);
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
      .slice(0, 25);
  }

  private resetInboxData() {

    let rowSize = 25;

    if (this.isDraftInbox) {
      rowSize = 3;
    }

    if (this.isTableOnly) {
      rowSize = 5;
    }

    // Construct row data
    this.inboxData = _.clone(data.inboxData)
      .slice(0, rowSize);

    // Construct header data
    this.headers = _.keys(this.inboxData[0]).map(i => ({
      column: i,
      sortOrder: undefined,
      isVisible: true
    }));

    // Hide last 2 columns:
    // NOTE: using progress headers for column visibility. Might lead to problems later in prototype
    this.headers[this.headers.length - 1].isVisible = false;
    this.headers[this.headers.length - 2].isVisible = false;

  }

  private filterInboxData() {
    this.inboxData = _.clone(data.inboxData)
      .filter(row => {
        return _.includes(JSON.stringify(row).toLowerCase(), this.tableFilter.toLowerCase())
      });
  }
}
