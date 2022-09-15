import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzImageModule } from 'ng-zorro-antd/experimental/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { CellHostDirective } from './cell-host.directive';
import { CellComponent } from './cell.component';

const COMPS = [CellComponent];

@NgModule({
  imports: [CommonModule, NzBadgeModule, NzTagModule, NzToolTipModule, NzIconModule, NzImageModule],
  declarations: [...COMPS, CellHostDirective],
  exports: COMPS
})
export class CellModule {}
