import * as _ from 'lodash';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() listItems: string[];
  @Input() placeholder: string;

  @Output() onValueSelected = new EventEmitter<string>();

  autoControl: FormControl;
  filteredList: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.autoControl = new FormControl();
    this.placeholder = this.placeholder || 'Start typing to search';
    this.listItems = this.listItems || [];

    this.filteredList = this.autoControl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this._filterList(item) : [])
      );
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
