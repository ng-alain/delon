import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SixToSevenEditorComponent } from './editor/editor.component';

// region: components
const COMPONENTS = [
    SixToSevenEditorComponent
];

const routes: Routes = [
    { path: '', component: SixToSevenEditorComponent, data: { title: '0.6.x至0.7.xHTML转化' } }
];
// endregion

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: COMPONENTS
})
export class SixToSevenModule {

}
