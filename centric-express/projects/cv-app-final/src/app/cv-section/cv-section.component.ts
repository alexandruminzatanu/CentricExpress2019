import { Component } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Row } from '../models/row.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss']
})
export class CvSectionComponent {
  rows = new Array(new Row());

  constructor(private cvService: CvService, private router: Router) {}
  newRow() {
    this.rows.push(new Row());
  }
  saveRows() {
    this.cvService.saveCV(this.rows);
    this.router.navigate(['preview']);
  }
}
