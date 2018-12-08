import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonLocaleModule } from '@delon/theme';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabComponent } from './reuse-tab.component';

const COMPONENTS = [ReuseTabComponent];
const NOEXPORTS = [
  ReuseTabContextMenuComponent,
  ReuseTabContextComponent,
  ReuseTabContextDirective,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DelonLocaleModule,
    NgZorroAntdModule,
    OverlayModule,
  ],
  declarations: [...COMPONENTS, ...NOEXPORTS],
  entryComponents: [ReuseTabContextMenuComponent],
  exports: [...COMPONENTS],
})
export class ReuseTabModule { }
