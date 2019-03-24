import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-remediation',
  templateUrl: './create-remediation.component.html',
  styleUrls: ['./create-remediation.component.scss']
})
export class CreateRemediationComponent implements OnInit {

  formSteps: any[];

  constructor() { }

  ngOnInit() {

    this.formSteps = [
      {
        title: 'Step 1',
        colour: '#baddff'
      },
      {
        title: 'Step 2',
        colour: '#9dcfff'
      },
      {
        title: 'Step 3',
        colour: '#50a9ff'
      },
      {
        title: 'Step 4',
        colour: '#0383ff'
      },
      {
        title: 'Step 5',
        colour: '#025bb2'
      }
    ];

  }

}
