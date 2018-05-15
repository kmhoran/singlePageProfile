import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowdownModule } from 'ngx-showdown';

import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShortCvComponent } from './cv/short-cv.component';
import { ProjectDetailComponent } from './projects/project-detail.component';
import { ProjectGuardService } from './projects/project-guard.service';
import { HomeComponent } from './home/home.component';
import { CvLongComponent } from './cv/cv-long.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { StarRatingComponent } from './shared/star-rating.component';
import { ReversePipe } from './shared/reverse.pipe';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortCvComponent,
    ProjectDetailComponent,
    HomeComponent,
    CvLongComponent,
    MinesweeperComponent,
    StarRatingComponent,
    ReversePipe,
    AboutPageComponent,
    ContactComponent
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
        canActivate: [ProjectGuardService]
      },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactComponent },
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
