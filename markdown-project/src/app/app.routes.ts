import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ViewerComponent } from './viewer/viewer.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: ':chapter/:section', component: ViewerComponent },
      { path: '', redirectTo: 'Intro/Welcome', pathMatch: 'full' },
    ],
  },
];
