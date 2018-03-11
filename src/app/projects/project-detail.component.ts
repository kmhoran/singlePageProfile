import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IConverterOptionsChangeable } from 'ngx-showdown';

import { ProjectService } from '../projects/project.service';
import { IProject } from './project';

@Component({
  // selector: 'app-project-detail',
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

  content: string;
  markdownOptions: IConverterOptionsChangeable = {};
    onBack(): void {
        this._router.navigate(['/products']);
    }


    ngOnInit() {

      const id: number = +this._route.snapshot.paramMap.get('id');
      this._projectService.getProjects()
      .subscribe(
        (projects: IProject[]) => {
          this.allProjects = projects;

          if (0 > id || id >= this.allProjects.length) {
            this._router.navigate(['/Home']);
          }
          // for (let i = 0; i < this.allProjects.length; i++) {
          //   if (this.allProjects[i].id === id) {
          //     this.project = this.allProjects[i];
          //     break;
          //   }
          // }

          this.project = this.allProjects[id];

          console.log('allProjects: ', projects);
          console.log('project: ', this.project);
        }
      );


  }
}
