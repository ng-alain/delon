import { preloaderFinished } from '@delon/theme';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './404/404.component';

const COMPONENTS = [HomeComponent, NotFoundComponent];

const routes = [
  { path: 'dev', loadChildren: './dev/dev.module#DevTestModule' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: { titleI18n: 'slogan' } },
      { path: 'tools', loadChildren: './tools/tools.module#ToolsModule' },
      // region: region routers
      { path: 'docs', loadChildren: './gen/docs/docs.module#DocsModule' },
      {
        path: 'components',
        loadChildren: './gen/components/components.module#ComponentsModule',
      },
      { path: 'theme', loadChildren: './gen/theme/theme.module#ThemeModule' },
      { path: 'auth', loadChildren: './gen/auth/auth.module#AuthModule' },
      { path: 'acl', loadChildren: './gen/acl/acl.module#AclModule' },
      { path: 'cache', loadChildren: './gen/cache/cache.module#CacheModule' },
      { path: 'mock', loadChildren: './gen/mock/mock.module#MockModule' },
      { path: 'util', loadChildren: './gen/util/util.module#UtilModule' },
      { path: 'form', loadChildren: './gen/form/form.module#FormModule' },
      {
        path: 'form-pages',
        loadChildren: './form-pages/form-pages.module#FormPagesModule',
      },
      { path: 'cli', loadChildren: './gen/cli/cli.module#CliModule' },
      // endregion
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  declarations: [...COMPONENTS],
})
export class RoutesModule {}
