import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-wizard',
  templateUrl: './progress-wizard.component.html',
  styleUrls: ['./progress-wizard.component.scss']
})
export class ProgressWizardComponent implements OnInit {

  @Input() steps: string[];
  @Input() currentStep: number;

  @Output() onStepChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getCurrentProgress() {
    let progress = this.currentStep / this.steps.length * 100;

    return {
      'width': `calc(${progress}% + 1px)`
    };
  }

  onStepClick(i: number) {
    this.currentStep = i;
    this.onStepChange.emit(i);
  }

}
