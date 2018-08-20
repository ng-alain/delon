import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { DelonChartModule } from '@delon/chart';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightJsModule } from 'ngx-highlight-js';
import { GithubButtonModule } from 'ng-github-button';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';
import { SimplemdeModule } from 'ngx-simplemde';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ContentComponent } from './components/content/content.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { DocsComponent } from './components/docs/docs.component';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { DemoModalComponent } from './components/modal/demo.component';
import { RouteTransferDirective } from './components/route-transfer/route-transfer.directive';

const COMPONENTS = [
    MainMenuComponent,
    ContentComponent,
    EditButtonComponent,
    DocsComponent,
    CodeBoxComponent,
    DemoModalComponent,
    RouteTransferDirective
];

const THIRDS = [
    HighlightJsModule,
    TranslateModule,
    GithubButtonModule,
    NgxTinymceModule,
    UEditorModule,
    SimplemdeModule
];

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
        DelonFormModule,
        DelonChartModule,
        ...THIRDS
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
        DelonFormModule,
        DelonChartModule,
        ...THIRDS,
        ...COMPONENTS
    ]
})
export class SharedModule {
}
