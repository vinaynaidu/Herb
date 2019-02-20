import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  imagePath: string;

  constructor() { }

  ngOnInit() {
    this.imagePath = this.getSkeletorPath();
  }

  getSkeletorPath(): string {
    let filenumber = _.random(1,9, false);
    let extension = filenumber == 2 ? 'gif': 'jpg';
    return `https://s3-eu-west-1.amazonaws.com/backup.vkn/hcl-db/herb/e404-${filenumber}.${extension}`;
  }

}
