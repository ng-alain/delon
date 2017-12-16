import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared//shared.module';

import { DemoReuseTabComponent } from './reuse-tab/reuse-tab.component';

const routes: Routes = [
    { path: 'reuse-tab', component: DemoReuseTabComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DemoReuseTabComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class DEMOABCModule { }
