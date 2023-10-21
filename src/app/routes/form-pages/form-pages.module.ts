import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuMonacoEditorModule } from '@ng-util/monaco-editor';

import { FormValidatorComponent } from './validator/validator.component';
import { ContentComponent } from '../../shared/components/content/content.component';
import { SharedModule } from '../../shared/shared.module';

const COMPONENTS = [FormValidatorComponent];

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'validator/:lang',
        component: FormValidatorComponent,
        data: { titleI18n: 'app.header.menu.form.validator' }
      }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), NuMonacoEditorModule],
  declarations: COMPONENTS
})
export class FormPagesModule {}
