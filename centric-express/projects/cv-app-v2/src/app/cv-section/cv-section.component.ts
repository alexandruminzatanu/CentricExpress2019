import { Component, OnInit } from '@angular/core';
import { Row } from '../models/row.model';
@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss']
})
export class CvSectionComponent implements OnInit {
  rows: Array<Row> = new Array();
  constructor() {
    this.rows.push(new Row());
  }

  ngOnInit() {}
  newRow() {
    this.rows.push(new Row());
  }
}
