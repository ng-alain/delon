import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

import { G2WaterWaveComponent } from './water-wave.component';

const COMPONENTS = [G2WaterWaveComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2WaterWaveModule {}
