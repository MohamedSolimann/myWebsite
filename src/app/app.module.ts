import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { CvComponent } from './cv/cv.component';
import { LogoComponent } from './logo/logo.component';
import { ProjectsComponent } from './projects/projects.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import routes from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    CvComponent,
    LogoComponent,
    ProjectsComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
