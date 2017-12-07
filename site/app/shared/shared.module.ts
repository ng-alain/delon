import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { AlainThemeModule } from '@delon/theme';
import { AlainABCModule } from '@delon/abc';
import { AlainACLModule } from '@delon/acl';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightJsModule } from 'ngx-highlight-js';
import { NzClipboardModule } from 'ng-clipboard-antd';

import { ContentComponent } from './components/content/content.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { DocsComponent } from './components/docs/docs.component';
import { CodeBoxComponent } from './components/code-box/code-box.component';

const COMPONENTS = [ ContentComponent, EditButtonComponent, DocsComponent, CodeBoxComponent ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule.forRoot(),
        NgZorroAntdExtraModule.forRoot(),
        AlainThemeModule.forChild(),
        AlainABCModule.forRoot(),
        AlainACLModule.forRoot(),
        HighlightJsModule,
        TranslateModule,
        NzClipboardModule.forRoot()
    ],
    declarations: COMPONENTS,
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgZorroAntdModule,
        NgZorroAntdExtraModule,
        AlainThemeModule,
        AlainABCModule,
        AlainACLModule,
        HighlightJsModule,
        TranslateModule,
        NzClipboardModule,
        ...COMPONENTS
    ]
})
export class SharedModule {
}
