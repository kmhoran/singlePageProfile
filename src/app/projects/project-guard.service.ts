import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProjectGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
      let id = route.url[1].path;
      if (id == null || id == "") {
          alert('invalid project id');
          this.router.navigate(['/Home']);
          return false;
      };
      return true;
  }
}
