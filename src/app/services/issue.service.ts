import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { mockAminets } from '../mockData/aminets.mockData';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor() { }

  getRegions() {
    return ['Germany', 'United Kingdom / Ireland', 'Asia Pacific', 'Americas', 'EMEA'];
  }

  getAminets(key: string): any[] {

    if (_.isEmpty(key)) {
      return [];
    }

    return mockAminets.filter(i => {
      return _.includes(i, key.toLowerCase());
    });
  }
}
