import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReversePipe } from './shared/reverse.pipe';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectTileComponent } from './projects/project-tile.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReversePipe,
    AboutPageComponent,
    ContactComponent,
    ProjectTileComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'projects', component: ProjectsComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
