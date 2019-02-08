import { CvService } from '../services/cv.service';
import { Component, } from '@angular/core';
import { Row } from '../models/row.model';

@Component({
  selector: 'app-cv-preview',
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.scss']
})
export class CvPreviewComponent {
  public rows: Array<Row>;
  constructor(private cvService: CvService) {
    this.rows = this.cvService.getCV();
   }
   print() {
     window.print();
   }
}
