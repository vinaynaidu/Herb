import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';

const agmModules = [
    MatButtonModule
];

@NgModule({
  imports: [
    ...agmModules
  ],
  exports: [
    ...agmModules
  ]
})
export class AgmModule { }
