import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';
import { DelonLocaleModule } from '@delon/theme';

import { G2ProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2ProgressComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NzToolTipModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2MiniProgressModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2MiniProgressModule, providers: [] };
  }
}
