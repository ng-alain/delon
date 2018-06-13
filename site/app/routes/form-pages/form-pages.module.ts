import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AceModule } from 'ngx-ace-wrapper';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from '../../shared/components/content/content.component';
import { FormValidatorComponent } from './validator/validator.component';

// region: components
const COMPONENTS = [
    FormValidatorComponent
];

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            { path: 'validator', component: FormValidatorComponent, data: { titleI18n: 'app.header.menu.form.validator' } }
        ]
    }
];
// endregion

@NgModule({
    imports: [
        SharedModule,
        AceModule,
        RouterModule.forChild(routes)
    ],
    declarations: COMPONENTS
})
export class FormPagesModule {

}
