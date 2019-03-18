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
          'Low 1.A',
          'Low 1.B',
          'Low 1.C',
        ]
      },
      {
        lvl1Impact: 'High Level Impact 2',
        lvl2Impacts: [
          'Low 2.D',
          'Low 2.E',
          'Low 2.F',
        ]
      },
      {
        lvl1Impact: 'High Level Impact 3',
        lvl2Impacts: [
          'Low 3.G',
          'Low 3.H',
          'Low 3.I',
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

  getWorkstreams(): string[] {
    return ['50100', '50101', '50102', '50103', '50104', '50105', '50106'];
  }

  getConnectedAdjustments(): string[] {
    return [
      'FDW FaAWS (DPB)',
      'FDW FaAWS (non-DPB)',
      'Paragon CDW',
      'Pomona DBV',
      'Pomona ECB',
      'Pomona FRD',
      'Pomona IFRS9',
      'Pomona STMX',
      'Pomona TDBP',
      'Pomona TLA'
    ];
  }

  getDataCreationLocations(): string[] {
    return [
      'BCS',
      'FDW',
      'Other',
      'Paragon',
      'SAP',
      'TDH',
    ];
  }

  getReportCorrectionLocations(): string[] {
    return [
      'Axiom (non-US',
      'Axiom IHC (US)',
      'HyperStar external reports',
      'LiquidityStar external reports',
      'Other',
      'Saturn'
    ];
  }

  getMonetaryImpacts(): string[] {
    return [
      'Actual cost',
      'Balance sheet',
      'Leveraged Balance sheet',
      'Liquidity coverage ratio',
      'Notional',
      'Off-balance sheet',
      'P&L',
      'Revenue',
      'RWA'
    ];
  }

  getClientImpacts(): string[] {
    return [
      'Client complaints',
      'Delivery SLA missed',
      'Inaccurate data sent to client'
    ];
  }

  getEpmLevels(): string[] {
    return [
      'EPM Level 1',
      'EPM Level 2',
      'EPM Level 3'
    ];
  }

  getAuditPointTypes(): string[] {
    return [
      'Internal',
      'External',
      'Regulator',
      'Self identified'
    ];
  }

  getFindingRatings(): string[] {
    return ['F1', 'F2', 'F3', 'F4'];
  }

  getRegulators(): string[] {
    return [
      'BaFin',
      'Bank of England (BoE)',
      'Commodities and Futures Trading Commission (CFTC)',
      'Deutsche Bundesbank',
      'European Central Bank',
      'Federal Reserve',
      'HM Treasure',
      'Securities and Exchange Commission (SEC)',
      'Fincancial Conduct Authority (FCA)',
      'European Securities and Markets Authority (ESMA)'
    ];
  }

  getRegulatoryReport(): string[] {
    return [
      'FED 5G',
      'FFIEC 002',
      'FFIEC 009',
      'FFIEC 009A',
      'FFIEC 041',
      'FR Y-12',
      'FR Y-12A',
      'FR Y-14A',
      'FR Y-14M',
      'FR Y-14Q',
      'FR Y-9C',
      'FR Y-9LP',
      'TIC B',
      'TIC D',
      'TIC S',
      'TIC SHC (A)',
      'TIC SHL (A)',
      'TIC SLT',
    ];
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
