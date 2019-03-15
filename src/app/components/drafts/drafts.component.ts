import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash' ;

import { IssueService } from 'src/app/services/issue.service';
import * as data from '../inbox/inbox-data';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {
  savedDrafts: any[];

  constructor(private _issueService: IssueService) { }

  ngOnInit() {
    this.savedDrafts = _.clone(data.inboxData)
    .slice(0, 3);
  }

}
