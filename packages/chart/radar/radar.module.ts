import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { G2RadarComponent } from './radar.component';

const COMPONENTS = [G2RadarComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzGridModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2RadarModule {}
