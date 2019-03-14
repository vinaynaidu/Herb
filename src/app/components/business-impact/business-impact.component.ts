import * as _ from 'lodash';

import { Component, OnInit, EventEmitter } from '@angular/core';
import { CreateIssueModel } from 'src/app/models/create-issue-model';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-business-impact',
  templateUrl: './business-impact.component.html',
  styleUrls: ['./business-impact.component.scss']
})
export class BusinessImpactComponent implements OnInit {
  selectedImpacts: any[];
  onDataChange: EventEmitter<string[]> = new EventEmitter();
  lowLevelListItems: any;

  private businessImpactData: any;
  private currentL1Selection: string;

  constructor(private _IssueService: IssueService) {
  }

  ngOnInit() {
    this.businessImpactData = this._IssueService.getBusinessImpactData();
    this.selectedImpacts = [];
  }

  onLevel1Selected(value: string) {
    let lowLevelListItems: string[] = _.find(this.businessImpactData, i => i.lvl1Impact === value).lvl2Impacts;
    this.onDataChange.emit(lowLevelListItems);
    this.currentL1Selection = value;
  }

  onLevel2Selected(value: string) {
    // Add it to current selections if not already present

    if (this.hasItem(this.currentL1Selection, value)) {
      return;
    }

    this.selectedImpacts.push({
      l1: this.currentL1Selection,
      l2: value
    });
  }

  getHighLevelList(): string[] {
    return this.businessImpactData.map(i => i.lvl1Impact);
  }

  removeBusinessImpact({ l1, l2 }) {
    if (this.hasItem(l1, l2)) {
      _.remove(this.selectedImpacts, i => i.l1 === l1 && i.l2 === l2);
    }
  }

  private hasItem(l1: string, l2: string) {
    return _.find(this.selectedImpacts, i => i.l1 == l1 && i.l2 == l2)
  }

}
