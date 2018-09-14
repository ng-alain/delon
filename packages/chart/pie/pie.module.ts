import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { G2PieComponent } from './pie.component';

const COMPONENTS = [G2PieComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzDividerModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2PieModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2PieModule, providers: [] };
  }
}
