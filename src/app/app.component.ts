import { Component, OnInit  } from '@angular/core';


// import { CvService } from "./cv/cv.service";
import { ProjectService } from './projects/project.service';
import { IProject } from './projects/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[HttpInterceptor,CvService,ProjectService]
  providers: []
})
export class AppComponent implements OnInit {
  pageTitle = 'Kevin Horan';

  constructor() {}
   isCollapsed = true;
   ngOnInit() {}


   toggleMenuCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }



}
