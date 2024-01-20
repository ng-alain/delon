import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { ChartEChartsComponent } from './echarts.component';

const COMPONENTS = [ChartEChartsComponent];

@NgModule({
  imports: [CommonModule, NzSkeletonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class ChartEChartsModule {}
