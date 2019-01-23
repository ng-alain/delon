import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SixToSevenEditorComponent } from './6to7/editor/editor.component';

const COMPONENTS = [SixToSevenEditorComponent];

const routes: Routes = [
  {
    path: '6to7/:lang',
    component: SixToSevenEditorComponent,
    data: { titleI18n: 'app.header.menu.upgrade' },
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class ToolsModule {}
