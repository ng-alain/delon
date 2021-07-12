import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { DelonLocaleModule } from '@delon/theme';

import { G2MiniProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2MiniProgressComponent];

@NgModule({
  imports: [CommonModule, DelonLocaleModule, NzToolTipModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class G2MiniProgressModule {}
