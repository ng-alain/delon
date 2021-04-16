import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { GithubButtonModule } from 'ng-github-button';
import { ColorSketchModule } from 'ngx-color/sketch';
import { HighlightJsModule } from 'ngx-highlight-js';
import { SimplemdeModule } from 'ngx-simplemde';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

import { CodeBoxComponent } from './components/code-box/code-box.component';
import { ContentComponent } from './components/content/content.component';
import { DemoDrawerComponent } from './components/dialog/drawer.component';
import { DemoModalComponent } from './components/dialog/modal.component';
import { DemoSfComponent } from './components/dialog/sf.component';
import { DocsComponent } from './components/docs/docs.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconComponent } from './components/icon/icon.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MatchRouterDirective } from './components/match-router/match-router.directive';
import { RouteTransferDirective } from './components/route-transfer/route-transfer.directive';

const DIALOG_COMPONENTS = [DemoModalComponent, DemoDrawerComponent, DemoSfComponent, IconComponent];

const COMPONENTS = [
  FooterComponent,
  MainMenuComponent,
  ContentComponent,
  EditButtonComponent,
  DocsComponent,
  CodeBoxComponent,
  RouteTransferDirective,
  MatchRouterDirective,
  ...DIALOG_COMPONENTS,
];

const THIRDS = [HighlightJsModule, GithubButtonModule, NgxTinymceModule, UEditorModule, SimplemdeModule, ColorSketchModule];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    DelonCacheModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...THIRDS,
  ],
  declarations: COMPONENTS,
  entryComponents: DIALOG_COMPONENTS,
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    DelonCacheModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...THIRDS,
    ...COMPONENTS,
  ],
})
export class SharedModule {}
