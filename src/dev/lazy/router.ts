import { Routes } from '@angular/router';

import { DevLazyLayoutComponent } from './layout.component';
import { DevLazyPageComponent } from './test.component';

export const routes: Routes = [
  {
    path: '',
    component: DevLazyLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'p1' },
      { path: 'p1', component: DevLazyPageComponent },
      { path: 'p2', component: DevLazyPageComponent },
      { path: 'p3', component: DevLazyPageComponent },
      { path: 'p4', component: DevLazyPageComponent },
      { path: 'p5', component: DevLazyPageComponent },
      { path: ':id/view', component: DevLazyPageComponent }
    ]
  }
];
