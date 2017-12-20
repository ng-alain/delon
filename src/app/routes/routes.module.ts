import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from '../layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot([
            { path: 'demo', component: DemoComponent },
            {
                path: '',
                component: LayoutComponent,
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'abc', loadChildren: './abc/abc.module#DEMOABCModule' },
                    { path: 'acl', loadChildren: './acl/acl.module#DEMOACLModule' }
                ]
            }
        ], { useHash: true })
    ],
    declarations: [
        DashboardComponent,
        DemoComponent
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {}
