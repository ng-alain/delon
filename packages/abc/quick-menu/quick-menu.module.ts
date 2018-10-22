import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { QuickMenuComponent } from './quick-menu.component';

const COMPONENTS = [QuickMenuComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class QuickMenuModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QuickMenuModule, providers: [] };
  }
}
