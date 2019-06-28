import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Route } from '@angular/router';
import { environment } from '../../environments/environment';
import { LayoutComponent } from '../layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './404/404.component';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [HomeComponent, NotFoundComponent];

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'zh', pathMatch: 'full' },
      { path: 'zh', component: HomeComponent, data: { titleI18n: 'slogan' } },
      { path: 'en', component: HomeComponent, data: { titleI18n: 'slogan' } },
      // #region region routers
      { path: 'docs', loadChildren: () => import('./gen/docs/docs.module').then(m => m.DocsModule) },
      {
        path: 'components',
        loadChildren: () => import('./gen/components/components.module').then(m => m.ComponentsModule),
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
        loadChildren: () => import('./form-pages/form-pages.module').then(m => m.FormPagesModule),
      },
      { path: 'cli', loadChildren: () => import('./gen/cli/cli.module').then(m => m.CliModule) },
      // #endregion
    ],
  },
  {
    path: 'dev',
    loadChildren: () => import('./dev/dev.module').then(m => m.DevTestModule),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, environment.production ? { preloadingStrategy: PreloadAllModules } : { useHash: true }),
  ],
  declarations: [...COMPONENTS],
})
export class RoutesModule {}
