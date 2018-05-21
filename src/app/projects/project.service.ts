import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { HttpResponse } from 'selenium-webdriver/http';
import { catchError } from 'rxjs/operators';


import { IProject } from './project';

@Injectable()
export class ProjectService  {
  private _projectsUrl = '././api/projects.json';
  constructor(private _http: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    console.log('"get projects fired."');
    return this._http.get<IProject[]>(this._projectsUrl)
    .pipe(catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

