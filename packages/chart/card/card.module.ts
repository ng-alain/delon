import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { G2CardComponent } from './card.component';

const COMPONENTS = [G2CardComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2CardModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2CardModule, providers: [] };
  }
}
