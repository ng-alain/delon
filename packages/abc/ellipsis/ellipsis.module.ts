import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { EllipsisComponent } from './ellipsis.component';

const COMPONENTS = [EllipsisComponent];

@NgModule({
  imports: [CommonModule, ObserversModule, DelonUtilModule, NzToolTipModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class EllipsisModule {}
