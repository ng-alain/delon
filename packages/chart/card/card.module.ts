import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { G2CardComponent } from './card.component';

const COMPONENTS = [G2CardComponent];

@NgModule({
  imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2CardModule {}
