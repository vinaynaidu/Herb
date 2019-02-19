import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {

  formSteps: string[];
  currentStep: number; // Starts from 1
  parentHeight: string;

  @ViewChild('child1') jqChild1: ElementRef;
  @ViewChild('child2') jqChild2: ElementRef;
  @ViewChild('child3') jqChild3: ElementRef;
  @ViewChild('child4') jqChild4: ElementRef;
  @ViewChild('child5') jqChild5: ElementRef;

  constructor() { }

  ngOnInit() {
    this.formSteps = ['One', 'Two', 'Three', 'Four', 'Five']
    this.currentStep = 1;
    this.setParentHeight();
  }

  onStepChange(step: number) {
    // Changed to a new step
    this.currentStep = step;
    this.setParentHeight();
  }

  getStepClasses(step: number) {
    return {
      'create-issue__form-step--previous': step < this.currentStep,
      'create-issue__form-step--current': step == this.currentStep,
      'create-issue__form-step--next': step > this.currentStep,
    }
  }

  private nextStep() {
    this.currentStep++;
    this.setParentHeight();
  }

  private previousStep() {
    this.currentStep--;
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

}
