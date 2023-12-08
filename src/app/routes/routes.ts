import { Routes } from '@angular/router';

import { NotFoundComponent } from './404/404.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from '../layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'en', pathMatch: 'full' },
      { path: ':lang', component: HomeComponent, data: { titleI18n: 'slogan' } },
      { path: 'docs', loadChildren: () => import('./gen/docs/routes').then(m => m.routes) },
      {
        path: 'components',
        loadChildren: () => import('./gen/components/components.module').then(m => m.ComponentsModule)
      },
      { path: 'theme', loadChildren: () => import('./gen/theme/routes').then(m => m.routes) },
      { path: 'auth', loadChildren: () => import('./gen/auth/routes').then(m => m.routes) },
      { path: 'acl', loadChildren: () => import('./gen/acl/routes').then(m => m.routes) },
      { path: 'cache', loadChildren: () => import('./gen/cache/routes').then(m => m.routes) },
      { path: 'mock', loadChildren: () => import('./gen/mock/routes').then(m => m.routes) },
      { path: 'util', loadChildren: () => import('./gen/util/routes').then(m => m.routes) },
      { path: 'chart', loadChildren: () => import('./gen/chart/chart.module').then(m => m.ChartModule) },
      { path: 'form', loadChildren: () => import('./gen/form/routes').then(m => m.routes) },
      {
        path: 'form-pages',
        loadChildren: () => import('./form-pages/routes').then(m => m.routes)
      },
      { path: 'cli', loadChildren: () => import('./gen/cli/routes').then(m => m.routes) }
    ]
  },
  {
    path: 'dev',
    loadChildren: () => import('../../dev/router').then(m => m.routes)
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
