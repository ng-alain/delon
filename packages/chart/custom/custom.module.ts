import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { G2CustomComponent } from './custom.component';

const COMPONENTS = [G2CustomComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzSkeletonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class G2CustomModule {}
