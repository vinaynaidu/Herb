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

  getAminets(key: string = '*'): any[] {

    if (_.isEmpty(key)) {
      return [];
    }

    if (key === '*') {
      // Return everything;
      return mockAminets.map(i => i.aminet);
    }

    return mockAminets.filter(i => {
      return _.includes(i, key.toLowerCase());
    });
  }

  getSourceSystems(): string[] {
    return [
      'Source 1',
      'source 2',
      'Source 3'
    ];
  }

  getProducts(): string[] {
    return [
      'Product 1',
      'Product 2',
      'Product 3'
    ];
  }

  getHighLevelImpact(): string[] {
    return [
      'Impact 1',
      'Impact 2',
      'Impact 3',
      'Impact 4'
    ];
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

  getBusinessImpactData(): any[] {
    return [
      {
        lvl1Impact: 'High Level Impact 1',
        lvl2Impacts: [
          'Level 1 - Low level impact A',
          'Level 1 - Low level impact B',
          'Level 1 - Low level impact C',
        ]
      },
      {
        lvl1Impact: 'High Level Impact 2',
        lvl2Impacts: [
          'Level 2 - Low level impact D',
          'Level 2 - Low level impact E',
          'Level 2 - Low level impact F',
        ]
      },
      {
        lvl1Impact: 'High Level Impact 3',
        lvl2Impacts: [
          'Level 3 - Low level impact G',
          'Level 3 - Low level impact H',
          'Level 3 - Low level impact I',
        ]
      }
    ];
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

  // Storage functions

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
