import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-numerical-input',
  templateUrl: './numerical-input.component.html',
  styleUrls: ['./numerical-input.component.scss']
})
export class NumericalInputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() value: string;
  @Input() model: string;
  @Input() isReadonly: boolean;
  @Input() numberFormatLocaleCode: string; // locale code for number format. Eg: 'en-GB', or 'fr-FR'
  @Input() decimalPercision: number; // How many decimals to show. defaults to zero

  @Output() onValueUpdated = new EventEmitter<number>();

  displayNumber: string;

  private numberFormatter: Intl.NumberFormat;

  // get displayNumber(): string {
  //   return this._displayNumber;
  // }

  // set displayNumber(value: string) {

  //   if (!_.isEmpty(value)) {
  //     return;
  //   }

  //   this._displayNumber = value;
  // }

  constructor() { }

  ngOnInit() {
    this.setDefaults();
  }

  onBlur() {

    if (_.isEmpty(this.displayNumber)) {
      return;
    }

    // Expand denominations if present
    let processedNumber = this.expandDenominatedString(this.displayNumber);

    // Convert expanded number into locale display format for user display
    this.displayNumber = this.convertToDisplayFormat(processedNumber);

    // Get the underlying JS number for processing
    let jsNumber = this.convertStringToNumber(this.displayNumber);

    this.onValueUpdated.emit(jsNumber);
  }

  private setDefaults() {
    if (!this.value) {
      this.value = '';
    }

    this.numberFormatter = new Intl.NumberFormat(this.numberFormatLocaleCode || 'en-GB');
    this.displayNumber = this.convertToDisplayFormat(this.value);
  }

  // Returns number in locale format, eg:
  // en-GB = 123,456.3 (UK)
  // fr-FR = 123 456,3 (France)
  // de-DE = 123.456,3 (Germany)
  // en-IN = 1,23,456.3 (India)
  private convertToDisplayFormat(value: number | string): string {

    if (_.isEmpty(value)) {
      return;
    }

    if (_.isString(value)) {
      value = this.convertStringToNumber(value);
    }

    return this.numberFormatter.format(value);
  }

  // Always returns in JS format (1234.5)
  private convertStringToNumber(value: string): number {

    if (!value) {
      return;
    }

    // Find current locale thousands seperator
    // (could be different based on locale. eg, France uses spaces, germany uses decimals, UK uses commas)
    let decimalSeparator = this.numberFormatter
      .format(1.1)
      .substring(1, 2);

    // Extract digits and decimal seperator from string
    value = value
      .match(new RegExp(`[\\d\\${decimalSeparator}]`, 'gi'))
      .join('');

    // Finally replace decimal separator with period and parse using JS
    return parseFloat(value.replace(decimalSeparator, '.'));
  }

  // Translates K, M, Bn into x thousand, million, and billion
  private expandDenominatedString(value: string): string {
    value = value.toLowerCase();
    let multiplier = 1;
    let denomination = '';

    if (_.endsWith(value, 'k')) {
      multiplier = 1000;
      denomination = 'k';

    } else if (_.endsWith(value, 'm')) {
      multiplier = 1000000;
      denomination = 'm';

    } else if (_.endsWith(value, 'bn')) {
      multiplier = 1000000000;
      denomination = 'bn';

    } else {
      // No recognised denomination
      return value;
    }

    // Make sure the number is in JS format
    let jsNumber = this.convertStringToNumber(value.replace(denomination, ''));

    return (jsNumber * multiplier).toString();
  }

}
