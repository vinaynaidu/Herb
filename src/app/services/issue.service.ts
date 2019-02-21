import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { mockAminets } from '../mockData/aminets.mockData';
import { CreateIssueModel } from '../models/create-issue-model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private draftKey: string;

  constructor() {
    this.draftKey = btoa('create-issue-draft');
  }

  getRegions() {
    return ['Germany', 'United Kingdom / Ireland', 'Asia Pacific', 'Americas', 'EMEA'];
  }

  getFrequency() {
    return ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Anually'];
  }

  getAminets(key: string): any[] {

    if (_.isEmpty(key)) {
      return [];
    }

    return mockAminets.filter(i => {
      return _.includes(i, key.toLowerCase());
    });
  }

  getInfrastructure() {
    return ['Finance', 'Regulation, Compliance and Anti-Financial Crime', 'Risk', 'Treasury'];
  }

  getConventions() {
    return [
      {
        id: 1,
        label: 'GRC'
      },
      {
        id: 2,
        label: 'ARB'
      },
      {
        id: 3,
        label: 'KGB'
      },
      {
        id: 4,
        label: 'KCF'
      },
      {
        id: 5,
        label: 'MCD'
      }
    ]
  }

  getSavedDraft(): CreateIssueModel {
    let savedDraft = localStorage.getItem(this.draftKey);

    if (_.isEmpty(savedDraft)) {
      return null;
    }

    return <CreateIssueModel>JSON.parse(atob(savedDraft));
  }

  getDataSetSupportEmail() {
    return 'barry@bird.com';
  }

  saveDraft(draftResponse: CreateIssueModel) {
    localStorage.setItem(this.draftKey, btoa(JSON.stringify(draftResponse)));
  }

  deleteDraft() {
    localStorage.removeItem(this.draftKey);
  }

  saveIssue(issue: CreateIssueModel) {
    // Send to server
  }

}
