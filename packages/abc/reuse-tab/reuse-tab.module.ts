import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { NzTabsModule } from 'ng-zorro-antd';
import { DelonLocaleModule } from '@delon/theme';

import { ReuseTabComponent } from './reuse-tab.component';
import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';

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
    NzTabsModule,
    OverlayModule,
  ],
  declarations: [...COMPONENTS, ...NOEXPORTS],
  entryComponents: [ReuseTabContextMenuComponent],
  exports: [...COMPONENTS],
})
export class ReuseTabModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReuseTabModule,
    };
  }
}
