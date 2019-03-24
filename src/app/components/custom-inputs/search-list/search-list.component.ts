import * as _ from 'lodash';

import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input() initialValue: string;
  @Input() listItems: string[];
  @Input() placeholder: string;
  @Input() isListVisibleWhenEmpty: boolean; // whether to show list when nothing is entered
  @Input() onDataChange: EventEmitter<string[]> = new EventEmitter();

  @Output() onValueSelected = new EventEmitter<string>();

  autoControl: FormControl;
  filteredList: Observable<string[]>;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.initialValue = this.initialValue || '';
    this.placeholder = this.placeholder || 'Start typing to search';
    this.listItems = this.listItems || [];
    //Enable visibility by default
    this.isListVisibleWhenEmpty = _.isUndefined(this.isListVisibleWhenEmpty) ? true : this.isListVisibleWhenEmpty;

    this.autoControl = new FormControl(this.initialValue);

    this.filteredList = this.autoControl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this._filterList(item) : this.isListVisibleWhenEmpty ? this.listItems : [])
      );

    this.onDataChange.subscribe($event => {
      this.listItems = $event;
      this.cdRef.markForCheck();
    });
  }

  onSelected(event: MatAutocompleteSelectedEvent) {
    let selectedItem = event.option.value;
    this.onValueSelected.emit(selectedItem);
  }

  private _filterList(value: string): string[] {
    value = value.toLowerCase();
    return this.listItems
      .filter(item => _.includes(item.toLowerCase(), value));
  }

}
