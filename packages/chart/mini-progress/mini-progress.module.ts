import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DelonLocaleModule } from '@delon/theme';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { G2MiniProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2MiniProgressComponent];

@NgModule({
  imports: [CommonModule, DelonLocaleModule, NzTooltipModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2MiniProgressModule {}
