import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {

  caseType: string;
  casenumber: string;
  caseNumberFrom: string;
  caseNumberTo: string;
  owner: string;
  caseStatus: string;
  sourceSystem: string;
  raisingDataCouncil: string;
  businessDivision: string;
  workstream: string;

  constructor() { }

  ngOnInit() {
    this.caseType = 'Issue';
    this.caseStatus = 'Reopened';
  }

}
