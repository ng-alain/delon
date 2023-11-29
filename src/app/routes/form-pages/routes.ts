import { Routes } from '@angular/router';

import { ContentComponent } from '@shared';

import { FormValidatorComponent } from './validator/validator.component';

export const routes: Routes = [
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
