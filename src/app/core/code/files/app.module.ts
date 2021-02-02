export default (componentName: string) => `import { NgModule, APP_INITIALIZER, VERSION as VERSION_NG } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { AlainThemeModule } from '@delon/theme';
import { DemoDelonABCModule } from './delon-abc.module';
import { DemoDelonChartModule } from './delon-chart.module';
import { DelonFormModule } from '@delon/form';
import { DelonAuthModule } from '@delon/auth';
import { DelonACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';
import { StartupService, StartupServiceFactory } from './startup.service';
import { GlobalConfigModule } from './global-config.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

import { VERSION as VERSION_ALAIN } from '@delon/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { ${componentName} } from './app.component';

@NgModule({
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    DemoNgZorroAntdModule,
    AlainThemeModule.forRoot(),
    DemoDelonABCModule,
    DemoDelonChartModule,
    DelonACLModule.forRoot(),
    DelonCacheModule,
    DelonAuthModule,
    DelonFormModule.forRoot(),
    GlobalConfigModule.forRoot(),
],
providers: [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  },
  { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }
],
declarations: [ ${componentName} ],
bootstrap:    [ ${componentName} ]
})
export class AppModule {
  constructor() {
    setTimeout(() => {
      document.querySelector('#VERSION').innerHTML = \`
      VERSIONS: angular(\${VERSION_NG.full}), ng-zorro-antd(\${VERSION_ZORRO.full}), @delon(\${VERSION_ALAIN.full})
      \`;
    }, 1000);
  }
}
  `;
