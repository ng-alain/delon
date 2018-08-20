import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AceEditorModule } from 'ng2-ace-editor';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from '../../shared/components/content/content.component';
import { FormValidatorComponent } from './validator/validator.component';

// region: components
const COMPONENTS = [FormValidatorComponent];

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'validator',
        component: FormValidatorComponent,
        data: { titleI18n: 'app.header.menu.form.validator' },
      },
    ],
  },
];
// endregion

@NgModule({
  imports: [SharedModule, AceEditorModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class FormPagesModule {}
