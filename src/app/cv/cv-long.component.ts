import { Component, OnInit } from '@angular/core';

import {ICv} from "./cv";
import {CvService} from "./cv.service";

@Component({
  selector: 'app-cv-long',
  templateUrl: './cv-long.component.html',
  styleUrls: ['./cv-long.component.css']
})
export class CvLongComponent implements OnInit {

  cv: ICv;

  constructor(private _cvService: CvService) { }

  ngOnInit() {
    this._cvService.getCv()
    .subscribe(
      (cv: ICv) => {
        
        this.cv = cv;
        console.log("CV: ", this.cv);
      }
    );
  }

}
