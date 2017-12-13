import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { NzTreeModule } from 'ng-tree-antd';

import { AppComponent } from './app.component';
import { AlainThemeModule } from '@delon/theme';
import { AlainACLModule } from '@delon/acl';
import { AlainABCModule } from '@delon/abc';
import { AlainAuthModule } from '@delon/auth';
import { ThemeComponent } from 'app/theme/component';
import { DemoComponent } from 'app/abc/component';
import { ACLComponent } from 'app/acl/component';
import { AuthComponent } from 'app/auth/auth.component';
import { LayoutComponent } from 'app/layout.component';
import { CallbackComponent } from 'app/auth/callback.component';

@NgModule({
  declarations: [
    AppComponent, LayoutComponent,
    ThemeComponent, DemoComponent, ACLComponent, AuthComponent, CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
            path: '',
            component: LayoutComponent,
            children: [
                { path: 'theme', component: ThemeComponent },
                { path: 'abc', component: DemoComponent },
                { path: 'acl', component: ACLComponent },
                { path: 'auth', component: AuthComponent },
                { path: 'callback/:type', component: CallbackComponent }
            ]
        }
    ]),
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgZorroAntdExtraModule.forRoot(),
    NzTreeModule,
    AlainThemeModule.forRoot(),
    AlainABCModule.forRoot(),
    AlainACLModule.forRoot(),
    AlainAuthModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
