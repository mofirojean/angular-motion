import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PreviewComponent } from './pages/preview/preview.component';

export const routes: Routes = [
  { path: 'preview', component: PreviewComponent },
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
