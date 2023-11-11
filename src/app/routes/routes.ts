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
      {
        path: 'form-pages',
        loadChildren: () => import('./form-pages/form-pages.module').then(m => m.FormPagesModule)
      }
    ]
  },
  {
    path: 'dev',
    loadChildren: () => import('../../dev/router').then(m => m.routes)
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
