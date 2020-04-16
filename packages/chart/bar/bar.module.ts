import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

import { G2BarComponent } from './bar.component';

const COMPONENTS = [G2BarComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2BarModule {}
