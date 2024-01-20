import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { G2GaugeComponent } from './gauge.component';

const COMPONENTS = [G2GaugeComponent];

@NgModule({
  imports: [CommonModule, NzSkeletonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2GaugeModule {}
