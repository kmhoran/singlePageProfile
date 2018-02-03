import { Injectable } from '@angular/core';

import { IProject } from "./project";
import { HttpInterceptor } from "../shared/http-interceptor.service"

import { Observable } from "rxjs/Rx"

@Injectable()
export class ProjectService  {

  constructor(
    private _http: HttpInterceptor
  ) {}

  private _projectsUrl = "./api/projects.json";


  public getProjects(): Observable<IProject[]>{
    return this._http.request(this._projectsUrl)
    .map(res => <IProject[]>res.json());
  }
}

