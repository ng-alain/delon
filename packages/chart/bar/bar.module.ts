import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { G2BarComponent } from './bar.component';

const COMPONENTS = [G2BarComponent];

@NgModule({
  imports: [CommonModule, NzOutletModule, NzSkeletonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2BarModule {}
