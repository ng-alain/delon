import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorSketchModule } from 'ngx-color/sketch';

import { SharedModule } from '../../shared/shared.module';
import { ColorComponent } from './components/color/color.component';
import { PXComponent } from './components/px/px.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

import { ThemeLayoutComponent } from './layout/layout.component';
import { ThemeEditorComponent } from './editor/editor.component';

// region: components
const COMPONENTS = [
    ColorComponent,
    PXComponent,
    EditItemComponent,
    ThemeLayoutComponent,
    ThemeEditorComponent
];

const routes: Routes = [
    { path: '', component: ThemeEditorComponent, data: { title: '编辑器' } }
];
// endregion

@NgModule({
    imports: [
        SharedModule,
        ColorSketchModule,
        RouterModule.forChild(routes)
    ],
    declarations: COMPONENTS
})
export class ThemeModule {

}
