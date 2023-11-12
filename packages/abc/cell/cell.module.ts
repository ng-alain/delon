import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzImageModule } from 'ng-zorro-antd/experimental/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { CellHostDirective } from './cell-host.directive';
import { CellComponent } from './cell.component';

const COMPS = [CellComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzCheckboxModule,
    NzRadioModule,
    NzBadgeModule,
    NzTagModule,
    NzToolTipModule,
    NzIconModule,
    NzImageModule,
    ...COMPS,
    CellHostDirective
  ],
  exports: COMPS
})
export class CellModule {}
