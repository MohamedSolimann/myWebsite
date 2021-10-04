import { BioComponent } from './bio/bio.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';

export default [
  { path: '', component: BioComponent },
  { path: 'cv', component: CvComponent },
  { path: 'bio', component: BioComponent },
  { path: 'projects', component: ProjectsComponent },
];
