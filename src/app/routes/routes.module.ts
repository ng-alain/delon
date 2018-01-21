import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from '../layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';

import { PassportComponent } from '../passport.component';
import { LoginComponent } from './passport/login.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot([
            { path: 'demo', component: DemoComponent, data: { title: 'DEMO' } },
            {
                path: '',
                component: LayoutComponent,
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'abc', loadChildren: './abc/abc.module#DEMOABCModule' },
                    { path: 'acl', loadChildren: './acl/acl.module#DEMOACLModule' },
                    { path: 'editor', loadChildren: './editor/editor.module#EditorModule' }
                ]
            },
            {
                path: 'login',
                component: PassportComponent,
                children: [
                    { path: '', component: LoginComponent, data: { title: 'Login' } }
                ]
            }
        ], { useHash: true })
    ],
    declarations: [
        DashboardComponent,
        DemoComponent,
        LoginComponent
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {}
