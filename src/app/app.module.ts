import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

// angular i18n
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';
registerLocaleData(localeZh);

import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';

import { I18NService, StartupService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';

import { GlobalConfigModule } from './global-config.module';

import { SimplemdeModule } from 'ngx-simplemde';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';
import { JsonSchemaModule } from './shared/json-schema/json-schema.module';
import { STWidgetModule, STWIDGET_COMPONENTS } from './shared/st-widget/st-widget.module';

import { ExampleModule, EXAMPLE_COMPONENTS } from './routes/gen/examples';
import { IconComponent } from './shared/components/icon/icon.component';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GlobalConfigModule.forRoot(),
    LayoutModule,
    SharedModule,
    JsonSchemaModule,
    STWidgetModule,
    RoutesModule,
    ExampleModule,
    // i18n
    TranslateModule.forRoot(),
    NgxTinymceModule.forRoot({
      baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.2/',
    }),
    UEditorModule.forRoot({
      // **注：** 建议使用本地路径；以下为了减少 ng-alain 脚手架的包体大小引用了CDN，可能会有部分功能受影响
      js: [`//apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.config.js`, `//apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.min.js`],
      options: {
        UEDITOR_HOME_URL: `//apps.bdimg.com/libs/ueditor/1.4.3.1/`,
      },
    }),
    SimplemdeModule.forRoot({
      delay: 300,
    }),
  ],
  providers: [
    { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
  ],
  declarations: [AppComponent, LayoutComponent, HeaderComponent],
  entryComponents: STWIDGET_COMPONENTS,
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    Object.keys(EXAMPLE_COMPONENTS).forEach(key => {
      const element = createCustomElement(EXAMPLE_COMPONENTS[key].component, {
        injector,
      });
      customElements.define(key, element);
    });
    // icon
    customElements.define('nz-icon', createCustomElement(IconComponent, { injector }));
  }
}
