import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { G2TagCloudComponent } from './tag-cloud.component';

const COMPONENTS = [G2TagCloudComponent];

@NgModule({
  imports: [CommonModule, NzSkeletonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2TagCloudModule {}
