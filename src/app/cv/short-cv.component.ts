import { Component, OnInit } from '@angular/core';

import {ICv} from "./cv";
import {CvService} from "./cv.service";

@Component({
  selector: 'app-short-cv',
  templateUrl: './short-cv.component.html',
  styleUrls: ['./short-cv.component.css']
})
export class ShortCvComponent implements OnInit {

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
