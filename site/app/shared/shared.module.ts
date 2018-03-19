import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightJsModule } from 'ngx-highlight-js';

import { ContentComponent } from './components/content/content.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { DocsComponent } from './components/docs/docs.component';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { DemoModalComponent } from './components/modal/demo.component';

const COMPONENTS = [ ContentComponent, EditButtonComponent, DocsComponent, CodeBoxComponent, DemoModalComponent ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        AlainThemeModule.forChild(),
        DelonABCModule,
        DelonACLModule,
        HighlightJsModule,
        TranslateModule
    ],
    declarations: COMPONENTS,
    entryComponents: [DemoModalComponent],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgZorroAntdModule,
        AlainThemeModule,
        DelonABCModule,
        DelonACLModule,
        HighlightJsModule,
        TranslateModule,
        ...COMPONENTS
    ]
})
export class SharedModule {
}
