import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { NzTreeModule } from 'ng-tree-antd';

import { AlainThemeModule } from '@delon/theme';
import { AlainACLModule } from '@delon/acl';
import { AlainABCModule } from '@delon/abc';
import { AlainAuthModule } from '@delon/auth';
import { DelonMockModule } from '@delon/mock';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { LayoutComponent } from 'app/layout.component';
import { DemoModalComponent } from './shared/components/modal/demo.component';

// mock data
import * as MOCKDATA from '../../_mock';
import { environment } from '../environments/environment';
const MOCKMODULE = [];
if (!environment.production) {
    MOCKMODULE.push(DelonMockModule.forRoot({
        data: MOCKDATA
    }));
}

@NgModule({
  declarations: [
    AppComponent, LayoutComponent,
    DemoModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgZorroAntdExtraModule.forRoot(),
    NzTreeModule,
    AlainThemeModule.forRoot(),
    AlainABCModule.forRoot(),
    AlainACLModule.forRoot(),
    AlainAuthModule.forRoot({}),
    ...MOCKMODULE,
    RoutesModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [DemoModalComponent]
})
export class AppModule { }
