import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorSketchModule } from 'ngx-color/sketch';

import { SharedModule } from '../../shared/shared.module';
import { SixToSevenEditorComponent } from './6to7/editor/editor.component';
import { ColorComponent } from './theme/components/color/color.component';
import { PXComponent } from './theme/components/px/px.component';
import { EditItemComponent } from './theme/components/edit-item/edit-item.component';
import { ThemeEditorComponent } from './theme/editor/editor.component';

// region: components

const COMPONENTS = [
  ColorComponent,
  PXComponent,
  EditItemComponent,
  ThemeEditorComponent,
  SixToSevenEditorComponent,
];

const routes: Routes = [
  {
    path: 'theme',
    component: ThemeEditorComponent,
    data: { titleI18n: 'app.header.menu.customize-theme' },
  },
  {
    path: '6to7',
    component: SixToSevenEditorComponent,
    data: { titleI18n: 'app.header.menu.upgrade' },
  },
];
// endregion

@NgModule({
  imports: [SharedModule, ColorSketchModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class ToolsModule {}
