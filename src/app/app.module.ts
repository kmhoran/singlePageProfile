import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowdownModule }  from 'ngx-showdown';

import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ShortCvComponent } from './cv/short-cv.component';
import { ProjectDetailComponent } from './projects/project-detail.component';
import { ProjectGuardService } from "./projects/project-guard.service";
import { HomeComponent } from './home/home.component';
import { CvLongComponent } from './cv/cv-long.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortCvComponent,
    ProjectDetailComponent,
    HomeComponent,
    CvLongComponent,
    MinesweeperComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    ShowdownModule,
    RouterModule.forRoot([
      {
        path: 'project/:id',
        component: ProjectDetailComponent,
       // canActivate: [ProjectGuardService]
      }, 
      { path: 'minesweeper', component: MinesweeperComponent },
      { path: 'profile', component: CvLongComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [ProjectGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
