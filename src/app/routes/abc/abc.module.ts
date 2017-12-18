import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DemoReuseTabComponent } from './reuse-tab/reuse-tab.component';
import { DemoEllipsisComponent } from './ellipsis/ellipsis.component';

const COMPONENTS = [DemoReuseTabComponent, DemoEllipsisComponent];

const routes: Routes = [
    { path: 'reuse-tab', component: DemoReuseTabComponent },
    { path: 'ellipsis', component: DemoEllipsisComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class DEMOABCModule { }
