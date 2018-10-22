import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { TrendComponent } from './trend.component';

const COMPONENTS = [TrendComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class TrendModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: TrendModule, providers: [] };
  }
}
