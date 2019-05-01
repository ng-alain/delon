import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TrendComponent } from './trend.component';

const COMPONENTS = [TrendComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class TrendModule {}
