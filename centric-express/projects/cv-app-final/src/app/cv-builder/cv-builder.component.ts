import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss']
})
export class CvBuilderComponent implements OnInit {

  public name: string;

  constructor(private cvService: CvService) { }

  ngOnInit() {
  }
  saveName(){
    this.cvService.saveName(this.name);
  }

}
