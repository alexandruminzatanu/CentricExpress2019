import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Row } from '../models/row.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  saveCV(rows) {
    localStorage.setItem('rows', JSON.stringify(rows));

  }
  getCV() {
    return  JSON.parse(localStorage.getItem('rows'));
  }
}
