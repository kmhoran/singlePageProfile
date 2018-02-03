import { Component, OnInit } from '@angular/core';

import { ProjectService } from "../projects/project.service";
import { IProject } from '../projects/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: IProject[];

  constructor(private _projectService: ProjectService){}

  ngOnInit(){
    this._projectService.getProjects()
    .subscribe(
      (projects: IProject[]) => {
        this.projects = projects;
        console.log("projects: ", projects);
      }
    );
  }

}
