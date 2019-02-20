import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

import { ProgressWizardStepConfig } from 'src/app/interfaces/progress-wizard-step-config';
import { CreateIssueModel } from 'src/app/models/create-issue-model';
import { IssueService } from 'src/app/services/issue.service';
import { UserAlertService } from 'src/app/services/user-alert.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {

  @ViewChild('child1') jqChild1: ElementRef;
  @ViewChild('child2') jqChild2: ElementRef;
  @ViewChild('child3') jqChild3: ElementRef;
  @ViewChild('child4') jqChild4: ElementRef;
  @ViewChild('child5') jqChild5: ElementRef;

  formSteps: ProgressWizardStepConfig[];
  currentStep: number; // Starts from 1
  parentHeight: string;

  // Form model
  userResponse: CreateIssueModel;

  constructor(private _issueService: IssueService, private _userAlertService: UserAlertService) { }

  ngOnInit() {
    this.init();
  }

  onStepChange(step: number) {
    // Changed to a new step
    this.currentStep = step;
    // this.scrollToTop();
    this.setParentHeight();
  }

  onNextClick() {
    this.nextStep();
  }

  onPreviousClick() {
    this.previousStep();
  }

  onSubmitClick() {
    console.log('Form submitted', this.userResponse);
  }

  onSaveAsDraftClick() {
    this._userAlertService.showToasterMessage('Form progress has been saved!');
  }

  getStepClasses(step: number) {
    return {
      'create-issue__form-step--previous': step < this.currentStep,
      'create-issue__form-step--current': step == this.currentStep,
      'create-issue__form-step--next': step > this.currentStep,
    }
  }

  getIssueRegions() {
    return this._issueService.getRegions();
  }

  readjustParentHeight() {
    setTimeout(() => {
      this.setParentHeight();
    }, 400);
  }

  private init() {
    this.formSteps = [
      {
        title: 'Contact',
        colour: '#baddff'
      },
      {
        title: 'Issue',
        colour: '#9dcfff'
      },
      {
        title: 'Function',
        colour: '#50a9ff'
      },
      {
        title: 'Business impact',
        colour: '#0383ff'
      },
      {
        title: 'Complete',
        colour: '#025bb2'
      }
    ];

    this.currentStep = 1;
    this.userResponse = new CreateIssueModel();

    setTimeout(() => {
      this.setParentHeight();
    }, 400);

  }

  private nextStep() {
    this.currentStep++;
    // this.scrollToTop();
    this.setParentHeight();
  }

  private previousStep() {
    this.currentStep--;
    // this.scrollToTop();
    this.setParentHeight();
  }

  private setParentHeight() {
    let currentChildHeight = this.getCurrentChild().nativeElement.offsetHeight;
    const marginOfError: number = 25;
    this.parentHeight = `${currentChildHeight + marginOfError}px`;
  }

  private getCurrentChild(): ElementRef {
    switch (this.currentStep) {
      case 1:
        return this.jqChild1;
      case 2:
        return this.jqChild2;
      case 3:
        return this.jqChild3;
      case 4:
        return this.jqChild4;
      case 5:
        return this.jqChild5;
    }
  }

  private scrollToTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}
