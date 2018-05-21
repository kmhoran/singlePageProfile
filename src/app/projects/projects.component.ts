import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../projects/project.service';
import { IProject } from '../projects/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: IProject[];

  constructor(private _projectService: ProjectService) {}

  ngOnInit() {
    console.log('retrieving projects...');
    this._projectService.getProjects()
    .subscribe(
      (projects: IProject[]) => {
        this.projects = projects;
        console.log('projects: ', projects);
      }
    );
  }

}
