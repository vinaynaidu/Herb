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

  @Output() onStepChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getProgressBarStepClass(i: number) {
    return {
      'progress-wizard__progress-bar-step--showing': i <= this.currentStep
    }
  }

  getProgressBarStepStyle(i: number) {
    let progress = i / this.steps.length * 100;

    return {
      'background-color': _.get(this.steps, `${i-1}.colour`, 'cadetblue'),
      'width': `calc(${progress}% + 2px)`,
      'z-index': this.steps.length - i
    };
  }

  onStepClick(i: number) {
    this.currentStep = i;
    this.onStepChange.emit(i);
  }

}
