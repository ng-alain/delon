import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceEditorModule } from 'ng2-ace-editor';

import { ContentComponent } from '../../shared/components/content/content.component';
import { SharedModule } from '../../shared/shared.module';
import { FormValidatorComponent } from './validator/validator.component';

const COMPONENTS = [FormValidatorComponent];

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'validator/:lang',
        component: FormValidatorComponent,
        data: { titleI18n: 'app.header.menu.form.validator' },
      },
    ],
  },
];

@NgModule({
  imports: [SharedModule, AceEditorModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class FormPagesModule {}
