import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule, NzSpinModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { G2CardComponent } from './card.component';

const COMPONENTS = [G2CardComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzCardModule, NzSpinModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2CardModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2CardModule, providers: [] };
  }
}
