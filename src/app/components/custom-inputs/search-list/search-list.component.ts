import * as _ from 'lodash';

import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input() listItems: [];
  @Input() placeholder: string;

  autoControl: FormControl;
  filteredList: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.autoControl = new FormControl();
    this.placeholder = this.placeholder || 'Search';

    this.filteredList = this.autoControl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this._filterList(item) : this.getOptions())

      )
  }

  getOptions(): string[] {
    return [
      "Sandi Bullough",
      "Kim Mitford",
      "Margaretha Jervis",
      "Rey Angove",
      "Karna Tanton",
      "Kanya Antonijevic",
      "Isidora Fullilove",
      "Phil Judd",
      "Clemence Celier",
      "Alexandre Peirson",
      "Riki Lamden",
      "Sullivan Rattry",
      "Olly Stutt",
      "Andres Fenne",
      "Lissa Exon",
      "Bryna Emanuelov",
      "Benyamin Bruneton",
      "Carmelita Phuprate",
      "Janna Otley",
      "Orly Lawford",
      "Spencer Larroway",
      "Robinett Haller",
      "Brander Jeandeau",
      "Marlow Barrabeale",
      "Antoine O'Crigane",
      "Aland Slimming",
      "Rita Borgnet",
      "Leoline Thomazet",
      "Alethea Ivain",
      "Allix Hazeldene",
      "Aguie Bruck",
      "Carolus Daftor",
      "Martynne Royste",
      "Krista Eddis",
      "Stephannie Winchcombe",
      "Odille Christon",
      "Brietta McTerrelly",
      "Jobye Brient",
      "Juliette Gosswell",
      "Darcey Kneath",
      "Annissa Ivatts",
      "Fax Maultby",
      "Lorrin Ivashinnikov",
      "Lisle How",
      "Bill Orchard",
      "Jordan Concannon",
      "Berkley Conybear",
      "Cacilie McCabe",
      "Emalee Megarrell",
      "Lucky Bratty",
      "Calli Wale",
      "Shayne Brandone",
      "Dallon Davinet",
      "Bree Brunger",
      "Lazare Biagi",
      "Letty Crittal",
      "Angeline Scurman",
      "Ferdie Durrett",
      "Halette Labden",
      "Luke Powdrill",
      "Janeva Ghest",
      "Daphna Ballchin",
      "Cesya Rosenhaupt",
      "Lorenza Rickersy",
      "Windham Marten",
      "Buck Altofts",
      "Gwyneth Santus",
      "Nikaniki Brownett",
      "Cordelie Maffiotti",
      "Cliff Longmire",
      "Alexine Brockie",
      "Stavros Blatherwick",
      "Marlowe Veschambre",
      "Vivien Camus",
      "Zabrina Stigers",
      "Margaretha McKie",
      "Corenda Rowswell",
      "Gretal Stambridge",
      "Liva Jakubowsky",
      "Joellen Berkely",
      "Terrence Toffolini",
      "Pryce Seekings",
      "Nadeen Filisov",
      "Siffre Tourry",
      "Cobbie Folbigg",
      "Elka Row",
      "Aurthur Skett",
      "Pace Steger",
      "Mellisa Squibbes",
      "Antonina Lawlings",
      "Tasha Yarrell",
      "Keane Mathivet",
      "Ceil Hoffman",
      "Galvin Kitteridge",
      "Elli Clifft",
      "Toiboid Korejs",
      "Jena Petrollo",
      "Auria Cartmer",
      "Sigismundo Klug",
      "Mariejeanne Bolding"
    ];
  }

  private _filterList(value: string): string[] {
    value = value.toLowerCase();
    return this.getOptions()
      .filter(item => _.includes(item.toLowerCase(), value))
      .sort((a,b) => a.toLowerCase().indexOf(value) - b.toLowerCase().indexOf(value));
  }

}
