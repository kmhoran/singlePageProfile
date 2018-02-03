import { Component, OnInit  } from '@angular/core';

import{ HttpInterceptor } from "./shared/http-interceptor.service";
import { CvService } from "./cv/cv.service";
import { ProjectService } from "./projects/project.service";
import { IProject } from './projects/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpInterceptor,CvService,ProjectService]
})
export class AppComponent implements OnInit {
  pageTitle = 'Kevin Horan';
  projects: IProject[];

  constructor(private _projectService: ProjectService){}

   ngOnInit(){}
  //   this._projectService.getProjects()
  //   .subscribe(
  //     (projects: IProject[]) => {
  //       this.projects = projects;
  //       console.log("projects: ", projects);
  //     }
  //   );
  //}
}
