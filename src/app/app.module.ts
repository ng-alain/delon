import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AlainThemeModule } from '@delon/theme';
import { DelonACLModule } from '@delon/acl';
import { DelonABCModule, ReuseTabService, ReuseTabStrategy } from '@delon/abc';
import { DelonAuthModule } from '@delon/auth';
import { DelonMockModule } from '@delon/mock';
import { DelonFormModule } from '@delon/form';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { LayoutComponent } from './layout.component';
import { PassportComponent } from './passport.component';
import { DemoModalComponent } from './shared/components/modal/demo.component';

// mock data
import * as MOCKDATA from '../../_mock';
import { environment } from '../environments/environment';
import { StartupService } from './core/startup.service';
const MOCKMODULE = [];
if (!environment.production) {
    MOCKMODULE.push(DelonMockModule.forRoot({
        data: MOCKDATA
    }));
}

export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent, LayoutComponent, PassportComponent,
    DemoModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AlainThemeModule.forRoot(),
    DelonABCModule.forRoot(),
    DelonACLModule.forRoot(),
    DelonAuthModule.forRoot(),
    DelonFormModule.forRoot(),
    ...MOCKMODULE,
    RoutesModule
  ],
  providers: [
    StartupService,
    {
      provide: RouteReuseStrategy,
      useClass: ReuseTabStrategy,
      deps: [ReuseTabService],
    },
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DemoModalComponent]
})
export class AppModule { }
