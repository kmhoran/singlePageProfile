import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IConverterOptionsChangeable } from 'ngx-showdown';

import { ProjectService } from "../projects/project.service";
import { IProject } from "./project";

@Component({
  //selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  
  project: IProject;
  
  allProjects: IProject[];
    constructor(private _router: Router, 
                private _route: ActivatedRoute, 
                private _projectService: ProjectService) {
        // Avoid placing code in the constructor.
    }
  
  content : string;
  markdownOptions : IConverterOptionsChangeable = {}
    onBack(): void {
        this._router.navigate(['/products']);
    }


    ngOnInit() {

      let id = this._route.snapshot.paramMap.get('id');
      this._projectService.getProjects()
      .subscribe(
        (projects: IProject[]) => {
          this.allProjects = projects;

          for(let i = 0; i < this.allProjects.length; i++){
            if (this.allProjects[i].id == id){
              this.project = this.allProjects[i];
              break;
            }
          }
          
          // In the event no project id matches request
          if (this.project == null){
            this._router.navigate(['/Home']);
          }
          console.log("allProjects: ", projects);
          console.log("project: ", this.project);
        }
      );

      
  }
}
