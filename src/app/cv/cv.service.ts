import { Injectable } from '@angular/core';

import { ICv } from "./cv";
import { HttpInterceptor } from "../shared/http-interceptor.service"
import { StarRatingComponent } from '../shared/star-rating.component';

import { Observable } from "rxjs/Rx"

@Injectable()
export class CvService  {

  constructor(
    private _http: HttpInterceptor
  ) {}

  private _cvUrl = "./api/cv.json";


  public getCv(): Observable<ICv>{
    return this._http.request(this._cvUrl)
    .map(res => <ICv>res.json());
  }
}

