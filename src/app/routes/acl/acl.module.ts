import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared//shared.module';

import { DEMOJWTComponent } from './jwt/jwt.component';

const routes: Routes = [
    { path: 'jwt', component: DEMOJWTComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DEMOJWTComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class DEMOACLModule { }
