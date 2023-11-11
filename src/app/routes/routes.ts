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
      { path: 'docs', loadChildren: () => import('./gen/docs/docs.module').then(m => m.DocsModule) },
      { path: 'docs', loadChildren: () => import('./gen/docs/docs.module').then(m => m.DocsModule) },
      {
        path: 'components',
        loadChildren: () => import('./gen/components/components.module').then(m => m.ComponentsModule)
      },
      { path: 'theme', loadChildren: () => import('./gen/theme/theme.module').then(m => m.ThemeModule) },
      { path: 'auth', loadChildren: () => import('./gen/auth/auth.module').then(m => m.AuthModule) },
      { path: 'acl', loadChildren: () => import('./gen/acl/acl.module').then(m => m.AclModule) },
      { path: 'cache', loadChildren: () => import('./gen/cache/cache.module').then(m => m.CacheModule) },
      { path: 'mock', loadChildren: () => import('./gen/mock/mock.module').then(m => m.MockModule) },
      { path: 'util', loadChildren: () => import('./gen/util/util.module').then(m => m.UtilModule) },
      { path: 'chart', loadChildren: () => import('./gen/chart/chart.module').then(m => m.ChartModule) },
      { path: 'form', loadChildren: () => import('./gen/form/form.module').then(m => m.FormModule) },
      {
        path: 'form-pages',
        loadChildren: () => import('./form-pages/form-pages.module').then(m => m.FormPagesModule)
      },
      { path: 'cli', loadChildren: () => import('./gen/cli/cli.module').then(m => m.CliModule) }
    ]
  },
  {
    path: 'dev',
    loadChildren: () => import('../../dev/router').then(m => m.routes)
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
