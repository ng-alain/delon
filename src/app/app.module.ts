import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AlainThemeModule } from '@delon/theme';
import { DelonACLModule } from '@delon/acl';
import { DelonABCModule } from '@delon/abc';
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
const MOCKMODULE = [];
if (!environment.production) {
    MOCKMODULE.push(DelonMockModule.forRoot({
        data: MOCKDATA
    }));
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
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [DemoModalComponent]
})
export class AppModule { }
