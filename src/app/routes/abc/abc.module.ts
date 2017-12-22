import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DemoReuseTabComponent } from './reuse-tab/reuse-tab.component';
import { DemoEllipsisComponent } from './ellipsis/ellipsis.component';
import { DemoReuseTabEditComponent } from './reuse-tab/edit.component';

const COMPONENTS = [DemoReuseTabComponent, DemoReuseTabEditComponent, DemoEllipsisComponent];

const routes: Routes = [
    { path: 'reuse-tab', component: DemoReuseTabComponent, data: { title: 'R-title', reuseTitle: 'R-reuseTitle' } },
    { path: 'reuse-tab/:id', component: DemoReuseTabEditComponent, data: { reuse: false, reuseClosable: false, title: 'edit title' } },
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
