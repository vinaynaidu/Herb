import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { ProgressWizardStepConfig } from 'src/app/interfaces/progress-wizard-step-config';

@Component({
  selector: 'app-progress-wizard',
  templateUrl: './progress-wizard.component.html',
  styleUrls: ['./progress-wizard.component.scss']
})
export class ProgressWizardComponent implements OnInit {

  @Input() steps: ProgressWizardStepConfig[];
  @Input() currentStep: number;
  @Input() startAt: number; // If present, adds to current step while broadcasting

  @Output() onStepChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    if (_.isUndefined(this.startAt)) {
      this.startAt = 0;
    }
  }

  getProgressBarStepClass(i: number) {
    // For progress filling colour to be visible
    return {
      'progress-wizard__progress-bar-step--showing': (i + this.startAt) <= this.currentStep
    }
  }

  getProgressBarStepStyle(i: number) {
    let progress = i / this.steps.length * 100;

    return {
      // Get colour from steps data, or default to cadetblue
      'background-color': _.get(this.steps, `${i - 1}.colour`, 'cadetblue'),
      'width': `calc(${progress}% + 0px)`, // 0px set explicitly to avoid spacing issue on IE
      'z-index': this.steps.length - i // each step progress fill bar needs to be behind the previous
    };
  }

  onStepClick(i: number) {
    this.currentStep = i + this.startAt;
    this.onStepChange.emit(i + this.startAt);
  }

}
