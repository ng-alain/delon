import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DemoReuseTabComponent } from './reuse-tab/reuse-tab.component';
import { DemoEllipsisComponent } from './ellipsis/ellipsis.component';
import { DemoReuseTabEditComponent } from './reuse-tab/edit.component';
import { DemoTableComponent } from './table/table.component';
import { LazyService } from '@delon/util';

const COMPONENTS = [DemoReuseTabComponent,
    DemoReuseTabEditComponent,
    DemoEllipsisComponent,
    DemoTableComponent];

const routes: Routes = [
    { path: 'reuse-tab', component: DemoReuseTabComponent, data: { title: 'R-title', reuseTitle: 'R-reuseTitle' } },
    { path: 'reuse-tab/:id', component: DemoReuseTabEditComponent, data: { reuse: true, reuseClosable: false, title: 'edit title' } },
    { path: 'ellipsis', component: DemoEllipsisComponent },
    { path: 'table', component: DemoTableComponent },

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

    ],
    providers: []
})
export class DEMOABCModule { }
