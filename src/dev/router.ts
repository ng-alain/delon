import { Routes } from '@angular/router';

import { DemoComponent } from './demo.component';
import { DevHomeComponent } from './home/home.component';
import { DevLayoutComponent } from './layout.component';
import { DevPageComponent } from './pages/page.component';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '',
    component: DevLayoutComponent,
    children: [
      { path: 'home', component: DevHomeComponent },
      { path: 'l1', component: DevPageComponent },
      { path: 'l2', component: DevPageComponent },
      { path: 'l3', component: DevPageComponent },
      { path: 'l4', component: DevPageComponent },
      { path: 'l5', component: DevPageComponent },
      { path: 'l6', component: DevPageComponent },
      { path: 'l7', component: DevPageComponent },
      { path: 'l8', component: DevPageComponent },
      { path: 'login', component: DevPageComponent },
      { path: 'view/1', component: DevPageComponent, data: { reuseClosable: false } },
      { path: 'view/:id', component: DevPageComponent },
      {
        path: 'lazy',
        loadChildren: () => import('./lazy/router').then(m => m.routes)
      },
      { path: 'list', loadChildren: () => import('./list/router').then(m => m.routes) }
    ]
  }
];
