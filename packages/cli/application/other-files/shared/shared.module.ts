import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';<% if (delonI18n) { %>
// i18n
import { TranslateModule } from '@ngx-translate/core';<% } %>

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
<% if (jsonSchema) { %>import { NzSchemaFormModule } from 'nz-schema-form';<% } %>
const THIRDMODULES = [
    NgZorroAntdModule,
    CountdownModule<% if (jsonSchema) { %>,
    NzSchemaFormModule<% } %>
];
// endregion

// region: your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        AlainThemeModule.forChild(),
        DelonABCModule,
        DelonACLModule,
        // third libs
        ...THIRDMODULES
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AlainThemeModule,
        DelonABCModule,
        DelonACLModule,<% if (delonI18n) { %>
        // i18n
        TranslateModule,<% } %>
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ]
})
export class SharedModule { }
