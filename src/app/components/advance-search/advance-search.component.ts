import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {

  caseType: string;
  caseNumber: string;
  caseNumberFrom: string;
  caseNumberTo: string;
  owner: string;
  caseStatus: string[];
  sourceSystem: string;
  raisingDataCouncil: string;
  businessDivision: string;
  workstream: string;

  isSearchFormVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  onClearFilterClick(prop: string) {
    this[prop] = undefined;
  }

  onEditClick() {
    this.isSearchFormVisible = true;
  }

  onSearchClick() {
    this.isSearchFormVisible = false;
  }

  getStatus() {
    return [
      'Awaiting',
      'Reopened',
      'Closed'
    ];
  }

  getDataCouncils() {
    return [
      'CIB',
      'COO',
      'CTO',
      'DWS'
    ];
  }

  getBusinessDivision() {
    return [
      'All',
      'CIB - Corporate Finance',
      'CIB - GTB',
      'CIB  - Global Markets'
    ];
  }

  onStatusSelected(value: string) {
    this.caseStatus = [value];
  }

  onDatatCouncilSelected(value: string) {
    this.raisingDataCouncil = value;
  }

  onBusinessDivisionSelected(value: string) {
    this.businessDivision = value;
  }

  private init() {
    this.caseNumber = '234';
    this.owner = 'Owner';
    this.isSearchFormVisible = true;
  }

}
