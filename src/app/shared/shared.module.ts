import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';
import { DelonChartModule } from '@delon/chart';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';

import { TranslateModule } from '@ngx-translate/core';
import { GithubButtonModule } from 'ng-github-button';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HighlightJsModule } from 'ngx-highlight-js';
import { SimplemdeModule } from 'ngx-simplemde';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';

import { CodeBoxComponent } from './components/code-box/code-box.component';
import { ConfigButtonComponent } from './components/config-button/config-button.component';
import { ContentComponent } from './components/content/content.component';
import { DemoDrawerComponent } from './components/dialog/drawer.component';
import { DemoModalComponent } from './components/dialog/modal.component';
import { DocsComponent } from './components/docs/docs.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { IconComponent } from './components/icon/icon.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RouteTransferDirective } from './components/route-transfer/route-transfer.directive';

const DIALOG_COMPONENTS = [
  DemoModalComponent,
  DemoDrawerComponent,
  IconComponent,
];

const COMPONENTS = [
  MainMenuComponent,
  ContentComponent,
  ConfigButtonComponent,
  EditButtonComponent,
  DocsComponent,
  CodeBoxComponent,
  RouteTransferDirective,
  ...DIALOG_COMPONENTS,
];

const THIRDS = [
  HighlightJsModule,
  TranslateModule,
  GithubButtonModule,
  NgxTinymceModule,
  UEditorModule,
  SimplemdeModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    DelonChartModule,
    DelonCacheModule,
    ...THIRDS,
  ],
  declarations: COMPONENTS,
  entryComponents: DIALOG_COMPONENTS,
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
    DelonCacheModule,
    ...THIRDS,
    ...COMPONENTS,
  ],
})
export class SharedModule {}
