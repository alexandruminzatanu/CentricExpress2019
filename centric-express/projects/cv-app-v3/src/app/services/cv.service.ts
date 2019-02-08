import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Row } from '../models/row.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  public rows: Array<Row>;
  saveCV(rows) {
    this.rows = rows;
  }
  getCV() {
    return this.rows;
  }
}
