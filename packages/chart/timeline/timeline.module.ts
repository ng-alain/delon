import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { G2TimelineComponent } from './timeline.component';

const COMPONENTS = [G2TimelineComponent];

@NgModule({
  imports: [CommonModule, NzOutletModule, NzSkeletonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2TimelineModule {}
