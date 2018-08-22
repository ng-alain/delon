import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NaReuseTabComponent } from './reuse-tab.component';
import { NaReuseTabContextComponent } from './reuse-tab-context.component';
import { NaReuseTabContextDirective } from './reuse-tab-context.directive';
import { NaReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';

const COMPONENTS = [NaReuseTabComponent];
const NOEXPORTS = [
  NaReuseTabContextMenuComponent,
  NaReuseTabContextComponent,
  NaReuseTabContextDirective,
];

import { OverlayModule } from '@angular/cdk/overlay';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [CommonModule, RouterModule, NgZorroAntdModule, OverlayModule],
  declarations: [...COMPONENTS, ...NOEXPORTS],
  entryComponents: [NaReuseTabContextMenuComponent],
  exports: [...COMPONENTS],
})
export class NaReuseTabModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NaReuseTabModule,
    };
  }
}
