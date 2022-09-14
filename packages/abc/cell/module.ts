import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { Cell } from './cell';
import { CellHost } from './host';

const COMPONENTS = [Cell];

@NgModule({
  imports: [CommonModule, NzBadgeModule, NzTagModule, NzToolTipModule, NzIconModule],
  declarations: [...COMPONENTS, CellHost],
  exports: COMPONENTS
})
export class CellModule {}
